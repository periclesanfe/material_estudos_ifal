import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const FRDC_GUIDE_CONTEXT = `
GUIA COMPLETO DE FUNDAMENTOS DE REDES DE COMPUTADORES (FRDC) - Resumo:

1. A DISCIPLINA: componente do 4º período, 80 horas, 4 horas semanais, sem pré-requisitos. A ementa oficial do PPC cobre introdução às redes e à Internet, arquiteturas e padrões, topologias e meios físicos de transmissão, camada de aplicação (DNS e serviços da Internet — mail, telnet, ftp e web), camada de transporte (TCP e UDP), camada de rede (endereçamento e roteamento), camada de enlace, camada física, redes locais, redes públicas de comunicação de dados, interligação de redes e projeto de redes. A bibliografia básica é Kurose & Ross ("Redes de Computadores e a Internet — Uma Abordagem Top-Down"), Soares et al. ("Das LANs, MANs, WANs às Redes ATM") e Tanenbaum & Wetherall ("Redes de Computadores"). A turma foi organizada em QUATRO MÓDULOS seguindo a abordagem top-down do Kurose, com um quiz por módulo, duas avaliações somativas e um projeto prático de sockets.

2. A ABORDAGEM TOP-DOWN: a disciplina segue a lógica de começar pela camada de APLICAÇÃO — aquela que o estudante já usa todo dia — e descer até a camada física, em vez do caminho tradicional de baixo para cima. A vantagem pedagógica é começar pelo que é familiar (navegador, e-mail, DNS) e só então perguntar o que sustenta aquilo. Módulo 1 dá o panorama geral; módulo 2 é a camada de aplicação; módulo 3 é a camada de transporte; módulo 4 é a camada de rede. As camadas de enlace e física, previstas na ementa, ficaram fora do recorte efetivamente trabalhado nesta turma.

3. MODELOS DE CAMADAS: o modelo de referência OSI tem sete camadas (física, enlace, rede, transporte, sessão, apresentação e aplicação). A pilha TCP/IP, que é a efetivamente implementada na Internet, funde as três camadas superiores do OSI numa única camada de aplicação, resultando em cinco camadas: aplicação, transporte, rede, enlace e física. A ideia central do modelo em camadas é que cada camada oferece serviços à camada imediatamente acima e usa serviços da camada imediatamente abaixo, sem precisar conhecer os detalhes internos das demais — o que permite trocar a implementação de uma camada sem reescrever as outras. Cada camada acrescenta seu próprio cabeçalho aos dados recebidos de cima, processo chamado ENCAPSULAMENTO; a unidade de dados recebe nomes diferentes conforme a camada: mensagem na aplicação, segmento no transporte, datagrama ou pacote na rede e quadro no enlace.

4. COMUTAÇÃO DE PACOTES × COMUTAÇÃO DE CIRCUITOS: na comutação de circuitos, típica da telefonia tradicional, reserva-se um caminho dedicado com largura de banda garantida durante toda a conversa — recurso fica ocioso quando ninguém fala. Na comutação de pacotes, a mensagem é fragmentada em pacotes que disputam os enlaces com pacotes de outros fluxos, sem reserva prévia; é o modelo da Internet, mais eficiente no uso dos recursos e mais tolerante a falhas, ao custo de não garantir atraso nem banda. A multiplexação em redes de circuitos se dá por divisão de frequência (FDM), em que cada circuito recebe uma faixa de frequência permanente, ou por divisão de tempo (TDM), em que cada circuito recebe toda a banda em intervalos periódicos.

5. ATRASOS E DESEMPENHO: o atraso total de um pacote em cada nó (atraso nodal) soma quatro componentes. O atraso de PROCESSAMENTO é o tempo de examinar o cabeçalho e decidir para onde encaminhar. O atraso de FILA é o tempo esperando na fila de saída até a vez de ser transmitido — é o único componente que varia com a carga da rede. O atraso de TRANSMISSÃO é o tempo de empurrar todos os bits do pacote para o enlace, calculado como L/R (tamanho do pacote dividido pela taxa do enlace). O atraso de PROPAGAÇÃO é o tempo que o bit leva para atravessar fisicamente o meio, calculado como d/s (distância dividida pela velocidade de propagação) — depende da distância, não da velocidade do enlace. Confundir transmissão com propagação é o erro clássico: aumentar a banda reduz o primeiro, mas não o segundo. VAZÃO (throughput) é a taxa efetiva de transferência: numa cadeia de enlaces, a vazão fim a fim é limitada pelo enlace mais lento do caminho, o gargalo. PERDA DE PACOTE ocorre quando um pacote chega a um roteador cuja fila está cheia e é descartado.

6. CAMADA DE APLICAÇÃO — PRINCÍPIOS: aplicações de rede rodam nos sistemas finais, não no núcleo da rede, o que é justamente o que permitiu a explosão de novas aplicações sem mudar a infraestrutura. Dois paradigmas: CLIENTE-SERVIDOR, em que um servidor sempre ligado e de endereço fixo atende requisições de clientes que não se comunicam entre si; e P2P (par a par), em que os próprios hospedeiros trocam dados diretamente, escalando pela contribuição de cada novo participante. Processos se comunicam através de SOCKETS, a interface entre a aplicação e a camada de transporte. Para identificar um processo de destino são necessários dois elementos: o endereço IP do hospedeiro e o número da porta do processo.

7. HTTP E A WEB: o HTTP é o protocolo da Web, usa TCP na porta 80 (HTTPS na 443) e é um protocolo SEM ESTADO — o servidor não guarda informação sobre requisições anteriores. HTTP não persistente abre uma conexão TCP por objeto e a fecha em seguida; HTTP persistente reaproveita a mesma conexão para vários objetos, economizando os handshakes. Métodos principais: GET (solicitar recurso), POST (enviar dados), HEAD (só o cabeçalho), PUT e DELETE. Códigos de estado por faixa: 2xx sucesso (200 OK), 3xx redirecionamento (301 Moved Permanently, 304 Not Modified), 4xx erro do cliente (400 Bad Request, 404 Not Found) e 5xx erro do servidor (500 Internal Server Error, 505 HTTP Version Not Supported). COOKIES existem justamente porque o HTTP não tem estado, permitindo que o servidor reconheça o usuário entre requisições. CACHES WEB (proxies) guardam cópias de objetos para reduzir tempo de resposta e tráfego no enlace de saída.

8. FTP, E-MAIL E DNS: o FTP transfere arquivos usando DUAS conexões TCP separadas — uma de CONTROLE, na porta 21, que fica aberta durante toda a sessão e carrega comandos e senhas, e uma de DADOS, na porta 20, aberta para cada transferência; por isso se diz que o FTP envia suas informações de controle FORA DA BANDA, ao contrário do HTTP. O correio eletrônico tem três componentes: agentes de usuário, servidores de correio e o protocolo SMTP (porta 25), que ENVIA mensagens de um servidor a outro e é um protocolo de push. Para o destinatário BUSCAR mensagens do seu servidor usam-se protocolos de acesso como POP3 (porta 110) e IMAP (porta 143) — o IMAP mantém as mensagens e a estrutura de pastas no servidor, o POP3 tradicionalmente baixa e apaga. O DNS traduz nomes de hospedeiro em endereços IP, roda sobre UDP na porta 53 e é implementado como uma base de dados distribuída e hierárquica: servidores raiz, servidores de domínio de topo (TLD, como .com e .br) e servidores com autoridade sobre cada organização. As consultas podem ser recursivas (o servidor consultado assume a responsabilidade de obter a resposta completa) ou iterativas (ele apenas indica o próximo servidor a consultar). Registros de recurso comuns: A (nome para IPv4), AAAA (nome para IPv6), NS (servidor de nomes do domínio), CNAME (apelido) e MX (servidor de correio). O cache de DNS é essencial para o desempenho e é a razão pela qual mudanças de DNS levam tempo para se propagar.

9. CAMADA DE TRANSPORTE — MULTIPLEXAÇÃO: a camada de transporte estende a entrega HOSPEDEIRO A HOSPEDEIRO oferecida pelo IP para uma entrega PROCESSO A PROCESSO. MULTIPLEXAÇÃO é reunir dados de vários sockets na origem, acrescentar cabeçalhos e passar à camada de rede; DEMULTIPLEXAÇÃO é entregar cada segmento recebido ao socket correto no destino. O UDP demultiplexa usando apenas o par (IP de destino, porta de destino) — dois segmentos de origens diferentes com o mesmo destino chegam ao mesmo socket. O TCP demultiplexa por uma QUÁDRUPLA (IP de origem, porta de origem, IP de destino, porta de destino), razão pela qual um servidor web mantém sockets distintos para cada conexão de cada cliente.

10. UDP: protocolo não orientado para conexão, sem handshake prévio, sem controle de congestionamento e sem garantia de entrega ou ordem. Seu cabeçalho tem apenas 8 bytes com quatro campos: porta de origem, porta de destino, comprimento e soma de verificação (checksum). Faz pouco além de multiplexação/demultiplexação e verificação simples de erros. É escolhido quando se prefere controle fino sobre o que é enviado e quando, quando o atraso de estabelecer conexão é inaceitável, ou quando perder um pacote ocasional é melhor que atrasar — daí seu uso em DNS, voz e vídeo em tempo real e jogos. O checksum do UDP é calculado somando as palavras de 16 bits do segmento em complemento de um e tomando o complemento do resultado; o receptor soma tudo e espera obter todos os bits em 1.

11. TRANSFERÊNCIA CONFIÁVEL DE DADOS: construir confiabilidade sobre um canal não confiável exige um conjunto de mecanismos, introduzidos incrementalmente pelos protocolos didáticos rdt1.0 a rdt3.0 e pelos protocolos com paralelismo. CHECKSUM detecta erros de bit. ACK e NAK informam ao remetente o que chegou. NÚMEROS DE SEQUÊNCIA permitem detectar duplicatas — necessários porque um ACK corrompido faria o remetente retransmitir um pacote já entregue. TEMPORIZADOR de retransmissão trata pacotes perdidos, que de outra forma travariam o protocolo para sempre. PARALELISMO (pipelining) resolve o péssimo desempenho do para-e-espera, permitindo vários pacotes em trânsito: GO-BACK-N usa uma janela de pacotes não reconhecidos, ACKs cumulativos e retransmite todos a partir do pacote perdido; REPETIÇÃO SELETIVA reconhece individualmente e retransmite apenas o que faltou, ao custo de bufferizar fora de ordem no receptor.

12. TCP: protocolo orientado para conexão, confiável, com transferência de fluxo de bytes ordenada, full-duplex e ponto a ponto. A conexão é estabelecida por um HANDSHAKE DE TRÊS VIAS: o cliente envia SYN com um número de sequência inicial, o servidor responde SYN-ACK, e o cliente confirma com ACK — só então os dados fluem. O encerramento usa FIN e ACK de cada lado. O cabeçalho TCP tem no mínimo 20 bytes e inclui portas de origem e destino, número de sequência, número de reconhecimento, janela de recepção, checksum e os bits de flag (SYN, ACK, FIN, RST, PSH, URG). Os números de sequência do TCP contam BYTES do fluxo, não segmentos. O TCP usa ACKs CUMULATIVOS: reconhecer o byte N significa que tudo até N-1 chegou. O tempo de estouro do temporizador é estimado dinamicamente a partir da média móvel do RTT (EstimatedRTT) e do seu desvio (DevRTT). RETRANSMISSÃO RÁPIDA: ao receber três ACKs duplicados, o remetente retransmite o segmento suspeito sem esperar o temporizador. CONTROLE DE FLUXO protege o RECEPTOR de ser afogado, por meio da janela de recepção anunciada no cabeçalho — é diferente do controle de congestionamento, que protege a REDE.

13. CONTROLE DE CONGESTIONAMENTO: congestionamento acontece quando fontes demais enviam dados rápido demais para a rede tratar, resultando em filas longas, atrasos crescentes e perda de pacotes; os custos incluem retransmissões desnecessárias e trabalho desperdiçado por pacotes descartados adiante no caminho. O controle pode ser fim a fim (o caso do TCP, que infere congestionamento pela perda) ou assistido pela rede (roteadores sinalizam explicitamente). O TCP mantém uma JANELA DE CONGESTIONAMENTO (cwnd) e opera em fases: PARTIDA LENTA, em que a cwnd começa em 1 MSS e DOBRA a cada RTT — crescimento exponencial, apesar do nome; PREVENÇÃO DE CONGESTIONAMENTO, ao atingir o limiar (ssthresh), em que a cwnd cresce linearmente, cerca de 1 MSS por RTT; e a reação à perda. Na versão Reno, três ACKs duplicados levam a cwnd à metade (recuperação rápida), enquanto o estouro do temporizador — sinal mais grave — reduz a cwnd a 1 MSS e reinicia a partida lenta. Esse padrão de crescer até perder e cair pela metade produz o característico gráfico "dente de serra".

14. CAMADA DE REDE — REPASSE E ROTEAMENTO: a camada de rede tem duas funções que costumam ser confundidas. REPASSE (forwarding) é a ação LOCAL de mover um pacote da interface de entrada para a interface de saída correta de um roteador, consultando a tabela de repasse — acontece em nanossegundos, no plano de dados. ROTEAMENTO é o processo GLOBAL de determinar a rota fim a fim, executado pelos algoritmos e protocolos de roteamento que preenchem aquelas tabelas — acontece em segundos ou minutos, no plano de controle. Redes de DATAGRAMAS, como a Internet, não mantêm estado de conexão nos roteadores e decidem o repasse pelo endereço de destino de cada pacote; redes de CIRCUITOS VIRTUAIS mantêm estado por conexão em cada roteador do caminho. Um roteador é composto por portas de entrada, um elemento de comutação (por memória, por barramento ou por rede de interconexão), portas de saída e o processador de roteamento.

15. IP E ENDEREÇAMENTO: o IPv4 usa endereços de 32 bits, escritos em notação decimal pontuada com quatro octetos. O endereço se divide em porção de REDE e porção de HOSPEDEIRO, e é a MÁSCARA DE SUB-REDE que determina onde fica a fronteira. As classes históricas: A (primeiro octeto 1–127, máscara padrão 255.0.0.0), B (128–191, máscara 255.255.0.0), C (192–223, máscara 255.255.255.0), D (224–239, reservada para multicast) e E (240–255, experimental); a rede 127 é reservada para loopback e testes internos. As faixas privadas da RFC 1918 são 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255 e 192.168.0.0–192.168.255.255 — não roteáveis na Internet pública, usadas atrás de NAT. O endereçamento CLASSFUL foi substituído pelo CIDR, que permite prefixos de qualquer comprimento, escritos como a.b.c.d/x, onde x é o número de bits da porção de rede; o repasse usa a regra do PREFIXO MAIS LONGO. Numa sub-rede, dois endereços nunca são atribuíveis a hospedeiros: o de todos os bits de hospedeiro em 0 (identificador da rede) e o de todos em 1 (broadcast). Daí a fórmula de hospedeiros utilizáveis: 2^n − 2, onde n é o número de bits de hospedeiro; e o número de sub-redes obtidas ao tomar emprestados b bits é 2^b. O DHCP atribui endereços dinamicamente em quatro passos: descoberta, oferta, solicitação e confirmação (DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK). O NAT permite que uma rede inteira use endereços privados atrás de um único IP público, traduzindo o par endereço-porta na saída. O IPv6 responde ao esgotamento do IPv4 com endereços de 128 bits, cabeçalho de tamanho fixo de 40 bytes e sem fragmentação em roteadores intermediários; a transição usa principalmente TUNELAMENTO, encapsulando datagramas IPv6 dentro de datagramas IPv4.

16. ALGORITMOS E PROTOCOLOS DE ROTEAMENTO: algoritmos de ESTADO DE ENLACE, como o Dijkstra, exigem que cada nó conheça o grafo completo da rede — cada roteador difunde o estado de seus enlaces a todos os outros e calcula localmente o caminho mais curto para todos os destinos. Algoritmos de VETOR DE DISTÂNCIAS, baseados em Bellman-Ford, são distribuídos e iterativos: cada nó conhece apenas o custo até seus vizinhos e a estimativa deles para os destinos, trocando vetores periodicamente; sofrem do problema da contagem ao infinito, mitigado por técnicas como o envenenamento reverso. Na Internet, o roteamento é organizado em SISTEMAS AUTÔNOMOS (AS). Dentro de um AS usam-se protocolos INTRA-AS (IGP): o RIP é vetor de distâncias e usa contagem de saltos, o OSPF é estado de enlace e usa Dijkstra. Entre sistemas autônomos usa-se o BGP, protocolo INTER-AS, que é vetor de caminho e decide rotas considerando também POLÍTICA comercial, e não apenas custo técnico — a diferença essencial em relação aos protocolos internos. Roteamento BROADCAST entrega a todos os nós, com técnicas como inundação controlada por número de sequência e árvores de cobertura; MULTICAST entrega a um grupo de interessados, usando IGMP entre hospedeiro e roteador e protocolos como o PIM entre roteadores.

17. AS AVALIAÇÕES E O PROJETO: a turma teve um QUIZ por módulo, aplicado em Google Forms, mais duas avaliações somativas — Av1 sobre os capítulos 1 e 2 e Av2 sobre os capítulos 3 e 4 — e a Av3, um PROJETO DE SOCKETS. As propostas de projeto vinham do site codingchallenges.fyi, e o professor destacou explicitamente o desafio de implementar um LOAD BALANCER, indicando também a apostila de Java da Caelum como material de apoio. O projeto de sockets é a síntese prática da disciplina: implementar comunicação em rede exige entender endereço e porta, escolher entre TCP e UDP com consciência das garantias de cada um, e lidar na prática com conexões, buffers e concorrência. Ferramentas de diagnóstico trabalhadas como material extra: WIRESHARK, analisador que captura e decodifica o tráfego permitindo ver os cabeçalhos de cada camada; PING, que usa mensagens ICMP echo request e echo reply para testar alcançabilidade e medir RTT; e TRACEROUTE, que descobre a rota até o destino manipulando o campo TTL dos pacotes para provocar respostas ICMP de cada roteador do caminho.
`;

