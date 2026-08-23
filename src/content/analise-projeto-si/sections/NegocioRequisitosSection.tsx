import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ExampleBox, StatStrip } from '../../../components/sections';

export default function NegocioRequisitosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelagem de Negócio e Requisitos"
        subtitle="Entender a organização antes de especificar o sistema — e a diferença entre o que ele faz e como ele deve ser"
        colorClass="text-accent"
      />

      <TheoryBlock title="Modelagem de negócio: o passo antes do sistema">
        <p>
          Antes de especificar o software, o RUP dedica uma disciplina a entender{' '}
          <strong>a organização</strong>. Os objetivos: compreender a estrutura e a dinâmica da
          organização-alvo, assegurar entendimento comum entre os interessados e{' '}
          <strong>derivar os requisitos de sistema</strong> que sustentam esse negócio. O papel é o{' '}
          <em>Analista de Processo de Negócios</em>; as atividades são identificar, descrever,
          melhorar e redesenhar processos; o artefato é o <strong>Modelo de Domínio</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="As nove questões de verificação do modelo de negócio" accentClass="text-accent2">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: '1 · Conformidade', description: 'Os casos de uso de negócio estão de acordo com o negócio desejado?' },
            { title: '2 · Cobertura', description: 'Todos foram localizados? Juntos, executam todas as atividades do negócio?' },
            { title: '3 · Nomes similares', description: 'Há casos com nomes parecidos? Considere mesclá-los ou renomeá-los.' },
            { title: '4 · Estratégia', description: 'Estão alinhados com a estratégia do negócio?' },
            { title: '5 · Metas', description: 'Cada caso de uso suporta pelo menos uma meta de negócio?' },
            { title: '6 · Atividades', description: 'Toda atividade do negócio está incluída em pelo menos um caso de uso?' },
            { title: '7 · Equilíbrio', description: 'Há equilíbrio entre o número e o tamanho dos casos de uso?' },
            { title: '8 · Exclusividade', description: 'Cada caso de uso é único? Se não, mescle com o similar.' },
            { title: '9 · Agente comercial', description: 'Cada caso de uso envolve pelo menos um agente comercial?' },
          ]}
        />
      </Subsection>

      <TheoryBlock title="O que é um requisito">
        <p>
          Requisito é <strong>"uma condição ou capacidade com a qual o sistema deve estar de
          acordo"</strong> — define <strong>o que</strong> o sistema deve fazer e{' '}
          <strong>sob quais limitações</strong> deve operar. Pode ir de uma declaração abstrata de
          alto nível a uma especificação matemática detalhada.
        </p>
      </TheoryBlock>

      <Subsection title="Dois níveis: usuário e sistema" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Requisitos de USUÁRIO',
              description: 'Declarações em linguagem natural com diagramas, sobre os serviços esperados e as restrições. Leitores: gerentes, usuários finais e contratantes.',
              accent: 'accent',
            },
            {
              title: 'Requisitos de SISTEMA',
              description: 'Descrições detalhadas de funções, serviços e restrições — definem EXATAMENTE o que será implementado e podem ser contratuais. Leitores: arquitetos e desenvolvedores.',
              accent: 'accent2',
            },
          ]}
        />
        <ExampleBox title="O exemplo MHC-PMS: um requisito vira cinco">
          <p>
            Requisito de <strong>usuário</strong>: "o sistema deve gerar relatórios gerenciais
            mensais mostrando o custo dos medicamentos prescritos por cada clínica". Desdobrado em
            requisitos de <strong>sistema</strong>: (1.1) no último dia útil do mês, gerar o resumo
            de medicamentos, custos e prescrições; (1.2) gerar automaticamente após as 17:30;
            (1.3) um relatório por clínica, com nome do medicamento, total de prescrições, doses e
            custo; (1.4) relatórios separados por unidade de dosagem quando houver mais de uma;
            (1.5) acesso restrito por lista de controle. O mesmo requisito, dois níveis de detalhe.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Funcionais × não funcionais" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <strong>REQUISITOS FUNCIONAIS (RF)</strong> declaram os serviços que o sistema deve
          fornecer, como reage a entradas e como se comporta em determinadas situações — e às vezes
          o que o sistema <em>não</em> deve fazer. Ex.: abrir e fechar conta, fornecer extrato e
          saldo, realizar transferência e saque.
        </p>
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <strong>REQUISITOS NÃO FUNCIONAIS (RNF)</strong> são restrições sobre esses serviços e
          aplicam-se ao sistema <strong>como um todo</strong>, em três famílias:
        </p>
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'De PRODUTO', description: 'Desempenho (saldo em menos de 5s), espaço, confiabilidade, proteção, usabilidade (versão para deficientes visuais).' },
            { title: 'ORGANIZACIONAIS', description: 'Processo operacional, padrões de desenvolvimento, ambiente — ex.: autenticar com o cartão institucional.' },
            { title: 'EXTERNOS', description: 'Reguladores, legais, éticos e contábeis — ex.: cumprir a norma de privacidade dos pacientes ou integrar-se ao BACEN.' },
          ]}
        />
      </Subsection>

      <Subsection title="O processo de engenharia de requisitos" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'DESCOBRIR E ANALISAR · 1. Recebimento da demanda (e-mail, formulário, ticket, reunião)',
            '2. Análise da demanda: entender o problema e a necessidade, gerar a lista de dúvidas',
            '3. Entendimento macro: reconhecer o cenário, identificar premissas e restrições, localizar as partes interessadas',
            '4. Avaliar viabilidade: existem os recursos necessários?',
            'DOCUMENTAR E VALIDAR · 5. Documentar: o documento de especificação',
            '6. Validar: revisar, prototipar, testes e aceitação',
            '7. Gerenciar: mudanças, rastreamento e medidas de requisitos',
          ]}
        />
      </Subsection>

      <Subsection title="Os desafios reais (survey com 228 empresas em 16 países)" accentClass="text-accent2">
        <StatStrip
          items={[
            { label: '48%', value: 'Requisitos incompletos ou não documentados', accent: 'text-accent' },
            { label: '41%', value: 'Falhas de comunicação com os clientes', accent: 'text-accent2' },
            { label: '33%', value: 'Requisitos em constante mudança', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A lista continua com requisitos abstratos demais (33%), restrições de tempo (32%),
          comunicação interna (27%), stakeholders que confundem requisito com solução (25%) e falta
          de apoio dos clientes (20%). O padrão é claro: <strong>os maiores desafios são humanos e
          de comunicação</strong> — não de ferramenta. Daí as <strong>soft skills</strong> que o
          material atribui ao engenheiro de requisitos: capacidade de ouvir, empatia, raciocínio
          lógico, organização e atenção aos detalhes.
        </p>
      </Subsection>

      <HighlightBox title="A planilha de levantamento da turma" accent="var(--color-accent3)">
        <p>
          O professor disponibilizou uma planilha com três abas que resumem o fluxo prático:
          (1) <strong>registro das partes interessadas</strong> — nome, área, função, contato,
          responsabilidades, expectativas, interesse e nível de engajamento (de "Neutro" a
          "Promotor"); (2) <strong>matriz de requisitos</strong> — cada requisito ligado a UM
          stakeholder, com tipo, prioridade, valor para o negócio e{' '}
          <strong>critério de validação</strong> ("como validar/testar"); e (3){' '}
          <strong>estudo de viabilidade</strong> — cenário macro, escopo inicial, contribuição para
          os objetivos, restrições, integrações e avaliação final. Repare no que a estrutura ensina:
          requisito sem dono e sem critério de teste não está pronto.
        </p>
      </HighlightBox>
    </section>
  );
}
