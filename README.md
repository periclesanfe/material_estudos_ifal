# IFAL BSI — Material de Estudo

> Repositório colaborativo de conteúdos do **Bacharelado em Sistemas de Informação** do Instituto Federal de Alagoas (IFAL).

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

---

## O que é?

Uma aplicação web interativa que organiza material de estudo de **todas as matérias** do curso BSI do IFAL. Cada disciplina possui sua própria página com:

- **Conteúdo organizado por tópicos** — derivado de materiais dos professores
- **Quiz estático** — perguntas fixas de múltipla escolha com feedback
- **Quiz com IA** — perguntas geradas pelo Google Gemini em tempo real
- **Interface premium** — dark mode, animações, design moderno

## Como rodar

```bash
# Clone o repositório
git clone https://github.com/periclesanfe/material_estudos_ifal.git
cd material_estudos_ifal

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Deploy no GitHub Pages

O projeto já está configurado para GitHub Pages via GitHub Actions.

1. No GitHub, acesse **Settings → Pages**
2. Em **Build and deployment**, selecione **GitHub Actions**
3. Faça merge de um Pull Request na branch `main` ou execute o workflow manualmente
4. O workflow **Deploy to GitHub Pages** irá gerar o `dist/` e publicar o site

Como este repositório é publicado em `https://periclesanfe.github.io/material_estudos_ifal/`, o Vite usa `base: '/material_estudos_ifal/'` em produção. O projeto também inclui fallback de SPA para rotas como `/materia/comportamento-organizacional` funcionarem ao abrir ou recarregar diretamente.

## Quiz com IA

O quiz com IA utiliza a API do **Google Gemini**. Para usar:

1. Acesse [Google AI Studio](https://aistudio.google.com/apikey) e crie uma API key (gratuita)
2. Na aplicação, vá em **Configurações**
3. Cole sua API key e clique em **Salvar**

> Privacidade: a chave fica somente na **sessão da aba do navegador** (`sessionStorage`). Ela não é salva no GitHub Pages, não é enviada a servidores do projeto e é repassada diretamente do navegador do usuário para a API do Gemini via header `x-goog-api-key`.

## Estrutura do Projeto

```
MATERIAL_ESTUDO_IFAL/
├── .agent/              # Agentes de desenvolvimento (IA)
│   ├── orchestrator.md  # Coordena os demais agentes
│   ├── bsi_specialist.md # Especialista no PCC e conteúdo acadêmico
│   ├── frontend_developer.md # Dev React/TS/Tailwind
│   └── qa.md            # Quality Assurance
├── .docs/               # Documentação do projeto
│   ├── ESPECIFICACAO_FUNCIONAL.md
│   ├── REGRAS_E_USO.md
│   └── bacharelado-em-sistemas-de-informacao.pdf
├── .github/             # Configuração GitHub (PRs, Issues, CODEOWNERS)
├── .rules/              # Regras de contribuição e código
│   ├── CONTRIBUTING.md
│   └── CODE_STANDARDS.md
├── .skills/             # Skills reutilizáveis para agentes
│   ├── simplify.md      # Redução de complexidade visual/código
│   ├── ui_review.md     # Checklist de revisão visual
│   ├── content_creation.md # Como criar conteúdo de matéria
│   ├── quiz_creation.md # Como criar perguntas de quiz
│   └── code_review.md   # Checklist de revisão de código
├── src/
│   ├── components/
│   │   ├── layout/      # Sidebar
│   │   └── ui/          # ConceptCard, QuizCard, AIQuizGenerator, etc.
│   ├── content/
│   │   └── marketing-comercio-eletronico/
│   ├── data/
│   │   └── curriculum.ts # Grade curricular (64 matérias)
│   ├── hooks/
│   │   ├── useApiKey.ts
│   │   └── useGeminiQuiz.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SubjectPage.tsx
│   │   └── SettingsPage.tsx
│   ├── App.tsx
│   └── main.tsx
└── README.md
```

## Agentes de Desenvolvimento

O projeto utiliza agentes de IA especializados para desenvolvimento assistido:

| Agente | Arquivo | Papel |
|--------|---------|-------|
| **Orquestrador** | `.agent/orchestrator.md` | Coordena tarefas entre agentes |
| **BSI Specialist** | `.agent/bsi_specialist.md` | Especialista no PCC — conteúdo acadêmico |
| **Frontend Developer** | `.agent/frontend_developer.md` | Implementação React/TS/Tailwind |
| **QA** | `.agent/qa.md` | Revisão de código, build, visual |

### Skills disponíveis

| Skill | Arquivo | Uso |
|-------|---------|-----|
| Simplify | `.skills/simplify.md` | Reduzir complexidade visual e de código |
| UI Review | `.skills/ui_review.md` | Validar layout, tipografia, cores |
| Content Creation | `.skills/content_creation.md` | Criar conteúdo de nova matéria |
| Quiz Creation | `.skills/quiz_creation.md` | Criar perguntas de quiz |
| Code Review | `.skills/code_review.md` | Revisar PRs |

## Como contribuir

1. Faça um **fork** do repositório
2. Crie uma branch: `git checkout -b feat/nome-do-topico`
3. Adicione seu conteúdo seguindo `.skills/content_creation.md`
4. Commit em português: `git commit -m "feat: adiciona conteúdo de Banco de Dados"`
5. Push: `git push origin feat/nome-do-topico`
6. Abra um **Pull Request** usando o template

Leia o [Guia de Contribuição](.github/CONTRIBUTING.md) e as [Regras de Código](.rules/CODE_STANDARDS.md).

## Grade Curricular

O projeto cobre todas as **64 matérias** do BSI IFAL:

| Período | Matérias |
|---------|----------|
| 1º | Fundamentos de SI, Algoritmos, Web, Lógica Matemática, Inglês Técnico, Filosofia |
| 2º | Matemática para SI, Gestão Organizacional, Arquitetura de Computadores, Linguagem de Programação, Sociologia |
| 3º | Estatística, Banco de Dados, Sistemas Operacionais, Estrutura de Dados, Metodologia Científica |
| 4º | IHC, Projeto de BD, Redes, POO, Gestão de Pessoas |
| 5º | Governança de TI, BD Avançado, Projeto Integrador, Programação Web, Análise de SI, Gerência de Projeto |
| 6º | Empreendedorismo, Projeto Integrador SI, Processos de Dev Software |
| 7º | Segurança da Informação, Pesquisa Aplicada, SI Gerenciais, Tópicos Especiais |
| 8º | Pesquisa em SI, Tecnologias Assistivas, Apoio à Decisão |
| Optativas | DevOps, Metodologias Ágeis, Mobile, IA, Marketing, Ciência de Dados, e mais |

## Licença

Projeto de uso educacional. Conteúdo derivado de materiais disponibilizados pelos professores do IFAL.

---

Feito por alunos e egressos do IFAL BSI
