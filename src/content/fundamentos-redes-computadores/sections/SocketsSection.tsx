import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ColoredPanelList, PanelList, TheoryBlock } from '../../../components/sections';

export default function SocketsSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="O Projeto de Sockets e as Ferramentas"
        subtitle="Av3 — onde a teoria das camadas vira código que roda"
        colorClass="text-accent"
        badge="Av3"
      />

      <TheoryBlock title="Por que um projeto de sockets fecha a disciplina">
        <p>
          Implementar comunicação em rede obriga a usar tudo o que veio antes:{' '}
          <strong>identificar o processo</strong> por endereço IP e porta (módulo 2),{' '}
          <strong>escolher entre TCP e UDP</strong> sabendo o que cada um garante e o que cobra por isso (módulo
          3), e lidar na prática com conexões, buffers e concorrência.
        </p>
        <p>
          É a diferença entre saber que o TCP é confiável e descobrir, escrevendo o código, que ele não preserva
          fronteiras de mensagem — e que isso é problema seu.
        </p>
      </TheoryBlock>

      <Subsection title="Como a Av3 foi organizada" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            {
              title: 'As propostas vinham do codingchallenges.fyi',
              description:
                'Um catálogo de desafios de programação com escopo realista — construir versões funcionais de ferramentas que existem de verdade, em vez de exercícios artificiais.',
            },
            {
              title: 'O desafio destacado: implementar um LOAD BALANCER',
              description:
                'O professor apontou explicitamente esse desafio. É uma escolha coerente: um balanceador exige aceitar conexões de clientes, manter conexões com vários servidores de destino, distribuir requisições e detectar servidores fora do ar — exercitando sockets em ambas as pontas ao mesmo tempo.',
            },
            {
              title: 'Java como apoio',
              description:
                'A apostila de Java da Caelum foi divulgada como material de apoio ao projeto, indicando a linguagem esperada — coerente com o 4º período, em que a turma já cursou programação orientada a objetos.',
            },
          ]}
        />
      </Subsection>

      <Subsection title="O que um load balancer exercita" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Socket servidor e socket cliente',
              description:
                'O balanceador é servidor para quem chega e cliente para quem repassa — precisa dos dois papéis simultaneamente.',
              accent: 'accent',
            },
            {
              title: 'Concorrência',
              description:
                'Vários clientes ao mesmo tempo exigem threads ou entrada/saída não bloqueante. Um servidor sequencial atende um e faz os outros esperarem.',
              accent: 'accent2',
            },
            {
              title: 'Política de distribuição',
              description:
                'Round-robin, menor número de conexões, por peso — a escolha muda o comportamento sob carga desigual.',
              accent: 'accent3',
            },
            {
              title: 'Verificação de saúde',
              description:
                'Detectar que um servidor de destino caiu e tirá-lo da rotação. Sem isso, o balanceador continua enviando tráfego para o vazio.',
              accent: 'accent4',
            },
          ]}
        />
      </Subsection>

      <Subsection title="As ferramentas de diagnóstico" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            {
              title: 'Wireshark',
              description:
                'Captura e decodifica o tráfego, mostrando os cabeçalhos de cada camada. É o que torna a teoria verificável: abre-se um pacote real e vê-se o quadro Ethernet, dentro dele o IP, dentro dele o TCP e por fim o HTTP — o encapsulamento na prática.',
            },
            {
              title: 'ping',
              description:
                'Usa mensagens ICMP echo request e echo reply para testar alcançabilidade e medir o RTT. Responde à pergunta "esse host está acessível, e a que distância em tempo?".',
            },
            {
              title: 'traceroute',
              description:
                'Descobre a rota até o destino manipulando o campo TTL: envia pacotes com TTL 1, 2, 3… e cada roteador que zera o TTL devolve uma mensagem ICMP identificando-se. Revela o caminho salto a salto.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="O truque do traceroute" accent="var(--color-accent3)">
        <p>
          O campo TTL foi criado para <strong>evitar que pacotes circulem para sempre</strong> em loops de
          roteamento: cada roteador o decrementa, e ao chegar a zero o pacote é descartado com um aviso ICMP de
          volta à origem.
        </p>
        <p>
          O traceroute explora esse mecanismo de segurança para outra finalidade: enviando pacotes com TTL
          deliberadamente baixo, faz cada roteador do caminho se identificar, um de cada vez. É um dos usos mais
          engenhosos de um campo de protocolo em toda a pilha.
        </p>
      </HighlightBox>
    </section>
  );
}
