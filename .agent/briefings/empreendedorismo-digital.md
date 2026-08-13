# Briefing: Empreendedorismo Digital (EMPD)

## Identificação
| Campo | Valor |
|---|---|
| Código | EMPD |
| Slug | `empreendedorismo-digital` |
| Período | 6º |
| Eixo | FB (Formação Básica) |
| Carga horária | 80h — 4h semanais, obrigatória, sem pré-requisitos |
| Estado atual | `hasContent: false` — **criação do zero** |

## Material da matéria
| Campo | Valor |
|---|---|
| Fonte única | `Apostila_Empreendedorismo_Digital_BSI_2026-1.docx` (raiz do repositório) |
| Turma | Empreendedorismo Digital · BSI · 2026.1 |
| Professor | Anderson Rodrigues Gomes |
| Pasta do Classroom | `.classroom/empreendedorismo-digital-bsi-2026-2/` — **não coletada**, ausente do disco |

> **Não há material bruto do professor no disco.** A apostila é o corpus inteiro: 19 capítulos e 2
> apêndices, escritos a partir dos PDFs, apresentações, vídeos, formulários e instruções de
> atividade da turma. Nada pode ser conferido contra o original — na dúvida, marcar lacuna. Se a
> turma for coletada depois, vale uma rodada de enriquecimento.

### Capítulos da apostila
```
 1 Fundamentos, escolas e teorias      11 Aquisição orgânica, retenção e CS
 2 Competências do empreendedor em SI  12 Unit Economics e viabilidade SaaS
 3 Startups e ecossistema digital      13 Financiamento de startups
 4 Identificação e validação           14 Plano de negócio
 5 Business Model Canvas               15 Pitch Deck e captação
 6 Customer Development                16 Intraempreendedorismo e emp. social
 7 Lean Startup e experimentação       17 Empreendedorismo no Brasil (GEM 2024)
 8 Produto Mínimo Viável               18 Estudos de caso
 9 Arquiteturas de negócios digitais   19 Revisão final e simulado
10 Comércio eletrônico                 Apêndices A (fórmulas) e B (checklist)
```

### Casos usados na disciplina
`FilaZero Saúde` (healthtech B2G para filas de UBS) · `Twitch` (pivot do Justin.tv, plataforma,
efeitos de rede) · `TechNova` (aprendizagem validada, teste A/B, estado "Validado")

## Ementa oficial do PPC
Extraída de `.docs/bacharelado-em-sistemas-de-informacao.pdf`, p. 76:

> Conceito de empreendedorismo e empreendimento. Perfil do empreendedor. Geração de ideias. Busca
> de informações. Mecanismos e procedimentos para criação de empresas. Gerenciamento e negociação.
> Qualidade e competitividade. Marketing pessoal e empresarial. Gestão do empreendimento.
> Empreendedorismo digital. Startups. Startup enxuta (Lean). Negócio sustentável. Prototipação de
> projeto. Modelo de negócios.

**Bibliografia básica:** RIES, Eric — *A Startup Enxuta* (Lua de Papel) · MATOS, Carlos; TELLES,
André — *O Empreendedor Viável* (Leya) · CHIAVENATO, Idalberto — *Empreendedorismo: Dando Asas ao
Espírito Empreendedor* (Manole).

**Complementar:** DOLABELA — *O Segredo de Luísa* · DEGEN — *O Empreendedor* · DORNELAS —
*Empreendedorismo: Transformando Ideias em Negócios* · DEGEN — *Empreendedor: Empreender Como Opção
de Carreira* · HISRICH; PETER; SHEPHERD — *Empreendedorismo*.

## Lacunas: ementa do PPC × apostila

**Na ementa, ausentes ou apenas tangenciados na apostila** — registrar como lacuna, **não inventar**:

1. **Gerenciamento e negociação** — a apostila só toca negociação no cap. 13.2 (valuation,
   participação, direitos de informação). Não há seção de negociação.
2. **Qualidade e competitividade** — não aparece como tópico. O mais próximo é o benchmarking do
   cap. 4.3 e o "moat" do cap. 15.
