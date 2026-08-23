import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  ColoredPanelList,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';

export default function IniciacaoTapSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Iniciação e o Termo de Abertura"
        subtitle="O documento que responde à pergunta “quem disse que você pode?”"
        colorClass="text-accent"
        badge="Conceitos e TAP"
      />

      <Subsection title="De onde vêm os projetos" accentClass="text-accent2">
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          Organizações precisam evoluir — e às vezes promover uma revolução — buscando maneiras mais eficientes
          de trabalhar e clientes mais satisfeitos. Os projetos resultam dessas necessidades. O material lista
          cinco origens, com exemplos do setor público:
        </p>
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Demanda de mercado',
              description: 'Elaboração de aplicativos para prestação de serviços públicos por dispositivos móveis.',
              accent: 'accent',
            },
            {
              title: 'Oportunidade ou necessidade estratégica',
              description: 'Construção de refinarias para tratamento do petróleo do pré-sal.',
              accent: 'accent2',
            },
            {
              title: 'Solicitação de cliente',
              description: 'Construção de uma nova universidade para atender à demanda de uma região.',
              accent: 'accent3',
            },
            {
              title: 'Avanço tecnológico',
              description: 'Implantação de um programa nacional de banda larga.',
              accent: 'accent4',
            },
            {
              title: 'Requisito legal',
              description:
                'Implantação do Serviço de Informação ao Cidadão por força da Lei de Acesso à Informação. Origem frequente no setor público — e a que menos admite renegociação de prazo.',
              accent: 'accent5',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que a iniciação faz" accentClass="text-accent3">
        <TheoryBlock title="Definir e autorizar">
          <p>
            Os processos de iniciação servem para <strong>identificar e definir</strong> novos projetos,
            estabelecendo os primeiros parâmetros — objetivo, justificativa, partes envolvidas, público-alvo,
            escopo, recursos necessários, gerente do projeto — e obtendo a <strong>aprovação formal</strong>.
          </p>
          <p>
            É também aqui que se identificam as partes interessadas: envolvê-las já na iniciação aumenta a
            probabilidade de propriedade compartilhada, aceitação da entrega e colaboração ao longo do caminho.
          </p>
        </TheoryBlock>
      </Subsection>

      <Subsection title="O Termo de Abertura (TAP)" accentClass="text-accent4">
        <HighlightBox title="Por que o TAP existe">
          <p>
            É o documento oficial emitido pela alta administração que <strong>dá autoridade ao líder do
            projeto</strong>, autoriza formalmente o início e comunica isso à organização.
          </p>
          <p>
            Sem ele, o gerente coordena pessoas que não lhe devem satisfação, pede recursos que ninguém se
            comprometeu a fornecer e toma decisões que qualquer área pode desautorizar depois. O TAP é curto e
            parece burocrático — e é justamente o que transforma uma intenção em um projeto com mandato.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="A estrutura do modelo usado na disciplina" accentClass="text-accent5">
        <ColoredPanelList
          columns="md:grid-cols-1"
          items={[
            {
              title: 'Objetivo',
              description:
                'Uma frase declarando o que o projeto desenvolve. No modelo distribuído em aula: "desenvolvimento de um sistema que dê suporte à operação e gestão de unidades de atendimento médico".',
            },
            {
              title: 'Justificativa',
              description:
                'Descreve o problema atual e por que ele merece um projeto. O modelo é exemplar: registra que o controle era feito em planilhas duplicadas, que o sistema existente não cobria os relatórios necessários, que havia múltiplos sistemas a preencher e perda de informação — e traz até uma PESQUISA DE MERCADO das alternativas, com faixa de preço das soluções em nuvem e as limitações das opções abertas.',
            },
            {
              title: 'Escopo preliminar',
              description:
                'A lista das grandes entregas previstas, ainda sem detalhamento — "preliminar" é palavra honesta: neste momento não se sabe o suficiente para fechar escopo.',
            },
            {
              title: 'Premissas',
              description:
                'O que se ASSUME como verdadeiro para planejar. No modelo: "a aplicação irá substituir o uso das planilhas", "será utilizada uma vez implementada", "será de código aberto". Premissa é aposta declarada — se falhar, o plano muda.',
            },
            {
              title: 'Restrições — “o que condiciona o projeto a acontecer”',
              description:
                'Limites inegociáveis. No modelo: um MVP até uma data fixa; o MVP deve conter características de business intelligence; deve ser uma aplicação web com back-end e front-end; e a segurança de dados é requisito PRIMÁRIO, em detrimento de outros — uma restrição que estabelece prioridade entre requisitos, e não apenas os lista.',
            },
            {
              title: 'Riscos preliminares',
              description:
                'Tabela com descrição do risco e criticidade. Os dois exemplos do modelo, ambos de criticidade ALTA: a tecnologia exigida por outra disciplina poder atrasar a entrega por causa da curva de aprendizagem; e o tempo de definição do escopo se estender demais, inviabilizando a implantação.',
            },
            {
              title: 'Partes interessadas',
              description:
                'Quem patrocina, quem executa e quem usará o resultado — no modelo, docentes das disciplinas envolvidas, a equipe do projeto e os usuários potenciais (clínicas e hospitais).',
            },
            {
              title: 'Aprovação',
              description:
                'Local, data e assinatura de quem autoriza. É esta linha que converte o documento em mandato — sem ela, o TAP é apenas uma proposta bem formatada.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="A atividade da turma" accentClass="text-accent">
        <ExampleBox title="Dois termos de abertura: um de TI e outro de outra área">
          <p>
            A exigência tem intenção didática clara — a mesma da EAP do churrasco, mais adiante. Um curso de
            Sistemas de Informação corre o risco de o aluno passar a associar "projeto" a "software", e a
            disciplina desmonta isso obrigando a aplicar a mesma estrutura fora de TI.
          </p>
          <p>
            Escrever um TAP para reformar uma casa, organizar um casamento ou montar uma horta comunitária revela
            que objetivo, justificativa, premissas, restrições e riscos existem em qualquer empreendimento único
            e temporário. O documento não é um artefato da engenharia de software — é uma forma de pensar antes
            de começar.
          </p>
        </ExampleBox>
      </Subsection>
    </section>
  );
}
