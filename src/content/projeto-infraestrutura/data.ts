import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const INFR_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROJETO DE INFRAESTRUTURA (INFR) - Resumo:

1. A DISCIPLINA: projeto de infraestrutura de redes, conduzida de forma intensiva em janeiro de 2026 pelo Prof. Wellington Pereira, combinando aulas presenciais no laboratório, encontros online, cursos EAD da Cisco NetAcad, uma visita técnica a distribuidora (MixSeg) e atividades práticas em equipe. O fio condutor é sempre o mesmo: partir de um CENÁRIO REAL com restrições (orçamento, ambiente hostil, prédio tombado, zona rural) e chegar a um projeto justificado — não decorar tabelas, mas escolher a tecnologia certa para o problema apresentado e defender a escolha.

2. NORMAS DE CABEAMENTO ESTRUTURADO: as normas definem como os cabos devem ser instalados, quais conectores usar e quais as distâncias máximas. ABNT NBR 14565 (Brasil) é a principal norma brasileira, padroniza cabeamento estruturado para edifícios comerciais e data centers. ANSI/TIA-568 (EUA) é a mais famosa no mundo — define as categorias (Cat5e, Cat6, Cat6a) e a pinagem T568A/T568B. ISO/IEC 11801 (global) define classes de desempenho (Classe D, E, EA) para garantir interoperabilidade entre fabricantes. ANSI/TIA-569 trata de rotas (eletrodutos, calhas, canaletas) e espaços (salas de telecomunicações e de equipamentos), especificando o raio de curvatura dos cabos para evitar quebra da fibra ou perda de sinal no cobre. NBR 16415 é a norma brasileira de caminhos e espaços. ANSI/TIA-606 estabelece rotulagem e identificação de cabos, racks, tomadas e portas, com códigos de cores (azul para estações de trabalho, branco para backbone) — uma rede sem identificação é um pesadelo de manutenção. ANSI/TIA-607 trata de aterramento (grounding) e equipotencialização (bonding) de telecomunicações; ABNT NBR 5410 cobre instalações elétricas de baixa tensão. ANSI/TIA-942 define os níveis de confiabilidade de data centers (Tiers 1 a 4), olhando não só o cabo mas a redundância de energia, a climatização e a segurança física.

3. DISTÂNCIAS E LIMITES DA TIA-568 (a tabela que precisa estar na cabeça): cabo horizontal 90 metros — do rack até a tomada na parede, o segmento mais extenso do prédio; patch cords somados 10 metros — cordões de manobra no rack e na estação; canal total 100 metros fim-a-fim em cobre. O cabo horizontal conecta as tomadas de parede das áreas de trabalho aos equipamentos centrais (racks, switches) da sala de telecomunicações, geralmente no mesmo andar. Estourar 90 metros é o problema clássico do galpão de 120 metros de fundo, que exige repensar a posição da sala de TI, usar um ponto de distribuição intermediário ou migrar para fibra.

4. CATEGORIAS DE CABO DE PAR TRANÇADO: a frequência, medida em MHz, indica a largura de banda — a metáfora do material é a "largura da estrada": mais MHz, mais dados simultâneos e menos crosstalk. Cat1, Cat2 e Cat4 não são mais reconhecidas pela TIA. Cat3 foi o primeiro padrão feito para redes, certificado até 16 MHz. Cat5e é UTP, suporta 1 Gbps, é a mais difundida. Cat6 trabalha a 250 MHz, entrega 1 Gbps com folga e 10 Gbps apenas em distâncias curtas — até 55 metros; é a escolha típica quando o foco é PoE. Cat6a suporta 500 MHz e 10 Gbps em até 100 metros, com blindagem interna. Cat7 é blindado S/FTP, ISO/IEC Classe F, 600 MHz, 10 Gbps em 100 metros, com conectores TERA ou GG45. Cat8 chega a 25/40 Gbps e 2000 MHz, é necessariamente blindado e serve data centers em distâncias curtas, até 30 metros. ATENÇÃO: o material da turma apresenta Cat5e ora como 100 MHz ora como "até 125 MHz" em slides diferentes — divergência do próprio material.

5. BLINDAGENS E INTERFERÊNCIA: EMI (interferência eletromagnética) vem de motores, iluminação fluorescente e cabos elétricos próximos; a blindagem age como escudo. FTP (F/UTP) tem uma única folha de alumínio envolvendo os quatro pares não blindados — eficaz contra interferência externa. STP, em definições mais precisas (U/FTP ou S/FTP), tem blindagem de malha ou folha ao redor de CADA par individualmente, oferecendo proteção superior contra crosstalk entre os próprios pares. SFTP/SSTP é praticamente FTP e STP juntos: blindagem por par MAIS uma segunda blindagem externa cobrindo todos — indicado para ambientes de interferência extrema. Cabos blindados EXIGEM aterramento adequado nas extremidades para que a blindagem funcione; sem aterramento, a blindagem não cumpre função. CROSSTALK (diafonia) é a interferência de um canal de transmissão no canal vizinho por acoplamento eletromagnético, "vazando" sinal de um para o outro e degradando a informação. Em redes 10GBASE-T a blindagem é o que garante integridade do sinal e suprime crosstalk nas frequências altas.

6. PINAGEM T568A E T568B: T568A é Verde/Branco, Verde, Laranja/Branco, Azul, Azul/Branco, Laranja, Marrom/Branco, Marrom. T568B é Laranja/Branco, Laranja, Verde/Branco, Azul, Azul/Branco, Verde, Marrom/Branco, Marrom — repare que T568B troca os pares verde e laranja em relação ao T568A, mantendo azul e marrom nas mesmas posições. T568B é o mais utilizado comercialmente hoje. Usar o MESMO padrão nas duas pontas produz um cabo direto; usar A numa ponta e B na outra produz um crossover, hoje raro porque as placas fazem detecção automática (Auto-MDIX).

7. OUTRAS MÍDIAS: fibra óptica transmite por luz (pulsos de laser ou LED) e é essencial para alta velocidade, longas distâncias e imunidade a ruído — FTTH e data centers; é a resposta natural para interligar galpões com motores. Cabo coaxial tem fio de cobre condutor revestido por isolante e envolvido por blindagem, usa conector BNC; caiu em desuso por mau contato, conectores caros e pouca flexibilidade, sobrevivendo em redes antigas (10BASE2/10BASE5) e importa hoje para entender a evolução.

8. OS TRÊS CENÁRIOS-CLIENTE DA AULA (o coração do método): (a) ESCRITÓRIO DE DESIGN E ARQUITETURA — transferem renderizações 3D e vídeo 4K para um NAS central; necessidade principal é largura de banda alta e baixa latência; solução: roteador Dual-WAN (dois links redundantes), switch gerenciável 10GbE e servidor NAS; cabeamento Cat6a. NAS (Network Attached Storage) é armazenamento centralizado conectado à rede para múltiplos usuários acessarem, compartilharem e fazerem backup. (b) HOTEL DE MÉDIO PORTE — centenas de hóspedes com celulares e notebooks em vários andares; necessidade é cobertura Wi-Fi estável, isolamento de rede (hóspede não vê dados do hotel) e suporte a muitos acessos; solução: gateway/firewall para controle de banda, switch PoE para alimentar os APs pelo próprio cabo de rede (elimina tomadas no teto) e vários Access Points Wi-Fi 6 com Mesh ou Roaming para o cliente não desconectar ao andar; cabeamento Cat6, que entrega 1 Gbps com folga e é ideal para PoE. (c) PLANTA INDUSTRIAL — galpões imensos com máquinas gerando EMI e escritórios distantes; necessidade é imunidade a ruído elétrico e conexão de longa distância entre blocos; solução: switch industrial com carcaça reforçada para altas temperaturas e poeira, e conversores de mídia para transformar sinal elétrico em luz; cabeamento de fibra monomodo ou multimodo entre galpões e Cat7/Cat8 S/FTP junto às máquinas.

