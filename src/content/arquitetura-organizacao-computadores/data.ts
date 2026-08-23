import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const AOCP_GUIDE_CONTEXT = `
GUIA COMPLETO DE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES (AOCP) - Resumo:

1. A DISCIPLINA: AOCP (2º período, 80h, 4h semanais) desce a escada da abstração — do computador como máquina de níveis até os bits que atravessam o caminho de dados. Ementa: estrutura básica de computadores, unidade central de processamento, estruturas de barramentos, organização de memória, sistemas de entrada/saída, suporte ao sistema operacional, padrões de arquiteturas (RISC × CISC) e introdução a arquiteturas paralelas. A turma 2022.2 organizou o curso em quatro módulos com quiz semanal: módulo 1 (introdução e análise de desempenho), módulo 2 (organização de sistemas de computadores), módulo 3 (nível lógico digital) e módulo 4 (assembly e arquitetura MIPS). Avaliações: 1ª prova (unidades 1 e 2), 2ª prova e um trabalho prático de MIPS entregue por repositório git com o código exaustivamente comentado. Livros-base: TANENBAUM (Organização Estruturada de Computadores), STALLINGS (Arquitetura e Organização de Computadores, 8ª ed.) e PATTERSON & HENNESSY (Organização e Projeto de Computadores). Ferramenta prática: simulador MARS 4.5.

2. ARQUITETURA × ORGANIZAÇÃO E MÁQUINAS MULTINÍVEIS: a ideia central de Tanenbaum é que o computador é uma MÁQUINA DE NÍVEIS — cada nível oferece uma linguagem, e cada linguagem é realizada pelo nível de baixo. Existem dois mecanismos para descer um nível: TRADUÇÃO (substituir cada instrução de L1 por uma sequência equivalente em L0, gerando um programa novo inteiramente em L0 — é o compilador) e INTERPRETAÇÃO (um programa em L0 lê as instruções de L1 como dados e as executa uma a uma, sem gerar programa novo). MÁQUINA VIRTUAL é o computador hipotético cuja linguagem é L1: o programador escreve como se ela existisse de verdade. A estrutura contemporânea tem seis níveis (lógica digital, microarquitetura, ISA, sistema operacional, linguagem de montagem, linguagem de alto nível). HARDWARE (circuitos, memória, E/S — o tangível) e SOFTWARE (algoritmos e sua representação) são LOGICAMENTE EQUIVALENTES: tudo que se faz por software pode ser feito por hardware e vice-versa; a escolha é de custo, velocidade e flexibilidade. Por volta de 1970 dominou o MICROPROGRAMA — interpretar o nível ISA por um programa em vez de eletrônica direta; o barateamento permitiu acrescentar instruções (multiplicação, ponto flutuante, strings) a custo mínimo, e foi essa facilidade que inflou os conjuntos CISC.

3. EVOLUÇÃO E LEI DE MOORE: máquina de calcular de Pascal (séc. XVII) → ENIAC (1943, Mauchley e Eckert) → transistor (1948, Bell Labs) → circuito integrado de silício (1958, Kilby e Noyce) → VLSI (anos 1970) → RISC e microcontroladores (anos 1980) → GridPad, o primeiro tablet (1989). LEI DE MOORE: o número de transistores que cabem num chip cresce cerca de 60% ao ano — a evolução do 8086 ao Core i7 é a curva desenhada (o Core i7-3960X tem 2,27 bilhões de transistores em 21×21 mm). O "zoológico de computadores" vai de microcontroladores embutidos (eletrodomésticos, equipamento médico, brinquedos — o ATmega168 AVR traz temporizadores, PWM, ADC, UART, I2C e watchdog num chip) a computadores pessoais, servidores, CLUSTERS (servidores padrão ligados por rede de gigabits) e MAINFRAMES (capacidade de E/S enorme). Três famílias de ISA no material: x86 (CISC, Intel), ARM (RISC, nascida no Acorn Archimedes; a ARM licencia projetos e não fabrica — o Tegra 2 leva dois Cortex-A9 de 1,2 GHz e um ARM7) e AVR (embarcados de baixo nível).

4. CPU E O CICLO DE EXECUÇÃO: a CPU é o cérebro; o caminho de dados da máquina de VON NEUMANN liga banco de registradores, ULA e memória. O CICLO DE BUSCA-DECODIFICAÇÃO-EXECUÇÃO em sete passos: (1) trazer a próxima instrução da memória para o registrador de instrução; (2) alterar o contador de programa (PC) para a instrução seguinte; (3) determinar o tipo da instrução; (4) se houver operando em memória, determinar sua localização; (5) trazê-lo para um registrador; (6) executar; (7) voltar ao passo 1. Interpretar instruções em vez de executá-las direto em hardware traz quatro benefícios: corrigir instruções defeituosas em campo, compensar deficiências de projeto, acrescentar instruções a custo mínimo e permitir desenvolvimento estruturado.

5. RISC × CISC E OS PRINCÍPIOS DE PROJETO: RISC (Reduced Instruction Set Computer) nasceu em Berkeley em 1980 com Patterson e Séquin — cerca de 50 instruções simples, todas rápidas. A comparação clássica: o RISC precisa de 4 a 5 instruções para fazer o que o CISC faz com 1, e ainda assim sai na frente porque cada uma é cerca de 10 vezes mais rápida. Na prática venceu a HIBRIDIZAÇÃO: a Intel manteve a ISA CISC (compatibilidade) e passou a traduzi-la internamente para micro-operações RISC. CINCO PRINCÍPIOS DE PROJETO de Tanenbaum: todas as instruções executadas diretamente por hardware; maximizar a taxa de execução; instruções fáceis de decodificar; só LOAD e STORE referenciam memória (máquina load-store); e muitos registradores. Os QUATRO PRINCÍPIOS de Patterson, vistos na parte MIPS: (1) simplicidade favorece a regularidade — instruções de 32 bits fixos, poucos formatos, opcode sempre nos 6 bits mais significativos; (2) bons projetos exigem compromissos — por isso existem três formatos, e não um; (3) menor é melhor — poucos registradores, poucos modos de endereçamento; (4) torne rápido o caso comum.

6. PARALELISMO: duas formas. NO NÍVEL DE INSTRUÇÃO — o PIPELINE divide a execução em estágios (o exemplo tem cinco), e com tempo de ciclo T e n estágios a LATÊNCIA de uma instrução é nT, mas uma instrução se conclui a CADA ciclo: é o compromisso entre latência e largura de banda. Variações: pipelines duplos com unidade de busca comum e pipeline único com várias unidades funcionais. NO NÍVEL DE PROCESSADOR — SIMD (Single Instruction Multiple Data): muitos processadores idênticos executando a MESMA instrução sobre dados DIFERENTES, princípio das GPUs; PROCESSADOR VETORIAL, que faz a sequência de operações em pares de elementos numa única unidade funcional altamente paralela; MULTIPROCESSADOR, várias CPUs compartilhando memória comum (fortemente acopladas); e MULTICOMPUTADOR, CPUs com memórias locais que se comunicam por troca de mensagens (fracamente acopladas).

7. MEMÓRIA, ENDIANNESS E CORREÇÃO DE ERRO: BIT é a unidade básica; a memória se organiza em CÉLULAS, cada uma com um ENDEREÇO. ORDENAÇÃO (endianness) define como uma palavra de 4 bytes se quebra em bytes: BIG-ENDIAN guarda o byte MAIS significativo no MENOR endereço (0A0B0C0D vira 0A, 0B, 0C, 0D); LITTLE-ENDIAN guarda o mais significativo no MAIOR endereço (0D, 0C, 0B, 0A). O MIPS é BI-ENDIAN — comuta conforme a máquina hospedeira. CÓDIGOS DE HAMMING corrigem erros causados por picos de tensão e raios cósmicos: com DISTÂNCIA DE HAMMING d+1 detectam-se d erros de bit único, e com 2d+1 corrigem-se d erros (uma palavra de 16 bits vira 21 bits com 5 de paridade). HIERARQUIA DE MEMÓRIA: registradores → CACHE (palavras frequentes perto da CPU; consulta-se a cache antes da memória principal) → memória principal (DIMMs) → memória secundária. Secundária: DISCO MAGNÉTICO (pratos, trilhas, CILINDROS, setores por zona), a evolução das interfaces (IDE → EIDE → ATA → ATA serial → SCSI), RAID (redundância e desempenho em níveis 0 a 5), SSD (flash não volátil) e ópticos (CD-ROM com símbolos de 14 bits, CD-R por corante, CD-RW por liga cristalina/amorfa, DVD, Blu-ray com laser azul).

8. ENTRADA/SAÍDA E BARRAMENTOS: o CONTROLADOR controla o dispositivo e gerencia o acesso ao barramento. BARRAMENTO é o caminho elétrico comum entre vários dispositivos; SÍNCRONO tem clock de cristal e todas as atividades tomam número inteiro de ciclos, ASSÍNCRONO não tem clock mestre e cada ciclo dura o que precisar. ARBITRAGEM resolve o conflito de dois mestres simultâneos, centralizada (encadeamento em série, um ou dois níveis) ou descentralizada. Exemplos: PCI (árbitro centralizado) e PCI Express; USB, com hub-raiz transmitindo um quadro a cada 1,00 ± 0,05 ms e quatro tipos de quadro (controle, isócrono, volume, interrupção). Dispositivos: teclados, touch screens opacas e transparentes, monitores LCD atualizados 60 a 100 vezes por segundo a partir da RAM DE VÍDEO, mouse, Wiimote (sensores de movimento em três dimensões por Bluetooth), Kinect (visão computacional), impressoras (laser, jato de tinta com gotas de ~1 picolitro, tinta sólida, sublimação de corante, térmica) e modems (simplex, half-duplex, full-duplex). CODIFICAÇÃO: ASCII usa 7 bits (128 caracteres, um por byte); UNICODE dá a cada caractere um ponto de código de 16 bits; UTF-8 é de tamanho VARIÁVEL (1 a 4 bytes), codifica cerca de dois bilhões de caracteres, é dominante na web e mantém os códigos 0-127 idênticos ao ASCII em um único byte.

9. NÍVEL LÓGICO DIGITAL — PORTAS E ÁLGEBRA DE BOOLE: abaixo da lógica digital só há dispositivos eletrônicos; ela abstrai tensão em 1 e 0. A fundamentação matemática é a ÁLGEBRA DE BOOLE, criada por George Boole (1815-1864) em 1854, e foi CLAUDE SHANNON quem, em 1938, no MIT, a aplicou a circuitos de relés de telefonia — abrindo caminho para descrever, analisar e SIMPLIFICAR circuitos. Portas: AND (S = A·B, saída 1 só se ambas forem 1), OR (S = A+B, saída 1 se pelo menos uma for 1), NOT (complemento), NAND (negação do AND: saída 1 se pelo menos uma entrada for 0), NOR (negação do OR: saída 1 só se ambas forem 0) e XOR (S = A⊕B, saída 1 se e somente se as entradas forem DIFERENTES). Representações equivalentes de um circuito: expressão booleana, tabela verdade e símbolo gráfico — passa-se de uma à outra por substituição direta. Da TABELA VERDADE para a EXPRESSÃO (soma de produtos): para cada linha com resultado 1, escreve-se o produto (AND) das entradas — negadas onde valem 0 — e somam-se (OR) esses termos. O caminho inverso, em cinco passos de Tanenbaum: escrever a tabela, gerar os complementos com inversores, um AND por linha de resultado 1, ligar as entradas certas e reunir tudo num OR final.

10. CIRCUITOS COMBINATÓRIOS: a saída depende APENAS das entradas presentes. MULTIPLEXADOR (MUX): 2^n entradas de dados, n linhas de controle e 1 saída — seleciona qual entrada passa; aplicação típica é escolher a origem do PC (contador, registrador de instrução ou saída da ULA). DEMULTIPLEXADOR faz o inverso: uma entrada distribuída para várias saídas. DECODIFICADOR: n entradas e 2^n saídas, ativando exatamente UMA saída por combinação (usado para habilitar chips de RAM). CODIFICADOR é o oposto: várias entradas, apenas uma ativa por vez, produzindo um código de n bits. COMPARADOR usa XOR, que dá 0 quando as entradas são iguais. DESLOCADOR (shifter): n entradas, n saídas, uma linha de controle escolhendo a direção. SOMADORES: o MEIO SOMADOR tem duas entradas e duas saídas (soma e vai-um) mas não recebe carry de entrada; o SOMADOR COMPLETO recebe o carry anterior. A ULA de n bits é a repetição de n fatias idênticas de 1 bit, cada uma capaz de AND, OR e soma, escolhidas pelas linhas F0 e F1. PLA (matriz de lógica programável) explora o fato de que toda função booleana pode virar soma de produtos.

11. CIRCUITOS SEQUENCIAIS E MEMÓRIA: a saída depende também do estado anterior. O CLOCK emite pulsos de largura e intervalo precisos; TEMPO DE CICLO é o intervalo entre bordas correspondentes de dois pulsos. LATCH é a memória de 1 bit, construída com duas portas NOR realimentadas; o LATCH SR COM CLOCK só muda quando o clock permite; o LATCH D COM CLOCK resolve a instabilidade do SR (o caso proibido S=R=1) porque tem uma única entrada de dados: enquanto o clock for 1, ele lê e guarda D. FLIP-FLOP é a variante em que a transição ocorre na BORDA do clock (subida ou descida), não durante o nível alto — é a diferença que se cobra em prova. Oito flip-flops lado a lado formam um REGISTRADOR de 8 bits. A memória se organiza em palavras (o número de palavras é sempre potência de 2) e toda leitura ou escrita movimenta a palavra inteira. SRAM usa circuitos parecidos com o flip-flop D (rápida, cara — vira cache); DRAM usa um transistor e um capacitor por célula (densa, barata, precisa de refresh — vira memória principal); ROM mantém o conteúdo sem energia.

12. MIPS — REGISTRADORES E ESTRUTURA DO PROGRAMA: MIPS (Microprocessor without Interlocked Pipeline Stages) é RISC, criada por Hennessy em 1981 a partir do trabalho de Patterson e Séquin; a MIPS Computer Systems foi fundada em 1984 e comprada pela Silicon Graphics em 1992. São 32 registradores de 32 bits mais 32 de ponto flutuante, todos prefixados por $. CONVENÇÃO: $zero ($0) é sempre zero; $at ($1) é reservado ao montador; $v0-$v1 ($2-$3) retornam valores; $a0-$a3 ($4-$7) passam os quatro primeiros argumentos; $t0-$t7 ($8-$15) e $t8-$t9 ($24-$25) são temporários; $s0-$s7 ($16-$23) são salvos (preservados entre chamadas); $k0-$k1 são do kernel; $gp é o ponteiro global; $sp o ponteiro de pilha; $fp o ponteiro de frame; $ra o endereço de retorno. Um programa tem o segmento .data (variáveis estáticas, a partir de 0x10000000) e .text (código, a partir de 0x00400000). LAYOUT DE MEMÓRIA: pilha no topo ($sp inicia em 0x7fffffff e CRESCE PARA BAIXO), dados dinâmicos, dados estáticos ($gp em 0x10008000), texto (PC em 0x00400000) e área reservada na base. DIRETIVAS (sempre com ponto): .data, .text, .globl, .word (32 bits), .half (16), .byte, .float, .double, .ascii, .asciiz (terminada em nulo), .space n (reserva n bytes) e .align n (alinha em 2^n bytes — .align 2 para inteiros de 4 bytes, .align 0 para caracteres). RÓTULOS terminam em dois-pontos e servem a desvios condicionais, incondicionais e chamadas de procedimento. Ferramenta: MARS 4.5.

13. SYSCALLS: o serviço desejado vai em $v0 e os argumentos em $a0 (ou $f12 para ponto flutuante), depois executa-se syscall. Tabela: 1 print_int ($a0), 2 print_float ($f12), 3 print_double ($f12), 4 print_string ($a0 = endereço), 5 read_int (retorna em $v0), 6 read_float (retorna em $f0), 7 read_double ($f0), 8 read_string ($a0 = buffer, $a1 = tamanho), 9 sbrk (aloca $a0 bytes, retorna endereço em $v0) e 10 exit. O par la $a0, msg / li $v0, 4 / syscall é o "hello world" da disciplina. Ponto flutuante usa os registradores $f0-$f31 e as instruções l.s (carrega da memória), mov.s (copia entre registradores), mul.s e div.s.

14. MIPS NA PRÁTICA — A PROGRESSÃO DOS EXEMPLOS: o professor distribuiu 15 exemplos numerados, quase todos trazendo no cabeçalho o código equivalente em C ou Python comentado, para o aluno ver a tradução lado a lado. A ordem: hello world → entrada e saída → soma com constante (addi) e entre registradores (add) → comparação com e sem sinal (slt/sltu) → IF → laços → pilha → rotinas → rotinas recursivas → leitura e escrita da memória → arrays → deslocamento de bits → and, or, not. LIÇÕES CENTRAIS: (a) o IF em assembly se escreve com o desvio NEGADO — para "se A == B faça X", usa-se bne A, B, ELSE, porque o desvio pula quando a condição FALHA; (b) o FOR testa no topo (beq contador, limite, SAIDA), executa o corpo, incrementa e volta com j; (c) em arrays declarados com .word, o índice ANDA DE 4 EM 4 BYTES porque cada palavra ocupa 4 bytes — lw $t0, 8($s2) lê o TERCEIRO elemento, não o oitavo; (d) procedimentos recebem argumentos em $a0-$a3, devolvem em $v0, são chamados com jal (que salva o endereço de retorno em $ra) e retornam com jr $ra.

15. PROCEDIMENTOS E PILHA: os cinco passos de uma chamada — colocar os parâmetros onde o procedimento os encontre, transferir o controle, obter espaço de armazenamento, executar a tarefa e colocar o retorno onde o chamador o encontre. jal <rótulo> desvia e salva em $ra o endereço da PRÓXIMA instrução; jr $ra volta. O PROBLEMA CENTRAL são as CHAMADAS ANINHADAS: um segundo jal sobrescreve $ra e o caminho de volta se perde — por isso $ra precisa ser salvo na PILHA antes. Protocolo: reserva-se espaço decrementando $sp (addi $sp, $sp, -8 para duas palavras), empilha-se com sw, e ao final desempilha-se com lw e devolve-se o espaço somando o mesmo valor a $sp. O exemplo mais importante é a FATORIAL RECURSIVA, tradução de int fat(int f) { if (f == 1) return f; else return f * fat(f - 1); }: o caso base copia $a0 para $v0 e sai; o caso recursivo abre 8 bytes na pilha, salva $ra e $a0, decrementa o argumento, chama jal fat, recupera $ra e $a0, fecha a pilha e multiplica mul $v0, $v0, $a0. Ele ensina de uma vez o caso base, a pilha crescendo para baixo, a necessidade de salvar $ra e o desempilhamento simétrico. TRABALHO DA TURMA: programa com menu (1 Fahrenheit→Celsius pela relação F = 32 + 9C/5, 2 enésimo termo de Fibonacci, 3 enésimo número par, 4 sair), em que cada cálculo tem de ser feito num PROCEDIMENTO com argumento e retorno, com o menu reexibido após cada operação.

16. ISA E FORMATOS DE INSTRUÇÃO: as instruções MIPS se dividem em aritméticas (add, addi, addu, addiu), lógicas (and, andi, or, ori), de memória (lw, lh, lb, sw, sh, sb), de controle de fluxo (beq, bne, j) e de comparação (slt). Todas ocupam exatamente 32 bits, em três formatos. FORMATO R: opcode(6) | rs(5) | rt(5) | rd(5) | shamt(5) | funct(6) — rs e rt são origens, rd é destino, shamt é a quantidade de deslocamento e funct especifica a operação dentro do opcode 0. FORMATO I: opcode(6) | rs(5) | rt(5) | imediato ou endereço(16) — a constante vai de -2^15 a 2^15-1. FORMATO J: opcode(6) | endereço(26) — os 26 bits viram 32 por deslocamento de 2 à esquerda (as instruções são alinhadas em 4 bytes) e herdando os 2 bits mais significativos do PC. CODIFICAÇÕES RESOLVIDAS: add $t2,$t1,$t0 → op=0, rs=9, rt=8, rd=10, shamt=0, funct=0x20, ou seja 000000 01001 01000 01010 00000 100000; sub $s7,$t8,$t0 → funct=0x22; addi $s1,$s2,100 → op=0x8, rs=18, rt=17, imediato=100; beq $t0,$t1,100 → op=0x4; j 245 → op=0x2. Como o campo imediato tem só 16 bits, CARREGAR UMA CONSTANTE DE 32 BITS EXIGE DUAS INSTRUÇÕES: lui (load upper immediate) para a metade alta e ori para a metade baixa.

17. MODOS DE ENDEREÇAMENTO (cinco): IMEDIATO — o operando está na própria instrução (addi $s2, $s1, 100); POR REGISTRADOR — os operandos estão em registradores, sem tocar a memória (add $t2, $t1, $t0); COM BASE ou DESLOCAMENTO — o endereço é a soma do registrador-base com uma constante (lw $t0, 8($s1)); RELATIVO AO PC — o endereço é o PC somado ao deslocamento da instrução (beq $t0, $t1, 28), o que torna o código realocável; e PSEUDODIRETO — os 26 bits de endereço da instrução concatenados com os bits altos do PC (j 300).

18. CAMINHO DE DADOS MONOCICLO: componentes — PC (incrementado de 4 em 4, porque toda instrução tem 4 bytes), memória de INSTRUÇÕES separada da memória de DADOS, banco de registradores (dois endereços de leitura, um de escrita, saídas Read data 1 e 2), ULA, EXTENSOR DE SINAL que estende o imediato de 16 para 32 bits PRESERVANDO o sinal, e multiplexadores escolhendo as origens. Sinais de controle: RegWrite, MemRead, MemWrite, MemtoReg, ALUSrc, ALUOp, PCWrite, PCWriteCond e IorD. O defeito do monociclo é que toda instrução dura o tempo da MAIS LENTA (o lw, que atravessa memória, registradores, ULA e memória de novo).

19. MULTICICLO E A UNIDADE DE CONTROLE: o multiciclo quebra a execução em etapas, e por isso pode usar UMA ÚNICA memória para instruções e dados e UMA ÚNICA ULA, reaproveitadas em ciclos diferentes — ao custo de REGISTRADORES INTERMEDIÁRIOS: IR (instrução buscada), A e B (operandos lidos), ALUOut (resultado da ULA) e MDR (dado lido da memória). Cada ciclo faz no máximo UM acesso à memória, OU um acesso ao banco de registradores, OU uma operação na ULA — e o período do clock passa a ser o MAIOR desses tempos, não a soma de todos. AS CINCO ETAPAS: (1) BUSCA: IR <= Memória[PC]; PC <= PC + 4. (2) DECODIFICAÇÃO e leitura de registradores: A <= Reg[IR[25:21]]; B <= Reg[IR[20:16]]; ALUOut <= PC + (extensão de sinal(IR[15:0]) << 2) — o endereço do desvio é calculado ESPECULATIVAMENTE, antes de saber se será usado. (3) EXECUÇÃO / cálculo de endereço / conclusão do desvio. (4) acesso à memória ou escrita do resultado tipo R. (5) conclusão do load: Reg[IR[20:16]] <= MDR. A unidade de controle é uma MÁQUINA DE ESTADOS FINITOS de 10 estados (0 busca, 1 decodificação, 2 cálculo de endereço, 3 leitura da memória, 4 escrita no registrador, 5 escrita na memória, 6 execução tipo R, 7 conclusão tipo R, 8 conclusão do beq, 9 conclusão do j): do estado 1 o opcode decide o caminho — 2 para lw/sw, 6 para tipo R, 8 para beq, 9 para j. Nela os sinais dependem não só do opcode mas também do CICLO em que a instrução está. O ALU CONTROL recebe ALUOp (2 bits, da unidade de controle) e funct (6 bits, da instrução) e produz 3 bits: lw/sw com ALUOp 00 → soma (010); beq com 01 → subtração (110); tipo R com 10 consulta o funct — 100000 add (010), 100010 sub (110), 100100 and (000), 100101 or (001), 101010 slt (111).

20. ANÁLISE DE DESEMPENHO: a pergunta de abertura é a ANALOGIA DOS AVIÕES — qual é o "melhor" entre Boeing 747, Concorde e DC-8? Depende da métrica: o 747 tem a maior taxa de passageiros×milha por hora (THROUGHPUT/largura de banda), o Concorde tem a maior velocidade (menor LATÊNCIA). TEMPO DE RESPOSTA (latência) é o tempo para completar UMA tarefa; LARGURA DE BANDA é o trabalho concluído por unidade de tempo — o usuário final se interessa pelo primeiro, o gerente do centro de dados pelo segundo. DESEMPENHO = 1 / tempo de execução, e "X é n vezes mais rápido que Y" significa Desempenho_X / Desempenho_Y = Tempo_Y / Tempo_X = n. Distingue-se o TEMPO DE RELÓGIO (wall-clock, que inclui disco, E/S e o sistema operacional) do TEMPO DE CPU (só o processador) — a análise foca no segundo. EQUAÇÃO FUNDAMENTAL: Tempo de CPU = ciclos de clock × período do clock = ciclos de clock / taxa de clock; e, abrindo os ciclos, TEMPO DE CPU = Nº DE INSTRUÇÕES × CPI × PERÍODO DO CLOCK, onde CPI é a média de ciclos por instrução. EXEMPLOS RESOLVIDOS: (I) um processador de 3,5 GHz que gasta 2,5 s consome 3,5×10⁹ × 2,5 = 8,75×10⁹ ciclos. (II) um programa roda em 10 s no computador A, de clock 2 GHz (logo 20×10⁹ ciclos); para rodar em 6 s no computador B, que precisa de 1,2× os ciclos de A, a taxa de B deve ser (1,2 × 20×10⁹)/6 = 4×10⁹, isto é 4 GHz. (III) mesma ISA, A com ciclo de 250 ps e CPI 2,0, B com ciclo de 500 ps e CPI 1,2: Tempo_A = I × 2,0 × 250 = 500·I ps e Tempo_B = I × 1,2 × 500 = 600·I ps, logo A é 1,2 vez mais rápido que B — MESMO TENDO O CPI MAIOR, porque seu ciclo de clock é bem menor. A lição é que nenhum dos três fatores decide sozinho.
`;

