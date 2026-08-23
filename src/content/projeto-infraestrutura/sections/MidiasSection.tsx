import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ColoredPanelList } from '../../../components/sections';

export default function MidiasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fibra Óptica e Outras Mídias"
        subtitle="Quando o cobre não resolve"
        colorClass="text-accent2"
        badge="Normas e mídias"
      />

      <Subsection title="Fibra óptica" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Transmite por LUZ',
              description:
                'Pulsos de laser ou LED em vez de sinal elétrico. É essa mudança de meio físico que produz todas as vantagens seguintes.',
              accent: 'accent',
            },
            {
              title: 'Imune a interferência',
              description:
                'Como não trafega eletricidade, motores e cabos de energia não a afetam. É a resposta direta ao problema da planta industrial.',
              accent: 'accent2',
            },
            {
              title: 'Alta velocidade e longa distância',
              description:
                'Vence percursos muito maiores que os 100 metros do cobre — essencial para backbone entre blocos, FTTH e data centers.',
              accent: 'accent3',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Nos cenários da disciplina, a fibra aparece em dois papéis: <strong>monomodo ou multimodo</strong> para
          interligar galpões distantes, e como espinha dorsal do projeto de micro-ISP GPON. Nas duas pontas são
          necessários conversores de mídia ou ONU/ONT para voltar ao sinal elétrico.
        </p>
      </Subsection>

      <Subsection title="Cabo coaxial — o que ficou para trás" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'Como é construído',
              description:
                'Um fio de cobre condutor revestido por material isolante e rodeado por uma blindagem. Utiliza conector BNC.',
            },
            {
              title: 'Por que caiu em desuso',
              description:
                'Apesar de reduzir os efeitos de sinais externos, é mais propenso a mau contato, tem conectores mais caros e pouca flexibilidade. Sobrevive apenas em algumas redes antigas.',
            },
            {
              title: 'Por que ainda se estuda',
              description:
                'Foi a mídia das redes Ethernet 10BASE2 e 10BASE5. Importa para entender a evolução do cabeamento — e por que o par trançado venceu.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="A pergunta de projeto" accent="var(--color-accent3)">
        <p>
          A escolha da mídia raramente é sobre velocidade máxima no papel. Nos cenários da disciplina, a fibra é
          escolhida por <strong>imunidade a EMI</strong> (fábrica), por <strong>distância</strong> (entre blocos e
          galpões) ou por ser a <strong>única tecnologia viável</strong> (rede FTTH de um provedor).
        </p>
        <p>
          O cobre continua vencendo dentro do prédio, até 100 metros, por custo e por suportar PoE — que a fibra
          não faz. Alimentar um Access Point pelo cabo de dados é uma vantagem que a fibra simplesmente não tem.
        </p>
      </HighlightBox>
    </section>
  );
}
