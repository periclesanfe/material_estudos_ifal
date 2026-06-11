# Registro de Contribuicoes

Esta pasta guarda, fora do React, o historico estruturado de quem contribuiu com o projeto.

- `registro.json`: fonte oficial dos dados.
- `registro.schema.json`: contrato dos campos aceitos no JSON.
- `LOG.md`: visao humana em tabelas para revisoes e auditoria.

## Como Registrar

1. Cadastre a pessoa em `contribuintes`, usando um `id` estavel em minusculas.
2. Adicione cada entrega em `contribuicoes`.
3. Atualize `atualizadoEm` com data/hora ISO 8601.
4. Reflita a entrada em `LOG.md` quando quiser uma visualizacao manual em tabela.

## Campos Principais

Cada contribuicao responde:

- Quem: `contribuinteId`, apontando para nome, matricula e email institucional.
- Quando: `quando.data`, `quando.registradoEm` e `quando.timezone`.
- Onde: `onde.escopo`, materia, arquivo, secao, linhas, issue ou pull request.
- Como: `como.resumo`, `como.detalhes`, `como.origem` e `como.referencia`.
- Tipo: `tipo`, com categorias padronizadas.

## Tipos Aceitos

| Tipo | Uso esperado |
| --- | --- |
| `conteudo_materia` | Criacao ou ampliacao de conteudo de uma disciplina. |
| `questao_quiz` | Perguntas, alternativas, feedbacks e ajustes de quiz. |
| `correcao` | Correcao conceitual, ortografica, tecnica ou de dados. |
| `melhoria` | Melhorias gerais de experiencia, organizacao ou fluxo. |
| `revisao` | Revisao de PR, conteudo, layout ou qualidade. |
| `issue` | Abertura, triagem ou detalhamento de issue. |
| `documentacao` | README, guias, contribuicao, templates e docs internas. |
| `codigo` | Implementacao ou refatoracao de codigo. |
| `design_ui` | Ajustes visuais, responsividade e acessibilidade. |
| `dados` | Ajustes em dados estruturados do projeto. |
| `infraestrutura` | CI, deploy, build, automacoes e configuracoes. |
| `outro` | Qualquer contribuicao que nao caiba nos tipos anteriores. |

## Exemplo De Entrada

```json
{
  "id": "contrib-2026-06-11-revisao-metodologia",
  "contribuinteId": "nome-sobrenome",
  "quando": {
    "data": "2026-06-11",
    "registradoEm": "2026-06-11T10:30:00-03:00",
    "timezone": "America/Maceio"
  },
  "onde": {
    "escopo": "materia",
    "materiaSlug": "metodologia-cientifica",
    "materiaCodigo": "METC",
    "arquivo": "src/content/metodologia-cientifica/data.ts",
    "secao": "Quiz de Revisao",
    "pullRequest": "#18"
  },
  "tipo": "revisao",
  "como": {
    "resumo": "Revisou perguntas do quiz e ajustou feedbacks.",
    "detalhes": "Validou alternativas incorretas e clareza das explicacoes.",
    "origem": "pull_request",
    "referencia": "#18"
  },
  "status": "incorporado",
  "revisadoPor": ["periclesanfe"],
  "tags": ["quiz", "metodologia-cientifica"]
}
```
