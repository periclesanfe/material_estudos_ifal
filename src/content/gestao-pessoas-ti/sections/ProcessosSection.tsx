import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ColoredPanelList,
  TheoryBlock,
} from '../../../components/sections';

export default function ProcessosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Os Seis Processos"
        subtitle="O mapa que organiza o resto da disciplina — e a ordem em que as próximas seções aparecem"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Seis perguntas sobre a mesma pessoa">
        <p>
          Os seis processos de gestão de pessoas não são departamentos nem etapas cronológicas: são{' '}
          <strong>seis conjuntos de atividades</strong> que a organização executa continuamente sobre as
          pessoas. Cada um responde a uma pergunta diferente a respeito da mesma pessoa.
        </p>
      </TheoryBlock>

      <Subsection title="Os seis processos" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'AGREGAR — quem entra?',
            'APLICAR — o que a pessoa faz e como está indo?',
            'RECOMPENSAR — o que ela recebe em troca?',
            'DESENVOLVER — como ela cresce?',
            'MANTER — em que condições ela permanece?',
            'MONITORAR — como se acompanha tudo isso?',
          ]}
        />
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: '1. Agregar pessoas',
              description:
                'Processos utilizados para INCLUIR novas pessoas na empresa. É onde entram recrutamento e seleção — as duas primeiras seções práticas desta disciplina.',
            },
            {
              title: '2. Aplicar pessoas',
              description:
                'Processos utilizados para DESENHAR as atividades que as pessoas realizarão na empresa, orientar e acompanhar o seu desempenho. Reúne desenho de cargos e avaliação do desempenho.',
            },
            {
              title: '3. Recompensar pessoas',
              description:
                'Processos utilizados para INCENTIVAR as pessoas e satisfazer suas necessidades individuais mais elevadas. Remuneração, incentivos e benefícios.',
            },
            {
              title: '4. Desenvolver pessoas',
              description:
                'Processos utilizados para CAPACITAR e incrementar o desenvolvimento profissional e pessoal. Treinamento e desenvolvimento.',
            },
            {
              title: '5. Manter pessoas',
              description:
                'Processos utilizados para criar CONDIÇÕES ambientais e psicológicas satisfatórias para as atividades das pessoas. Higiene, segurança e qualidade de vida no trabalho.',
            },
            {
              title: '6. Monitorar pessoas',
              description:
                'Processos utilizados para ACOMPANHAR e controlar as atividades das pessoas e verificar resultados. É o processo que fecha o ciclo e alimenta os demais com informação.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As políticas e práticas que decorrem" accentClass="text-accent3">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          O material desdobra os processos em oito práticas concretas: agregar talentos; integrá-los e orientá-los
          numa cultura participativa, acolhedora e empreendedora; <strong>modelar o trabalho</strong> de maneira a
          torná-lo significativo, agradável e motivador; recompensar o excelente desempenho como reforço
          positivo; avaliar o desempenho humano e melhorá-lo continuamente; treinar e desenvolver talentos para
          criar uma <strong>organização de aprendizagem</strong>; proporcionar condições de trabalho e melhorar a
          qualidade de vida; e incentivar o desenvolvimento organizacional.
        </p>
        <HighlightBox title="Uma prática que ecoa Herzberg" accent="var(--color-accent4)">
          <p>
            Note a terceira: <em>modelar o trabalho de maneira a torná-lo significativo, agradável e
            motivador</em>. Ela não fala de salário, benefício ou ambiente — fala do{' '}
            <strong>conteúdo do trabalho</strong>, exatamente onde Herzberg localizou os fatores motivacionais.
          </p>
          <p>
            É a ponte entre a teoria da seção anterior e a prática da seção de cargos: desenhar um cargo é, entre
            outras coisas, decidir se ele será motivador ou apenas tolerável.
          </p>
        </HighlightBox>
      </Subsection>
    </section>
  );
}
