import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ColoredPanelList, ComparisonTable, StatStrip, TheoryBlock } from '../../../components/sections';

export default function FtpEmailSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="FTP e Correio Eletrônico"
        subtitle="Duas conexões, três componentes e a diferença entre empurrar e buscar"
        colorClass="text-accent2"
        badge="Av1"
      />

      <Subsection title="FTP — controle fora da banda" accentClass="text-accent">
        <TheoryBlock title="Duas conexões TCP, não uma">
          <p>
            O FTP transfere arquivos usando <strong>duas conexões TCP separadas</strong>, e essa é sua
            característica mais distintiva:
          </p>
        </TheoryBlock>
        <ColoredPanelList
          items={[
            {
              title: 'Conexão de CONTROLE — porta 21',
              description:
                'Aberta durante toda a sessão. Carrega comandos, respostas, usuário e senha. Fica ociosa entre transferências, mas permanece viva.',
            },
            {
              title: 'Conexão de DADOS — porta 20',
              description:
                'Aberta especificamente para cada transferência de arquivo e fechada ao final dela. Carrega apenas o conteúdo.',
            },
          ]}
        />
        <HighlightBox title="Por que isso tem nome" accent="var(--color-accent3)">
          <p>
            Como as informações de controle viajam numa conexão separada dos dados, diz-se que o FTP envia
            controle <strong>fora da banda</strong> (out-of-band). O HTTP faz o oposto: comandos e conteúdo vão
            pela mesma conexão, ou seja, <strong>dentro da banda</strong>.
          </p>
          <p>
            Outra diferença de projeto: o FTP mantém <strong>estado</strong> da sessão — diretório atual,
            autenticação —, enquanto o HTTP não guarda nada entre requisições.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Correio eletrônico — três componentes" accentClass="text-accent4">
        <ColoredPanelList
          items={[
            {
              title: 'Agentes de usuário',
              description:
                'O programa com que a pessoa lê e escreve mensagens — cliente de e-mail ou webmail.',
            },
            {
              title: 'Servidores de correio',
              description:
                'Guardam a caixa postal de cada usuário e mantêm uma fila de mensagens a enviar, retentando quando o destino está indisponível.',
            },
            {
              title: 'SMTP — o protocolo de envio',
              description:
                'Transfere a mensagem do servidor do remetente ao servidor do destinatário, na porta 25. É um protocolo de PUSH: quem tem a mensagem toma a iniciativa de empurrá-la.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="Enviar × buscar — por que são protocolos diferentes" accentClass="text-accent5">
        <p className="text-text-muted leading-relaxed mb-4">
          O SMTP entrega a mensagem <em>até</em> o servidor do destinatário. Mas o destinatário não fica ligado
          esperando — ele precisa <strong>buscar</strong> a mensagem quando quiser. Empurrar e buscar são
          operações distintas, e por isso usam protocolos distintos.
        </p>
        <ComparisonTable
          leftLabel="POP3 — porta 110"
          rightLabel="IMAP — porta 143"
          criterionLabel="Aspecto"
          rows={[
            {
              criterion: 'Onde ficam as mensagens',
              left: 'Tradicionalmente baixa para o dispositivo e apaga do servidor',
              right: 'Mantém as mensagens NO servidor',
            },
            {
              criterion: 'Pastas e organização',
              left: 'A organização vive no cliente local',
              right: 'Pastas e estrutura ficam no servidor, sincronizadas entre dispositivos',
            },
            {
              criterion: 'Vários dispositivos',
              left: 'Complicado — cada aparelho vê um subconjunto diferente',
              right: 'Natural — todos veem o mesmo estado',
            },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          É por isso que o IMAP se tornou o padrão de fato: com celular, notebook e webmail acessando a mesma
          conta, manter o estado no servidor é a única opção que funciona.
        </p>
      </Subsection>

      <Subsection title="As portas que vale memorizar" accentClass="text-accent3">
        <StatStrip
          items={[
            { label: '25', value: 'SMTP — envio entre servidores', accent: 'text-accent' },
            { label: '110', value: 'POP3 — acesso à caixa postal', accent: 'text-accent2' },
            { label: '143', value: 'IMAP — acesso mantendo estado no servidor', accent: 'text-accent3' },
            { label: '20/21', value: 'FTP — dados e controle', accent: 'text-accent4' },
          ]}
        />
      </Subsection>
    </section>
  );
}