3. **Marketing pessoal e empresarial** — a apostila cobre aquisição, canais e plano de marketing
   (caps. 11 e 14.3), mas nada de marketing pessoal.
4. **Mecanismos e procedimentos para criação de empresas** — cobertura parcial no cap. 14.2 (forma
   jurídica, regime tributário, capital social). Não há passo a passo de abertura de empresa.

**Na apostila, além da ementa** — conteúdo que o professor acrescentou e que deve ser preservado:
Customer Development, Unit Economics (CAC/LTV/payback/NRR), financiamento e diluição, Pitch Deck e
TAM/SAM/SOM, arquiteturas de plataforma e SaaS, comércio eletrônico e o GEM 2024.

## Estrutura decidida

14 seções (12 de conteúdo + `intro` + `quiz`) — ver `src/content/empreendedorismo-digital/data.ts`.
Merges: 1+2 → `fundamentos` · 7+8 → `lean-mvp` · 9+10 → `arquiteturas` · 11+12 → `unit-economics` ·
14+15 → `plano-pitch` · 16+17 → `contextos`.

### Avaliações
A apostila **não** declara AV1/AV2 e não há mural de turma para conferir. As avaliações declaradas em
`EMPD_EXAMS` são as **entregas nomeadas na própria apostila**: Canvas, Customer Development, Lean e
MVP, Estudo de caso, Financiamento e Pitch Deck. `fundamentos` e `contextos` ficam sem avaliação —
são teoria e contexto, sem entrega correspondente, e continuam acessíveis pela pill "Final (tudo)".

## Instruções específicas

- **Privacidade — regra dura.** A apostila embute o histórico avaliativo nominal da autora: notas de
  atividade, retorno do professor sobre entregas dela e avisos de prioridade derivados desse
  retorno. **Nada disso vai para o site**, que é público e indexável — e nada disso deve ser
  reproduzido aqui, nem como exemplo. Cortar, sem citar o texto original:
  - o bloco de prioridades logo após o capítulo de abertura, inteiro;
  - toda menção a nota, pontuação, perda de pontos ou aproveitamento de entrega;
  - todo trecho identificado como retorno do professor sobre um trabalho;
  - a moldura avaliativa em volta das apresentações nos capítulos 15 e 18.

  Os três casos permanecem como **casos de aula**. O que sai é a avaliação do trabalho, não a
  análise do caso.
- **Creditar o Prof. Anderson Rodrigues Gomes.** O nome não consta da apostila; foi confirmado pela
  mantenedora. A titulação não foi informada, então o crédito usa apenas "Prof." — se houver
  titulação a registrar, ajustar na caixa "Fonte do conteúdo" do `IntroSection`.
- **Métricas do FilaZero são metas, não resultados** (espera de 30 min, 500 atendimentos, 85% de
  comparecimento, satisfação 4,5). A própria apostila alerta; rotular como metas no site.
- **Números de terceiros com atribuição explícita:** GEM 2024 e o valor da aquisição da Twitch
  (~US$ 970 milhões) vêm da apostila — escrever "segundo o GEM 2024", "cerca de".
- Toda aritmética do quiz (CAC, LTV, LTV/CAC, payback, NRR, Rule of 40, ponto de equilíbrio) precisa
  ser **conferida por execução**, não por leitura.
- Citar: **Prof. Anderson Rodrigues Gomes · Empreendedorismo Digital · BSI/IFAL · 2026.1**.

## Pendências resolvidas

- **Semestre**: confirmado como **2026.1** pela mantenedora. O nome da pasta coletada
  (`empreendedorismo-digital-bsi-2026-2`) não corresponde ao semestre da turma; vale o 2026.1.
- **Professor**: Anderson Rodrigues Gomes, confirmado pela mantenedora.

## Referências
- Padrão de conteúdo: `.skills/content_creation.md`
- Padrão de quiz: `.skills/quiz_creation.md`
- Matéria modelo: `src/content/logica-matematica-discreta/` (padrão atual, com `sections/`)
