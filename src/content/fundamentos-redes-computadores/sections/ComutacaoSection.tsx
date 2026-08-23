import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ComparisonTable, ConceptGrid, TheoryBlock } from '../../../components/sections';

export default function ComutacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pacotes, Circuitos e Multiplexação"
        subtitle="Duas formas de compartilhar um enlace — e por que a Internet escolheu uma delas"
        colorClass="text-accent3"
        badge="Av1"
      />

      <TheoryBlock title="O problema comum">
        <p>
          Muitas conversas precisam atravessar os mesmos enlaces. Como dividir a capacidade entre elas? Há duas
          respostas históricas, e elas produzem redes com caráter completamente diferente.
        </p>
      </TheoryBlock>

      <Subsection title="Circuitos × pacotes" accentClass="text-accent">
        <ComparisonTable
          leftLabel="Comutação de CIRCUITOS"
          rightLabel="Comutação de PACOTES"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Reserva de recursos',
              left: 'Caminho dedicado reservado durante toda a conversa, com banda garantida',
              right: 'Sem reserva — os fluxos disputam os enlaces pacote a pacote',
            },
            {
              criterion: 'Uso do recurso',
              left: 'Ocioso quando ninguém fala — a banda reservada não serve a mais ninguém',
              right: 'Aproveitado por quem tiver dados a enviar naquele instante',
            },
            {
              criterion: 'Garantias',
              left: 'Atraso e banda previsíveis',
              right: 'Sem garantia de atraso nem de banda; pode haver fila e perda',
            },
            {
              criterion: 'Exemplo típico',
              left: 'Rede telefônica tradicional',
              right: 'A Internet',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A Internet escolheu pacotes por eficiência e robustez: tráfego de dados é intermitente e em rajadas, e
          reservar banda para rajadas é desperdiçar quase todo o tempo. Além disso, sem estado reservado nos
          comutadores, a rede se recompõe sozinha quando um caminho falha.
        </p>
      </Subsection>

      <Subsection title="Multiplexação em redes de circuitos" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'FDM — divisão de FREQUÊNCIA',
              description:
                'Cada circuito recebe uma faixa de frequência permanente do enlace. Dispõe continuamente de uma fração da largura de banda — pouca banda, o tempo todo.',
              accent: 'accent',
            },
            {
              title: 'TDM — divisão de TEMPO',
              description:
                'Cada circuito recebe TODA a largura de banda, mas apenas durante intervalos periódicos. Muita banda, de vez em quando.',
              accent: 'accent2',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Como um pacote atravessa a rede" accentClass="text-accent5">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Fragmentação em pacotes',
              description:
                'A origem quebra mensagens longas em porções menores. Cada pacote percorre enlaces e comutadores até o destino, onde a mensagem é remontada.',
              accent: 'accent',
            },
            {
              title: 'Armazena-e-reenvia',
              description:
                'O comutador precisa receber o pacote INTEIRO antes de começar a transmitir o primeiro bit para o enlace de saída. É daí que vem o atraso de transmissão em cada salto.',
              accent: 'accent3',
            },
            {
              title: 'Tabelas de repasse',
              description:
                'Cada roteador tem uma tabela que mapeia endereços de destino para enlaces de saída. Os protocolos de roteamento é que preenchem essas tabelas.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Dois tipos de comutador" accent="var(--color-accent2)">
        <p>
          A rede tem <strong>roteadores</strong>, que atuam na camada de rede e decidem pelo endereço IP, e{' '}
          <strong>comutadores de camada de enlace</strong> (switches), que atuam no salto local e decidem pelo
          endereço físico.
        </p>
        <p>
          Não são sinônimos, e a diferença é exatamente a das camadas: o switch move quadros dentro de uma rede
          local; o roteador move datagramas <em>entre</em> redes.
        </p>
      </HighlightBox>
    </section>
  );
}