export const AOCP_TOPICS: QuizTopicOption[] = [
    {
        value: 'organizacao-desempenho',
        label: 'Organização, níveis e desempenho',
        prompt:
            'Fundamentos de organização de computadores da disciplina AOCP: computador como máquina de níveis, tradução versus interpretação, máquina virtual, os seis níveis contemporâneos, equivalência lógica entre hardware e software, microprograma; evolução histórica (ENIAC, transistor, circuito integrado, VLSI) e lei de Moore; tipos de computador (microcontroladores embutidos, pessoais, servidores, clusters, mainframes) e famílias de arquitetura (x86, ARM, AVR); CPU e o ciclo de busca-decodificação-execução em sete passos; RISC versus CISC e os princípios de projeto; paralelismo no nível de instrução (pipeline, latência versus largura de banda) e no nível de processador (SIMD, GPU, processador vetorial, multiprocessador e multicomputador); e análise de desempenho com tempo de resposta versus throughput, desempenho como inverso do tempo de execução, tempo de relógio versus tempo de CPU e a equação tempo de CPU = número de instruções × CPI × período do clock.',
    },
    {
        value: 'memoria-es',
        label: 'Memória, endianness e entrada/saída',
        prompt:
            'Memória e entrada/saída na disciplina AOCP: bit, célula e endereço; hierarquia de memória (registradores, cache, memória principal, secundária); ordenação big-endian e little-endian com o exemplo do inteiro 0A0B0C0D e o caráter bi-endian do MIPS; alinhamento e a diretiva .align; códigos de correção de erro de Hamming, distância de Hamming e bits de paridade; memória cache; SRAM, DRAM e ROM; armazenamento secundário (disco magnético com trilhas, cilindros e setores por zona, evolução IDE/ATA/SCSI, RAID de níveis 0 a 5, SSD flash, CD-ROM, CD-R, CD-RW, DVD e Blu-ray); controladores de entrada e saída; barramentos síncronos e assíncronos, arbitragem centralizada e descentralizada, PCI, PCI Express e USB; dispositivos de entrada e saída; e codificação de caracteres com ASCII, Unicode e UTF-8.',
    },
    {
        value: 'logica-digital',
        label: 'Nível lógico digital',
        prompt:
            'Nível lógico digital da disciplina AOCP: álgebra de Boole, George Boole e a aplicação de Claude Shannon a circuitos de relés; portas AND, OR, NOT, NAND, NOR e XOR com suas tabelas verdade e representações algébricas; as três representações equivalentes de um circuito (expressão booleana, tabela verdade e símbolo gráfico) e a conversão entre elas, incluindo a obtenção da expressão como soma de produtos a partir da tabela verdade; circuitos combinatórios versus sequenciais; multiplexador, demultiplexador, decodificador, codificador, comparador com XOR, deslocador, meio somador e somador completo, unidade lógica e aritmética construída por fatias de 1 bit e matriz de lógica programável; clock e tempo de ciclo; latch NOR, latch SR com clock e sua condição instável, latch D com clock; flip-flops e a diferença entre disparo por nível e disparo por borda; registradores formados por flip-flops; e a organização de chips de memória em palavras.',
    },
    {
        value: 'assembly-mips',
        label: 'Assembly MIPS e procedimentos',
        prompt:
            'Programação em assembly MIPS na disciplina AOCP: origem da arquitetura MIPS com Hennessy e Patterson, características RISC, 32 registradores de 32 bits e 32 de ponto flutuante; convenção dos registradores ($zero, $at, $v0-$v1 para retorno, $a0-$a3 para argumentos, $t0-$t9 temporários, $s0-$s7 salvos, $k0-$k1 do kernel, $gp, $sp, $fp e $ra); segmentos .data e .text, layout de memória com a pilha em 0x7fffffff crescendo para baixo; diretivas do montador (.word, .half, .byte, .asciiz, .ascii, .float, .space, .align, .globl); rótulos; chamadas ao sistema com o código em $v0 e argumentos em $a0 ou $f12 (print_int 1, print_float 2, print_string 4, read_int 5, read_float 6, read_string 8, sbrk 9, exit 10); simulador MARS; instruções básicas de carga, armazenamento, aritmética e desvio; tradução de estruturas de alto nível para assembly (o if escrito com o desvio negado, o for com teste no topo, o acesso a arrays com o índice avançando de 4 em 4 bytes); ponto flutuante com l.s, mov.s, mul.s e div.s; e procedimentos com jal e jr $ra, o problema das chamadas aninhadas, o protocolo de empilhamento e desempilhamento com $sp, sw e lw, e a função fatorial recursiva.',
    },
    {
        value: 'isa-caminho-dados',
        label: 'ISA, formatos e caminho de dados',
        prompt:
            'Arquitetura do conjunto de instruções e implementação na disciplina AOCP: os quatro princípios de projeto do MIPS (simplicidade favorece a regularidade, bons projetos exigem compromissos, menor é melhor, torne rápido o caso comum); os três formatos de instrução de 32 bits com a largura exata de cada campo — formato R com opcode, rs, rt, rd, shamt e funct; formato I com opcode, rs, rt e imediato de 16 bits; formato J com opcode e endereço de 26 bits — e a codificação binária de instruções como add, sub, addi, beq e j; por que carregar uma constante de 32 bits exige lui seguido de ori; os cinco modos de endereçamento (imediato, por registrador, com base ou deslocamento, relativo ao PC e pseudodireto); caminho de dados monociclo com PC, memórias separadas de instrução e dados, banco de registradores, ULA, extensor de sinal e multiplexadores, e sua limitação de duração fixa pela instrução mais lenta; caminho de dados multiciclo com memória e ULA únicas e os registradores intermediários IR, A, B, ALUOut e MDR; as cinco etapas de execução; a máquina de estados finitos de dez estados da unidade de controle; e o ALU Control combinando ALUOp com o campo funct.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Arquitetura e Organização de Computadores: o computador como máquina de níveis, tradução e interpretação, equivalência entre hardware e software; lei de Moore e evolução das arquiteturas; ciclo de busca-decodificação-execução; RISC versus CISC e princípios de projeto; paralelismo em nível de instrução e de processador; hierarquia de memória, endianness e correção de erro; barramentos, arbitragem e entrada/saída; nível lógico digital com portas, álgebra de Boole, circuitos combinatórios (multiplexador, decodificador, somador, ULA) e sequenciais (latch, flip-flop, registrador, memória); assembly MIPS com registradores, diretivas, syscalls, estruturas de controle, arrays, procedimentos e pilha; formatos de instrução R, I e J e modos de endereçamento; caminho de dados monociclo e multiciclo com a máquina de estados da unidade de controle; e análise de desempenho com a equação tempo de CPU = número de instruções × CPI × período do clock.',
    },
];