9. ACCESS POINT × ROTEADOR: o roteador é o "cérebro" que gerencia a conexão, atribui IPs e distribui a internet — usa-se para criar uma rede nova do zero ou substituir a existente, ideal para casa e pequenas empresas. O Access Point apenas estende e melhora o sinal Wi-Fi a partir de uma rede CABEADA já existente, eliminando zonas mortas em grandes espaços ou ambientes com muitos dispositivos. A diferença está na inteligência e na função: o roteador gerencia, o AP irradia.

10. ONU, ONT E CONVERSOR DE MÍDIA: ONU (Optical Network Unit) é o termo mais genérico para um conversor de sinal óptico para elétrico. ONT (Optical Network Terminal) é um tipo específico de ONU que fica na casa do cliente e geralmente já integra roteador Wi-Fi e portas LAN — é o "modem" da fibra. Conversor de mídia (ou transceptor óptico) é uma ferramenta mais ampla para conectar tipos diferentes de cabo (fibra para cobre), sem o foco residencial de triple play.

11. AS CINCO ETAPAS DO PROJETO DE REDES (a agenda da disciplina): (1) LEVANTAMENTO DE REQUISITOS — identificar as necessidades do negócio com clareza, entender os objetivos estratégicos e avaliar expectativas de performance e disponibilidade; mapear usuários, aplicações e tráfego esperado; analisar restrições técnicas (infraestrutura existente) e orçamentárias, que definem o escopo e as escolhas viáveis. (2) PROJETO LÓGICO — definir a topologia, que determina o caminho dos dados e afeta escalabilidade, desempenho e manutenção; selecionar protocolos, serviços essenciais e o esquema de endereçamento IP; planejar segurança e redundância, que juntas elevam a confiabilidade. (3) PROJETO FÍSICO — escolher equipamentos (switches, roteadores, servidores) e a infraestrutura que os suporta; distribuir cabeamento e pontos de acesso planejando cobertura, minimizando interferências e facilitando expansão futura; prever ambiente e condições operacionais (temperatura, umidade, espaço físico). (4) TESTES DE IMPLEMENTAÇÃO E VALIDAÇÃO — testes de conectividade, verificação de velocidade, latência, capacidade e segurança, e correção de falhas antes do uso final. (5) DOCUMENTAÇÃO TÉCNICA — registrar requisitos e decisões tomadas (transparência, revisões e auditorias), criar diagramas de arquitetura e manuais de operação, e definir procedimentos de manutenção e atualização.

12. O PROJETO CONVERGENTE DO IFAL (Atividade 01, 50 questões): cabeamento estruturado para blocos acadêmicos, administrativos e áreas comuns do Campus Maceió, com backbone de 10 Gbps, telefonia IP, câmeras 4K e automação predial. Densidades declaradas: 4 pontos de rede por sala de aula e 40 pontos por laboratório de informática; monitoramento IP em todos os corredores e áreas externas; sensores de presença e controle de iluminação via rede nos auditórios. Temas cobrados: PoE++ (802.3bt) e por que exige Cat6a; F/UTP × S/FTP e o NEXT em ambiente com motores; cabos CCA (Copper Clad Aluminum) e por que não servem para PoE em câmeras PTZ; dispersão modal em fibra multimodo; perda máxima por emenda de fusão; patch cords LSZH (baixa fumaça e zero halogênio) em áreas de circulação; aterramento de rack conforme TIA-607; cálculo de unidades de rack (U) para 240 pontos com organizador 1U por patch panel de 24 portas; separação mínima entre cabo de rede e cabo de energia; taxa de preenchimento de conduítes em curvas de 90 graus (TIA-569); Zona de Fresnel em enlace de 200 m a 5 GHz; MIMO do Wi-Fi 6 contra multipercurso; largura de banda de câmera 4K H.265 a 30 fps; backplane do switch para 50 câmeras; VLANs de voz e vídeo contra jitter; PoE Budget (um switch de 370 W sustenta 24 câmeras de 15,4 W?); MQTT × HTTP para sensores; proteção contra Mirai em IoT; certificador Fluke DSX × testador de continuidade; PS-NEXT; TIA-606-B; Return Loss e o efeito de curvas acentuadas; destrançar no máximo 13 mm na terminação do keystone; SIP, MOS e jitter buffer na telefonia; topologia estrela estendida; failover com BGP ou Dual-WAN; STP contra loops; LACP e o ganho real de banda; SD-WAN entre campi; patch panels de alta densidade; CM × CMP (plenum) em incêndio; VLAN trunking 802.1Q; função do ODF; alien crosstalk e aterramento da blindagem; e descarte ecológico de cabos Cat5 substituídos.

13. OS TRÊS GALPÕES DE 8.400 m² (atividade presencial, equipes de até 8): (a) CENTRO DE DISTRIBUIÇÃO com 10 corredores de 100 metros e estantes como barreira física, sala de TI no canto (0,0), 10 câmeras + 20 APs no teto + 20 pontos nas docas; o desafio é levar Wi-Fi até o fim do corredor a 120 metros sem que o coletor de dados perca a conexão ao trocar de corredor — problema de roaming, não de potência. (b) FÁBRICA INDÚSTRIA 4.0 com 4 linhas de produção paralelas e administrativo a 120 metros, sala de TI na lateral para reduzir a distância média dos cabos, 30 pontos de CLP + 10 APs industriais + 10 de supervisão; o desafio é atravessar o teto da fábrica sem sofrer a interferência dos motores. (c) ESTÚDIO DE EVENTOS com vão livre, 4 colunas centrais e palco a 70 metros, sala de TI no backstage, 20 APs de alta densidade + 15 pontos de piso + 15 de imprensa; o desafio é 500 pessoas conectadas simultaneamente e a ausência de paredes internas para fixar tomadas — daí caixas de piso e colunas retráteis. Requisitos obrigatórios para todos: cabeamento Cat6A ou superior que passe em certificação (Fluke ou similar), Wi-Fi com roaming em 120 metros, sala de TI com climatização redundante e nobreak que monitore temperatura e umidade, dois links de internet (primário + backup) com IP público para VPN, e definição das passagens de infraestrutura. Questões em aberto propostas: Wi-Fi 6 (802.11ax) ou Wi-Fi 7 e como MU-MIMO e OFDMA ajudam na densidade; 802.3at ou 802.3bt para alimentar câmeras, APs e automação simultaneamente; por que o site survey é indispensável e como a atenuação de metal e concreto muda o projeto; o que fazer quando o Cat6A ultrapassa os 90 metros do canal; switches gerenciáveis L2/L3 em vez de hubs; LSZH × CM/CMR contra incêndio; backup local ou nuvem; VLAN separando automação da administração; e a altura máxima de instalação dos APs para o sinal chegar ao chão sem reflexão excessiva.

