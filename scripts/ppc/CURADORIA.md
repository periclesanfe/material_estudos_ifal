# Curadoria dos links da bibliografia

Como decidir o link de uma obra, e por quê. Quem for continuar a fila do
`npm run ppc:links` deve seguir isto — a consistência importa mais que a
velocidade, porque um link errado num material de estudo custa mais que um
link ausente.

## A ordem de preferência

Sempre o primeiro que existir:

1. **`livre` — texto completo, aberto e legítimo.** Livro do próprio autor,
   editora que liberou, repositório institucional (`.edu.br`, `.ifal.edu.br`),
   órgão oficial (`gov.br`), norma técnica publicada, domínio público. Exemplo:
   o livro do CAT/CORDE hospedado pelo autor que integrou o comitê.
2. **`institucional` — Biblioteca Virtual do IFAL.** O IFAL assina a Biblioteca
   Virtual Pearson (`bibliotecavirtual.ifal.edu.br`, login do SIGAA), e a ficha
   da obra no acervo fica em `bvirtual.com.br`. É o destino certo para título
   Pearson, e é onde o aluno lê de graça e legalmente. **Atenção:**
   `bvirtual.com.br` devolve HTTP 500 para `curl` — é bloqueio de bot, não
   página quebrada. Confira no navegador antes de descartar.
3. **`catalogo` — ficha da obra, sem o texto.** Google Books, Open Library,
   catálogo de biblioteca. Serve para o aluno confirmar autor, edição e ISBN e
   procurar na biblioteca do campus.
4. **`compra` — onde adquirir.** Editora primeiro (`loja.grupoa.com.br` é o
   distribuidor oficial da Pearson no Brasil, `casadocodigo.com.br`,
   `novatec.com.br`), sebo ou varejo depois.

Se nada disso existir, `url: null` com a `nota` dizendo o que foi procurado.
Isso é decisão, não desistência: tira a obra da fila e evita que a próxima
pessoa repita a busca.

## O que NÃO entra

**Cópia de livro de editora hospedada sem autorização.** Ela aparece — e
frequentemente é o primeiro resultado. Nas buscas de teste apareceram um repo
do GitHub espelhando PDFs da Casa do Código, um PDF do Elmasri num domínio de
terceiros, scans no Internet Archive e agregadores tipo `dokumen.pub`,
`scribd.com`, `silo.tips`, `passeidireto`. Nada disso entra, por três razões,
na ordem em que pesam:

1. O material é público e institucional, publicado sob o nome do IFAL. Indexar
   pirataria a partir dele expõe a instituição e os autores do repositório.
2. Os alunos têm acesso legítimo aos mesmos títulos pela Biblioteca Virtual do
   IFAL. O link pirata não resolve um problema que eles tenham.
3. Esses endereços caem. Um link para `bvirtual` ou para a editora sobrevive;
   um PDF em blog de terceiros, não.

**Domínio que mudou de dono.** Pior que link morto: o `assistiva.org.br` da
ficha do PPC hoje redireciona para um site pessoal sem relação com o assunto.
Sempre confira onde a URL **termina** (`curl -L -w '%{url_effective}'`), não
só se responde 200.

## Como conferir

```bash
# responde? para onde?
curl -sS -o /dev/null -w '%{http_code} -> %{url_effective}\n' -L --max-time 25 \
  -A 'Mozilla/5.0' 'URL'
```

Se der 403/500, tente no navegador antes de descartar: vários acervos bloqueiam
`curl`. Registre na `nota` o que foi conferido e quando — é o que permite
reconferir sem refazer a pesquisa.

## O formato de cada entrada

```json
"chavedaobra": {
  "url": "https://…",
  "tipo": "livre | institucional | catalogo | compra",
  "nota": "por que este destino, e o que mais foi considerado",
  "conferidoEm": "AAAA-MM-DD"
}
```

A chave sai de `chaveDaObra` (`scripts/ppc/chave-obra.mjs`). **Não a digite à
mão**: ela é longa e truncá-la faz o link sumir em silêncio. Gere com

```bash
node --input-type=module -e "
import {chaveDaObra} from './scripts/ppc/chave-obra.mjs';
console.log(chaveDaObra('COLE A REFERÊNCIA AQUI'));
"
```

O `npm run ppc:montar` acusa chave que não casa com nenhuma referência, então um
erro de digitação aparece no relatório em vez de passar batido.

## Uma nota sobre as variantes

O PPC cita a mesma obra com grafias diferentes entre fichas — Pressman aparece
como `PRESSMAN, Roger. Engenharia de Software. McGraw-Hill, 2006.` e como
`PRESSMAN, R. S. – Engenharia de Software. Pearson Education.`, com editoras
que se contradizem. Cada variante é uma chave e precisa da sua entrada, porque
a chave é derivada do texto. Não tente unificá-las: a divergência é do
documento oficial, e o link deve corresponder à edição que aquela ficha cita
quando isso é determinável.
