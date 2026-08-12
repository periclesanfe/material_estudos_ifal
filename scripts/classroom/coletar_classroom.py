#!/usr/bin/env python3
"""
Coletor de materiais do Google Classroom.

Baixa TODO o conteúdo das turmas (ativas e arquivadas) da conta autenticada:
anúncios, materiais e atividades, com seus anexos. Gera um INDICE.md por turma
e baixa os anexos do Drive para a subpasta anexos/. Vídeos e links externos
ficam registrados como URL no índice.

Uso:
    python3 coletar_classroom.py            # coleta tudo
    python3 coletar_classroom.py --listar   # só lista as turmas (não baixa)

Requisitos: credentials.json (OAuth Desktop) nesta pasta. Ver LEIA-ME.md.
Somente leitura — os escopos usados não permitem alterar nada no Classroom.
"""

import warnings
import os
# Silencia os avisos das libs Google (Python 3.9 fim de vida, OpenSSL) — são
# inofensivos e só poluem a saída.
os.environ.setdefault('PYTHONWARNINGS', 'ignore::FutureWarning,ignore::Warning')
warnings.filterwarnings('ignore')
# O Google às vezes devolve um escopo equivalente diferente do solicitado
# (ex.: coursework.me -> student-submissions.me). Sem isto, o oauthlib trata
# essa troca como erro fatal. Precisa vir ANTES dos imports do oauthlib.
os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '1'

import argparse
import io
import re
import sys
from datetime import datetime

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload

# Escopos SOMENTE LEITURA.
SCOPES = [
    'https://www.googleapis.com/auth/classroom.courses.readonly',
    'https://www.googleapis.com/auth/classroom.announcements.readonly',
    'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
    'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',
    'https://www.googleapis.com/auth/classroom.topics.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
]

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Raiz do repositório = dois níveis acima de scripts/classroom/.
REPO_ROOT = os.path.abspath(os.path.join(BASE_DIR, '..', '..'))
# O material coletado é salvo em .classroom/ na raiz (pasta ignorada pelo git).
OUTPUT_ROOT = os.path.join(REPO_ROOT, '.classroom')
# credentials.json e token.json ficam ao lado do script (também ignorados).
CREDENTIALS = os.path.join(BASE_DIR, 'credentials.json')
TOKEN = os.path.join(BASE_DIR, 'token.json')


def slugify(text):
    text = (text or 'turma').lower().strip()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return re.sub(r'-+', '-', text).strip('-') or 'turma'


def autenticar():
    creds = None
    if os.path.exists(TOKEN):
        creds = Credentials.from_authorized_user_file(TOKEN, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CREDENTIALS):
                sys.exit(
                    'ERRO: credentials.json não encontrado nesta pasta.\n'
                    'Siga o LEIA-ME.md para criar o OAuth Client no Google Cloud.'
                )
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN, 'w') as f:
            f.write(creds.to_json())
    return creds


def listar_turmas(classroom):
    turmas = []
    page_token = None
    while True:
        resp = classroom.courses().list(
            pageSize=100, pageToken=page_token,
            # sem courseStates => traz ACTIVE, ARCHIVED, PROVISIONED, etc.
        ).execute()
        turmas.extend(resp.get('courses', []))
        page_token = resp.get('nextPageToken')
        if not page_token:
            break
    return turmas


def _listar_paginado(request_fn, chave):
    itens, page_token = [], None
    while True:
        resp = request_fn(page_token).execute()
        itens.extend(resp.get(chave, []))
        page_token = resp.get('nextPageToken')
        if not page_token:
            break
    return itens


def baixar_anexo_drive(drive, file_id, destino_dir):
    """Baixa um arquivo do Drive. Google Docs/Slides são exportados em PDF."""
    try:
        meta = drive.files().get(fileId=file_id, fields='name,mimeType').execute()
    except HttpError as e:
        return None, f'(sem acesso ao arquivo: {e.resp.status})'

    nome, mime = meta['name'], meta['mimeType']
    os.makedirs(destino_dir, exist_ok=True)

    google_export = {
        'application/vnd.google-apps.document': ('application/pdf', '.pdf'),
        'application/vnd.google-apps.presentation': ('application/pdf', '.pdf'),
        'application/vnd.google-apps.spreadsheet':
            ('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.xlsx'),
    }

    try:
        if mime in google_export:
            export_mime, ext = google_export[mime]
            nome_arq = slugify(nome) + ext
            req = drive.files().export_media(fileId=file_id, mimeType=export_mime)
        elif mime.startswith('application/vnd.google-apps'):
            # Forms, Sites, etc. não são baixáveis — registra só o link.
            return None, '(tipo Google não baixável — ver link)'
        else:
            base, ext = os.path.splitext(nome)
            nome_arq = slugify(base) + (ext or '')
            req = drive.files().get_media(fileId=file_id)

        caminho = os.path.join(destino_dir, nome_arq)
        with io.FileIO(caminho, 'wb') as fh:
            downloader = MediaIoBaseDownload(fh, req)
            done = False
            while not done:
                _, done = downloader.next_chunk()
        return os.path.relpath(caminho, OUTPUT_ROOT), None
    except HttpError as e:
        return None, f'(falha no download: {e.resp.status})'


