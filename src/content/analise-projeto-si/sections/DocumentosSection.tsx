import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function DocumentosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Documento de Visão e SRS"
        subtitle="Os dois artefatos que a AV1 cobra — um estratégico, outro detalhado"
        colorClass="text-accent"
      />

      <TheoryBlock title="Dois documentos, dois níveis">
        <p>
          O RUP separa o que o negócio precisa saber do que a equipe precisa implementar. O{' '}
          <strong>Documento de Visão</strong> é o artefato de <strong>alto nível</strong> — às vezes
          contratual — que documenta os requisitos principais, as características-chave e as
          principais restrições do projeto. A <strong>SRS</strong> (Especificação de Requisitos de
          Software) é o documento <strong>detalhado</strong>, com detalhe suficiente para{' '}
          <em>projetar</em> e <em>testar</em> o sistema.
        </p>
      </TheoryBlock>

      <Subsection title="Visão × SRS" accentClass="text-accent2">
        <ComparisonTable
          criterionLabel="Aspecto"
          leftLabel="Documento de Visão"
          rightLabel="SRS"
          rows={[
            { criterion: 'Nível', left: 'Estratégico, alto nível de abstração', right: 'Tático, detalhado' },
            { criterion: 'Responde', left: 'Por que este sistema? Para quem? O que o diferencia?', right: 'Exatamente o que o sistema faz, caso de uso a caso de uso' },
            { criterion: 'Público', left: 'Patrocinador, stakeholders, gerência', right: 'Arquitetos, desenvolvedores e testadores' },
            { criterion: 'Conteúdo típico', left: 'Posicionamento, perfis de envolvidos, recursos, restrições, faixas de qualidade', right: 'Relatórios de casos de uso + requisitos suplementares' },
          ]}
        />
      </Subsection>

      <Subsection title="A estrutura do Documento de Visão" accentClass="text-accent3">
        <PanelList
          columns=""
          items={[
            { title: '1 · Introdução', description: 'Objetivo, escopo, definições e acrônimos, referências e visão geral do documento.' },
            { title: '2 · Posicionamento', description: 'Oportunidade de negócios, instrução do PROBLEMA e instrução da POSIÇÃO do produto — as duas tabelas abaixo.' },
            { title: '3 · Descrições do interessado e do usuário', description: 'Demográficos de mercado, resumo dos interessados e usuários, ambiente do usuário, perfis (responsabilidades, critérios de êxito, envolvimento) e necessidades principais com prioridade e solução atual.' },
            { title: '4 · Visão geral do produto', description: 'Perspectiva (relação com outros sistemas), resumo de recursos (benefício × recurso de suporte), premissas e dependências, custo e licenciamento.' },
            { title: '5 · Recursos do produto', description: 'A lista das funcionalidades — no exemplo do Registro em Curso: efetuar logon, registrar em cursos, cancelamentos, faturamento, visualizar notas, selecionar cursos a lecionar.' },
            { title: '6 a 10', description: 'Restrições · faixas de qualidade · precedência e prioridade · outros requisitos (padrões, sistema, desempenho, ambientais) · requisitos de documentação (manuais, ajuda on-line, guias de instalação).' },
          ]}
        />
      </Subsection>

      <Subsection title="As duas tabelas que estruturam o posicionamento" accentClass="text-accent5">
        <ExampleBox title="Instrução do problema">
          <p>
            <strong>O problema de</strong> [descrição do problema] · <strong>afeta</strong> [os
            interessados envolvidos] · <strong>o impacto é</strong> [qual o impacto do problema] ·{' '}
            <strong>uma solução bem-sucedida seria</strong> [os benefícios principais].
          </p>
        </ExampleBox>
        <ExampleBox title="Instrução da posição do produto">
          <p>
            <strong>Para</strong> [cliente-alvo] · <strong>que</strong> [necessidade ou
            oportunidade] · <strong>o</strong> [nome do produto] <strong>é uma</strong> [categoria
            do produto] · <strong>que</strong> [principal benefício] ·{' '}
            <strong>a menos que</strong> [alternativa competitiva] ·{' '}
            <strong>nosso produto</strong> [diferenciação principal].
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A estrutura da SRS" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1 · Introdução', description: 'Objetivo, escopo, definições e acrônimos, referências e visão geral.' },
            { title: '2 · Descrição geral', description: 'Relatório sintético do modelo de casos de uso (a visão panorâmica) e as premissas e dependências.' },
            { title: '3 · Requisitos específicos', description: 'Os RELATÓRIOS DE CASO DE USO (que cobrem a maioria dos requisitos funcionais) e os REQUISITOS SUPLEMENTARES — onde entram os não funcionais e as restrições de design.' },
            { title: '4 · Informações de suporte', description: 'Índice, apêndices, storyboards e protótipos de interface.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Exemplos resolvidos disponíveis na turma" accent="var(--color-accent3)">
        <p>
          <strong>SCA (Sistema de Controle Acadêmico do IFAL)</strong> — SRS preenchida com atores
          Aluno, Professor, Coordenador, CRA e os sistemas legados SGP e Faturamento; dez casos de
          uso especificados (Realizar Matrículas, Lançar Avaliações, Atender Listas de Espera…) e{' '}
          <strong>sete regras de negócio</strong> (máximo de créditos, capacidade da turma,
          pré-requisitos, habilitação para lecionar, limite de cancelamentos, política de avaliação
          e prioridade FIFO na lista de espera) referenciadas por cada caso de uso — o exemplo mais
          próximo do que se pede na AV1. Há ainda o <strong>MERCI 1.5</strong> (SRS industrial
          completa, com limites explícitos do produto, 18 interfaces e caracterização dos usuários),
          o <strong>SICC</strong> (com requisitos classificados em essenciais e desejáveis e
          rastreabilidade RF ↔ caso de uso) e a <strong>Visão do Sistema de Registro em Curso</strong>.
        </p>
      </HighlightBox>
    </section>
  );
}