export const AOCP_EXAMS: ExamDefinition[] = [
    {
        id: 'p1',
        label: '1ª Prova',
        description:
            'Unidades 1 e 2: organização em níveis, evolução, CPU e ciclo de execução, RISC × CISC, paralelismo, memória, entrada/saída e análise de desempenho.',
    },
    {
        id: 'p2',
        label: '2ª Prova',
        description: 'Nível lógico digital, assembly MIPS, formatos de instrução, modos de endereçamento e caminho de dados.',
    },
    {
        id: 'trabalho',
        label: 'Trabalho MIPS',
        description:
            'Programa com menu em assembly MIPS: conversão Fahrenheit–Celsius, enésimo termo de Fibonacci e enésimo número par, cada cálculo em um procedimento.',
    },
];

export const AOCP_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'niveis', title: 'Máquinas de Níveis e Evolução', shortTitle: 'Níveis', exams: ['p1'] },
    { id: 'cpu-risc', title: 'CPU, Ciclo de Execução e RISC × CISC', shortTitle: 'CPU e RISC', exams: ['p1'] },
    { id: 'paralelismo', title: 'Paralelismo e Pipeline', shortTitle: 'Paralelismo', exams: ['p1'] },
    { id: 'memoria', title: 'Memória, Endianness e Armazenamento', shortTitle: 'Memória', exams: ['p1'] },
    { id: 'entrada-saida', title: 'Barramentos e Entrada/Saída', shortTitle: 'E/S', exams: ['p1'] },
    { id: 'desempenho', title: 'Análise de Desempenho', shortTitle: 'Desempenho', exams: ['p1'] },
    { id: 'logica-digital', title: 'Portas Lógicas e Álgebra de Boole', shortTitle: 'Lógica Digital', exams: ['p2'] },
    { id: 'circuitos', title: 'Circuitos Combinatórios e Sequenciais', shortTitle: 'Circuitos', exams: ['p2'] },
    { id: 'mips-basico', title: 'MIPS: Registradores e Estrutura', shortTitle: 'MIPS Básico', exams: ['p2', 'trabalho'] },
    { id: 'mips-pratica', title: 'MIPS na Prática', shortTitle: 'MIPS Prática', exams: ['p2', 'trabalho'] },
    { id: 'mips-procedimentos', title: 'Procedimentos e Pilha', shortTitle: 'Procedimentos', exams: ['p2', 'trabalho'] },
    { id: 'isa-formatos', title: 'Formatos de Instrução e Endereçamento', shortTitle: 'ISA', exams: ['p2'] },
    { id: 'caminho-dados', title: 'Caminho de Dados e Controle', shortTitle: 'Caminho de Dados', exams: ['p2'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type AocpSectionId = (typeof AOCP_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['p1'],
        question:
            'Um compilador C gera um executável a partir do código-fonte; um interpretador Python executa o script linha a linha. No vocabulário de Tanenbaum, o que distingue os dois?',
        options: [
            'A tradução gera um programa novo, inteiramente no nível de baixo; a interpretação não gera programa algum — lê as instruções do nível de cima como dados e as executa uma a uma',
            'A tradução é sempre mais rápida porque usa hardware; a interpretação usa software',
            'A interpretação gera um programa novo em L0; a tradução executa direto',
            'São sinônimos: os dois nomes descrevem o mesmo mecanismo de descida de nível',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. A diferença é a existência do programa intermediário: o tradutor produz um programa equivalente inteiramente em L0 e some de cena; o interpretador permanece rodando, tratando o programa em L1 como dado de entrada.',
        feedbackWrong:
            'O critério não é velocidade nem hardware: é se um programa novo em L0 é PRODUZIDO. Tradução produz (compilador); interpretação não produz — o interpretador fica em execução, examinando cada instrução de L1 como dado.',
    },
    {
        id: 'q2',
        exams: ['p1'],
        question:
            'Tanenbaum afirma que hardware e software são "logicamente equivalentes". Qual é a consequência prática dessa afirmação?',
        options: [
            'Que software é sempre preferível, por ser mais barato',
            'Que qualquer operação feita por software pode ser feita por hardware e vice-versa — a escolha entre eles é de custo, velocidade e flexibilidade, não de possibilidade',
            'Que hardware e software são fisicamente idênticos dentro do chip',
            'Que todo programa precisa ser reescrito ao mudar de máquina',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso mesmo. A equivalência é lógica, não física: o que se pode fazer com circuitos também se pode fazer com instruções. É exatamente por isso que a fronteira entre os dois se move ao longo da história — o microprograma é o caso clássico.',
        feedbackWrong:
            'A equivalência é LÓGICA: qualquer função realizável por hardware é realizável por software e vice-versa. Nada diz que um seja sempre melhor, nem que sejam fisicamente iguais. A escolha é de engenharia — custo, velocidade e flexibilidade.',
    },
    {
        id: 'q3',
        exams: ['p1'],
        question: 'Na formulação vista em aula, a Lei de Moore afirma que:',
        options: [
            'A velocidade do clock dobra a cada 18 meses',
            'O preço dos computadores cai 60% ao ano',
            'O número de transistores que cabem em um chip cresce cerca de 60% ao ano',
            'O consumo de energia por transistor cresce exponencialmente',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. A lei é sobre DENSIDADE DE TRANSISTORES, não sobre clock nem preço. A curva do 8086 ao Core i7-3960X, com seus 2,27 bilhões de transistores em 21×21 mm, é a ilustração usada no material.',
        feedbackWrong:
            'A Lei de Moore trata do número de TRANSISTORES por chip — cerca de 60% de aumento ao ano no material da disciplina. Frequência de clock e preço são consequências indiretas, e a frequência inclusive estagnou nos anos 2000 sem que a lei parasse.',
    },
    {
        id: 'q4',
        exams: ['p1'],
        question: 'Coloque em ordem os primeiros passos do ciclo de execução de uma instrução, conforme visto na disciplina:',
        options: [
            'Decodificar → buscar a instrução → incrementar o PC → executar',
            'Buscar a instrução da memória para o registrador de instrução → alterar o PC para a próxima instrução → determinar o tipo da instrução → localizar e buscar operandos, se houver → executar',
            'Executar → buscar → decodificar → incrementar o PC',
            'Incrementar o PC → executar → buscar a instrução → decodificar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Note um detalhe que costuma confundir: o PC é atualizado LOGO APÓS a busca, antes mesmo da execução — por isso um desvio precisa sobrescrever um PC que já aponta para a instrução seguinte.',
        feedbackWrong:
            'A ordem é busca → atualização do PC → decodificação → busca de operandos → execução → repete. O detalhe importante é que o PC avança logo depois da busca, e não no fim do ciclo.',
    },
    {
        id: 'q5',
        exams: ['p1'],
        question:
            'A comparação clássica diz que uma máquina RISC precisa de 4 a 5 instruções para fazer o que uma CISC faz com 1. Por que, ainda assim, o RISC saiu na frente?',
        options: [
            'Porque cada instrução RISC executa cerca de 10 vezes mais rápido, e o saldo compensa largamente as instruções extras',
            'Porque as máquinas RISC usam clocks mais lentos e consomem menos',
            'Porque instruções CISC não podem ser executadas em hardware',
            'Porque o RISC eliminou completamente o acesso à memória',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto — o argumento é aritmético: 5 instruções 10 vezes mais rápidas ainda saem na metade do tempo. E a história terminou em hibridização: a Intel manteve a ISA CISC por compatibilidade e passou a traduzi-la internamente em micro-operações no estilo RISC.',
        feedbackWrong:
            'O ganho vem da VELOCIDADE POR INSTRUÇÃO: cada instrução RISC é cerca de 10× mais rápida, o que mais que compensa precisar de 4 ou 5 delas. O RISC não eliminou o acesso à memória — restringiu-o a LOAD e STORE, que é diferente.',
    },
    {
        id: 'q6',
        exams: ['p1'],
        question: 'Qual dos princípios de projeto de computadores modernos caracteriza uma arquitetura "load-store"?',
        options: [
            'Instruções fáceis de decodificar',
            'Providenciar muitos registradores',
            'Somente as instruções LOAD e STORE referenciam a memória — todas as demais operam sobre registradores',
            'Maximizar a taxa de execução de instruções',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. Concentrar todo o tráfego com a memória em duas instruções simplifica o caminho de dados e o pipeline: as aritméticas passam a ter latência previsível, porque só tocam registradores.',
        feedbackWrong:
            '"Load-store" nomeia exatamente a restrição de que só LOAD e STORE acessam memória. Os outros princípios listados são reais e importantes, mas descrevem outras propriedades do projeto.',
    },
    {
        id: 'q7',
        exams: ['p1'],
        question:
            'Um pipeline de 5 estágios tem tempo de ciclo T. Qual é a latência de uma instrução e qual a vazão do processador?',
        options: [
            'Latência T; uma instrução concluída a cada 5T',
            'Latência 5T; uma instrução concluída a cada T',
            'Latência 5T; uma instrução concluída a cada 5T',
            'Latência T; uma instrução concluída a cada T',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é justamente esse o compromisso do pipeline: ele NÃO reduz o tempo de uma instrução individual (que ainda atravessa os 5 estágios, gastando 5T), mas multiplica a vazão, entregando uma instrução concluída por ciclo.',
        feedbackWrong:
            'A instrução atravessa os 5 estágios, então sua latência é 5T. Mas, com o pipeline cheio, uma instrução DIFERENTE termina a cada ciclo T. Pipeline troca latência por largura de banda.',
    },
    {
        id: 'q8',
        exams: ['p1'],
        question: 'Qual a diferença entre um multiprocessador e um multicomputador?',
        options: [
            'O multiprocessador tem CPUs idênticas; o multicomputador, CPUs de fabricantes diferentes',
            'O multiprocessador compartilha uma memória comum (CPUs fortemente acopladas); o multicomputador tem memórias locais e comunica-se por troca de mensagens (fracamente acopladas)',
            'O multiprocessador executa uma única instrução sobre vários dados; o multicomputador executa várias instruções',
            'O multicomputador está em um único gabinete; o multiprocessador é distribuído geograficamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O critério é a MEMÓRIA: compartilhada e única no multiprocessador, local e privada no multicomputador — daí "fortemente" e "fracamente" acopladas, e daí a necessidade de troca de mensagens no segundo.',
        feedbackWrong:
            'O que separa os dois é a organização da memória: comum e compartilhada (multiprocessador, fortemente acoplado) versus local a cada CPU, com comunicação por mensagens (multicomputador, fracamente acoplado). "Uma instrução sobre vários dados" descreve SIMD, outra classificação.',
    },
    {
        id: 'q9',
        exams: ['p1'],
        question: 'O inteiro de 32 bits 0A0B0C0D é gravado a partir do endereço a. Em uma máquina LITTLE-ENDIAN, o que há em cada byte?',
        options: [
            'a: 0A · a+1: 0B · a+2: 0C · a+3: 0D',
            'a: 0D · a+1: 0C · a+2: 0B · a+3: 0A',
            'a: 0B · a+1: 0A · a+2: 0D · a+3: 0C',
            'A ordem depende do sistema operacional, não da arquitetura',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Little-endian coloca o byte MENOS significativo no MENOR endereço — por isso a leitura byte a byte parece "invertida". A primeira alternativa é o arranjo big-endian. O MIPS é bi-endian: comuta conforme a máquina hospedeira.',
        feedbackWrong:
            'Em little-endian o byte menos significativo (0D) fica no menor endereço, e a sequência sai 0D, 0C, 0B, 0A. A ordem 0A, 0B, 0C, 0D é big-endian. É propriedade da arquitetura, não do sistema operacional.',
    },
    {
        id: 'q10',
        exams: ['p1'],
        question: 'Segundo a teoria de Hamming vista em aula, o que é preciso para CORRIGIR erros de d bits únicos?',
        options: [
            'Um código com distância de Hamming d + 1',
            'Um código com distância de Hamming 2d + 1',
            'Um bit de paridade, independentemente de d',
            'Duplicar toda a palavra na memória',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Distância d + 1 basta para DETECTAR d erros; para CORRIGIR são precisos 2d + 1 — a folga extra é o que permite decidir qual era a palavra original, e não apenas notar que algo mudou.',
        feedbackWrong:
            'Cuidado com o par: d + 1 DETECTA d erros; 2d + 1 CORRIGE d erros. Corrigir é mais caro que detectar, porque exige identificar de forma única a palavra válida mais próxima.',
    },
    {
        id: 'q11',
        exams: ['p1'],
        question: 'O que distingue um barramento síncrono de um assíncrono?',
        options: [
            'O síncrono transmite em uma direção por vez; o assíncrono, nas duas',
            'O síncrono é interno à CPU; o assíncrono liga periféricos',
            'O síncrono tem um clock de cristal e todas as atividades tomam número inteiro de ciclos; o assíncrono não tem clock mestre e cada ciclo dura o tempo requerido',
            'O síncrono usa arbitragem centralizada; o assíncrono, descentralizada',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. O síncrono é simples mas obriga todo dispositivo a esperar o próximo tique — e o ciclo tem de acomodar o dispositivo mais lento. O assíncrono se adapta ao tempo real de cada transação, ao custo de mais sinais de handshake.',
        feedbackWrong:
            'A distinção é a presença do CLOCK MESTRE: no síncrono, o oscilador de cristal define ciclos inteiros; no assíncrono não há clock, e o ciclo dura o necessário. Direção de transmissão (simplex/duplex) e arbitragem são classificações independentes.',
    },
    {
        id: 'q12',
        exams: ['p1'],
        question: 'Por que o UTF-8 se tornou dominante na web, apesar de o Unicode já designar 16 bits a cada caractere?',
        options: [
            'Porque tem tamanho variável de 1 a 4 bytes e mantém os códigos 0–127 idênticos ao ASCII em um único byte, o que preserva a compatibilidade e economiza espaço em texto ocidental',
            'Porque suporta mais caracteres que o Unicode',
            'Porque é o único formato aceito pelo protocolo HTTP',
            'Porque usa sempre 2 bytes, o que simplifica o processamento',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. O truque do UTF-8 é o tamanho variável: texto ASCII antigo continua válido byte a byte, sem conversão, e ainda assim há espaço para cerca de dois bilhões de caracteres nos comprimentos maiores.',
        feedbackWrong:
            'O UTF-8 é uma CODIFICAÇÃO do Unicode, então não suporta mais caracteres que ele. Sua vantagem é ser de tamanho variável (1 a 4 bytes) e representar os 128 caracteres ASCII em um único byte — compatibilidade retroativa e economia.',
    },
    {
        id: 'q13',
        exams: ['p1'],
        question:
            'Comparando o Boeing 747 e o Concorde, o material pergunta qual é o "melhor" avião. Qual é a lição transportada para computadores?',
        options: [
            'Que o mais rápido é sempre o melhor',
            'Que latência (tempo de uma tarefa) e largura de banda (trabalho por período) são métricas distintas — o 747 vence em passageiros×milha por hora, o Concorde em velocidade',
            'Que velocidade e capacidade sempre crescem juntas',
            'Que a comparação entre máquinas é impossível',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a frase que resume: o usuário final se interessa pelo tempo de resposta; o gerente do centro de dados, pela largura de banda. São perguntas diferentes, com respostas diferentes.',
        feedbackWrong:
            'A analogia existe justamente para mostrar que "melhor" depende da MÉTRICA. O Concorde ganha em latência (velocidade); o 747 ganha em throughput (passageiros×milha por hora). Nem sempre as duas andam juntas.',
    },
    {
        id: 'q14',
        exams: ['p1'],
        question: 'Um processador de 3,5 GHz executa um programa em 2,5 s. Quantos ciclos de clock foram consumidos?',
        options: ['1,4 × 10⁹ ciclos', '8,75 × 10⁹ ciclos', '3,5 × 10⁹ ciclos', '875 × 10⁹ ciclos'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: ciclos = taxa de clock × tempo = 3,5 × 10⁹ ciclos/s × 2,5 s = 8,75 × 10⁹ ciclos. Note que a taxa de clock é ciclos por segundo, então basta multiplicar pelo tempo.',
        feedbackWrong:
            'Ciclos = taxa de clock × tempo de execução = 3,5 × 10⁹ × 2,5 = 8,75 × 10⁹. Dividir em vez de multiplicar (o que daria 1,4 × 10⁹) é o erro mais comum aqui — a taxa já está em ciclos por segundo.',
    },
    {
        id: 'q15',
        exams: ['p1'],
        question:
            'Um programa roda em 10 s no computador A, cujo clock é de 2 GHz. Deseja-se que rode em 6 s no computador B, que precisa de 1,2 vez os ciclos de A. Qual deve ser a taxa de clock de B?',
        options: ['2,4 GHz', '3,3 GHz', '4 GHz', '5 GHz'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Ciclos de A = 10 s × 2 × 10⁹ = 20 × 10⁹. B precisa de 1,2 × 20 × 10⁹ = 24 × 10⁹ ciclos em 6 s, logo taxa = 24 × 10⁹ / 6 = 4 × 10⁹ = 4 GHz.',
        feedbackWrong:
            'Faça em duas etapas: primeiro os ciclos de A (10 × 2×10⁹ = 20×10⁹); depois os de B (1,2 × 20×10⁹ = 24×10⁹) divididos pelo tempo desejado (6 s) → 4×10⁹ = 4 GHz. Esquecer o fator 1,2 leva a 3,3 GHz.',
    },
    {
        id: 'q16',
        exams: ['p1'],
        question:
            'Dois computadores executam a mesma ISA. A tem ciclo de 250 ps e CPI 2,0; B tem ciclo de 500 ps e CPI 1,2. Qual é mais rápido, e por quê?',
        options: [
            'B, porque tem o menor CPI',
            'A, por 1,2 vez — apesar do CPI maior, seu ciclo de clock é bem menor: 2,0 × 250 = 500 ps por instrução contra 1,2 × 500 = 600 ps de B',
            'São equivalentes, pois os produtos se cancelam',
            'Não é possível comparar sem saber o número de instruções',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e este é o exemplo mais instrutivo do material. Como a ISA é a mesma, o número de instruções I é igual e se cancela na razão: 600·I / 500·I = 1,2. Um CPI menor NÃO garante máquina mais rápida.',
        feedbackWrong:
            'O CPI sozinho não decide. Tempo = I × CPI × período: A gasta 2,0 × 250 = 500 ps por instrução, B gasta 1,2 × 500 = 600 ps. Como a ISA é a mesma, I se cancela e A é 1,2 vez mais rápido — mesmo com o CPI maior.',
    },
    {
        id: 'q17',
        exams: ['p1', 'p2'],
        question: 'Na equação fundamental de desempenho, o que exatamente é o CPI?',
        options: [
            'O número de ciclos que o processador executa por segundo',
            'A média de ciclos de clock gastos por instrução',
            'O número de instruções executadas por ciclo',
            'O período do clock medido em picossegundos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: Ciclos Por Instrução, uma média sobre o programa inteiro (instruções diferentes custam ciclos diferentes). Seu inverso, IPC, é a métrica dual usada em processadores superescalares.',
        feedbackWrong:
            'CPI = ciclos de clock por instrução, em média. Instruções por ciclo é o IPC, seu inverso. Ciclos por segundo é a taxa de clock, e o período do clock é o inverso dessa taxa — três grandezas distintas na mesma equação.',
    },
    {
        id: 'q18',
        exams: ['p2'],
        question: 'Qual foi a contribuição de Claude Shannon, em 1938, para o nível lógico digital?',
        options: [
            'Criou a álgebra booleana',
            'Inventou o transistor',
            'Aplicou a álgebra de Boole a circuitos de relés de telefonia, permitindo descrever, analisar e simplificar circuitos matematicamente',
            'Projetou o primeiro circuito integrado',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. A álgebra é de Boole (1854); a PONTE entre ela e os circuitos elétricos é de Shannon, então assistente de pesquisa no MIT — e é essa ponte que torna possível simplificar um circuito manipulando uma expressão.',
        feedbackWrong:
            'A álgebra foi criada por George Boole em 1854, quase um século antes. Shannon fez a aplicação a circuitos de comutação em 1938 — a ideia de que uma expressão booleana descreve um circuito, e que simplificar a expressão simplifica o circuito.',
    },
    {
        id: 'q19',
        exams: ['p2'],
        question: 'Uma porta produz saída 1 se e somente se suas duas entradas forem DIFERENTES. Que porta é essa?',
        options: ['NAND', 'NOR', 'XOR', 'AND'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto — XOR, o ou-exclusivo (S = A ⊕ B). É exatamente essa propriedade que a torna a base do COMPARADOR: se todas as saídas XOR forem 0, as palavras são iguais.',
        feedbackWrong:
            'Saída 1 para entradas diferentes é o XOR. NAND dá 1 quando pelo menos uma entrada é 0; NOR dá 1 só quando ambas são 0; AND dá 1 só quando ambas são 1.',
    },
    {
        id: 'q20',
        exams: ['p2'],
        question: 'Como se obtém a expressão booleana a partir de uma tabela verdade, no método de soma de produtos visto em aula?',
        options: [
            'Para cada linha cujo resultado é 1, escreve-se o produto (AND) das entradas — negadas onde valem 0 — e somam-se (OR) todos esses termos',
            'Para cada linha cujo resultado é 0, escreve-se o produto das entradas e multiplicam-se os termos',
            'Somam-se todas as entradas e compara-se com o resultado',
            'Constrói-se um multiplexador com uma entrada por linha da tabela',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. Cada termo AND "reconhece" exatamente uma linha de resultado 1, e o OR final aceita qualquer uma delas. Em circuito: um inversor por entrada negada, um AND por linha e um OR reunindo tudo.',
        feedbackWrong:
            'Olham-se as linhas com resultado 1 (não 0): cada uma vira um produto AND com as variáveis negadas onde a entrada é 0, e o OR desses produtos é a expressão. Daí o nome soma (OR) de produtos (AND).',
    },
    {
        id: 'q21',
        exams: ['p2'],
        question: 'Um multiplexador com 3 linhas de controle tem quantas entradas de dados e quantas saídas?',
        options: ['3 entradas e 3 saídas', '8 entradas e 1 saída', '6 entradas e 2 saídas', '1 entrada e 8 saídas'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: 2³ = 8 entradas de dados e uma única saída. Descrever 1 entrada e 8 saídas é o DEMULTIPLEXADOR, a operação inversa.',
        feedbackWrong:
            'O MUX tem 2ⁿ entradas de dados, n linhas de controle e 1 saída — com n = 3, são 8 entradas. Uma entrada distribuída em 8 saídas seria um demultiplexador.',
    },
    {
        id: 'q22',
        exams: ['p2'],
        question: 'Qual a diferença entre um MEIO SOMADOR e um SOMADOR COMPLETO?',
        options: [
            'O meio somador soma metade dos bits da palavra; o completo, todos',
            'O meio somador tem duas entradas e produz soma e vai-um, mas não recebe o carry vindo da posição anterior; o somador completo recebe esse carry de entrada',
            'O meio somador só funciona com números positivos',
            'O somador completo não produz vai-um',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É justamente por não aceitar carry de entrada que o meio somador só serve para o bit menos significativo — as demais posições precisam do somador completo, encadeado pelo vai-um.',
        feedbackWrong:
            'A diferença é o CARRY DE ENTRADA: o meio somador não tem, o completo tem. Por isso, ao somar palavras de n bits, apenas a posição menos significativa poderia usar um meio somador; as outras precisam receber o vai-um da anterior.',
    },
    {
        id: 'q23',
        exams: ['p2'],
        question: 'Por que o latch D com clock resolve um problema do latch SR com clock?',
        options: [
            'Porque é mais rápido',
            'Porque tem uma única entrada de dados, o que torna impossível a combinação instável S = R = 1 do SR',
            'Porque não precisa de clock',
            'Porque armazena 2 bits em vez de 1',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Com uma só entrada de dados, D e sua negação alimentam os dois lados — o estado proibido simplesmente deixa de existir. Enquanto o clock estiver em 1, o latch lê e guarda D.',
        feedbackWrong:
            'O problema do SR é a combinação S = R = 1, que deixa o circuito instável. O latch D elimina a possibilidade por construção: há uma única entrada de dados, e a negação interna garante que as duas entradas nunca coincidam.',
    },
    {
        id: 'q24',
        exams: ['p2'],
        question: 'O que distingue um FLIP-FLOP de um LATCH?',
        options: [
            'O flip-flop armazena mais bits',
            'O latch é sequencial e o flip-flop é combinatório',
            'O flip-flop muda de estado na BORDA do clock (transição 0→1 ou 1→0); o latch muda enquanto o clock está no NÍVEL ativo',
            'O flip-flop não precisa de clock',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — disparo por borda contra disparo por nível. A borda é um instante, o que dá ao flip-flop um ponto de amostragem preciso: é o que permite construir registradores e máquinas de estado confiáveis.',
        feedbackWrong:
            'A distinção é o momento da transição: o latch é sensível ao NÍVEL (muda durante todo o tempo em que o clock está ativo), o flip-flop é sensível à BORDA (muda apenas no instante da transição). Ambos são sequenciais e ambos usam clock.',
    },
    {
        id: 'q25',
        exams: ['p2'],
        question: 'Por que a SRAM é usada como cache e a DRAM como memória principal?',
        options: [
            'A SRAM usa circuitos parecidos com flip-flops, sendo rápida mas cara e menos densa; a DRAM usa um transistor e um capacitor por célula, sendo densa e barata mas mais lenta e precisando de refresh',
            'A SRAM é não volátil e a DRAM é volátil',
            'A DRAM é mais rápida, mas a SRAM tem mais capacidade',
            'A SRAM só armazena instruções e a DRAM só dados',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. É um compromisso de custo por bit contra velocidade: pouca memória rápida perto da CPU (cache SRAM) e muita memória barata mais longe (DRAM) — exatamente o que justifica a hierarquia de memória.',
        feedbackWrong:
            'Ambas são VOLÁTEIS (perdem conteúdo sem energia; a não volátil é a ROM). A SRAM, feita de circuitos tipo flip-flop, é rápida, cara e pouco densa; a DRAM, com um transistor e um capacitor por célula, é densa e barata, mas mais lenta e precisa de refresh.',
    },
    {
        id: 'q26',
        exams: ['p2', 'trabalho'],
        question: 'Qual é a diferença de convenção entre os registradores $t0–$t9 e $s0–$s7 no MIPS?',
        options: [
            'Os $t são de 32 bits e os $s de 64 bits',
            'Os $t guardam inteiros e os $s guardam ponto flutuante',
            'Os $t são temporários e podem ser destruídos por uma chamada de procedimento; os $s são "salvos" e devem ser preservados entre chamadas',
            'Os $t só podem ser lidos e os $s só escritos',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. É convenção, não imposição do hardware: quem chama sabe que valores em $t podem sumir; quem é chamado se compromete a devolver os $s como os encontrou (salvando-os na pilha, se precisar usá-los).',
        feedbackWrong:
            'A diferença é de PROTOCOLO entre chamador e chamado: $t são temporários (podem ser sobrescritos por um procedimento chamado), $s são preservados. Todos têm 32 bits e guardam inteiros; ponto flutuante fica em $f0–$f31.',
    },
    {
        id: 'q27',
        exams: ['p2', 'trabalho'],
        question: 'No MIPS, para que serve carregar um valor em $v0 imediatamente antes de executar syscall?',
        options: [
            'Para indicar o endereço de retorno da chamada',
            'Para informar QUAL serviço do sistema se deseja — 1 imprime inteiro, 4 imprime string, 5 lê inteiro, 10 encerra o programa',
            'Para reservar espaço na pilha',
            'Para armazenar o resultado da chamada anterior',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: $v0 é o SELETOR do serviço; os argumentos vão em $a0 (ou $f12, para ponto flutuante). Nas chamadas de leitura, o mesmo $v0 volta trazendo o valor lido — read_int devolve em $v0, read_float em $f0.',
        feedbackWrong:
            '$v0 carrega o CÓDIGO DO SERVIÇO desejado antes do syscall (1 print_int, 2 print_float, 4 print_string, 5 read_int, 6 read_float, 10 exit). O endereço de retorno de procedimentos fica em $ra, e a pilha é manipulada por $sp.',
    },
    {
        id: 'q28',
        exams: ['p2', 'trabalho'],
        question: 'Qual a diferença entre as diretivas .ascii e .asciiz?',
        options: [
            'A .asciiz aceita acentos e a .ascii não',
            'A .asciiz acrescenta o caractere nulo ao final da string; a .ascii não',
            'A .ascii reserva o dobro do espaço',
            'A .asciiz só pode ser usada no segmento .text',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o "z" vem justamente de zero. Isso importa porque o serviço print_string imprime até encontrar o nulo: uma string declarada com .ascii sairia despejando a memória seguinte até topar com um zero por acaso.',
        feedbackWrong:
            'A diferença é o terminador: .asciiz acrescenta o caractere nulo (0) ao final, .ascii não. Como o print_string para no nulo, usar .ascii por engano faz a impressão invadir o que vier depois na memória.',
    },
    {
        id: 'q29',
        exams: ['p2', 'trabalho'],
        question:
            'Para traduzir "se A == B então imprima X senão imprima Y", o exemplo da disciplina escreve `bne $s0, $s1, ELSE`. Por que o desvio usa a condição NEGADA?',
        options: [
            'Porque o MIPS não possui a instrução beq',
            'Porque o desvio serve para PULAR o bloco quando a condição falha — a execução cai naturalmente no bloco "então" quando ela é satisfeita',
            'Porque bne é mais rápida que beq',
            'Porque o rótulo ELSE precisa vir antes no código',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Em assembly o fluxo é sequencial por padrão: o caminho "verdadeiro" fica logo abaixo e não custa desvio nenhum; só o caso falso precisa saltar. Por isso o teste no código é o oposto do teste do if em alto nível.',
        feedbackWrong:
            'O beq existe e é igualmente rápido. A inversão é estrutural: como a execução continua na instrução seguinte por padrão, coloca-se o bloco "então" logo abaixo e usa-se o desvio para escapar dele quando a condição NÃO vale.',
    },
    {
        id: 'q30',
        exams: ['p2', 'trabalho'],
        question:
            'Um vetor é declarado como `c: .word 3, 0, 1, 2, -6, ...` e o endereço-base está em $s2. O que a instrução `lw $t0, 8($s2)` carrega?',
        options: [
            'O nono elemento do vetor (índice 8)',
            'O terceiro elemento do vetor (índice 2), porque cada palavra ocupa 4 bytes e o deslocamento é contado em BYTES',
            'O oitavo byte do primeiro elemento',
            'O endereço do vetor somado a 8, sem ler a memória',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é o comentário-chave do professor: "o índice cresce de 4 em 4 por conta do tamanho do word". Deslocamento 0 é o primeiro elemento, 4 o segundo, 8 o terceiro. Por isso os laços sobre vetores somam 4 ao endereço a cada iteração.',
        feedbackWrong:
            'O deslocamento é contado em BYTES, e cada .word ocupa 4 bytes: o deslocamento 8 corresponde ao índice 2 (o terceiro elemento). Para chegar ao índice 8 seria preciso deslocamento 32.',
    },
    {
        id: 'q31',
        exams: ['p2', 'trabalho'],
        question: 'O que exatamente a instrução `jal fat` faz?',
        options: [
            'Desvia para o rótulo fat e salva em $ra o endereço da PRÓXIMA instrução, para permitir o retorno',
            'Desvia para fat sem salvar nada — o retorno tem de ser calculado manualmente',
            'Empilha automaticamente todos os registradores antes de desviar',
            'Chama um serviço do sistema operacional identificado pelo rótulo',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto — jump and link: o "link" é justamente gravar o endereço de retorno em $ra, que depois o `jr $ra` consome. O que ele NÃO faz é salvar registradores: isso é responsabilidade do programador, com a pilha.',
        feedbackWrong:
            'jal = jump and link: desvia E grava em $ra o endereço da instrução seguinte. Mas ele não empilha nada automaticamente — salvar $ra e os registradores necessários na pilha é trabalho manual, e é exatamente o que torna a recursão delicada.',
    },
    {
        id: 'q32',
        exams: ['p2', 'trabalho'],
        question: 'Em uma função recursiva MIPS, o que acontece se $ra NÃO for salvo na pilha antes da chamada recursiva?',
        options: [
            'Nada: o hardware mantém uma pilha interna de endereços de retorno',
            'O programa fica mais lento, mas funciona',
            'O jal da chamada recursiva sobrescreve $ra com o endereço interno da própria função, e o caminho de volta ao chamador original se perde — a função retorna para si mesma, em laço infinito ou lixo',
            'O compilador emite um erro na montagem',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. $ra é um único registrador, não uma pilha: cada jal o sobrescreve. Salvá-lo na pilha antes de descer um nível é o que preserva a cadeia de retornos — é a razão de existir do protocolo addi $sp, -8 / sw $ra, 0($sp).',
        feedbackWrong:
            'Não há pilha em hardware, e o montador não detecta isso — é erro de lógica, não de sintaxe. Como $ra é um só registrador, o jal recursivo destrói o endereço de retorno do chamador e o programa perde o caminho de volta.',
    },
    {
        id: 'q33',
        exams: ['p2', 'trabalho'],
        question:
            'O trecho `addi $sp, $sp, -8` aparece antes de `sw $ra, 0($sp)` e `sw $a0, 4($sp)`. Por que o ponteiro de pilha é DECREMENTADO?',
        options: [
            'Por convenção arbitrária do montador MARS',
            'Porque a pilha do MIPS começa no topo da memória (0x7fffffff) e CRESCE PARA BAIXO — reservar espaço significa mover $sp para endereços menores',
            'Porque 8 é o tamanho de uma palavra',
            'Porque valores negativos são armazenados invertidos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A pilha nasce no alto do espaço de endereçamento e desce, enquanto os dados dinâmicos sobem — assim as duas regiões só colidem se a memória realmente acabar. Ao final, `addi $sp, $sp, 8` devolve o espaço.',
        feedbackWrong:
            'A pilha do MIPS começa em 0x7fffffff e cresce em direção aos endereços MENORES; por isso abrir espaço é subtrair de $sp. O 8 são duas palavras de 4 bytes ($ra e $a0), não o tamanho de uma.',
    },
    {
        id: 'q34',
        exams: ['p2'],
        question: 'Quais são os campos do formato R do MIPS, com suas larguras?',
        options: [
            'opcode(6) | rs(5) | rt(5) | imediato(16)',
            'opcode(6) | endereço(26)',
            'opcode(6) | rs(5) | rt(5) | rd(5) | shamt(5) | funct(6)',
            'opcode(8) | rs(8) | rt(8) | rd(8)',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato — e a soma fecha os 32 bits: 6+5+5+5+5+6. O funct existe porque todas as instruções tipo R compartilham o opcode 0; é ele que distingue add de sub, and, or e slt.',
        feedbackWrong:
            'O formato R tem seis campos: opcode(6), rs(5), rt(5), rd(5), shamt(5) e funct(6). A primeira opção descreve o formato I e a segunda, o formato J — os três somam 32 bits, mas repartidos de modos diferentes.',
    },
    {
        id: 'q35',
        exams: ['p2'],
        question: 'Por que carregar uma constante de 32 bits em um registrador MIPS exige DUAS instruções?',
        options: [
            'Porque o banco de registradores só aceita escrita de 16 bits por vez',
            'Porque o campo imediato do formato I tem apenas 16 bits — usa-se lui para a metade alta e ori para a metade baixa',
            'Porque a ULA opera com 16 bits',
            'Porque a memória é endereçada a byte',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A instrução inteira tem 32 bits e precisa gastar parte deles com opcode e registradores, sobrando 16 para o imediato. É o preço do princípio "simplicidade favorece a regularidade": todas as instruções têm o mesmo tamanho.',
        feedbackWrong:
            'O limite está no CAMPO IMEDIATO do formato I: 16 bits, porque a instrução inteira tem 32 e o resto vai para opcode e registradores. Registradores e ULA são de 32 bits. Daí o par lui + ori.',
    },
    {
        id: 'q36',
        exams: ['p2'],
        question: 'A instrução `lw $t0, 8($s1)` usa qual modo de endereçamento?',
        options: [
            'Imediato',
            'Por registrador',
            'Com base (ou deslocamento): o endereço é a soma do conteúdo do registrador-base com a constante',
            'Pseudodireto',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. É o modo que torna natural o acesso a vetores e a campos de estruturas: o registrador guarda o início, a constante escolhe o elemento. Os outros quatro modos são imediato, por registrador, relativo ao PC e pseudodireto.',
        feedbackWrong:
            'É endereçamento COM BASE: endereço = $s1 + 8. No imediato o operando estaria na própria instrução (addi); por registrador não haveria acesso à memória (add); pseudodireto é o do jump, com 26 bits de endereço.',
    },
    {
        id: 'q37',
        exams: ['p2'],
        question: 'Qual princípio de projeto do MIPS explica a existência de TRÊS formatos de instrução, em vez de apenas um?',
        options: [
            'Simplicidade favorece a regularidade',
            'Bons projetos exigem compromissos — um formato único não acomodaria bem imediatos, três registradores e endereços longos ao mesmo tempo',
            'Menor é melhor',
            'Torne rápido o caso comum',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A regularidade pura pediria um formato só; a realidade pediu espaço para constantes de 16 bits e endereços de 26. Os três formatos são o meio-termo — e note que todos mantêm o opcode nos mesmos 6 bits iniciais.',
        feedbackWrong:
            'Este é o princípio do COMPROMISSO. A "simplicidade favorece a regularidade" é o que mantém as instruções com 32 bits fixos e o opcode sempre na mesma posição; o conflito entre ela e a necessidade de campos maiores é resolvido pelos três formatos.',
    },
    {
        id: 'q38',
        exams: ['p2'],
        question: 'Qual é a limitação central do caminho de dados MONOCICLO?',
        options: [
            'Não consegue executar instruções de desvio',
            'Precisa de registradores intermediários caros',
            'Toda instrução dura o tempo da MAIS LENTA (o lw, que percorre memória, registradores, ULA e memória de novo), desperdiçando tempo nas instruções curtas',
            'Só funciona com uma única memória compartilhada',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. Com período de clock fixo dimensionado pelo pior caso, uma instrução simples paga o preço do lw. É precisamente esse desperdício que o multiciclo ataca, quebrando a execução em etapas menores.',
        feedbackWrong:
            'O problema é o período de clock único, dimensionado pela instrução mais lenta. Registradores intermediários (IR, A, B, ALUOut, MDR) e memória única são características do MULTICICLO — o monociclo usa memórias separadas justamente por fazer tudo em um ciclo.',
    },
    {
        id: 'q39',
        exams: ['p2'],
        question: 'O que o caminho de dados MULTICICLO ganha ao dividir a execução em etapas?',
        options: [
            'Pode reaproveitar uma única memória para instruções e dados e uma única ULA, ao custo dos registradores intermediários IR, A, B, ALUOut e MDR',
            'Elimina a necessidade de unidade de controle',
            'Executa várias instruções simultaneamente, como um pipeline',
            'Dispensa o extensor de sinal',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Como cada etapa usa um recurso por vez, o mesmo hardware serve a papéis diferentes em ciclos diferentes — e o período do clock passa a ser o MAIOR tempo de uma etapa, não a soma de todas.',
        feedbackWrong:
            'O ganho é o REAPROVEITAMENTO de hardware (uma memória, uma ULA), pago com registradores intermediários. O multiciclo continua executando UMA instrução por vez — executar várias simultaneamente é o pipeline — e sua unidade de controle fica mais complexa, não desnecessária.',
    },
    {
        id: 'q40',
        exams: ['p2'],
        question:
            'Na segunda etapa do multiciclo (decodificação), calcula-se ALUOut <= PC + (extensão de sinal(IR[15:0]) << 2), mesmo que a instrução não seja um desvio. Por quê?',
        options: [
            'Porque é um erro de projeto tolerado por simplicidade',
            'Porque o endereço do desvio é calculado ESPECULATIVAMENTE, enquanto a ULA está ociosa e antes de se saber o opcode — se a instrução não for um desvio, o valor é simplesmente ignorado',
            'Porque toda instrução MIPS altera o PC dessa forma',
            'Porque o extensor de sinal só funciona na segunda etapa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É trabalho de graça: nessa etapa a ULA não tem nada a fazer, e adiantar o cálculo permite que o beq termine já na terceira etapa. Se a instrução for outra, o conteúdo de ALUOut é descartado sem prejuízo.',
        feedbackWrong:
            'Não é erro: é ESPECULAÇÃO. Na etapa de decodificação a ULA está livre e o opcode ainda está sendo examinado, então adianta-se o cálculo do endereço de desvio. Se a instrução não for um beq, o valor calculado é apenas ignorado.',
    },
];
