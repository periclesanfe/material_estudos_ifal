import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, StatStrip } from '../../../components/sections';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Programação Orientada a Objetos"
        subtitle="Do primeiro Hello World em Java até um sistema em camadas com banco de dados e testes automatizados"
        colorClass="text-accent"
      />

      <HighlightBox title="O que é esta disciplina">
        <p>
          POOB (código oficial PROO, 80h, 4º período) ensina os princípios e técnicas básicas de programação com
          enfoque em <strong>orientação a objetos usando Java</strong>. A disciplina começa do zero na linguagem —
          tipos, condicionais, laços, arrays — e termina com você construindo um sistema completo: classes bem
          encapsuladas, herança e polimorfismo, camadas separadas, banco de dados MySQL via JDBC e testes JUnit.
          O material desta página resume e reorganiza as aulas da turma 2023.2 do Prof. Fernando Kenji Kamei.
        </p>
      </HighlightBox>

      <Subsection title="O plano da disciplina em três partes" accentClass="text-accent2">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Parte 01 — A linguagem Java',
              description:
                'Características do Java, ambiente de programação, estrutura de um programa, tipos de dados — e testes unitários com JUnit desde cedo.',
              accent: 'accent',
            },
            {
              title: 'Parte 02 — Orientação a Objetos',
              description:
                'Classes e objetos, atributos e métodos, construtores, encapsulamento, herança, polimorfismo, abstração, classes abstratas e interfaces.',
              accent: 'accent2',
            },
            {
              title: 'Parte 03 — Integração',
              description:
                'Banco de dados com JDBC e MySQL, e organização do projeto em camadas (View, BO, VO, DAO) — a arquitetura que o projeto final exige.',
              accent: 'accent3',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Sequência didática da turma" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'Java, JVM e o primeiro programa',
            'Variáveis, tipos, expressões e casting',
            'Condicionais e laços de repetição',
            'Arrays uni e multidimensionais',
            'Classes, objetos e construtores',
            'Encapsulamento, modificadores de acesso e static',
            'Herança e reescrita de métodos',
            'Classes abstratas, polimorfismo e interfaces',
            'Exceções e arquitetura em camadas',
            'JDBC + MySQL e testes com JUnit',
            'Projeto final em equipe (acompanhamento e marcos)',
          ]}
        />
      </Subsection>

      <Subsection title="Como a nota é composta" accentClass="text-accent5">
        <StatStrip
          items={[
            { label: 'N1', value: 'Prova', accent: 'text-accent' },
            { label: 'N2 ×2', value: 'Projeto final (peso dobrado)', accent: 'text-accent3' },
            { label: '(N1+2·N2)/3', value: 'Nota final', accent: 'text-accent5' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O projeto vale o <strong>dobro</strong> da prova — a disciplina é avaliada, acima de tudo, pela sua
          capacidade de <em>aplicar</em> os conceitos num sistema real. Houve ainda a AV1 (trabalho de Padrões de
          Projeto, em grupos de até 4, com apresentação por sorteio) e os marcos do projeto: apresentação parcial
          e apresentação final, com recuperação na semana seguinte.
        </p>
      </Subsection>

      <Subsection title="O projeto final: os dez critérios de avaliação" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1 · Abstratas, concretas e interfaces', description: 'O sistema deve usar classes abstratas, classes não abstratas E interfaces — os três mecanismos, cada um no papel certo.' },
            { title: '2 · OO bem aplicada', description: 'Classes coesas e encapsulamento: atributos privados, estado controlado pela própria classe.' },
            { title: '3 · Construtores', description: 'Objetos inicializados por construtores adequados (incluindo sobrecarga quando fizer sentido).' },
            { title: '4 · Herança', description: 'Hierarquias com extends onde houver relação "é um" genuína.' },
            { title: '5 · Polimorfismo', description: 'Referências do tipo pai executando comportamento das filhas — sem cascatas de if de tipo.' },
            { title: '6 · Collections', description: 'Uso de coleções do Java (como ArrayList) em vez de arrays fixos onde a lista cresce.' },
            { title: '7 · Testes unitários', description: 'Testes automatizados para CADA regra de negócio (BO) e CADA acesso a banco (DAO).' },
            { title: '8 · Banco de dados', description: 'Insert, update, delete e select funcionando via JDBC.' },
            { title: '9 · Camadas', description: 'Projeto estruturado em View, BO, VO e DAO — responsabilidades separadas por pacote.' },
            { title: '10 · Exceções próprias', description: 'Criar as próprias exceções e tratá-las corretamente, camada a camada.' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Exigências extras: o projeto fica no <strong>GitHub desde o início</strong> (o professor olha os commits
          de cada integrante, não só o resultado) e a interface web/mobile é <strong>opcional</strong>. A proposta
          inicial é um documento simples: nome do sistema, objetivo, escopo preliminar e integrantes.
        </p>
      </Subsection>

      <Subsection title="Bibliografia" accentClass="text-accent">
        <PanelList
          columns=""
          items={[
            { title: 'Básica (ementa oficial)', description: 'DEITEL — Java: Como Programar · HORSTMANN — Core Java Vol. I · TURINI — Desbravando Java e OO (Casa do Código) · SIERRA — Use a Cabeça! Java.' },
            { title: 'Usada pelo professor', description: 'Apostila Caelum FJ-11 (Java e Orientação a Objetos) · BLOCH — Effective Java · GUERRA — Design Patterns com Java · BECK — TDD by Example.' },
          ]}
        />
      </Subsection>

      <HighlightBox title="Fonte deste material" accent="var(--color-accent3)">
        <p>
          Conteúdo resumido e reestruturado a partir dos slides, códigos de aula, listas e avisos da turma
          PROO BSI 2023.2 (Prof. Fernando Kenji Kamei — IFAL), complementado nos pontos em que a ementa oficial
          cobra temas que os slides só mostram em código (polimorfismo, interfaces, coleções, exceções). Onde o
          material original traz pequenas erratas (versão do Java, limites de tipos), este guia usa os valores corretos.
        </p>
      </HighlightBox>
    </section>
  );
}
