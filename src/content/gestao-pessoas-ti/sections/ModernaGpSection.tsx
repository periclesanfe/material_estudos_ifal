import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function ModernaGpSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A Moderna Gestão de Pessoas"
        subtitle="Da administração de recursos humanos à gestão de talentos — uma mudança de vocabulário que é de concepção"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Interdependência">
        <p>
          O contexto da gestão de pessoas é formado por pessoas e organizações numa{' '}
          <strong>duradoura interdependência</strong>. De um lado, as pessoas passam boa parte de suas vidas
          trabalhando em organizações; de outro, as organizações dependem delas para funcionar e alcançar o
          sucesso.
        </p>
        <p>
          Cada parte depende da outra numa relação de mútua dependência, com benefícios recíprocos. As
          organizações são constituídas de pessoas e dependem delas para atingir seus objetivos e cumprir sua
          missão.
        </p>
      </TheoryBlock>

      <Subsection title="Cinco maneiras de enxergar as pessoas" accentClass="text-accent2">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Pessoas como seres humanos',
              description:
                'Dotados de personalidade própria e profundamente diferentes entre si, com história pessoal particular e diferenciada, possuidores de conhecimento, habilidades e competências indispensáveis à gestão dos demais recursos.',
            },
            {
              title: 'Pessoas como ativadoras de recursos organizacionais',
              description:
                'Fonte de impulso próprio que DINAMIZA a organização — e não agentes passivos, inertes e estáticos. É a formulação que separa a moderna gestão de pessoas da visão de mão de obra.',
            },
            {
              title: 'Pessoas como parceiras da organização',
              description:
                'Capazes de conduzir a organização à excelência e ao sucesso. "Parceira" implica reciprocidade: quem é parceiro investe e espera retorno, não apenas obedece.',
            },
            {
              title: 'Pessoas como talentos fornecedores de competências',
              description:
                'Elementos vivos e portadores de competências essenciais ao sucesso organizacional.',
            },
            {
              title: 'Pessoas como capital humano',
              description:
                'O principal ativo organizacional, que agrega inteligência ao negócio. Note o deslocamento contábil: de custo na linha de despesas para ativo — algo em que se investe.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Os sete objetivos da gestão de pessoas" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: '1. Ajudar a organização a alcançar objetivos e realizar sua missão',
              description: 'A gestão de pessoas não é um fim em si: existe a serviço do propósito da organização.',
              accent: 'accent',
            },
            {
              title: '2. Proporcionar competitividade à organização',
              description: 'Empregar bem as competências das pessoas é fonte de vantagem difícil de copiar.',
              accent: 'accent2',
            },
            {
              title: '3. Proporcionar pessoas bem treinadas e bem motivadas',
              description: 'As duas coisas juntas — capacidade sem motivação e motivação sem capacidade produzem o mesmo resultado ruim.',
              accent: 'accent3',
            },
            {
              title: '4. Aumentar a satisfação das pessoas no trabalho',
              description: 'Objetivo declarado, e não subproduto: a satisfação de quem trabalha é resultado esperado da função.',
              accent: 'accent4',
            },
            {
              title: '5. Desenvolver e elevar a qualidade de vida no trabalho',
              description: 'Tema que ganha seção própria mais adiante, com dois modelos formais.',
              accent: 'accent5',
            },
            {
              title: '6. Administrar e impulsionar a mudança',
              description: 'Não apenas absorver mudanças, mas provocá-las — a área como agente, não como resistência.',
              accent: 'accent',
            },
            {
              title: '7. Manter políticas éticas e comportamento socialmente responsável',
              description: 'O único objetivo formulado como restrição: há coisas que não se fazem, mesmo que produzam resultado.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Responsabilidade de linha e função de staff" accentClass="text-accent4">
        <HighlightBox title="Quem, afinal, gere pessoas?">
          <p>
            A resposta do material é direta: <strong>o próprio executivo ou líder</strong> que lida diretamente
            com seus subordinados. É ele quem toma decisões a respeito deles, define objetivos individuais ou
            grupais e padrões de desempenho, lidera, orienta, engaja, e cuida do treinamento, do desenvolvimento,
            da remuneração e dos incentivos.
          </p>
          <p>
            Tudo isso é <strong>responsabilidade linear e direta</strong> de cada gestor sobre a equipe sob sua
            liderança. Para exercê-la com autonomia, ele recebe assessoria e consultoria do órgão de Gestão de
            Pessoas, que fornece os meios, os serviços de apoio, as políticas e os procedimentos adotados pela
            organização.
          </p>
          <p className="text-sm">
            A consequência prática vale para quem for liderar equipes técnicas: "isso é problema do RH" quase
            nunca é verdade. O RH dá o instrumento — a política de avaliação, o programa de treinamento, a
            tabela salarial —, mas quem conduz a pessoa é quem trabalha com ela todos os dias.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