export const FRDC_TOPICS: QuizTopicOption[] = [
    {
        value: 'fundamentos',
        label: 'Fundamentos, camadas e desempenho',
        prompt:
            'Fundamentos de redes na disciplina Fundamentos de Redes de Computadores: componentes da Internet (sistemas finais, enlaces, comutadores, ISPs), o que é um protocolo, redes de acesso, meios físicos guiados e não guiados; comutação de pacotes versus comutação de circuitos e a multiplexação por FDM e TDM; os quatro atrasos que formam o atraso nodal (processamento, fila, transmissão L/R e propagação d/s), vazão fim a fim e o enlace gargalo, perda de pacotes por fila cheia; o modelo OSI de sete camadas e a pilha TCP/IP de cinco camadas, encapsulamento e os nomes da unidade de dados em cada camada (mensagem, segmento, datagrama, quadro); a abordagem top-down da disciplina.',
    },
    {
        value: 'aplicacao',
        label: 'Camada de aplicação',
        prompt:
            'Camada de aplicação na disciplina Fundamentos de Redes de Computadores: princípios de aplicações de rede, arquitetura cliente-servidor versus P2P, sockets e a identificação de processos por endereço IP mais número de porta; o protocolo HTTP (sem estado, sobre TCP na porta 80, conexões persistentes e não persistentes, métodos GET/POST/HEAD, códigos de estado 2xx/3xx/4xx/5xx, cookies e caches web); o FTP e suas duas conexões TCP separadas (controle na porta 21 e dados na porta 20, controle fora da banda); correio eletrônico com SMTP na porta 25 para envio e POP3 na 110 ou IMAP na 143 para acesso; e o DNS — base de dados distribuída e hierárquica sobre UDP na porta 53, servidores raiz, TLD e com autoridade, consultas recursivas e iterativas, registros A, AAAA, NS, CNAME e MX, e o papel do cache.',
    },
    {
        value: 'transporte',
        label: 'Camada de transporte',
        prompt:
            'Camada de transporte na disciplina Fundamentos de Redes de Computadores: a extensão da entrega hospedeiro a hospedeiro para entrega processo a processo, multiplexação e demultiplexação, a demultiplexação do UDP por par e a do TCP por quádrupla; UDP não orientado para conexão, cabeçalho de 8 bytes, checksum e quando ele é preferível ao TCP; princípios de transferência confiável de dados (checksum, ACK e NAK, números de sequência, temporizadores, paralelismo, Go-Back-N e repetição seletiva); TCP orientado para conexão, handshake de três vias com SYN, SYN-ACK e ACK, encerramento com FIN, cabeçalho de 20 bytes, números de sequência contando bytes, ACKs cumulativos, estimativa de RTT, retransmissão rápida por três ACKs duplicados e controle de fluxo pela janela de recepção; e controle de congestionamento com janela de congestionamento, partida lenta com crescimento exponencial, prevenção de congestionamento linear, a reação diferente a três ACKs duplicados e a estouro de temporizador, e o gráfico dente de serra.',
    },
    {
        value: 'rede',
        label: 'Camada de rede e roteamento',
        prompt:
            'Camada de rede na disciplina Fundamentos de Redes de Computadores: a diferença entre repasse (ação local, plano de dados) e roteamento (processo global, plano de controle); redes de datagramas versus circuitos virtuais; a arquitetura interna de um roteador; endereçamento IPv4 em 32 bits, máscara de sub-rede, classes A a E e suas máscaras padrão, a rede 127 reservada para loopback, faixas privadas da RFC 1918, CIDR com notação a.b.c.d/x e a regra do prefixo mais longo, o cálculo de 2 elevado a n menos 2 hospedeiros utilizáveis e os endereços de rede e de broadcast não atribuíveis; DHCP em quatro passos, NAT e IPv6 com 128 bits e tunelamento; algoritmos de estado de enlace com Dijkstra e de vetor de distâncias com Bellman-Ford e a contagem ao infinito; sistemas autônomos, RIP e OSPF como protocolos intra-AS, BGP como protocolo inter-AS baseado em política; e roteamento broadcast e multicast.',
    },
    {
        value: 'pratica',
        label: 'Sockets e ferramentas',
        prompt:
            'A parte prática da disciplina Fundamentos de Redes de Computadores: o projeto de sockets da Av3, com propostas vindas do site codingchallenges.fyi e o desafio de implementar um load balancer destacado pelo professor; o que a programação com sockets exige na prática — identificar o processo por endereço IP e porta, escolher entre TCP e UDP conhecendo as garantias de cada um, e lidar com conexões e concorrência; e as ferramentas de diagnóstico trabalhadas como material extra: Wireshark para capturar e decodificar tráfego camada por camada, ping usando ICMP echo request e reply para testar alcançabilidade e medir RTT, e traceroute manipulando o campo TTL para revelar cada roteador da rota.',
    },
];