14. OS QUATRO ESTUDOS DE CASO DA V2 (equipes de até 3): (a) METALÚRGICA 24/7 — o ERP trava aleatoriamente, a rede passa nos testes sintéticos de ping e iperf, a falha é intermitente entre 10h e 14h e o SNMP não mostra saturação; o log do switch traz Gi0/1 (uplink) com zero erros, Gi0/5 (RH/Financeiro) com 450.000 FCS-Err e 120.000 Alignment-Err, e Gi0/12 (servidor ERP) com 12 erros; a pista está no fim do enunciado: a empresa instalou painéis solares no telhado do galpão de TI e trocou as lâmpadas fluorescentes por LEDs industriais baratos. É um problema de CAMADA 1 — interferência eletromagnética corrompendo quadros —, e o desafio adicional é diagnosticar sem comprar um certificador de R$ 50 mil, porque o CEO proibiu compras antes do diagnóstico. (b) PRÉDIO TOMBADO virando centro de diagnóstico por imagem: proibido furar paredes ou usar calhas aparentes em 60% das salas; os aparelhos de ressonância magnética geram interferência massiva e precisam enviar arquivos DICOM de gigabytes instantaneamente; e as paredes de 60 cm de pedra e cal bloqueiam Wi-Fi. (c) SHADOW IT em campus universitário: Engenharia (1.200 m², 8 laboratórios e 4 salas, 150 alunos por turno, 450 dispositivos), Artes Visuais (800 m², 5 ateliês e 2 galerias, 80 alunos, 200 dispositivos com alta carga de upload) e Administração (250 m², 6 salas, 20 funcionários, 40 dispositivos críticos); os departamentos compraram switches e APs por conta própria, sem suporte a SNMPv3 ou SDN, e o orçamento foi cortado em 40% porque a reitoria achou que "já resolveram parte do problema"; a entrega é um plano de gestão de riscos com matriz de decisão e uma topologia de contenção isolando os equipamentos numa DMZ interna. (d) NUVEM OU CHÃO: e-commerce crescendo 200% ao ano quer migrar tudo para a nuvem, mas o armazém fica em zona rural com apenas rádio ou Starlink; o ERP exige conexões persistentes em TCP 1433 ou 443 e perdas acima de 2% derrubam a sessão do coletor, custando 3 minutos por ocorrência; cada hora de expedição parada custa R$ 50.000. Com orçamento de R$ 65.000 e as opções de SD-WAN appliance (R$ 8.500, failover inteligente entre Starlink e rádio), micro-servidor de borda (R$ 18.000, banco local sincronizando com a nuvem) e nobreak senoidal 3 kVA (R$ 12.000, 4 horas de autonomia), a resposta é uma infraestrutura HÍBRIDA de Edge Computing. A entrega final é uma matriz de riscos (impacto e probabilidade de 1 a 5, plano de mitigação e custo) e o diagrama de fluxo de dados em dois estados: normal e de contingência.

15. O PROJETO "MEU BAIRRO CONECTADO" (ISP GPON fictício, equipes de até 5): projetar um provedor de internet baseado em fibra com a própria casa como NOC. Fase 1 é estudo: FTTH e a diferença entre cabos metálicos e fibra, o papel da OLT (na sede), do DIO (Distribuidor Interno Ótico) e da ONU/ONT (na casa do cliente), e a topologia de redes ópticas com splitters 1:64 ou 1:128. Fase 2 é planejamento no Google Earth Pro: marcar a sede, desenhar um polígono cobrindo 4 a 5 quarteirões, contar as casas e prédios da área, medir com a régua a distância total de cabos pelas ruas e posicionar as CTOs (Caixas de Terminação Óptica) — cada CTO atende tipicamente 8 ou 16 clientes, o que define quantas caixas o bairro precisa. Fase 3 é a entrega: mapa .kmz ou print detalhado com rotas e pontos, mais a Lista de Materiais (BOM) com metros de fibra AS-80, quantidade de CTOs e splitters e o modelo de OLT sugerido. Fase 4 é o orçamento de investimento inicial para um micro-ISP de 64 a 128 clientes. Fase 5 é identidade visual e logo. Fase 6 é a estratégia competitiva: três diferenciais que um pequeno provedor tem contra as grandes operadoras — atendimento humanizado, instalação em até 24 horas e entrega de 100% da velocidade contratada.