def formatar_anexos(materials, drive, anexos_dir):
    """Converte a lista de materials do Classroom em linhas markdown."""
    linhas = []
    for m in materials or []:
        if 'driveFile' in m:
            df = m['driveFile']['driveFile']
            titulo = df.get('title', 'arquivo')
            link = df.get('alternateLink', '')
            caminho, erro = baixar_anexo_drive(drive, df['id'], anexos_dir)
            if caminho:
                linhas.append(f'  - 📄 **{titulo}** — baixado em `{caminho}` · [Drive]({link})')
            else:
                linhas.append(f'  - 📄 **{titulo}** {erro or ""} · [Drive]({link})')
        elif 'youtubeVideo' in m:
            yt = m['youtubeVideo']
            linhas.append(f'  - ▶️ **{yt.get("title", "vídeo")}** (YouTube) · {yt.get("alternateLink", "")}')
        elif 'link' in m:
            lk = m['link']
            linhas.append(f'  - 🔗 **{lk.get("title", lk.get("url", "link"))}** · {lk.get("url", "")}')
        elif 'form' in m:
            fm = m['form']
            linhas.append(f'  - 📝 **{fm.get("title", "formulário")}** (Google Forms) · {fm.get("formUrl", "")}')
    return linhas


def data_br(iso):
    if not iso:
        return 's/ data'
    try:
        return datetime.fromisoformat(iso.replace('Z', '+00:00')).strftime('%d/%m/%Y %H:%M')
    except ValueError:
        return iso


def coletar_turma(classroom, drive, curso):
    cid = curso['id']
    nome = curso.get('name', 'Turma sem nome')
    estado = curso.get('courseState', '')
    slug = slugify(nome)
    turma_dir = os.path.join(OUTPUT_ROOT, slug)
    anexos_dir = os.path.join(turma_dir, 'anexos')
    os.makedirs(turma_dir, exist_ok=True)

    print(f'  → coletando "{nome}" [{estado}] ...')

    # Coleta os três tipos de item do mural.
    anuncios = _listar_paginado(
        lambda t: classroom.courses().announcements().list(courseId=cid, pageSize=100, pageToken=t),
        'announcements')
    materiais = _listar_paginado(
        lambda t: classroom.courses().courseWorkMaterials().list(courseId=cid, pageSize=100, pageToken=t),
        'courseWorkMaterial')
    atividades = _listar_paginado(
        lambda t: classroom.courses().courseWork().list(courseId=cid, pageSize=100, pageToken=t),
        'courseWork')

    itens = []
    for a in anuncios:
        itens.append(('Aviso', a.get('text', ''), a.get('creationTime'), None, a.get('materials'), a.get('alternateLink')))
    for m in materiais:
        itens.append(('Material', m.get('title', ''), m.get('creationTime'), m.get('description'), m.get('materials'), m.get('alternateLink')))
    for w in atividades:
        itens.append(('Atividade', w.get('title', ''), w.get('creationTime'), w.get('description'), w.get('materials'), w.get('alternateLink')))

    # Ordena por data (mais recente primeiro).
    itens.sort(key=lambda x: x[2] or '', reverse=True)

    linhas = [
        f'# {nome}',
        '',
        f'- **Estado:** {estado}',
        f'- **ID da turma:** {cid}',
        f'- **Seção/Sala:** {curso.get("section", "—")} · {curso.get("room", "—")}',
        f'- **Coletado em:** {datetime.now().strftime("%d/%m/%Y %H:%M")}',
        f'- **Total de itens:** {len(itens)} '
        f'({len(anuncios)} avisos, {len(materiais)} materiais, {len(atividades)} atividades)',
        '',
        '---',
        '',
    ]

    for tipo, titulo, criado, descricao, materials, link in itens:
        cab = titulo.strip() or '(sem título)'
        linhas.append(f'## [{tipo}] {cab}')
        linhas.append(f'*{data_br(criado)}* · [abrir no Classroom]({link or ""})')
        linhas.append('')
        if descricao:
            linhas.append(descricao.strip())
            linhas.append('')
        anexos = formatar_anexos(materials, drive, anexos_dir)
        if anexos:
            linhas.append('**Anexos:**')
            linhas.extend(anexos)
            linhas.append('')
        linhas.append('---')
        linhas.append('')

    with open(os.path.join(turma_dir, 'INDICE.md'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(linhas))

    return len(itens)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--listar', action='store_true', help='Só lista as turmas, não baixa nada.')
    args = parser.parse_args()

    creds = autenticar()
    classroom = build('classroom', 'v1', credentials=creds)
    drive = build('drive', 'v3', credentials=creds)

    if not args.listar:
        os.makedirs(OUTPUT_ROOT, exist_ok=True)

    turmas = listar_turmas(classroom)
    print(f'\n{len(turmas)} turma(s) encontrada(s):\n')
    for t in turmas:
        print(f'  - [{t.get("courseState", "?"):10}] {t.get("name", "sem nome")}  (id {t["id"]})')

    if args.listar:
        print('\n(modo --listar: nada foi baixado)')
        return

    print('\nIniciando coleta...\n')
    total = 0
    for t in turmas:
        try:
            total += coletar_turma(classroom, drive, t)
        except HttpError as e:
            print(f'  ! erro na turma "{t.get("name")}": {e}')

    print(f'\n✅ Concluído. {total} itens coletados em {OUTPUT_ROOT}')


if __name__ == '__main__':
    main()
