import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';

export default function CamadaRedeSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Repasse, Roteamento e Roteadores"
        subtitle="Duas funções que quase todo mundo confunde"
        colorClass="text-accent"
        badge="Av2"
      />

      <TheoryBlock title="A distinção mais importante do módulo">
        <p>
          A camada de rede tem duas funções, e elas operam em escalas de tempo completamente diferentes.
        </p>
      </TheoryBlock>

      <Subsection title="Repasse × roteamento" accentClass="text-accent2">
        <ComparisonTable
          leftLabel="REPASSE (forwarding)"
          rightLabel="ROTEAMENTO"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'O que é',
              left: 'A ação LOCAL de mover um pacote da interface de entrada para a de saída correta',
              right: 'O processo GLOBAL de determinar a rota fim a fim através da rede',
            },
            {
              criterion: 'Escala de tempo',
              left: 'Nanossegundos — a cada pacote que chega',
              right: 'Segundos ou minutos — quando a topologia muda',
            },
            {
              criterion: 'Plano',
              left: 'Plano de DADOS — consulta a tabela de repasse',
              right: 'Plano de CONTROLE — PREENCHE a tabela de repasse',
            },
            {
              criterion: 'Analogia',
              left: 'Pegar a saída certa no trevo em que você está',
              right: 'Planejar o trajeto inteiro da viagem',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois se encontram na <strong>tabela de repasse</strong>: o roteamento a escreve, o repasse a lê
          milhões de vezes por segundo.
        </p>
      </Subsection>

      <Subsection title="Datagramas × circuitos virtuais" accentClass="text-accent3">
        <ComparisonTable
          leftLabel="Rede de DATAGRAMAS (a Internet)"
          rightLabel="Rede de CIRCUITOS VIRTUAIS"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Estado nos roteadores',
              left: 'Nenhum estado por conexão',
              right: 'Estado mantido em cada roteador do caminho',
            },
            {
              criterion: 'Base do repasse',
              left: 'O endereço de destino de cada pacote, independentemente',
              right: 'O identificador do circuito estabelecido previamente',
            },
            {
              criterion: 'Robustez',
              left: 'Alta — se um roteador cai, os pacotes seguintes tomam outro caminho',
              right: 'Menor — a queda de um nó do circuito derruba a conexão',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A escolha da Internet pelo modelo de datagramas foi o que lhe deu a robustez característica: sem estado
          nos roteadores, a rede se recompõe sozinha.
        </p>
      </Subsection>

      <Subsection title="O que há dentro de um roteador" accentClass="text-accent4">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Portas de entrada',
              description:
                'Terminam o enlace físico de chegada, consultam a tabela de repasse e decidem por qual saída o pacote deve seguir.',
            },
            {
              title: 'Elemento de comutação',
              description:
                'Move fisicamente o pacote da entrada para a saída. Implementado por memória, por barramento ou por rede de interconexão, em ordem crescente de desempenho.',
            },
            {
              title: 'Portas de saída',
              description:
                'Armazenam pacotes em fila quando a saída está ocupada e os transmitem no enlace — é aqui que nasce o atraso de fila e ocorre a perda.',
            },
            {
              title: 'Processador de roteamento',
              description:
                'Executa os protocolos de roteamento e mantém as tabelas. É o plano de controle, separado do caminho rápido dos dados.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Por que a separação de planos importa" accent="var(--color-accent2)">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Velocidades incompatíveis',
              description:
                'O repasse precisa acontecer na velocidade do enlace, em hardware dedicado. O roteamento envolve cálculo e troca de mensagens — impossível fazer isso a cada pacote.',
              accent: 'accent',
            },
            {
              title: 'Evolução independente',
              description:
                'Trocar o protocolo de roteamento não exige trocar o hardware de repasse. É a mesma lógica da divisão em camadas, aplicada dentro do roteador.',
              accent: 'accent3',
            },
          ]}
        />
      </HighlightBox>
    </section>
  );
}