16. FERRAMENTAS E CURSOS: Cisco Packet Tracer para simulação de redes, Google Earth Pro para o planejamento geográfico, draw.io e Lucidchart para diagramas, Revit para quantitativo de cabos, certificador Fluke DSX para validação física e Canva para identidade visual. Os cursos EAD da Cisco NetAcad ("Conceitos Básicos de Redes" e "Exploring Networking with Cisco Packet Tracer") cobrem conceitos de comunicação, tipos e componentes de rede, configuração de dispositivos móveis e roteador sem fio seguro, padrões e protocolos, mídias de rede, Ethernet, endereçamento IPv4 e segmentação, IPv6, DHCP, roteadores, ARP, construção de uma LAN completa, serviços de Internet e da camada de aplicação, e ferramentas de teste e resolução de problemas de conectividade.
`;

export const INFR_TOPICS: QuizTopicOption[] = [
    {
        value: 'normas-cabeamento',
        label: 'Normas e cabeamento estruturado',
        prompt:
            'Normas de cabeamento estruturado na disciplina Projeto de Infraestrutura: ABNT NBR 14565, ANSI/TIA-568 (categorias e pinagem), ISO/IEC 11801 (classes de desempenho), ANSI/TIA-569 (rotas, espaços e raio de curvatura), NBR 16415, ANSI/TIA-606 (rotulagem, identificação e códigos de cores), ANSI/TIA-607 (aterramento e equipotencialização), ABNT NBR 5410 e ANSI/TIA-942 (Tiers 1 a 4 de data center). Os limites de distância da TIA-568: cabo horizontal de 90 metros, patch cords somando 10 metros e canal total de 100 metros em cobre, e o que fazer quando o galpão tem 120 metros de fundo.',
    },
    {
        value: 'midias-categorias',
        label: 'Mídias, categorias e interferência',
        prompt:
            'Mídias de transmissão e interferência na disciplina Projeto de Infraestrutura: o significado da frequência em MHz como largura de banda; as categorias de par trançado (Cat3 até 16 MHz, Cat5e UTP a 1 Gbps, Cat6 a 250 MHz com 10 Gbps só até 55 metros, Cat6a a 500 MHz com 10 Gbps até 100 metros, Cat7 S/FTP a 600 MHz com conectores TERA/GG45, Cat8 a 2000 MHz e 25/40 Gbps até 30 metros) e quais categorias a TIA não reconhece mais; as blindagens F/UTP, S/FTP e SFTP e a necessidade de aterramento; EMI e crosstalk (diafonia); a pinagem T568A e T568B e a diferença entre cabo direto e crossover; fibra óptica e cabo coaxial com conector BNC.',
    },
    {
        value: 'etapas-projeto',
        label: 'As cinco etapas do projeto de redes',
        prompt:
            'O processo de projeto de redes na disciplina Projeto de Infraestrutura: levantamento de requisitos (necessidades do negócio, objetivos estratégicos, expectativas de performance, mapeamento de usuários/aplicações/tráfego, restrições técnicas e orçamentárias); projeto lógico (topologia e seu impacto em escalabilidade e manutenção, protocolos, serviços, endereçamento IP, segurança e redundância); projeto físico (equipamentos, distribuição de cabeamento e pontos de acesso, previsão de ambiente e condições operacionais); testes de implementação e validação (conectividade, velocidade, latência, capacidade e segurança); e documentação técnica (registro de requisitos e decisões, diagramas de arquitetura, manuais de operação e procedimentos de manutenção).',
    },
    {
        value: 'equipamentos-cenarios',
        label: 'Equipamentos e cenários-cliente',
        prompt:
            'Escolha de equipamentos por cenário na disciplina Projeto de Infraestrutura: o escritório de design com NAS que exige banda alta e baixa latência (Dual-WAN, switch 10GbE, Cat6a); o hotel de médio porte que exige cobertura, densidade e isolamento (gateway/firewall, switch PoE, APs Wi-Fi 6 com Mesh/Roaming, Cat6); a planta industrial com EMI e longas distâncias (switch industrial, conversores de mídia, fibra entre galpões e Cat7/Cat8 nas máquinas). A diferença entre roteador e Access Point; a diferença entre ONU, ONT e conversor de mídia; PoE e PoE++ (802.3at e 802.3bt) e o conceito de PoE Budget; switches gerenciáveis L2 e L3.',
    },
    {
        value: 'casos-projetos',
        label: 'Estudos de caso e projetos da turma',
        prompt:
            'Os projetos práticos da disciplina Projeto de Infraestrutura: o projeto convergente do IFAL Campus Maceió (backbone 10 Gbps, telefonia IP, câmeras 4K, automação, 4 pontos por sala e 40 por laboratório); os três galpões de 8.400 m² (centro de distribuição com roaming em corredores de 100 metros, fábrica Indústria 4.0 com EMI de motores, estúdio de eventos com 500 pessoas e sem paredes internas); os quatro estudos de caso da V2 (a metalúrgica cujo ERP trava por interferência de painéis solares e LEDs baratos, diagnosticada por erros de FCS e Alignment no log do switch; o prédio tombado com paredes de 60 cm e ressonância magnética; o Shadow IT no campus universitário com equipamentos sem SNMPv3 e orçamento cortado em 40%; e o dilema nuvem ou borda no armazém em zona rural com Starlink); e o projeto "Meu Bairro Conectado" de um micro-ISP GPON com OLT, DIO, ONU/ONT, splitters 1:64 ou 1:128, CTOs de 8 ou 16 clientes, mapa no Google Earth e Lista de Materiais.',
    },
];

export const INFR_EXAMS: ExamDefinition[] = [
    {
        id: 'fundamentos',
        label: 'Normas e mídias',
        description:
            'Normas de cabeamento estruturado, limites de distância da TIA-568, categorias de cabo, blindagens, interferência e pinagem.',
    },
    {
        id: 'projeto',
        label: 'Processo de projeto',
        description:
            'As cinco etapas do projeto de redes, escolha de equipamentos por cenário e os requisitos das atividades em equipe.',
    },
    {
        id: 'casos',
        label: 'Estudos de caso',
        description:
            'Os quatro casos da Atividade V2, os três galpões da atividade presencial e o projeto do micro-ISP GPON.',
    },
];

export const INFR_SECTIONS = [
    { id: 'intro', shortTitle: 'Introdução', title: 'Projeto de Infraestrutura' },
    { id: 'normas', shortTitle: 'Normas', title: 'As normas do cabeamento estruturado', exams: ['fundamentos'] },
    { id: 'distancias', shortTitle: 'Distâncias', title: 'Os limites da TIA-568', exams: ['fundamentos'] },
    { id: 'categorias', shortTitle: 'Categorias', title: 'Categorias de cabo e frequência', exams: ['fundamentos'] },
    { id: 'blindagem', shortTitle: 'Blindagem', title: 'Blindagens, EMI e crosstalk', exams: ['fundamentos'] },
    { id: 'pinagem', shortTitle: 'Pinagem', title: 'T568A, T568B e conectores', exams: ['fundamentos'] },
    { id: 'midias', shortTitle: 'Fibra e coaxial', title: 'Fibra óptica e outras mídias', exams: ['fundamentos'] },
    { id: 'etapas', shortTitle: 'Etapas', title: 'As cinco etapas do projeto de redes', exams: ['projeto'] },
    { id: 'cenarios', shortTitle: 'Cenários', title: 'Três clientes, três soluções', exams: ['projeto'] },
    { id: 'equipamentos', shortTitle: 'Equipamentos', title: 'Roteador, AP, ONU/ONT e PoE', exams: ['projeto'] },
    { id: 'ifal', shortTitle: 'Projeto IFAL', title: 'A rede convergente do campus', exams: ['casos'] },
    { id: 'galpoes', shortTitle: 'Galpões', title: 'Três plantas de 8.400 m²', exams: ['casos'] },
    { id: 'diagnostico', shortTitle: 'Diagnóstico', title: 'Os quatro estudos de caso', exams: ['casos'] },
    { id: 'isp', shortTitle: 'Micro-ISP', title: 'Meu Bairro Conectado (GPON)', exams: ['casos'] },
    { id: 'ferramentas', shortTitle: 'Ferramentas', title: 'Ferramentas e cursos', exams: ['projeto'] },
    { id: 'quiz', shortTitle: 'Quiz', title: 'Quiz de Revisão' },
] as const;

export type InfrSectionId = (typeof INFR_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['fundamentos'],
        question: 'Qual é o comprimento máximo do CABO HORIZONTAL segundo a TIA-568, e o que ele conecta?',
        options: [
            '100 metros — do switch central ao switch de andar',
            '90 metros — do rack até a tomada na parede da área de trabalho',
            '10 metros — do patch panel ao switch dentro do rack',
            '55 metros — limite imposto pela categoria do cabo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O cabo horizontal é o segmento mais extenso do prédio: liga as tomadas das áreas de trabalho aos equipamentos centrais da sala de telecomunicações, normalmente no mesmo andar. Os 90 metros são de cabo fixo — os patch cords entram na conta à parte.',
        feedbackWrong:
            'São 90 metros, do rack até a tomada na parede. Os 100 metros são o CANAL TOTAL fim-a-fim, que soma os 90 do horizontal com os 10 dos patch cords.',
    },
    {
        id: 'q2',
        exams: ['fundamentos'],
        question: 'Na tabela de limites da TIA-568, como se chega aos 100 metros do canal total?',
        options: [
            '90 metros de cabo horizontal + 10 metros de patch cords somados',
            '100 metros de cabo horizontal, sem incluir patch cords',
            '50 metros de ida e 50 de volta',
            '90 metros de cabo horizontal + 10 metros de fibra no backbone',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. E note que os 10 metros são a SOMA dos cordões de manobra — os do rack e os da estação de trabalho juntos. Um patch cord generoso na mesa consome orçamento do que sobra no rack.',
        feedbackWrong:
            'O canal total de 100 metros é a soma de 90 metros de cabo horizontal com 10 metros de patch cords (rack + estação). Ultrapassar isso compromete a certificação.',
    },
    {
        id: 'q3',
        exams: ['fundamentos'],
        question: 'Qual norma trata especificamente do ATERRAMENTO e da equipotencialização de sistemas de telecomunicações?',
        options: ['ANSI/TIA-569', 'ANSI/TIA-606', 'ANSI/TIA-607', 'ANSI/TIA-942'],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. A TIA-607 cobre grounding e bonding — essencial para a segurança de equipamentos e pessoas e para reduzir ruído eletromagnético. É a norma que dá base à exigência de aterrar cabos blindados.',
        feedbackWrong:
            'É a ANSI/TIA-607. A 569 trata de rotas e espaços, a 606 de rotulagem e identificação, e a 942 de data centers e seus Tiers.',
    },
    {
        id: 'q4',
        exams: ['fundamentos'],
        question: 'O que a ANSI/TIA-606 padroniza, e por que isso importa na manutenção?',
        options: [
            'O raio de curvatura dos cabos, evitando quebra da fibra',
            'A rotulagem e identificação de cabos, racks, tomadas e portas, com códigos de cores',
            'Os níveis de redundância de energia e climatização',
            'A pinagem dos conectores RJ45',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — o material é direto: "uma rede sem identificação é um pesadelo para manutenção". A norma define inclusive códigos de cores, como azul para estações de trabalho e branco para backbone.',
        feedbackWrong:
            'A TIA-606 trata de rotulagem e identificação. O raio de curvatura é da TIA-569, a redundância de data center é da TIA-942 e a pinagem é da TIA-568.',
    },
    {
        id: 'q5',
        exams: ['fundamentos'],
        question: 'A ANSI/TIA-942 define os Tiers 1 a 4. O que ela avalia além do cabeamento?',
        options: [
            'Apenas a velocidade do backbone',
            'A redundância de energia, a climatização e a segurança física',
            'A quantidade de racks por metro quadrado',
            'O padrão de rotulagem dos equipamentos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Para ambientes de missão crítica que não podem parar, a norma não olha só para o cabo: confiabilidade envolve energia redundante, refrigeração e controle de acesso físico.',
        feedbackWrong:
            'A TIA-942 define níveis de confiabilidade olhando redundância de energia, climatização e segurança física — infraestrutura de missão crítica, não apenas cabeamento.',
    },
    {
        id: 'q6',
        exams: ['fundamentos'],
        question: 'Qual é a norma BRASILEIRA principal de cabeamento estruturado para edifícios comerciais e data centers?',
        options: ['ABNT NBR 5410', 'ABNT NBR 14565', 'NBR 16415', 'ISO/IEC 11801'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A NBR 14565 se baseia fortemente nas normas internacionais. Não confunda com a NBR 5410, que é de instalações elétricas de baixa tensão, nem com a NBR 16415, focada em caminhos e espaços.',
        feedbackWrong:
            'É a ABNT NBR 14565. A NBR 5410 trata de instalações elétricas de baixa tensão, a NBR 16415 de caminhos e espaços, e a ISO/IEC 11801 é internacional, não brasileira.',
    },
    {
        id: 'q7',
        exams: ['fundamentos'],
        question: 'O cabo Cat6 suporta 10 Gbps — mas com qual restrição importante?',
        options: [
            'Apenas se for blindado',
            'Apenas em distâncias curtas, até cerca de 55 metros',
            'Apenas com conectores TERA ou GG45',
            'Apenas em ambientes sem PoE',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O Cat6 trabalha a 250 MHz e entrega 1 Gbps com folga em 100 metros, mas os 10 Gbps só valem em até 55 metros. Para 10 Gbps em 100 metros é preciso Cat6a, que sobe para 500 MHz.',
        feedbackWrong:
            'A restrição é de DISTÂNCIA: o Cat6 só entrega 10 Gbps em até 55 metros. É exatamente essa limitação que justifica especificar Cat6a quando o projeto exige 10 Gbps no canal completo.',
    },
    {
        id: 'q8',
        exams: ['fundamentos'],
        question: 'Quais são a frequência e a velocidade do cabo Cat8, e para que ambiente ele é indicado?',
        options: [
            '600 MHz e 10 Gbps — redes corporativas em 100 metros',
            '2000 MHz e 25/40 Gbps — data centers, em distâncias curtas (até 30 metros)',
            '500 MHz e 10 Gbps — cabeamento horizontal moderno',
            '250 MHz e 1 Gbps — uso geral com PoE',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O Cat8 é necessariamente blindado e troca alcance por velocidade: 2000 MHz e até 40 Gbps, mas só em 30 metros. É cabo de interligação dentro do data center, não de cabeamento horizontal.',
        feedbackWrong:
            'O Cat8 opera a 2000 MHz com 25/40 Gbps em até 30 metros. Os 600 MHz são do Cat7, os 500 MHz do Cat6a e os 250 MHz do Cat6.',
    },
    {
        id: 'q9',
        exams: ['fundamentos'],
        question: 'O que a frequência de um cabo, medida em MHz, representa na prática?',
        options: [
            'A quantidade de pares trançados dentro do cabo',
            'A largura de banda disponível — a metáfora da "largura da estrada" para os dados',
            'A tensão elétrica máxima que o cabo suporta',
            'A distância máxima em metros que o cabo alcança',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Mais MHz significa mais "espaço" para dados trafegarem ao mesmo tempo e menos suscetibilidade a crosstalk — daí a frequência estar diretamente ligada à categoria do cabo.',
        feedbackWrong:
            'A frequência indica largura de banda: quanto maior, mais dados simultâneos e melhor a supressão de interferência. A distância máxima é definida pela norma, não pela frequência isoladamente.',
    },
    {
        id: 'q10',
        exams: ['fundamentos'],
        question: 'Quais categorias de cabo NÃO são mais reconhecidas pela TIA?',
        options: [
            'Categorias 1, 2 e 4',
            'Categorias 3 e 5',
            'Categorias 5e e 6',
            'Categorias 7 e 8',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Cat1 e Cat2 vinham de instalações telefônicas e redes token ring antigas; a Cat4 (20 MHz) foi substituída pela Cat5. A Cat3 continua reconhecida historicamente como o primeiro padrão feito para redes, certificado até 16 MHz.',
        feedbackWrong:
            'São as categorias 1, 2 e 4. A Cat3 ainda é reconhecida (16 MHz, primeiro padrão para redes) e as demais — 5e, 6, 6a, 7 e 8 — são padrões atuais.',
    },
    {
        id: 'q11',
        exams: ['fundamentos'],
        question: 'Qual é a diferença técnica entre um cabo F/UTP (FTP) e um S/FTP (STP)?',
        options: [
            'O F/UTP é mais caro e o S/FTP mais barato',
            'O F/UTP tem UMA folha envolvendo os quatro pares; o S/FTP tem blindagem em CADA par individualmente',
            'O F/UTP é para fibra e o S/FTP para cobre',
            'O F/UTP dispensa aterramento e o S/FTP exige',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a consequência é prática: a folha única do F/UTP protege bem contra interferência EXTERNA, mas só a blindagem por par do S/FTP combate eficazmente o crosstalk entre os próprios pares do cabo.',
        feedbackWrong:
            'O F/UTP tem uma única folha de alumínio envolvendo os quatro pares não blindados; o S/FTP blinda cada par individualmente, oferecendo proteção superior contra crosstalk interno. Ambos exigem aterramento.',
    },
    {
        id: 'q12',
        exams: ['fundamentos'],
        question: 'O que caracteriza o cabo SFTP (ou SSTP), e quando ele é indicado?',
        options: [
            'É um cabo sem blindagem, para ambientes limpos',
            'Combina as duas abordagens: blindagem em cada par MAIS uma segunda blindagem externa geral — para interferência extrema',
            'É um cabo de fibra com revestimento metálico',
            'É a nomenclatura antiga do Cat5e',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É "o FTP e o STP juntos": blindagem por par e blindagem geral cobrindo todos. Indicado para instalações onde exista grande escala de interferência, como perto de motores industriais.',
        feedbackWrong:
            'O SFTP soma as duas blindagens — por par e externa geral. É a escolha para ambientes de interferência extrema, exatamente o cenário da planta industrial visto em aula.',
    },
    {
        id: 'q13',
        exams: ['fundamentos'],
        question: 'Por que cabos blindados exigem ATERRAMENTO adequado nas extremidades?',
        options: [
            'Para aumentar a velocidade de transmissão',
            'Porque sem aterramento a blindagem não cumpre sua função de escudo contra ruído',
            'Para permitir o uso de PoE',
            'Porque a norma exige apenas por questões burocráticas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A blindagem precisa de um caminho para escoar o ruído captado — sem aterramento, ela pode até funcionar como antena. Daí a importância de conectores RJ45 blindados e da conexão ao aterramento do patch panel ou switch.',
        feedbackWrong:
            'Sem aterramento a blindagem simplesmente não funciona como escudo. Instalar cabo blindado e não aterrá-lo é gastar com blindagem sem obter o benefício.',
    },
    {
        id: 'q14',
        exams: ['fundamentos'],
        question: 'O que é CROSSTALK (diafonia)?',
        options: [
            'A perda de sinal ao longo da distância do cabo',
            'A interferência de um sinal em um canal vizinho por acoplamento eletromagnético, "vazando" sinal de um para o outro',
            'O reflexo do sinal causado por má terminação',
            'A diferença de tempo entre pacotes enviados e recebidos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O acoplamento pode ser capacitivo ou indutivo, e o efeito é corromper a informação e degradar a qualidade do sinal. É por isso que os pares são trançados e que a blindagem por par existe.',
        feedbackWrong:
            'Crosstalk é o vazamento de sinal entre canais vizinhos por acoplamento eletromagnético. A perda ao longo da distância é atenuação; o reflexo por má terminação é return loss.',
    },
    {
        id: 'q15',
        exams: ['fundamentos'],
        question: 'Qual a sequência de cores do padrão T568B?',
        options: [
            'Verde/Branco, Verde, Laranja/Branco, Azul, Azul/Branco, Laranja, Marrom/Branco, Marrom',
            'Laranja/Branco, Laranja, Verde/Branco, Azul, Azul/Branco, Verde, Marrom/Branco, Marrom',
            'Azul/Branco, Azul, Verde/Branco, Laranja, Laranja/Branco, Verde, Marrom/Branco, Marrom',
            'Marrom/Branco, Marrom, Verde/Branco, Verde, Azul/Branco, Azul, Laranja/Branco, Laranja',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o T568B é o mais utilizado comercialmente hoje. Repare que a diferença para o T568A é apenas a troca dos pares VERDE e LARANJA; azul e marrom ficam nas mesmas posições nos dois padrões.',
        feedbackWrong:
            'A primeira alternativa é o T568A. O T568B começa por Laranja/Branco e Laranja — é o A com os pares verde e laranja trocados, e é o padrão predominante no mercado.',
    },
    {
        id: 'q16',
        exams: ['fundamentos'],
        question: 'Como se monta um cabo CROSSOVER, e por que ele é raro hoje?',
        options: [
            'Usando T568A nas duas pontas; é raro porque encareceu',
            'Usando T568A numa ponta e T568B na outra; é raro porque as placas de rede fazem detecção automática',
            'Invertendo apenas o par azul; é raro porque foi proibido por norma',
            'Usando T568B nas duas pontas; é raro porque só funciona em Cat5e',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Padrões diferentes em cada ponta produzem o crossover. Com Auto-MDIX nas placas modernas, a inversão passou a ser feita eletronicamente — por isso o cabo direto virou o padrão universal.',
        feedbackWrong:
            'Crossover é T568A numa ponta e T568B na outra. Mesmo padrão nas duas pontas produz cabo direto. Ele ficou raro porque as placas atuais detectam e ajustam automaticamente.',
    },
    {
        id: 'q17',
        exams: ['fundamentos'],
        question: 'Por que a FIBRA ÓPTICA é a solução indicada para interligar galpões de uma planta industrial?',
        options: [
            'Porque é mais barata que o cabo de par trançado',
            'Porque transmite por luz e é imune à interferência eletromagnética dos motores, além de vencer longas distâncias',
            'Porque dispensa qualquer equipamento de conversão',
            'Porque suporta PoE nativamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — os dois problemas do cenário industrial são resolvidos de uma vez: EMI dos motores e distância entre blocos. A fibra exige conversores de mídia nas pontas para voltar ao sinal elétrico.',
        feedbackWrong:
            'A fibra transmite por pulsos de luz, o que a torna imune a EMI, e vence distâncias muito maiores que o cobre. Ela não é mais barata nem dispensa conversão — precisa de conversores de mídia.',
    },
    {
        id: 'q18',
        exams: ['fundamentos'],
        question: 'Por que o cabo COAXIAL caiu em desuso?',
        options: [
            'Porque não conseguia transmitir dados digitais',
            'Por ser propenso a mau contato, ter conectores mais caros e pouca flexibilidade',
            'Porque foi proibido pela ABNT',
            'Porque não suportava mais de 10 metros',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Ele usa conector BNC e ainda reduz efeitos de sinais externos, mas os problemas práticos o inviabilizaram. Sobrevive em redes antigas (10BASE2/10BASE5) e importa hoje para entender a evolução do cabeamento.',
        feedbackWrong:
            'O coaxial saiu de cena por mau contato, conectores caros e pouca flexibilidade — não por incapacidade técnica de transmitir dados nem por proibição normativa.',
    },
    {
        id: 'q19',
        exams: ['projeto'],
        question: 'Quais são as cinco etapas do processo de projeto de redes, na ordem apresentada na disciplina?',
        options: [
            'Orçamento, compra, instalação, testes e entrega',
            'Levantamento de requisitos, projeto lógico, projeto físico, testes e validação, documentação técnica',
            'Projeto físico, projeto lógico, requisitos, documentação e testes',
            'Diagnóstico, topologia, cabeamento, configuração e treinamento',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A ordem importa: o lógico vem antes do físico porque a topologia e o endereçamento determinam que equipamentos comprar — e não o contrário. Documentar é etapa, não sobra de tempo no fim.',
        feedbackWrong:
            'A sequência é requisitos → lógico → físico → testes → documentação. Começar pelo físico (comprar equipamento antes de definir a topologia) é justamente o erro que o processo evita.',
    },
    {
        id: 'q20',
        exams: ['projeto'],
        question: 'O que se define na etapa de PROJETO LÓGICO da rede?',
        options: [
            'A marca e o modelo dos switches e a posição dos racks',
            'A topologia, os protocolos e serviços, o esquema de endereçamento IP, a segurança e a redundância',
            'O orçamento e o cronograma de instalação',
            'Os testes de conectividade e desempenho',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A topologia define o caminho dos dados e afeta diretamente escalabilidade, desempenho e facilidade de manutenção. Escolher equipamento (etapa física) sem essa definição é comprar no escuro.',
        feedbackWrong:
            'Marca, modelo e posição de racks são projeto FÍSICO. O lógico define topologia, protocolos, serviços, endereçamento IP, segurança e redundância.',
    },
    {
        id: 'q21',
        exams: ['projeto'],
        question: 'Na etapa de levantamento de requisitos, por que a análise de RESTRIÇÕES é indispensável?',
        options: [
            'Porque restrições servem para justificar atrasos',
            'Porque as limitações técnicas da infraestrutura existente e o orçamento definem o escopo e as escolhas tecnológicas viáveis',
            'Porque a norma exige um capítulo sobre restrições',
            'Porque restrições só aparecem depois da instalação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A análise de restrições é o que alinha expectativas e garante viabilidade — é ela que impede um projeto tecnicamente elegante e financeiramente impossível.',
        feedbackWrong:
            'As restrições técnicas e orçamentárias delimitam o que é viável e alinham as expectativas do cliente. Ignorá-las produz projetos que não saem do papel.',
    },
    {
        id: 'q22',
        exams: ['projeto'],
        question: 'Para o escritório de design e arquitetura que move renderizações 3D e vídeo 4K para um NAS, qual foi a solução de cabeamento indicada?',
        options: ['Cat5e UTP', 'Cat6', 'Cat6a', 'Fibra monomodo até cada estação'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. A necessidade é largura de banda alta e baixa latência: o Cat6a entrega 10 Gbps em até 100 metros a 500 MHz, com blindagem interna. A solução de equipamentos completa o quadro — roteador Dual-WAN, switch gerenciável 10GbE e o NAS.',
        feedbackWrong:
            'É o Cat6a. O Cat6 só faria 10 Gbps até 55 metros, e o Cat5e para em 1 Gbps — insuficiente para mover renderizações e vídeo 4K contra um NAS central.',
    },
    {
        id: 'q23',
        exams: ['projeto'],
        question: 'No cenário do hotel de médio porte, por que a solução inclui um switch PoE?',
        options: [
            'Para aumentar a velocidade da rede cabeada',
            'Para alimentar os Access Points pelo próprio cabo de rede, eliminando a necessidade de tomadas no teto',
            'Para isolar a rede dos hóspedes da rede administrativa',
            'Para permitir o roaming entre andares',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Levar energia elétrica até cada AP no teto ou corredor seria caro e feio; o PoE resolve com um cabo só. O isolamento entre hóspedes e hotel vem do gateway/firewall, e o roaming vem dos APs Wi-Fi 6 com Mesh.',
        feedbackWrong:
            'O PoE serve para alimentar os APs pelo cabo de rede, dispensando tomadas no teto. Isolamento de rede é função do gateway/firewall; roaming é característica dos APs com Mesh.',
    },
    {
        id: 'q24',
        exams: ['projeto'],
        question: 'Na planta industrial, qual equipamento se diferencia por ter carcaça reforçada para altas temperaturas e poeira?',
        options: ['O conversor de mídia', 'O switch industrial', 'O Access Point Wi-Fi 6', 'O patch panel blindado'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O ambiente hostil exige hardware preparado — não basta escolher o cabo certo se o switch não sobrevive à temperatura e à poeira do galpão.',
        feedbackWrong:
            'É o switch industrial. O conversor de mídia existe no cenário, mas sua função é transformar sinal elétrico em luz para a fibra entre galpões.',
    },
    {
        id: 'q25',
        exams: ['projeto'],
        question: 'Qual é a diferença fundamental entre um ROTEADOR e um ACCESS POINT?',
        options: [
            'O roteador é sem fio e o AP é cabeado',
            'O roteador é o "cérebro" que gerencia a conexão, atribui IPs e distribui a internet; o AP apenas estende o sinal Wi-Fi a partir de uma rede cabeada existente',
            'O AP é mais rápido que o roteador',
            'O roteador só funciona em redes domésticas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A escolha decorre disso: use AP para eliminar zonas mortas numa rede que já existe; use roteador para criar uma rede do zero ou substituir a atual.',
        feedbackWrong:
            'A diferença está na inteligência e na função: o roteador gerencia tráfego, atribui IPs e distribui a internet; o AP é um ponto de irradiação alimentado por uma rede cabeada existente.',
    },
    {
        id: 'q26',
        exams: ['projeto'],
        question: 'Qual a diferença entre ONU e ONT?',
        options: [
            'ONU é para empresas e ONT para residências, sem diferença técnica',
            'ONU é o termo genérico de conversor óptico-elétrico; ONT é um tipo específico que fica na casa do cliente e já integra roteador Wi-Fi e portas LAN',
            'ONT converte elétrico em óptico e ONU faz o inverso',
            'ONU é sinônimo de splitter',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — a ONT é o "modem" da fibra. Já o conversor de mídia é uma ferramenta mais ampla para ligar fibra a cobre, sem o foco no triple play residencial.',
        feedbackWrong:
            'ONU é o termo genérico; ONT é a ONU específica da casa do cliente, com roteador Wi-Fi e portas LAN integrados. Splitter é o divisor de sinal óptico, coisa distinta.',
    },
    {
        id: 'q27',
        exams: ['casos'],
        question: 'No projeto convergente do IFAL Campus Maceió, qual é a densidade de pontos de rede especificada?',
        options: [
            '2 pontos por sala e 20 por laboratório',
            '4 pontos por sala de aula e 40 pontos por laboratório de informática',
            '8 pontos por sala e 24 por laboratório',
            '1 ponto por sala e 30 por laboratório',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Somados a monitoramento IP em todos os corredores e áreas externas e à automação dos auditórios, esses números é que dimensionam racks, switches e o PoE budget do projeto.',
        feedbackWrong:
            'São 4 pontos por sala de aula e 40 por laboratório de informática. Esses números vêm do enunciado e são o ponto de partida de todo o dimensionamento.',
    },
    {
        id: 'q28',
        exams: ['casos'],
        question: 'Quais serviços o projeto do IFAL precisa convergir sobre a mesma infraestrutura?',
        options: [
            'Apenas dados e telefonia',
            'Dados com backbone de 10 Gbps, telefonia IP, câmeras 4K e automação predial',
            'Dados e CFTV analógico',
            'Telefonia analógica e internet Wi-Fi',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é justamente a convergência que torna o projeto difícil: voz precisa de baixo jitter, vídeo 4K consome banda, e a automação traz dispositivos IoT com superfície de ataque própria. Daí as VLANs separadas.',
        feedbackWrong:
            'São quatro serviços convergentes: dados (backbone 10 Gbps), telefonia IP, câmeras 4K e automação predial. É a convergência que justifica segmentação por VLAN e um PoE budget bem calculado.',
    },
    {
        id: 'q29',
        exams: ['casos'],
        question: 'No galpão do centro de distribuição, qual é o real desafio de levar Wi-Fi ao fim de um corredor de 120 metros?',
        options: [
            'Aumentar a potência de transmissão do AP ao máximo',
            'Garantir ROAMING — que o coletor de dados não perca a conexão ao trocar de corredor',
            'Instalar um roteador em cada corredor',
            'Usar cabo Cat8 até o fim do corredor',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O problema não é alcance bruto, é continuidade de sessão: o coletor precisa migrar entre APs sem derrubar a conexão. Potência excessiva, aliás, piora a densidade ao criar sobreposição de células.',
        feedbackWrong:
            'O desafio é o roaming — manter a sessão do coletor viva ao trocar de corredor. Elevar potência não resolve handoff e ainda gera interferência entre células.',
    },
    {
        id: 'q30',
        exams: ['casos'],
        question: 'No estúdio de eventos, por que os pontos de rede vão em caixas de piso e colunas retráteis?',
        options: [
            'Por exigência da norma TIA-569',
            'Porque o vão é livre, sem paredes internas para fixar tomadas, e o layout muda toda semana',
            'Porque caixas de piso são mais baratas que tomadas de parede',
            'Porque o palco impede a passagem de cabos aéreos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O cenário combina duas restrições: não há onde fixar (vão livre com apenas 4 colunas) e o arranjo muda a cada evento — a infraestrutura precisa ser flexível por projeto, não por improviso.',
        feedbackWrong:
            'A razão é arquitetônica e operacional: vão livre sem paredes internas e layout que muda toda semana. Por isso 15 pontos de piso para estandes, além dos 20 APs de alta densidade.',
    },
    {
        id: 'q31',
        exams: ['casos'],
        question:
            'Na metalúrgica cujo ERP trava, o log mostra a interface Gi0/5 com 450.000 FCS-Err e 120.000 Alignment-Err, enquanto o uplink tem zero erros. O que isso indica?',
        options: [
            'Um problema de configuração do servidor ERP',
            'Um problema de CAMADA 1 — o quadro está chegando corrompido, sinal de interferência ou defeito físico no cabeamento daquela porta',
            'Saturação de banda no horário de pico',
            'Um ataque de negação de serviço',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Erros de FCS e de alinhamento significam quadros corrompidos na transmissão física — e o fato de estarem concentrados numa porta, com o uplink limpo, aponta para o meio, não para software. A pista do enunciado fecha o diagnóstico: painéis solares (inversores) e LEDs industriais baratos são fontes clássicas de EMI.',
        feedbackWrong:
            'FCS-Err e Alignment-Err são erros de camada 1: o quadro chega corrompido. Não é configuração nem saturação — o próprio enunciado diz que o SNMP não mostra saturação e que a rede passa em ping e iperf.',
    },
    {
        id: 'q32',
        exams: ['casos'],
        question:
            'Ainda no caso da metalúrgica: por que a falha é intermitente e concentrada entre 10h e 14h?',
        options: [
            'Porque é o horário de maior acesso ao ERP',
            'Porque é o pico de geração dos painéis solares instalados no telhado — a fonte de interferência varia com o sol',
            'Porque o backup automático roda nesse intervalo',
            'Porque o turno da manhã usa mais a rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é essa correlação de horário que transforma uma suspeita em diagnóstico. A intermitência que parecia aleatória tem um relógio: o da geração solar, máxima no meio do dia.',
        feedbackWrong:
            'A janela das 10h às 14h coincide com o pico de geração dos painéis solares recém-instalados. O enunciado descarta saturação de tráfego explicitamente — o SNMP não mostra link saturado.',
    },
    {
        id: 'q33',
        exams: ['casos'],
        question:
            'No caso do prédio tombado que vira centro de diagnóstico por imagem, quais são as três restrições combinadas?',
        options: [
            'Falta de energia, falta de orçamento e falta de mão de obra',
            'Proibição de furar paredes e usar calhas em 60% das salas, EMI massiva dos aparelhos de ressonância, e paredes de 60 cm de pedra que bloqueiam Wi-Fi',
            'Ausência de link de internet, servidores obsoletos e equipe pequena',
            'Prazo curto, fornecedor único e norma desatualizada',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. As três se agravam mutuamente: não pode furar (limita cabeamento), a RM interfere (limita cobre) e a parede bloqueia (limita Wi-Fi). Some-se a exigência de transferir arquivos DICOM de gigabytes instantaneamente.',
        feedbackWrong:
            'As restrições são o tombamento (60% das salas sem furos nem calhas aparentes), a EMI da ressonância magnética e as paredes de 60 cm de pedra e cal que atenuam o sinal sem fio.',
    },
    {
        id: 'q34',
        exams: ['casos'],
        question: 'No caso do "Shadow IT" no campus universitário, qual é o problema técnico dos equipamentos já comprados?',
        options: [
            'Estão fora da garantia',
            'Não suportam protocolos de gerência centralizada como SNMPv3 ou SDN',
            'São incompatíveis com cabos Cat6a',
            'Não têm portas suficientes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Sem gerência centralizada, não há visibilidade nem política consistente — daí a entrega pedida ser uma topologia de CONTENÇÃO, isolando esses equipamentos numa DMZ interna rigorosa, e não uma integração plena.',
        feedbackWrong:
            'O problema é a falta de suporte a gerência centralizada (SNMPv3, SDN), o que impede administrar esses equipamentos junto com o restante da rede. Agrava-se com o corte de 40% no orçamento.',
    },
    {
        id: 'q35',
        exams: ['casos'],
        question:
            'No caso "Nuvem ou Chão?", por que a migração 100% para nuvem é inadequada para o armazém em zona rural?',
        options: [
            'Porque a nuvem é mais cara que servidores locais',
            'Porque o ERP exige conexões persistentes e perdas acima de 2% derrubam a sessão do coletor, e o link (rádio ou Starlink) oscila',
            'Porque a legislação proíbe dados em nuvem',
            'Porque a equipe não sabe operar serviços em nuvem',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O ERP usa conexões persistentes em TCP 1433 ou 443; cada queda custa 3 minutos de reconferência, e cada hora de expedição parada custa R$ 50.000. A resposta é infraestrutura HÍBRIDA com Edge Computing — processar localmente e sincronizar depois.',
        feedbackWrong:
            'O problema é técnico: conexões persistentes não toleram os >2% de perda do link rural. A solução proposta é híbrida (Edge Computing), com banco local sincronizando com a nuvem.',
    },
    {
        id: 'q36',
        exams: ['casos'],
        question:
            'Com orçamento de R$ 65.000, quais são as três peças oferecidas no caso "Nuvem ou Chão?" e suas funções?',
        options: [
            'Três switches gerenciáveis de R$ 21.000 cada',
            'SD-WAN appliance (R$ 8.500, failover entre Starlink e rádio), micro-servidor de borda (R$ 18.000, banco local sincronizado) e nobreak 3 kVA (R$ 12.000, 4 horas)',
            'Um servidor de R$ 65.000 com redundância interna',
            'Links redundantes de fibra contratados por 12 meses',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e as três somam R$ 38.500, deixando folga no orçamento. Cada uma ataca uma falha diferente: o link (SD-WAN), a dependência da nuvem (borda) e a energia (nobreak), que o enunciado lembra ser instável na zona rural.',
        feedbackWrong:
            'São o SD-WAN appliance (R$ 8.500), o micro-servidor de borda (R$ 18.000) e o nobreak senoidal 3 kVA (R$ 12.000). Juntas cobrem link, processamento local e energia.',
    },
    {
        id: 'q37',
        exams: ['casos'],
        question: 'No projeto "Meu Bairro Conectado", quantos clientes atende tipicamente uma CTO?',
        options: ['1 ou 2 clientes', '8 ou 16 clientes', '64 ou 128 clientes', '256 clientes'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A CTO (Caixa de Terminação Óptica) — as caixinhas pretas nos postes — atende 8 ou 16 clientes, e é esse número que determina quantas caixas o bairro precisa. Os 1:64 e 1:128 são as razões dos SPLITTERS, coisa distinta.',
        feedbackWrong:
            'Cada CTO atende tipicamente 8 ou 16 clientes. Não confunda com os splitters, cuja razão de divisão é 1:64 ou 1:128, nem com o porte do micro-ISP, dimensionado para 64 a 128 clientes iniciais.',
    },
    {
        id: 'q38',
        exams: ['casos'],
        question: 'No projeto do micro-ISP, onde ficam a OLT e a ONU/ONT, respectivamente?',
        options: [
            'Ambas na casa do cliente',
            'A OLT na sede (NOC) e a ONU/ONT na casa do cliente',
            'A OLT no poste e a ONU/ONT na sede',
            'Ambas no Centro de Operações de Rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A OLT concentra na sede, o DIO organiza a distribuição interna, os splitters dividem o sinal e a ONU/ONT termina o enlace na casa do assinante — a cadeia completa de uma rede FTTH.',
        feedbackWrong:
            'A OLT fica na sede (que no projeto é a própria casa do aluno, funcionando como NOC) e a ONU/ONT fica na casa do cliente. O DIO é o distribuidor interno óptico da sede.',
    },
    {
        id: 'q39',
        exams: ['casos'],
        question: 'Que itens compõem a Lista de Materiais (BOM) exigida no projeto do micro-ISP?',
        options: [
            'Apenas o modelo do roteador e o plano de internet',
            'Metros de fibra (ex.: AS-80), quantidade de CTOs e splitters, e o modelo de OLT sugerido para a sede',
            'A planta baixa das residências atendidas',
            'O contrato de prestação de serviço e a tabela de preços',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A BOM é o que transforma o desenho no Google Earth em projeto orçável — e as quantidades saem da medição feita com a régua e da contagem de casas dentro do polígono do bairro.',
        feedbackWrong:
            'A BOM reúne metros de fibra, quantidade de CTOs e splitters e o modelo de OLT. É a ponte entre o mapa .kmz e a Fase 4, o orçamento de investimento inicial.',
    },
    {
        id: 'q40',
        exams: ['projeto'],
        question: 'Qual ferramenta a disciplina usa para o planejamento GEOGRÁFICO do projeto de rede externa?',
        options: [
            'Cisco Packet Tracer',
            'Google Earth Pro — marcar a sede, desenhar o polígono, contar imóveis e medir cabos com a régua',
            'Revit',
            'draw.io',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada ferramenta tem seu papel: Google Earth Pro para o território, Packet Tracer para simular a rede, draw.io e Lucidchart para diagramas, Revit para quantitativo de cabos e o Fluke DSX para certificar o que foi instalado.',
        feedbackWrong:
            'É o Google Earth Pro. O Packet Tracer simula redes, o Revit gera quantitativo de cabos e o draw.io serve para diagramas — cada um cobre uma etapa diferente.',
    },
];
