import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  ComparisonTable,
  TheoryBlock,
} from '../../../components/sections';

export default function RemuneracaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Remuneração e Recompensas"
        subtitle="Quatro componentes, duas naturezas — e a tese de que recompensa é investimento, não custo"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <Subsection title="Os quatro componentes da remuneração total" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Remuneração básica',
              description: 'O salário mensal ou o salário por hora — a parcela fixa e previsível.',
              accent: 'accent',
            },
            {
              title: '2. Incentivos salariais',
              description: 'Bônus, prêmios, participação nos lucros, remuneração variável. Vinculados a resultado.',
              accent: 'accent2',
            },
            {
              title: '3. Incentivos não financeiros',
              description:
                'Distribuição de ações, opção de compra de ações, participação em metas e resultados, prêmios em viagens e em bens.',
              accent: 'accent3',
            },
            {
              title: '4. Benefícios',
              description: 'Seguro de vida, seguro saúde, refeições e transporte subsidiados, entre outros.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Financeiras e não financeiras" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Recompensas FINANCEIRAS"
          rightLabel="Recompensas NÃO FINANCEIRAS"
          criterionLabel="Tipo"
          rows={[
            {
              criterion: 'Diretas',
              left: 'Salário direto, prêmios, comissões — o pagamento pelo trabalho realizado',
              right: 'Oportunidades de desenvolvimento · Reconhecimento e autoestima · Segurança no emprego',
            },
            {
              criterion: 'Indiretas',
              left: 'Descanso semanal remunerado, férias, gratificações, gorjetas, horas extras, 13º salário, adicionais e as decorrências financeiras dos benefícios',
              right: 'Qualidade de vida no trabalho · Orgulho da empresa e do trabalho · Promoções · Liberdade e autonomia no trabalho',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Vale reler a coluna da direita com Herzberg em mente: reconhecimento, autonomia, orgulho do trabalho e
          oportunidades de desenvolvimento são <strong>fatores motivacionais</strong>. A lista de recompensas não
          financeiras é, quase item por item, a lista do que motiva de forma duradoura.
        </p>
      </Subsection>

      <Subsection title="Os pares em tensão de um plano de remuneração" accentClass="text-accent4">
        <TheoryBlock title="Oito decisões, sem resposta única">
          <p>
            Construir uma política salarial é posicionar-se em oito continuums. Nenhum extremo é certo ou errado
            em si: cada escolha tem consequência, e a coerência entre elas é o que define a política.
          </p>
        </TheoryBlock>
        <ColoredPanelList
          columns="md:grid-cols-2"
          items={[
            { title: 'Remuneração fixa × variável', description: 'Previsibilidade para a pessoa, ou vínculo direto com resultado.' },
            { title: 'Ênfase no desempenho × no tempo de casa', description: 'Recompensar o que se entrega, ou a permanência e a experiência acumulada.' },
            { title: 'Remuneração do cargo × das competências', description: 'Pagar pela posição ocupada, ou pelo que a pessoa sabe e é capaz de fazer.' },
            { title: 'Igualitarismo × elitismo', description: 'Faixas próximas entre níveis, ou forte diferenciação para os cargos de topo.' },
            { title: 'Abaixo × acima do mercado', description: 'Economizar em folha, ou pagar prêmio para atrair e reter os melhores.' },
            { title: 'Prêmios monetários × não monetários', description: 'Dinheiro, ou reconhecimento, viagens, formação e outras formas de valor.' },
            { title: 'Remuneração aberta × confidencial', description: 'Transparência salarial, ou sigilo — com efeitos opostos sobre percepção de justiça.' },
            { title: 'Decisões centralizadas × descentralizadas', description: 'A política definida no topo, ou margem de decisão para cada gestor.' },
          ]}
        />
      </Subsection>

      <Subsection title="Recompensa é investimento, não custo" accentClass="text-accent5">
        <HighlightBox title="A tese do material">
          <p>
            Gerar riqueza é um dos principais objetivos das organizações — e esse objetivo depende de outro: a{' '}
            <strong>distribuição adequada da riqueza gerada</strong> entre os vários stakeholders que
            contribuíram para gerá-la.
          </p>
          <p>
            Daí a formulação que dá título a esta subseção:{' '}
            <em>as recompensas não representam um custo para a organização, mas sim um investimento necessário
            para assegurar seus resultados finais</em>. Isso não dispensa análise — o material é explícito ao
            dizer que é preciso avaliar a relação entre custos e benefícios dos sistemas de recompensa, que devem
            trazer retorno. Mas muda a pergunta de "quanto isso custa?" para "que retorno isso traz?".
          </p>
          <p className="text-sm">
            A síntese usada no material: "uma mão lava a outra — a organização alcança resultados e
            simultaneamente recompensa quem a ajudou a alcançá-los".
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Os objetivos da administração de salários" accentClass="text-accent">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O sistema de remuneração é desenhado para atender simultaneamente a vários objetivos: atrair e reter
          talentos; engajá-los e desenvolvê-los; motivar e obter comprometimento; aumentar a produtividade e a
          qualidade no trabalho; <strong>controlar custos laborais</strong>; proporcionar tratamento{' '}
          <strong>justo e equitativo</strong> a todas as pessoas; cumprir a legislação trabalhista; ajudar no
          alcance dos objetivos organizacionais; proporcionar um ambiente de trabalho amigável; e garantir a
          competitividade e a sustentabilidade da organização.
        </p>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Repare que a lista inclui objetivos em tensão: atrair os melhores <em>e</em> controlar custos, ser
          competitivo <em>e</em> equitativo. Uma política salarial é sempre um arranjo entre exigências que
          puxam para lados diferentes — e é por isso que não existe tabela salarial universalmente correta.
        </p>
      </Subsection>
    </section>
  );
}
