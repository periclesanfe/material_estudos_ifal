import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function EapSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="EAP: Decompor o Trabalho"
        subtitle="A ferramenta que transforma um objetivo grande demais em partes que alguém consegue estimar"
        colorClass="text-accent"
        badge="EAP e Escopo"
      />

      <TheoryBlock title="O que é a EAP">
        <p>
          A <strong>Estrutura Analítica do Projeto</strong> (EAP, ou WBS em inglês) é um diagrama que organiza o
          escopo do projeto de forma <strong>visual, hierárquica e em partes menores</strong> — os pacotes de
          trabalho. Ela representa graficamente o escopo total, subdividindo o trabalho em componentes de mais
          fácil gerenciamento.
        </p>
        <p>
          Sua origem é o projeto Polaris, em 1962, no Departamento de Defesa americano — que a publicou e passou
          a exigi-la em projetos de porte semelhante. Foi depois adotada pelo setor privado e segue como uma das
          ferramentas mais comuns da área.
        </p>
      </TheoryBlock>

      <Subsection title="A boa prática central" accentClass="text-accent2">
        <HighlightBox title="Entregas, não tarefas">
          <p>
            É o ponto que o material destaca como primeira boa prática: o que vai na EAP{' '}
            <strong>não é a tarefa em si, e sim o que será ENTREGUE</strong> naquela atividade.
          </p>
          <p>
            A diferença parece sutil e muda tudo. "Instalar o banco de dados" é uma ação — pode estar 80% feita,
            o que quer que isso signifique. "Banco de dados instalado e configurado" é um estado verificável:
            está ou não está. Só o segundo formato permite dizer com honestidade se o pacote foi concluído.
          </p>
          <p className="text-sm">
            É também o que torna a EAP base confiável para estimativas: para estimar prazo e custo é preciso
            saber <em>o que se está comprando</em>, não que verbos serão executados no caminho.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Benefícios" accentClass="text-accent3">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Organiza e define o escopo total',
              description:
                'O que não está na EAP não está no projeto. Ela funciona como fronteira: qualquer trabalho que apareça depois é mudança de escopo, e passa pelo processo de controle de mudanças.',
              accent: 'accent',
            },
            {
              title: 'Serve de instrumento de comunicação',
              description:
                'Por ser de fácil compreensão, uma EAP explica o projeto para quem não participou do planejamento em menos tempo do que qualquer documento textual.',
              accent: 'accent2',
            },
            {
              title: 'Torna o trabalho gerenciável',
              description:
                'Detalhar em atividades menores transforma um objetivo intimidante em partes que uma pessoa consegue estimar, atribuir e acompanhar.',
              accent: 'accent3',
            },
            {
              title: 'Dá à equipe a visão do todo',
              description:
                'Cada pessoa enxerga o projeto inteiro e o impacto do próprio trabalho nele — o que muda a qualidade das decisões locais.',
              accent: 'accent4',
            },
            {
              title: 'É a base das estimativas',
              description:
                'Recursos, custo e tempo derivam dela. Estimar sem decompor é chutar: o número sai da intuição, sem nada que o sustente.',
              accent: 'accent5',
            },
            {
              title: 'Auxilia a atribuição de responsabilidades',
              description:
                'Cada pacote de trabalho pode ter um dono claro — o que é pré-requisito para a matriz de responsabilidades.',
              accent: 'accent',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Três atividades de planejamento dependem <strong>diretamente</strong> da EAP: o cronograma do projeto,
          a alocação de recursos e o orçamento detalhado. Indiretamente, todos os demais planos se apoiam nas
          atividades que ela identifica.
        </p>
      </Subsection>

      <Subsection title="Como construir" accentClass="text-accent4">
        <FlowDiagram
          items={[
            '1. A partir do documento de escopo, identifique os principais objetivos de negócio',
            '2. Ainda no documento de escopo, identifique os requisitos funcionais necessários para atingi-los',
            '3. Identifique as principais atividades necessárias para satisfazer esses requisitos',
            '4. Subdivida os pacotes maiores em atividades menores, refletindo como o trabalho será feito',
            '5. Monte a hierarquia com quantos níveis forem necessários',
          ]}
        />
        <HighlightBox title="Até onde decompor" accent="var(--color-accent4)">
          <p>
            O critério de parada é objetivo — decomponha até um nível que permita:{' '}
            <strong>estimar e agendar</strong> o trabalho, <strong>atribuí-lo</strong> a um indivíduo ou grupo, e{' '}
            <strong>monitorar e comunicar</strong> seu progresso.
          </p>
          <p>
            Se você não consegue estimar um pacote, ele ainda está grande demais. Se está detalhando a ponto de
            listar passos de execução, foi longe demais — a EAP não é um manual de procedimento.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="O exemplo do churrasco" accentClass="text-accent5">
        <ExampleBox title="A EAP que a apostila usa — e que virou atividade da turma">
          <p>
            A apostila traz como exemplo uma EAP de um <strong>projeto de churrasco</strong>, decomposta em seis
            ramos: <strong>Infraestrutura</strong> (casa, mobília), <strong>Comes</strong> (carnes, balão),{' '}
            <strong>Bebes</strong> (água, refrigerante, cerveja, uísque), <strong>Insumos diversos</strong>{' '}
            (toldos, carvão, espetos), <strong>Entretenimento</strong> (som mecânico, banda) e{' '}
            <strong>Serviços</strong> (churrasqueiro, garçons, faxineira).
          </p>
          <p>
            A atividade da turma pedia exatamente isso: uma EAP para um churrasco de 10 pessoas, com no mínimo 3
            proteínas, mais água, cerveja e refrigerante.
          </p>
          <p>
            A escolha é pedagogicamente esperta. Num domínio que todo mundo conhece, o aluno não pode se esconder
            atrás da dificuldade técnica: se a decomposição ficou ruim, isso fica evidente — falta a faxineira,
            ninguém pensou no gelo, "carne" aparece como um único pacote impossível de estimar. O mesmo erro num
            projeto de software passaria despercebido por parecer complicado.
          </p>
          <p className="text-sm">
            Repare também que "Serviços" e "Insumos diversos" são categorias de <em>entrega</em>, não de ação — a
            EAP do próprio material segue a boa prática que ela mesma enuncia.
          </p>
        </ExampleBox>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Ferramentas sugeridas para desenhar uma EAP: PowerPoint, Canva, Lucidchart e o WBS Chart Pro, que
          exporta para o MS Project.
        </p>
      </Subsection>
    </section>
  );
}