export const FRDC_EXAMS: ExamDefinition[] = [
    {
        id: 'av1',
        label: 'Av1 — capítulos 1 e 2',
        description:
            'Fundamentos de redes e Internet e camada de aplicação. Cobre os módulos 1 e 2 da turma, cada um com seu quiz próprio.',
    },
    {
        id: 'av2',
        label: 'Av2 — capítulos 3 e 4',
        description:
            'Camada de transporte e camada de rede. Cobre os módulos 3 e 4 da turma, cada um com seu quiz próprio.',
    },
    {
        id: 'av3',
        label: 'Av3 — projeto de sockets',
        description:
            'Projeto prático de programação com sockets, com propostas do codingchallenges.fyi, mais as ferramentas de diagnóstico da disciplina.',
    },
];

export const FRDC_SECTIONS = [
    { id: 'intro', shortTitle: 'Introdução', title: 'Fundamentos de Redes de Computadores' },
    { id: 'camadas', shortTitle: 'Camadas', title: 'Modelos de camadas e encapsulamento', exams: ['av1'] },
    { id: 'comutacao', shortTitle: 'Comutação', title: 'Pacotes, circuitos e multiplexação', exams: ['av1'] },
    { id: 'desempenho', shortTitle: 'Desempenho', title: 'Atrasos, vazão e perda', exams: ['av1'] },
    { id: 'aplicacao', shortTitle: 'Aplicação', title: 'Princípios da camada de aplicação', exams: ['av1'] },
    { id: 'http', shortTitle: 'HTTP', title: 'A Web e o protocolo HTTP', exams: ['av1'] },
    { id: 'ftp-email', shortTitle: 'FTP e e-mail', title: 'FTP e correio eletrônico', exams: ['av1'] },
    { id: 'dns', shortTitle: 'DNS', title: 'O serviço de nomes da Internet', exams: ['av1'] },
    { id: 'transporte', shortTitle: 'Transporte', title: 'Multiplexação e UDP', exams: ['av2'] },
    { id: 'confiavel', shortTitle: 'Confiabilidade', title: 'Transferência confiável de dados', exams: ['av2'] },
    { id: 'tcp', shortTitle: 'TCP', title: 'O protocolo TCP', exams: ['av2'] },
    { id: 'congestionamento', shortTitle: 'Congestionamento', title: 'Controle de congestionamento', exams: ['av2'] },
    { id: 'camada-rede', shortTitle: 'Camada de rede', title: 'Repasse, roteamento e roteadores', exams: ['av2'] },
    { id: 'ip', shortTitle: 'IP', title: 'Endereçamento IP e sub-redes', exams: ['av2'] },
    { id: 'roteamento', shortTitle: 'Roteamento', title: 'Algoritmos e protocolos de roteamento', exams: ['av2'] },
    { id: 'sockets', shortTitle: 'Sockets', title: 'O projeto de sockets e as ferramentas', exams: ['av3'] },
    { id: 'quiz', shortTitle: 'Quiz', title: 'Quiz de Revisão' },
] as const;

