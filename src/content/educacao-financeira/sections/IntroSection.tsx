import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Educação Financeira"
        subtitle="Do autoconhecimento ao Tesouro Direto — nessa ordem, porque inverter é o erro mais comum"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          EDFI (optativa, 40h) trata de um assunto que quase todo mundo aprende tarde e por tentativa e erro. A
          disciplina organiza esse aprendizado numa ordem deliberada: começa por{' '}
          <strong>entender o próprio comportamento</strong>, passa pelas dívidas, chega ao planejamento, examina
          o crédito — e só no fim fala de investimentos.
        </p>
        <p>
          Essa sequência é o conteúdo. Começar por "onde investir" sem ter orçamento equilibrado nem reserva de
          emergência é exatamente o erro que o conjunto das cartilhas procura evitar.
        </p>
      </HighlightBox>

      <Subsection title="A trilha da disciplina" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Autoconhecimento: a fotografia financeira e os quatro indicadores patrimoniais',
            'Planejamento financeiro familiar: receitas, despesas e o saldo mensal',
            'Endividado, inadimplente ou superendividado — três estados distintos',
            'Como sair das dívidas em dez passos',
            'Cartão de crédito e crédito rotativo',
            'Cheque especial e suas regras',
            'Bets: por que a matemática garante a perda',
            'Poupar é comportamento antes de ser produto',
            'O tripé: segurança, liquidez e rentabilidade',
            'Tesouro Direto e o vocabulário do mercado',
          ]}
        />
      </Subsection>

      <Subsection title="Como a turma foi avaliada" accentClass="text-accent5">
        <PanelList
          columns=""
          items={[
            {
              title: 'Comportamento e dívidas',
              description:
                'Diagnóstico da própria saúde financeira, atividade de autoconhecimento, análise de textos sobre prosperidade e dependência, atividade sobre superendividamento e o questionário sobre bets.',
            },
            {
              title: 'Crédito e planejamento',
              description:
                'Atividade de planejamento financeiro familiar e o questionário sobre cartão de crédito e cheque especial.',
            },
            {
              title: 'Investimentos, em duplas e trios',
              description:
                'Pesquisas sobre o tripé dos investimentos, o Relatório Focus e os indicadores macroeconômicos, os cinco títulos do Tesouro Direto, FGC/CDB/LCI/LCA e fundos, além das atividades sobre o Manual do Pequeno Investidor em Ações.',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Não há prova declarada: são <strong>16 atividades</strong> ao longo do semestre, entre formulários,
          pesquisas em grupo e análises de texto — formato coerente com uma optativa de 40h conduzida com
          encontros síncronos.
        </p>
      </Subsection>

      <Subsection title="De onde vem o material" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'FEBRABAN — plataforma "Meu Bolso em Dia"',
              description:
                'Origem da maior parte das cartilhas: planejamento financeiro familiar, guia do cartão de crédito, guia do cheque especial, o e-book de saída das dívidas em dez passos e "Quem sonha poupa".',
              accent: 'accent',
            },
            {
              title: 'Banco Central do Brasil',
              description:
                'O Glossário Simplificado de Termos Financeiros, do Departamento de Educação Financeira (novembro de 2013), com 114 verbetes em linguagem cotidiana — a referência para o vocabulário da disciplina.',
              accent: 'accent2',
            },
            {
              title: 'Gustavo Cerbasi',
              description:
                'Trecho de "Como organizar sua vida financeira", de onde vêm o diagnóstico inicial e os quatro indicadores patrimoniais (PMS, PMR, PI e PNIF).',
              accent: 'accent3',
            },
            {
              title: 'Tesouro Direto e Fábio Portela',
              description:
                'Uma apresentação sobre títulos públicos, com as taxas e a tributação, e o livro "Manual do Pequeno Investidor em Ações", objeto de três atividades da turma.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material e uma lacuna declarada" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir do material da turma de Educação Financeira 2024.2 —
          BSI/IFAL: as cartilhas da Febraban, o glossário do Banco Central, o trecho de Cerbasi, a apresentação
          sobre Tesouro Direto e os enunciados das atividades do mural.
        </p>
        <p className="text-sm">
          <strong>Lacuna conhecida:</strong> boa parte do bloco de investimentos foi trabalhada em{' '}
          <strong>pesquisa com vídeos</strong> — FGC, CDB, LCI, LCA, fundos, Relatório Focus e os indicadores
          macroeconômicos não têm material em PDF na raspagem. E o conteúdo do "Manual do Pequeno Investidor em
          Ações" (280 páginas) não foi verificado nesta escrita, de modo que indicadores fundamentalistas e
          análise de ações ficam de fora em vez de serem apresentados sem conferência.
        </p>
      </HighlightBox>
    </section>
  );
}
