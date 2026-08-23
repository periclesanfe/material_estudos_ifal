import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  PanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function TripeSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Tripé dos Investimentos"
        subtitle="Segurança, liquidez e rentabilidade — escolha duas"
        colorClass="text-accent2"
        badge="Investimentos"
      />

      <TheoryBlock title="Não existe o investimento perfeito">
        <p>
          O tripé é a ideia central do bloco de investimentos:{' '}
          <strong>é difícil obter segurança, liquidez e rentabilidade numa mesma aplicação</strong>. As mais
          seguras costumam render menos; as de alta rentabilidade trazem mais risco; as de liquidez imediata
          raramente pagam bem.
        </p>
        <p>
          A utilidade prática disso é diagnóstica: quando alguém oferece um produto com os três atributos no
          máximo, algum deles está sendo omitido ou distorcido.
        </p>
      </TheoryBlock>

      <Subsection title="Os três vértices" accentClass="text-accent">
        <ColoredPanelList
          items={[
            {
              title: 'SEGURANÇA — o risco de perder o que foi aplicado',
              description:
                'Menor risco: Tesouro Direto, garantido pelo Tesouro Nacional. Maior risco: ações, cujo valor oscila com o mercado. A segurança depende de quem é o devedor e de que garantias existem.',
            },
            {
              title: 'LIQUIDEZ — a velocidade de transformar em dinheiro',
              description:
                'Alta liquidez: fundos de renda fixa e Tesouro Selic, resgatáveis rapidamente. Baixa liquidez: imóveis, que podem levar meses para vender — e que costumam ser vendidos abaixo do valor quando se tem pressa.',
            },
            {
              title: 'RENTABILIDADE — quanto o dinheiro rende',
              description:
                'Sempre avaliada em termos LÍQUIDOS: descontados custos, taxas, Imposto de Renda e inflação. A rentabilidade divulgada raramente é a que chega ao investidor.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A diversificação em três reservas" accentClass="text-accent4">
        <p className="text-text-muted leading-relaxed mb-4">
          Se nenhuma aplicação atende aos três critérios, a saída é distribuir o patrimônio por{' '}
          <strong>finalidade</strong> — e deixar que a finalidade determine o produto, nunca o contrário:
        </p>
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Reserva de emergências',
              description:
                'Prioriza LIQUIDEZ e SEGURANÇA. Precisa estar disponível no dia em que a emergência acontece — rentabilidade é o critério menos importante aqui.',
              accent: 'accent',
            },
            {
              title: 'Reserva para projetos e sonhos',
              description:
                'Prazo definido pelo objetivo. Permite abrir mão de parte da liquidez em troca de rentabilidade, desde que o vencimento coincida com a data do projeto.',
              accent: 'accent3',
            },
            {
              title: 'Reserva para a aposentadoria',
              description:
                'Horizonte longo. Aceita baixa liquidez em troca de maior rentabilidade — é onde os juros compostos têm tempo para trabalhar.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A poupança — vantagens e a pegadinha do aniversário" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Criada em 1861, por Dom Pedro II',
              description:
                'É a aplicação mais antiga e mais difundida do país — e a porta de entrada de quase todo investidor brasileiro.',
            },
            {
              title: 'Isenta de Imposto de Renda',
              description: 'Para pessoa física, o rendimento não é tributado — vantagem real frente a boa parte da renda fixa.',
            },
            { title: 'Liquidez diária', description: 'O resgate pode ser feito a qualquer momento, sem carência.' },
            {
              title: 'Garantida pelo FGC',
              description: 'Cobertura de até R$ 250.000 por CPF e por instituição financeira.',
            },
            {
              title: 'Baixa rentabilidade',
              description: 'A principal desvantagem — frequentemente perde para outras aplicações de risco equivalente.',
            },
            {
              title: 'Remuneração apenas no ANIVERSÁRIO',
              description:
                'O rendimento é creditado na data de aniversário da aplicação. Sacar um dia antes significa perder o mês inteiro de rendimento — a pegadinha que anula a vantagem da liquidez diária.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O que o FGC garante — e o que não garante" accent="var(--color-accent3)">
        <p>
          O <strong>Fundo Garantidor de Créditos</strong> protege o investidor contra a{' '}
          <strong>falência da instituição financeira</strong>, cobrindo até{' '}
          <strong>R$ 250.000 por CPF e por instituição</strong> — em poupança, CDB, LCI e LCA.
        </p>
        <p>
          O limite ser por instituição é o que permite ampliar a cobertura distribuindo os recursos entre bancos
          diferentes. E note o que o FGC <em>não</em> é: ele não protege contra perda de rentabilidade nem contra
          oscilação de mercado. Só contra a quebra do banco.
        </p>
        <p className="text-sm">
          O detalhamento de CDB, LCI, LCA e fundos de investimento foi trabalhado em pesquisa com vídeos, sem
          material textual na raspagem — por isso este resumo se limita ao que o glossário do Banco Central
          registra.
        </p>
      </HighlightBox>
    </section>
  );
}