export type FrdcSectionId = (typeof FRDC_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['av1'],
        question: 'Quantas camadas tem o modelo OSI e quantas tem a pilha TCP/IP, e onde está a diferença?',
        options: [
            'OSI tem 5 e TCP/IP tem 7; o TCP/IP acrescenta sessão e apresentação',
            'OSI tem 7 e TCP/IP tem 5; o TCP/IP funde sessão, apresentação e aplicação numa só camada de aplicação',
            'Ambos têm 7 camadas, mudam apenas os nomes',
            'OSI tem 4 e TCP/IP tem 5; o OSI não tem camada física',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O OSI é o modelo de referência conceitual; a pilha TCP/IP é o que a Internet realmente implementa. Sessão e apresentação, quando necessárias, ficam a cargo da própria aplicação.',
        feedbackWrong:
            'O OSI tem 7 camadas (física, enlace, rede, transporte, sessão, apresentação, aplicação) e o TCP/IP tem 5 — funde as três superiores numa camada de aplicação única.',
    },
    {
        id: 'q2',
        exams: ['av1'],
        question: 'Como se chama a unidade de dados em cada camada, de cima para baixo?',
        options: [
            'Pacote, quadro, segmento, mensagem',
            'Mensagem (aplicação), segmento (transporte), datagrama ou pacote (rede), quadro (enlace)',
            'Bit, byte, pacote, mensagem',
            'Datagrama em todas as camadas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada nome corresponde ao ponto em que aquela camada acrescentou seu cabeçalho — é o encapsulamento tornando-se visível no vocabulário.',
        feedbackWrong:
            'A ordem é mensagem na aplicação, segmento no transporte, datagrama ou pacote na rede e quadro no enlace. Usar os nomes com precisão evita confusão ao ler capturas do Wireshark.',
    },
    {
        id: 'q3',
        exams: ['av1'],
        question: 'O que é ENCAPSULAMENTO na arquitetura de camadas?',
        options: [
            'Ocultar o endereço IP de origem por segurança',
            'Cada camada acrescentar seu próprio cabeçalho aos dados recebidos da camada acima',
            'Comprimir os dados antes de transmitir',
            'Dividir a mensagem em pacotes de tamanho fixo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Os dados descem a pilha ganhando cabeçalhos e sobem no destino perdendo-os, camada por camada. É o que permite que cada camada leia apenas o que lhe diz respeito.',
        feedbackWrong:
            'Encapsulamento é cada camada acrescentar seu cabeçalho ao que veio de cima. Fragmentar em pacotes é outra coisa, e compressão ou ocultação de endereço são funções específicas, não o princípio geral.',
    },
    {
        id: 'q4',
        exams: ['av1'],
        question: 'Qual é a principal diferença entre comutação de circuitos e comutação de pacotes?',
        options: [
            'A comutação de circuitos é mais moderna e mais rápida',
            'Na de circuitos reserva-se um caminho dedicado com banda garantida; na de pacotes os fluxos disputam os enlaces sem reserva prévia',
            'A comutação de pacotes só funciona em redes locais',
            'A de circuitos usa fibra e a de pacotes usa cobre',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A reserva garante desempenho previsível mas desperdiça recurso ocioso; a disputa aproveita melhor os enlaces ao custo de não garantir atraso nem banda. A Internet escolheu a segunda.',
        feedbackWrong:
            'A diferença é a reserva de recursos: circuitos reservam um caminho dedicado durante toda a conversa, pacotes competem pelos enlaces sem reserva. A telefonia tradicional é o exemplo clássico de circuitos.',
    },
    {
        id: 'q5',
        exams: ['av1'],
        question: 'Qual a diferença entre multiplexação FDM e TDM em redes de comutação de circuitos?',
        options: [
            'FDM divide por frequência, dando a cada circuito uma faixa permanente; TDM divide por tempo, dando a cada circuito toda a banda em intervalos periódicos',
            'FDM é digital e TDM é analógica',
            'FDM só funciona em fibra óptica',
            'São o mesmo mecanismo com nomes diferentes',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Na FDM cada circuito tem sempre uma fração da largura de banda; na TDM cada um tem toda a banda, mas só durante seu intervalo de tempo. Duas formas de dividir o mesmo enlace.',
        feedbackWrong:
            'FDM (divisão de frequência) dá a cada circuito uma faixa permanente do espectro; TDM (divisão de tempo) dá a cada circuito toda a banda em fatias de tempo periódicas.',
    },
    {
        id: 'q6',
        exams: ['av1'],
        question: 'Quais são os quatro componentes do atraso nodal?',
        options: [
            'Processamento, fila, transmissão e propagação',
            'Envio, recebimento, confirmação e retransmissão',
            'Codificação, modulação, transmissão e decodificação',
            'DNS, handshake, transferência e encerramento',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. Somados em cada nó do caminho, eles formam o atraso fim a fim. Apenas o atraso de fila varia significativamente com a carga da rede — os outros três são bem mais estáveis.',
        feedbackWrong:
            'São processamento (examinar o cabeçalho e decidir a saída), fila (esperar a vez), transmissão (empurrar os bits para o enlace) e propagação (atravessar fisicamente o meio).',
    },
    {
        id: 'q7',
        exams: ['av1'],
        question: 'Qual é a diferença entre atraso de TRANSMISSÃO e atraso de PROPAGAÇÃO?',
        options: [
            'São sinônimos usados em contextos diferentes',
            'Transmissão é L/R — tempo de empurrar os bits para o enlace, depende da banda; propagação é d/s — tempo de atravessar o meio, depende da distância',
            'Transmissão depende da distância e propagação depende da banda',
            'Transmissão ocorre só na origem e propagação só no destino',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e essa é a distinção mais confundida da disciplina. Contratar um link mais rápido reduz o atraso de transmissão, mas não muda em nada o tempo que a luz leva para cruzar o oceano.',
        feedbackWrong:
            'Transmissão é L/R (tamanho do pacote ÷ taxa do enlace) e depende da banda; propagação é d/s (distância ÷ velocidade de propagação) e depende da distância. Aumentar a banda não reduz a propagação.',
    },
    {
        id: 'q8',
        exams: ['av1'],
        question: 'Numa cadeia de enlaces entre origem e destino, o que determina a vazão fim a fim?',
        options: [
            'A média das taxas de todos os enlaces',
            'O enlace mais lento do caminho — o gargalo',
            'A taxa do primeiro enlace',
            'A soma das taxas de todos os enlaces',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Como numa mangueira com um trecho estreito, o gargalo comanda. Melhorar qualquer outro enlace não muda a vazão enquanto o gargalo permanecer.',
        feedbackWrong:
            'A vazão fim a fim é limitada pelo enlace MAIS LENTO do caminho. Não é média nem soma: é o mínimo.',
    },
    {
        id: 'q9',
        exams: ['av1'],
        question: 'Por que ocorre PERDA DE PACOTE numa rede de comutação de pacotes?',
        options: [
            'Porque o cabo está com defeito, sempre',
            'Porque o pacote chega a um roteador cuja fila de saída está cheia e é descartado',
            'Porque o TCP decidiu descartá-lo',
            'Porque o endereço de destino não existe',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As filas são finitas: quando enchem, o roteador não tem onde guardar e descarta. É por isso que perda é o sinal que o TCP usa para inferir congestionamento.',
        feedbackWrong:
            'A causa típica é fila cheia no roteador. Como o buffer é finito, o pacote que chega sem espaço disponível é simplesmente descartado.',
    },
    {
        id: 'q10',
        exams: ['av1'],
        question: 'Qual é a vantagem pedagógica da abordagem TOP-DOWN adotada pela disciplina?',
        options: [
            'É mais rápida de ensinar',
            'Começa pela camada de aplicação, que o estudante já usa todo dia, e só então investiga o que a sustenta',
            'Evita ter que estudar a camada física',
            'Segue a ordem em que os protocolos foram inventados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Partir do navegador e do e-mail — coisas familiares — e descer até os bits dá motivação concreta a cada camada nova, em vez de acumular abstrações antes de mostrar para que servem.',
        feedbackWrong:
            'A abordagem top-down começa pelo que é familiar (aplicações que o estudante usa) e desce a pilha. Não é sobre velocidade nem sobre pular camadas.',
    },
    {
        id: 'q11',
        exams: ['av1'],
        question: 'Qual é a diferença entre a arquitetura cliente-servidor e a P2P?',
        options: [
            'P2P é ilegal e cliente-servidor é legal',
            'No cliente-servidor um servidor sempre ligado e de endereço fixo atende clientes que não se comunicam entre si; no P2P os próprios hospedeiros trocam dados diretamente',
            'Cliente-servidor só funciona em redes locais',
            'P2P não usa a camada de transporte',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A propriedade mais interessante do P2P é a escalabilidade: cada novo participante traz capacidade além de demandar serviço, enquanto no cliente-servidor cada novo cliente só acrescenta carga.',
        feedbackWrong:
            'A distinção é estrutural: cliente-servidor concentra o serviço num hospedeiro sempre ligado com endereço fixo; P2P distribui a comunicação entre os próprios pares.',
    },
    {
        id: 'q12',
        exams: ['av1'],
        question: 'O que identifica univocamente o processo de destino de uma comunicação em rede?',
        options: [
            'Apenas o endereço IP do hospedeiro',
            'O endereço IP do hospedeiro MAIS o número da porta do processo',
            'Apenas o número da porta',
            'O endereço MAC da placa de rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O IP leva até a máquina; a porta leva até o processo dentro dela. Sem os dois não há como entregar dados à aplicação certa — é a base da multiplexação da camada de transporte.',
        feedbackWrong:
            'São necessários os dois: o IP identifica o hospedeiro e a porta identifica o processo naquele hospedeiro. O endereço MAC atua na camada de enlace, no salto local.',
    },
    {
        id: 'q13',
        exams: ['av1'],
        question: 'O HTTP é descrito como um protocolo SEM ESTADO. O que isso significa e qual sua consequência?',
        options: [
            'Que ele não usa TCP; a consequência é ser mais rápido',
            'Que o servidor não guarda informação sobre requisições anteriores do cliente; por isso existem os cookies',
            'Que ele não tem códigos de erro',
            'Que a conexão é sempre fechada após cada objeto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada requisição é tratada isoladamente, o que simplifica enormemente o servidor. Os cookies foram criados justamente para reintroduzir a noção de sessão sobre um protocolo que não a tem.',
        feedbackWrong:
            'Sem estado significa que o servidor não memoriza requisições anteriores. Fechar a conexão após cada objeto é característica do HTTP não persistente, coisa distinta.',
    },
    {
        id: 'q14',
        exams: ['av1'],
        question: 'Qual a diferença entre HTTP persistente e não persistente?',
        options: [
            'O persistente usa UDP e o não persistente usa TCP',
            'O não persistente abre uma conexão TCP por objeto e a fecha em seguida; o persistente reaproveita a mesma conexão para vários objetos',
            'O persistente guarda os objetos em cache e o não persistente não',
            'O persistente não usa cookies',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Uma página com dezenas de imagens exigiria dezenas de handshakes TCP no modo não persistente — o modo persistente economiza justamente esses RTTs de estabelecimento.',
        feedbackWrong:
            'A diferença é o reaproveitamento da conexão TCP: não persistente abre e fecha uma por objeto; persistente mantém aberta para vários objetos, poupando handshakes.',
    },
    {
        id: 'q15',
        exams: ['av1'],
        question: 'O que significam as faixas de códigos de estado HTTP 2xx, 3xx, 4xx e 5xx?',
        options: [
            'Informação, sucesso, aviso e erro',
            'Sucesso, redirecionamento, erro do cliente e erro do servidor',
            'Erro do cliente, sucesso, erro do servidor e redirecionamento',
            'Conexão, transferência, encerramento e falha',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Exemplos: 200 OK, 301 Moved Permanently, 304 Not Modified, 404 Not Found e 500 Internal Server Error. A faixa já diz de quem é a responsabilidade pelo problema.',
        feedbackWrong:
            'A ordem é 2xx sucesso, 3xx redirecionamento, 4xx erro do CLIENTE (como o 404) e 5xx erro do SERVIDOR (como o 500).',
    },
    {
        id: 'q16',
        exams: ['av1'],
        question: 'Para que serve um CACHE WEB (servidor proxy)?',
        options: [
            'Criptografar o tráfego entre cliente e servidor',
            'Guardar cópias de objetos já requisitados, reduzindo o tempo de resposta e o tráfego no enlace de saída',
            'Traduzir nomes de domínio em endereços IP',
            'Balancear a carga entre servidores idênticos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e os dois benefícios andam juntos: o usuário recebe mais rápido e a instituição economiza banda no enlace de acesso, que costuma ser o gargalo. O código 304 Not Modified é peça central desse mecanismo.',
        feedbackWrong:
            'O cache web armazena cópias locais de objetos requisitados. Traduzir nomes é função do DNS; balancear carga é função de um load balancer — que, aliás, foi o desafio destacado no projeto da Av3.',
    },
    {
        id: 'q17',
        exams: ['av1'],
        question: 'O FTP usa DUAS conexões TCP. Quais são elas e o que isso caracteriza?',
        options: [
            'Uma para upload e outra para download, ambas na porta 21',
            'Uma de CONTROLE na porta 21, aberta durante toda a sessão, e uma de DADOS na porta 20 — o controle vai FORA DA BANDA',
            'Uma TCP e uma UDP, para redundância',
            'Uma para o cliente e outra para o servidor, ambas na porta 20',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Como comandos e senhas trafegam numa conexão separada dos dados, diz-se que o FTP envia informações de controle fora da banda — ao contrário do HTTP, que manda tudo pela mesma conexão.',
        feedbackWrong:
            'São a conexão de controle (porta 21, aberta a sessão inteira, carregando comandos e senhas) e a de dados (porta 20, aberta por transferência). Isso caracteriza controle fora da banda.',
    },
    {
        id: 'q18',
        exams: ['av1'],
        question: 'Qual a diferença de papel entre SMTP e os protocolos POP3/IMAP no correio eletrônico?',
        options: [
            'SMTP é para anexos e POP3/IMAP para o texto da mensagem',
            'SMTP ENVIA mensagens entre servidores (push, porta 25); POP3 e IMAP permitem ao destinatário BUSCAR mensagens do seu servidor',
            'SMTP é seguro e POP3/IMAP não são',
            'SMTP é usado por webmail e POP3/IMAP por clientes desktop',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O SMTP empurra a mensagem até o servidor do destinatário; para tirá-la de lá é preciso um protocolo de acesso. IMAP (143) mantém mensagens e pastas no servidor; POP3 (110) tradicionalmente baixa e apaga.',
        feedbackWrong:
            'SMTP é o protocolo de ENVIO entre servidores, na porta 25. POP3 e IMAP são protocolos de ACESSO, usados pelo destinatário para recuperar mensagens do seu próprio servidor.',
    },
    {
        id: 'q19',
        exams: ['av1'],
        question: 'Sobre qual protocolo de transporte e em qual porta roda o DNS?',
        options: ['TCP na porta 53', 'UDP na porta 53', 'UDP na porta 25', 'TCP na porta 80'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — UDP na porta 53. A escolha faz sentido: consultas DNS são pequenas e frequentes, e o custo de estabelecer uma conexão TCP superaria o benefício. Se a resposta não vem, simplesmente consulta-se de novo.',
        feedbackWrong:
            'O DNS roda tipicamente sobre UDP na porta 53. A porta 25 é do SMTP e a 80 é do HTTP.',
    },
    {
        id: 'q20',
        exams: ['av1'],
        question: 'Qual é a hierarquia dos servidores DNS?',
        options: [
            'Servidores primários e secundários, apenas',
            'Servidores raiz, servidores de domínio de topo (TLD, como .com e .br) e servidores com autoridade sobre cada organização',
            'Servidores locais e remotos',
            'Um único servidor central mantido pela ICANN',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É uma base de dados DISTRIBUÍDA e hierárquica — um servidor central único jamais suportaria o volume de consultas da Internet nem sobreviveria a uma única falha.',
        feedbackWrong:
            'A hierarquia é raiz → TLD (.com, .br, .org) → servidores com autoridade da organização. O DNS é deliberadamente distribuído, sem ponto central único.',
    },
    {
        id: 'q21',
        exams: ['av1'],
        question: 'Qual a diferença entre uma consulta DNS RECURSIVA e uma ITERATIVA?',
        options: [
            'Recursiva é mais rápida e iterativa é mais segura',
            'Na recursiva o servidor consultado assume a responsabilidade de obter a resposta completa; na iterativa ele apenas indica o próximo servidor a consultar',
            'Recursiva usa TCP e iterativa usa UDP',
            'Recursiva consulta a raiz e iterativa consulta o TLD',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Na prática, o cliente costuma fazer uma consulta recursiva ao servidor local, e este resolve o resto iterativamente, subindo e descendo a hierarquia até obter a resposta.',
        feedbackWrong:
            'Na recursiva, o servidor consultado se encarrega de buscar a resposta final. Na iterativa, ele responde apenas com a referência do próximo servidor a ser consultado.',
    },
    {
        id: 'q22',
        exams: ['av1'],
        question: 'O que faz um registro de recurso DNS do tipo MX?',
        options: [
            'Mapeia um nome para um endereço IPv4',
            'Indica o servidor de CORREIO responsável pelo domínio',
            'Define um apelido para outro nome',
            'Aponta o servidor de nomes com autoridade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O registro A mapeia nome para IPv4, AAAA para IPv6, NS aponta o servidor de nomes, CNAME define apelido — e MX indica para onde enviar o e-mail daquele domínio.',
        feedbackWrong:
            'MX aponta o servidor de correio do domínio. Nome para IPv4 é o registro A; apelido é CNAME; servidor de nomes é NS.',
    },
    {
        id: 'q23',
        exams: ['av2'],
        question: 'Qual é a função essencial da camada de transporte em relação à camada de rede?',
        options: [
            'Escolher a melhor rota até o destino',
            'Estender a entrega HOSPEDEIRO A HOSPEDEIRO do IP para uma entrega PROCESSO A PROCESSO',
            'Converter endereços IP em endereços MAC',
            'Fragmentar pacotes grandes demais para o enlace',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O IP entrega à máquina; a camada de transporte descobre a qual dos muitos processos daquela máquina os dados pertencem. É isso que multiplexação e demultiplexação fazem.',
        feedbackWrong:
            'A camada de transporte estende a entrega hospedeiro a hospedeiro para processo a processo. Escolher rota é camada de rede; resolver MAC é ARP, na camada de enlace.',
    },
    {
        id: 'q24',
        exams: ['av2'],
        question: 'Como o UDP e o TCP diferem na hora de DEMULTIPLEXAR um segmento recebido?',
        options: [
            'Ambos usam apenas a porta de destino',
            'O UDP usa o par (IP de destino, porta de destino); o TCP usa a QUÁDRUPLA (IP e porta de origem, IP e porta de destino)',
            'O UDP usa a quádrupla e o TCP usa o par',
            'O TCP usa o endereço MAC e o UDP usa o IP',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é isso que permite a um servidor web manter sockets separados para cada conexão de cada cliente, todos chegando na porta 80. No UDP, dois remetentes diferentes caem no mesmo socket.',
        feedbackWrong:
            'O UDP demultiplexa pelo par (IP e porta de destino); o TCP pela quádrupla completa, incluindo origem. Por isso o TCP distingue conexões simultâneas de clientes diferentes na mesma porta.',
    },
    {
        id: 'q25',
        exams: ['av2'],
        question: 'Quais são os quatro campos do cabeçalho UDP e qual seu tamanho total?',
        options: [
            'Porta de origem, porta de destino, comprimento e checksum — 8 bytes',
            'Sequência, reconhecimento, janela e checksum — 20 bytes',
            'Origem, destino, TTL e protocolo — 12 bytes',
            'Porta, comprimento, flags e checksum — 16 bytes',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto: apenas 8 bytes. Comparado aos 20 bytes mínimos do TCP, a economia de cabeçalho é parte da razão de existir do UDP — junto com a ausência de handshake e de controle de congestionamento.',
        feedbackWrong:
            'O cabeçalho UDP tem 8 bytes: porta de origem, porta de destino, comprimento e checksum. Os campos de sequência, reconhecimento e janela são do TCP, cujo cabeçalho tem no mínimo 20 bytes.',
    },
    {
        id: 'q26',
        exams: ['av2'],
        question: 'Em que situações escolher UDP em vez de TCP faz sentido?',
        options: [
            'Sempre que a rede for rápida o suficiente',
            'Quando o atraso de estabelecer conexão é inaceitável e perder um pacote ocasional é melhor que atrasar — voz e vídeo em tempo real, jogos, DNS',
            'Quando é essencial que nenhum dado se perca',
            'Apenas em redes locais isoladas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Numa chamada de voz, retransmitir um trecho perdido entregaria áudio velho e inútil — melhor seguir adiante. A aplicação decide o que fazer com a perda, em vez de o transporte decidir por ela.',
        feedbackWrong:
            'UDP é escolhido quando latência importa mais que entrega garantida, e quando a aplicação quer controle fino sobre o envio. Se nenhum dado pode se perder, o TCP é a escolha.',
    },
    {
        id: 'q27',
        exams: ['av2'],
        question: 'Por que são necessários NÚMEROS DE SEQUÊNCIA num protocolo de transferência confiável?',
        options: [
            'Para ordenar os pacotes alfabeticamente',
            'Para o receptor detectar DUPLICATAS — um ACK corrompido faria o remetente retransmitir algo já entregue',
            'Para calcular o checksum',
            'Para identificar o processo de destino',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É um raciocínio sutil: sem numeração, o receptor não teria como saber se aquele pacote é novo ou a retransmissão de algo que ele já entregou à aplicação — e entregaria duas vezes.',
        feedbackWrong:
            'Números de sequência existem para detectar duplicatas (e ordenar a entrega). O problema aparece quando um ACK se corrompe: o remetente retransmite, e sem numeração o receptor duplicaria o dado.',
    },
    {
        id: 'q28',
        exams: ['av2'],
        question: 'Qual a diferença entre Go-Back-N e Repetição Seletiva?',
        options: [
            'Go-Back-N é para TCP e Repetição Seletiva para UDP',
            'Go-Back-N usa ACKs cumulativos e retransmite TODOS os pacotes a partir do perdido; a Repetição Seletiva reconhece individualmente e retransmite APENAS o que faltou',
            'Go-Back-N não usa janela e a Repetição Seletiva usa',
            'A Repetição Seletiva é mais simples de implementar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A Repetição Seletiva é mais eficiente no uso do enlace, mas exige que o receptor bufferize pacotes fora de ordem — troca-se simplicidade por eficiência.',
        feedbackWrong:
            'Go-Back-N retransmite tudo a partir do pacote perdido, usando ACKs cumulativos. A Repetição Seletiva reconhece cada pacote individualmente e retransmite só o que faltou, ao custo de bufferizar no receptor.',
    },
    {
        id: 'q29',
        exams: ['av2'],
        question: 'Como funciona o handshake de três vias do TCP?',
        options: [
            'O cliente envia SYN, o servidor responde SYN-ACK, o cliente confirma com ACK — só então os dados fluem',
            'O cliente envia ACK, o servidor responde SYN, o cliente envia FIN',
            'Ambos enviam SYN simultaneamente e trocam dados em seguida',
            'O servidor envia SYN primeiro, o cliente responde com dados',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. As três vias servem para os dois lados combinarem seus números de sequência iniciais e confirmarem que ambos podem enviar e receber — antes de qualquer byte de dado.',
        feedbackWrong:
            'A sequência é SYN (cliente) → SYN-ACK (servidor) → ACK (cliente). O FIN pertence ao encerramento da conexão, não ao estabelecimento.',
    },
    {
        id: 'q30',
        exams: ['av2'],
        question: 'Os números de sequência do TCP contam o quê?',
        options: ['Segmentos enviados', 'BYTES do fluxo de dados', 'Pacotes IP', 'Milissegundos desde o início'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O TCP enxerga a comunicação como um fluxo contínuo de bytes, não como uma sequência de mensagens — e é por isso que a aplicação não pode contar com preservação de fronteiras de mensagem no TCP.',
        feedbackWrong:
            'Contam BYTES do fluxo. Essa é uma característica definidora do TCP: ele é orientado a fluxo de bytes, não a mensagens.',
    },
    {
        id: 'q31',
        exams: ['av2'],
        question: 'O que é um ACK CUMULATIVO no TCP?',
        options: [
            'Um ACK que reconhece vários segmentos individualmente listados',
            'Reconhecer o byte N significa que TUDO até N-1 chegou corretamente',
            'Um ACK enviado apenas ao final da transferência',
            'A soma de todos os ACKs de uma janela',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Uma consequência prática: se um ACK se perder mas o seguinte chegar, o remetente já sabe que tudo até ali foi entregue — o ACK posterior cobre o anterior.',
        feedbackWrong:
            'ACK cumulativo significa que reconhecer o byte N confirma tudo até N-1. É o que torna o protocolo robusto à perda de ACKs isolados.',
    },
    {
        id: 'q32',
        exams: ['av2'],
        question: 'O que dispara a RETRANSMISSÃO RÁPIDA no TCP?',
        options: [
            'O estouro do temporizador',
            'O recebimento de TRÊS ACKs duplicados, indicando que um segmento provavelmente se perdeu',
            'Um pedido explícito do receptor',
            'A janela de recepção chegar a zero',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Três ACKs duplicados mostram que segmentos posteriores estão chegando — logo, a rede não parou, só um segmento se perdeu. Retransmitir imediatamente evita esperar o temporizador inteiro.',
        feedbackWrong:
            'São três ACKs duplicados. O estouro do temporizador também causa retransmissão, mas é o mecanismo lento — a retransmissão rápida existe justamente para não esperar por ele.',
    },
    {
        id: 'q33',
        exams: ['av2'],
        question: 'Qual a diferença entre CONTROLE DE FLUXO e CONTROLE DE CONGESTIONAMENTO no TCP?',
        options: [
            'São dois nomes para o mesmo mecanismo',
            'O controle de fluxo protege o RECEPTOR de ser afogado (janela de recepção); o de congestionamento protege a REDE',
            'O controle de fluxo protege a rede e o de congestionamento protege o receptor',
            'O controle de fluxo só existe no UDP',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é a distinção mais cobrada do capítulo. Um receptor rápido numa rede congestionada, ou um receptor lento numa rede vazia, mostram que os dois problemas são independentes e precisam de mecanismos separados.',
        feedbackWrong:
            'Controle de FLUXO protege o receptor, via janela de recepção anunciada no cabeçalho. Controle de CONGESTIONAMENTO protege a rede, via janela de congestionamento inferida da perda.',
    },
    {
        id: 'q34',
        exams: ['av2'],
        question: 'Na fase de PARTIDA LENTA do TCP, como cresce a janela de congestionamento?',
        options: [
            'Linearmente, 1 MSS por RTT',
            'Exponencialmente — começa em 1 MSS e DOBRA a cada RTT, apesar do nome',
            'Permanece constante até a primeira perda',
            'Cai pela metade a cada RTT',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e o nome engana: "lenta" refere-se ao ponto de PARTIDA (1 MSS, bem baixo), não ao ritmo de crescimento, que é exponencial. O crescimento linear é da fase de prevenção de congestionamento.',
        feedbackWrong:
            'A partida lenta é EXPONENCIAL: dobra a cada RTT. O nome se refere ao valor inicial baixo (1 MSS), não à taxa de crescimento. O crescimento linear ocorre na prevenção de congestionamento.',
    },
    {
        id: 'q35',
        exams: ['av2'],
        question: 'Por que o TCP reage de forma DIFERENTE a três ACKs duplicados e a um estouro de temporizador?',
        options: [
            'Por acaso histórico, sem razão técnica',
            'Porque três ACKs duplicados mostram que a rede ainda entrega pacotes (corta a janela pela metade), enquanto o estouro sugere problema grave (janela vai a 1 MSS e reinicia a partida lenta)',
            'Porque o temporizador é menos confiável',
            'Porque os ACKs duplicados só ocorrem em redes locais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O TCP lê a gravidade do sinal: se ACKs continuam chegando, a rede está viva e a reação é moderada; se nada volta, algo sério aconteceu e a reação é drástica.',
        feedbackWrong:
            'A diferença é a gravidade inferida: ACKs duplicados indicam rede funcionando com perda pontual (reação moderada, janela pela metade); o estouro do temporizador indica falha severa (janela a 1 MSS e partida lenta).',
    },
    {
        id: 'q36',
        exams: ['av2'],
        question: 'Qual a diferença entre REPASSE (forwarding) e ROTEAMENTO?',
        options: [
            'São sinônimos',
            'Repasse é a ação LOCAL de mover o pacote da entrada para a saída correta de um roteador; roteamento é o processo GLOBAL de determinar a rota fim a fim',
            'Repasse é global e roteamento é local',
            'Repasse ocorre no TCP e roteamento no IP',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Repasse acontece em nanossegundos, no plano de dados, consultando a tabela; roteamento acontece em segundos ou minutos, no plano de controle, PREENCHENDO aquela tabela.',
        feedbackWrong:
            'Repasse é a ação local dentro do roteador (plano de dados); roteamento é o processo global que calcula as rotas e preenche as tabelas de repasse (plano de controle).',
    },
    {
        id: 'q37',
        exams: ['av2'],
        question: 'Qual a diferença entre uma rede de DATAGRAMAS e uma de CIRCUITOS VIRTUAIS?',
        options: [
            'Datagramas usam fibra e circuitos virtuais usam cobre',
            'Redes de datagramas não mantêm estado de conexão nos roteadores e repassam pelo endereço de destino; circuitos virtuais mantêm estado por conexão em cada roteador do caminho',
            'Circuitos virtuais não existem na prática',
            'Datagramas garantem ordem de entrega e circuitos virtuais não',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A Internet é rede de datagramas — cada pacote é roteado independentemente, o que a torna robusta a falhas: se um roteador cai, os pacotes seguintes simplesmente tomam outro caminho.',
        feedbackWrong:
            'A diferença é a manutenção de estado: datagramas decidem pelo endereço de destino de cada pacote, sem estado nos roteadores; circuitos virtuais estabelecem e mantêm estado por conexão.',
    },
    {
        id: 'q38',
        exams: ['av2'],
        question: 'Quais são as máscaras padrão das classes A, B e C, e o que está reservado na rede 127?',
        options: [
            '255.0.0.0, 255.255.0.0 e 255.255.255.0; a rede 127 é reservada para loopback e testes internos',
            '255.255.255.0, 255.255.0.0 e 255.0.0.0; a rede 127 é para multicast',
            'Todas usam 255.255.255.0; a rede 127 é experimental',
            '255.0.0.0, 255.255.0.0 e 255.255.255.0; a rede 127 é uma faixa privada',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. Classe A vai de 1 a 127 com máscara 255.0.0.0, B de 128 a 191 com 255.255.0.0 e C de 192 a 223 com 255.255.255.0. Multicast é a classe D (224–239) e experimental é a E (240–255).',
        feedbackWrong:
            'A ordem correta é A = 255.0.0.0, B = 255.255.0.0 e C = 255.255.255.0. A rede 127 é o loopback (127.0.0.1 é o "localhost"), não multicast nem faixa privada.',
    },
    {
        id: 'q39',
        exams: ['av2'],
        question: 'Quais são as três faixas de endereços privados definidas pela RFC 1918?',
        options: [
            '10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16',
            '10.0.0.0/8, 127.0.0.0/8 e 192.168.0.0/16',
            '1.0.0.0/8, 172.0.0.0/8 e 192.0.0.0/16',
            '10.0.0.0/8, 224.0.0.0/4 e 192.168.0.0/16',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255 e 192.168.0.0–192.168.255.255. Não são roteáveis na Internet pública — por isso vivem atrás de NAT.',
        feedbackWrong:
            'São 10.0.0.0/8, 172.16.0.0/12 (ou seja, 172.16 até 172.31) e 192.168.0.0/16. A 127 é loopback e a 224 é multicast — nenhuma das duas é faixa privada.',
    },
    {
        id: 'q40',
        exams: ['av2'],
        question: 'Numa sub-rede com n bits de hospedeiro, quantos endereços são utilizáveis e por quê?',
        options: [
            '2 elevado a n, todos utilizáveis',
            '2 elevado a n, menos 2 — o endereço de todos os bits em 0 identifica a rede e o de todos em 1 é o broadcast',
            '2 elevado a n, menos 1 — apenas o broadcast é reservado',
            'n vezes 2, menos o gateway',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: 2^n − 2. Uma sub-rede /24 tem 8 bits de hospedeiro, logo 256 endereços e 254 utilizáveis. Os dois reservados são o identificador da rede e o endereço de broadcast.',
        feedbackWrong:
            'A fórmula é 2^n − 2. Dois endereços nunca são atribuíveis a hospedeiros: todos os bits de hospedeiro em 0 (identifica a rede) e todos em 1 (broadcast).',
    },
    {
        id: 'q41',
        exams: ['av2'],
        question: 'Qual a diferença essencial entre os algoritmos de ESTADO DE ENLACE e de VETOR DE DISTÂNCIAS?',
        options: [
            'Estado de enlace só funciona em redes pequenas',
            'No estado de enlace cada nó conhece o grafo COMPLETO e calcula localmente (Dijkstra); no vetor de distâncias cada nó conhece só os vizinhos e troca estimativas iterativamente (Bellman-Ford)',
            'Vetor de distâncias é centralizado e estado de enlace é distribuído',
            'Estado de enlace usa BGP e vetor de distâncias usa OSPF',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O OSPF é estado de enlace (Dijkstra) e o RIP é vetor de distâncias (Bellman-Ford). O vetor de distâncias sofre do problema da contagem ao infinito, mitigado por técnicas como o envenenamento reverso.',
        feedbackWrong:
            'Estado de enlace: visão global do grafo, cálculo local com Dijkstra (OSPF). Vetor de distâncias: visão apenas dos vizinhos, cálculo distribuído e iterativo com Bellman-Ford (RIP).',
    },
    {
        id: 'q42',
        exams: ['av2'],
        question: 'Por que o BGP considera POLÍTICA, e não apenas custo técnico, ao escolher rotas?',
        options: [
            'Porque é mais simples de implementar assim',
            'Porque é o protocolo INTER-AS: rotas entre sistemas autônomos envolvem relações comerciais e acordos entre operadoras, não só a menor distância',
            'Porque não existe forma de medir custo entre AS',
            'Porque o BGP é um protocolo experimental',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e essa é a diferença essencial entre o BGP e os protocolos intra-AS. Dentro de um AS, uma única administração busca eficiência técnica; entre AS, cada operadora decide por quem quer ou não encaminhar tráfego.',
        feedbackWrong:
            'O BGP é inter-AS e precisa acomodar relações comerciais entre operadoras — um AS pode recusar-se a transportar tráfego de terceiros mesmo tendo o caminho mais curto. RIP e OSPF, intra-AS, otimizam só o custo técnico.',
    },
    {
        id: 'q43',
        exams: ['av3'],
        question: 'O que é um SOCKET na programação de rede?',
        options: [
            'Um cabo físico de conexão',
            'A interface entre a aplicação e a camada de transporte — a porta por onde o processo envia e recebe dados',
            'Um tipo de servidor web',
            'O endereço MAC da placa de rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É a abstração que torna a rede programável: a aplicação escreve e lê no socket, e a pilha de protocolos cuida do resto. Foi essa API que permitiu a explosão de aplicações sem mudar a infraestrutura.',
        feedbackWrong:
            'Socket é a interface entre a aplicação e a camada de transporte — o ponto por onde o processo envia e recebe dados pela rede.',
    },
    {
        id: 'q44',
        exams: ['av3'],
        question: 'Como o PING testa a alcançabilidade de um host?',
        options: [
            'Abrindo uma conexão TCP na porta 80',
            'Enviando mensagens ICMP echo request e aguardando echo reply, medindo o RTT',
            'Consultando o DNS repetidamente',
            'Enviando pacotes UDP com TTL crescente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O ping usa ICMP, um protocolo da própria camada de rede, e mede o tempo de ida e volta. A última alternativa descreve o traceroute, não o ping.',
        feedbackWrong:
            'O ping usa ICMP echo request e echo reply. Enviar pacotes com TTL crescente é a técnica do TRACEROUTE, para descobrir cada roteador da rota.',
    },
    {
        id: 'q45',
        exams: ['av3'],
        question: 'Como o TRACEROUTE descobre os roteadores do caminho até o destino?',
        options: [
            'Consultando as tabelas de repasse de cada roteador remotamente',
            'Manipulando o campo TTL: envia pacotes com TTL 1, 2, 3… e cada roteador que zera o TTL devolve uma mensagem ICMP identificando-se',
            'Perguntando ao servidor DNS a rota completa',
            'Enviando um broadcast para toda a rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — é um uso engenhoso de um campo criado para outro fim. O TTL existe para evitar que pacotes circulem para sempre em loops; o traceroute o explora para fazer cada roteador do caminho se revelar.',
        feedbackWrong:
            'O traceroute manipula o TTL: com TTL 1 o primeiro roteador o descarta e responde; com TTL 2, o segundo; e assim por diante, revelando a rota salto a salto.',
    },
    {
        id: 'q46',
        exams: ['av3'],
        question: 'Para que serve o WIRESHARK no estudo de redes?',
        options: [
            'Para configurar roteadores remotamente',
            'Para capturar e decodificar o tráfego, permitindo ver os cabeçalhos de cada camada nos pacotes reais',
            'Para simular uma topologia de rede sem hardware',
            'Para medir a velocidade da conexão de internet',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é o que torna a teoria das camadas verificável. Dá para abrir um pacote real e ver o cabeçalho Ethernet, dentro dele o IP, dentro dele o TCP e, por fim, o HTTP: o encapsulamento na prática.',
        feedbackWrong:
            'O Wireshark é um analisador de tráfego: captura pacotes e decodifica seus cabeçalhos camada por camada. Simular topologia sem hardware é função de ferramentas como o Packet Tracer.',
    },
];
