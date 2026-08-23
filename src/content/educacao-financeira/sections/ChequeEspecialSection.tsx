import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  StatStrip,
  ExampleBox,
  TheoryBlock,
} from '../../../components/sections';

export default function ChequeEspecialSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Cheque Especial"
        subtitle="Crédito pré-aprovado, sem garantia, disponível na hora — e por isso caro"
        colorClass="text-accent3"
        badge="Crédito"
      />

      <TheoryBlock title="A relação causal">
        <p>
          O cheque especial é uma <strong>linha de crédito pré-aprovada</strong>, sem exigência de garantias,
          disponível desde a abertura da conta — muitas vezes sem ter sido solicitada.
        </p>
        <p>
          O material faz a conexão explícita: é <em>justamente por causa dessas três características</em> que
          seus juros estão entre os mais elevados do mercado. Sem garantia e sem análise no momento do uso, o
          risco do banco é maior — e o preço acompanha.
        </p>
      </TheoryBlock>

      <Subsection title="As regras do Banco Central (janeiro de 2020)" accentClass="text-accent">
        <StatStrip
          items={[
            { label: '8% a.m.', value: 'Teto de juros para pessoas físicas e MEI — cálculo diário, por juros compostos', accent: 'text-accent' },
            { label: '0,25%', value: 'Tarifa de utilização permitida apenas para limites a partir de R$ 500 — abaixo disso, isenção', accent: 'text-accent2' },
            { label: '15% / 30 dias', value: 'Uso acima de 15% do limite por 30 dias seguidos obriga o banco a oferecer crédito mais barato e parcelado', accent: 'text-accent3' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Há ainda uma quarta regra, de transparência: o extrato deve informar{' '}
          <strong>saldo e limite separadamente</strong>. Ela existe porque a confusão entre os dois é um dos
          erros mais comuns no uso da modalidade.
        </p>
      </Subsection>

      <Subsection title="Como o custo se acumula" accentClass="text-accent5">
        <ExampleBox title="8% ao mês não são 96% ao ano">
          <p>
            O cálculo é <strong>diário e por juros compostos</strong>. Oito por cento ao mês compostos ao longo
            de doze meses ultrapassam <strong>150% ao ano</strong> — e esse é o teto, não a média praticada por
            todas as instituições em todas as faixas.
          </p>
          <p>
            Some-se o <strong>IOF de 0,01118% ao dia</strong> para pessoa física, que incide sobre o valor
            utilizado enquanto a dívida existir.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="A armadilha dos '10 dias sem juros'" accentClass="text-accent4">
        <HighlightBox title="Não é franquia, é condição" accent="var(--color-accent5)">
          <p>
            Alguns bancos oferecem isenção de juros nos primeiros dias de uso do limite. O detalhe está no que
            acontece ao ultrapassar o prazo: cobram-se os juros do <strong>período completo</strong>.
          </p>
          <p>
            Quem fica <strong>11 dias</strong> no limite não paga juros por 1 dia — paga pelos{' '}
            <strong>11 dias</strong>. A isenção desaparece retroativamente. É o tipo de cláusula que só aparece
            quando se lê a regra até o fim.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Os dois erros clássicos" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'Erro 1 — tratar o limite como parte da renda',
              description:
                'Quem ganha R$ 2.000, tem R$ 500 de limite e organiza a vida para gastar R$ 2.500 por mês não usa o cheque especial em emergências: usa todo mês, pagando juros continuamente sobre uma dívida que nunca zera.',
            },
            {
              title: 'Erro 2 — confundir limite com saldo',
              description:
                'O saldo é o dinheiro que você tem; o limite é dinheiro do banco que, ao ser usado, vira empréstimo automaticamente. Olhar o número maior do aplicativo e concluir que "tem dinheiro na conta" é o começo da dívida.',
            },
          ]}
        />
      </Subsection>
    </section>
  );
}
