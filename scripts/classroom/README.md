# Coletor do Google Classroom

Script que baixa todo o conteúdo das suas turmas do Google Classroom (ativas e
arquivadas) para servir de base à criação de conteúdo das matérias do site.

- **Somente leitura** — os escopos usados não permitem alterar nada no Classroom.
- O material coletado vai para `.classroom/` na raiz do projeto, uma pasta
  **ignorada pelo git** — nada disso é publicado.

## O que ele coleta

Para cada turma, gera `.classroom/<turma>/INDICE.md` com todos os avisos,
materiais e atividades (texto, datas e links), e baixa os anexos do Drive para
`.classroom/<turma>/anexos/`. Google Docs/Slides são exportados em PDF. Vídeos do
YouTube e links externos ficam registrados como URL no índice.

## Pré-requisitos

- Python 3.9+ e as bibliotecas do Google:
  ```bash
  python3 -m pip install --user google-api-python-client google-auth-httplib2 google-auth-oauthlib
  ```
- Um `credentials.json` de OAuth (passo abaixo), colocado **nesta pasta**
  (`scripts/classroom/`).

## Passo 1 — Criar o projeto e ativar as APIs

1. Acesse o **Google Cloud Console**: https://console.cloud.google.com/
2. Crie um projeto novo (ex.: "classroom-coletor").
3. Em **APIs e serviços → Biblioteca**, ative:
   - **Google Classroom API**
   - **Google Drive API**

## Passo 2 — Configurar a tela de consentimento (Google Auth Platform)

1. Abra https://console.cloud.google.com/auth/overview (com seu projeto selecionado).
2. Clique em **Começar** e preencha: nome do app, seu e-mail e público **Externo**
   (ou Interno, se sua conta for de organização — aí não precisa de usuários de teste).
3. Depois, em **Público-alvo → Usuários de teste**, adicione o seu e-mail.
   (Sem isso, o Google bloqueia o login com "app não verificado".)

## Passo 3 — Criar a credencial OAuth

1. Em **Clientes → Criar cliente OAuth**.
2. Tipo de aplicativo: **App para computador** (Desktop app).
3. **Fazer download do JSON**.
4. Renomeie para **`credentials.json`** e coloque **nesta pasta** (`scripts/classroom/`).

## Passo 4 — Rodar

```bash
cd scripts/classroom

# ver as turmas que serão coletadas (não baixa nada):
python3 coletar_classroom.py --listar

# coletar tudo:
python3 coletar_classroom.py
```

Na primeira vez, abre o navegador para você autorizar (login + aceitar). O acesso
fica salvo em `token.json` para as próximas execuções.

## Segurança e privacidade

- **`credentials.json` e `token.json` são segredos seus** — ficam nesta pasta e
  são ignorados pelo git (ver `.gitignore`). Nunca os comite.
- O material coletado (`.classroom/`) também é ignorado pelo git — evita expor
  material autoral dos professores.
- Ao transformar o material em conteúdo do site, **resuma e reestruture** (não
  copie na íntegra) e **cite os professores/fontes**.

## Solução de problemas

- **`credentials.json não encontrado`** — falta o passo 3 (baixar e renomear o JSON).
- **`Access blocked / app não verificado`** — falta adicionar seu e-mail em
  *Usuários de teste* (passo 2).
- **`Scope has changed`** — o script já contorna isso com `OAUTHLIB_RELAX_TOKEN_SCOPE`.
- **Nenhuma turma encontrada** — confirme que as duas APIs (Classroom e Drive)
  estão ativadas e que você está logando com a conta que tem as turmas.
