import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const EDFI_GUIDE_CONTEXT = `
GUIA COMPLETO DE EDUCAÇÃO FINANCEIRA (EDFI) - Resumo:

1. A DISCIPLINA: Educação Financeira (EDFI), optativa da categoria humanística, 40h, turma 2024.2 do BSI/IFAL, com encontros síncronos gravados. Não há prova declarada: a avaliação se dá por 16 atividades — formulários, pesquisas em dupla ou trio e análises de texto. O arco vai do INTERNO para o EXTERNO: autoconhecimento e comportamento → dívidas e superendividamento → planejamento familiar → crédito (cartão e cheque especial) → bets → investimentos. Materiais-base: cartilhas da FEBRABAN pela plataforma "Meu Bolso em Dia" (planejamento financeiro familiar, guia do cartão de crédito, guia do cheque especial, e-book de saída das dívidas e "Quem sonha poupa"), o Glossário Simplificado de Termos Financeiros do BANCO CENTRAL DO BRASIL (Departamento de Educação Financeira, novembro de 2013, 114 verbetes), um trecho de "Como organizar sua vida financeira" de GUSTAVO CERBASI, uma apresentação sobre Tesouro Direto e o livro "Manual do Pequeno Investidor em Ações", de Fábio Portela.

2. AUTOCONHECIMENTO E OS QUATRO INDICADORES PATRIMONIAIS (Cerbasi): tudo começa por uma "fotografia financeira" — quanto entra, quanto sai e para onde vai o dinheiro. As perguntas do diagnóstico: idade atual, idade prevista para a aposentadoria, prazo em anos, renda média mensal, gasto médio mensal da família e valor total dos investimentos. Distinção essencial: RENTABILIDADE BRUTA é a obtida após os custos e taxas, mas ANTES do Imposto de Renda e da inflação; RENTABILIDADE LÍQUIDA é o que sobra depois de descontar o IR no resgate e a inflação do período. A rentabilidade líquida de investimentos conservadores costuma ficar entre 3% e 6% ao ano. Os quatro indicadores, do mais urgente ao mais ambicioso: PMS — PATRIMÔNIO MÍNIMO DE SOBREVIVÊNCIA, igual a 6 vezes o gasto mensal da família, é a reserva para reorganizar a vida em caso de desemprego, e deve ser constituída por investimentos de LIQUIDEZ (não a casa nem o carro); PMR — PATRIMÔNIO MÍNIMO RECOMENDADO, de 12 vezes o gasto mensal para quem tem boa empregabilidade e 20 vezes para quem tem baixa; PI — PATRIMÔNIO IDEAL, calculado como 10% do gasto anual multiplicado pela idade; e PNIF — PATRIMÔNIO NECESSÁRIO PARA A INDEPENDÊNCIA FINANCEIRA, igual ao gasto anual dividido pela rentabilidade líquida anual, isto é, o patrimônio que permitiria parar de trabalhar. Os quatro NÃO são excludentes nem se somam: o PMS faz parte do PMR, que faz parte do PI, que é uma fração do PNIF. O material reconhece que menos de 5% das pessoas mantêm a situação dentro dessas recomendações — e argumenta que isso não as invalida, servindo de referência, do mesmo modo que quem pratica exercícios regulares está entre os 5% com melhor condicionamento.

3. PLANEJAMENTO FINANCEIRO FAMILIAR (Febraban) — AS QUATRO ETAPAS: (1) ANALISAR A SITUAÇÃO ATUAL, listando os ganhos consistentes (salários, benefícios, auxílios, aposentadoria) e as despesas divididas em FIXAS (valor igual ou parecido todo mês — aluguel, mensalidade escolar, financiamentos) e VARIÁVEIS (mercado, água, luz, gás, transporte), e calculando TOTAL DE RECEITAS − TOTAL DE DESPESAS = SALDO MENSAL; (2) DEFINIR UM OBJETIVO, que depende do saldo encontrado; (3) ESTABELECER METAS, quebrando o objetivo em parcelas mensais — quem precisa juntar R$ 600 em seis meses deve poupar R$ 100 por mês; (4) TRAÇAR O PLANO DE AÇÃO. As três leituras possíveis do saldo: POSITIVO significa sobra de caixa e folga para poupar; IGUAL A ZERO é empate financeiro, com orçamento apertado; NEGATIVO significa que o dinheiro acaba antes do mês terminar. E o objetivo muda conforme o caso: com saldo negativo, o primeiro objetivo é EQUILIBRAR o orçamento; com empate, conseguir fôlego para iniciar a reserva de emergência; com saldo positivo, além da reserva, é possível buscar outros objetivos. Os objetivos se priorizam por prazo: CURTO até seis meses, MÉDIO de seis meses a dois anos, LONGO acima de dois anos. Benefícios do planejamento citados: transformar sonhos em conquistas, lidar melhor com imprevistos, fazer escolhas melhores, contribuir com a educação financeira dos filhos, tranquilizar corpo e mente e promover a saúde financeira.

4. ENDIVIDADO, INADIMPLENTE E SUPERENDIVIDADO: são estados distintos, e a distinção é o eixo de todo o bloco de dívidas. ENDIVIDADO é quem tem dívidas a vencer e consegue pagá-las — situação normal e administrável. INADIMPLENTE, na definição do glossário do Banco Central, é o "estado de quem não paga a dívida"; a inadimplência surge quando o cliente não cumpre a obrigação de pagar, podendo resultar em protestos e NEGATIVAÇÃO no cadastro, e pode decorrer de dificuldade financeira ou até de esquecimento. SUPERENDIVIDADO é quem, comprometendo toda a renda, não teria como pagar o conjunto das dívidas sem afetar o mínimo existencial — condição tratada por lei específica, apresentada na disciplina como a Lei do Superendividamento.

5. SAIR DAS DÍVIDAS EM 10 PASSOS (Febraban): (1) COLOQUE TUDO NO PAPEL, listando cada conta em atraso — cheque especial, cartão, prestações, empréstimos, inclusive os contraídos com amigos e familiares —, registrando credor, valor da parcela e total devido; (2) ORGANIZE O ORÇAMENTO MENSAL, com receitas, custos fixos, despesas variáveis e os gastos miúdos do dia a dia; (3) CONVERSE COM A FAMÍLIA, expondo a situação e buscando soluções conjuntas, que podem incluir corte de gastos, renda extra ou venda de bens; (4) DEFINA UMA ESTRATÉGIA PARA PAGAR, priorizando primeiro os serviços ESSENCIAIS (água, luz, gás, internet), depois os empréstimos com BEM DADO EM GARANTIA — que pode ser perdido —, e por fim as dívidas de JUROS MAIS ALTOS, como cheque especial e cartão; (5) SAIBA O ORÇAMENTO COM QUE PODE CONTAR mensalmente; (6) NEGOCIE COM OS CREDORES, lembrando que existem instituições que orientam e intermedeiam acordos gratuitamente, além da plataforma pública consumidor.gov.br; (7) TIRE O NOME DA LISTA DE INADIMPLENTES — não é obrigatório aceitar a primeira proposta, cabem contrapropostas, e após o acordo e o pagamento da primeira parcela a empresa deve retirar o nome em até CINCO DIAS; (8) TROQUE AS DÍVIDAS MAIS CARAS POR OUTRAS MAIS BARATAS, por exemplo migrando do cartão e do cheque especial para o consignado; (9) DESCUBRA AS CAUSAS DO ENDIVIDAMENTO; (10) CONSTRUA HÁBITOS FINANCEIROS SAUDÁVEIS — e aqui vem uma regra numérica útil: a SOMA DOS LIMITES DE CRÉDITO deve ser igual ou inferior à METADE da renda mensal líquida. Causas principais do endividamento listadas: falta de reserva para emergências, desemprego, doença na família, ausência de educação financeira, uso inadequado do cheque especial e do rotativo, e consumo excessivo. O material também nomeia a FOBIA FINANCEIRA, a relação entre dívidas acumuladas e sofrimento psíquico, com custo em saúde física e mental.

6. CARTÃO DE CRÉDITO (Febraban): é um meio de pagamento eletrônico; surgiu nos EUA na década de 1920 e se popularizou a partir de 1950, chegando ao Brasil em 1968. Mais de 80% dos consumidores bancarizados o usam com frequência, e o Brasil é o país que mais o utiliza na América Latina. A COMPRA PARCELADA no cartão é invenção brasileira, dos anos 1990, criada para substituir o cheque pré-datado. TIPOS: básico (só pagamento, menor anuidade, não pode ter programa de recompensas), diferenciado (associado a benefícios e recompensas, anuidade mais elevada, adesão opcional), pré-pago (deposita-se e consome, como vale-alimentação ou cartão-presente) e de loja ou private label (do varejo; sem bandeira funciona só na loja, com bandeira funciona em qualquer lugar; juros rotativos muito elevados). O CRÉDITO ROTATIVO financia a parte não paga da fatura, tem prazo máximo de cerca de 30 dias e NÃO pode se repetir no mês seguinte — na segunda vez, o banco deve oferecer o PARCELAMENTO da dívida. O pagamento mínimo é de 15% do valor da fatura. O parcelamento cobra encargos, juros e IOF. As tarifas admitidas são cinco: anuidade, emissão de segunda via, saque em espécie, uso do cartão para pagamento de contas e pedido de avaliação emergencial de limite. Os juros do cartão são LIVREMENTE PACTUADOS, sem limite máximo definido. A fatura deve informar o limite total e por operação, os gastos por evento, as operações de crédito contratadas, os encargos separadamente, os encargos que incidirão no mês seguinte caso se pague o mínimo, e o CET (Custo Efetivo Total) para o próximo período. Benefícios do uso consciente: extensão do prazo de pagamento em até 40 dias sem juros, praticidade, parcelamento sem juros, segurança e vantagens como bônus e milhagens. Advertência central: não usar o cartão como complemento de renda ou segundo salário.

7. CHEQUE ESPECIAL (Febraban): também chamado de limite de conta pré-aprovado, LIS ou cheque azul, é uma linha de crédito PRÉ-APROVADA, SEM EXIGÊNCIA DE GARANTIAS, à disposição a qualquer momento — e é justamente por essas características que seus juros são mais elevados. Funciona como "empréstimo automático": esgotado o saldo, o banco disponibiliza o valor pré-aprovado. Surgiu na década de 1970 para inibir cheques sem fundo e se popularizou nos anos 1980; quando a economia se estabilizou, os bancos perceberam a lucratividade e o estenderam à maioria dos correntistas — e o que era recurso emergencial virou corriqueiro. AS REGRAS, definidas pelo Banco Central (com alterações em 2018 e novas mudanças em janeiro de 2020): AVISO — o banco deve notificar assim que o cliente entra no cheque especial, e mudanças de limite exigem autorização do cliente; EXTRATO — o banco deve informar de forma clara e SEPARADA o saldo da conta e o limite do cheque especial; NEGOCIAÇÃO — possível a qualquer momento; MODALIDADE MAIS BARATA — dívida superior a 15% DO LIMITE por mais de 30 DIAS SEGUIDOS obriga o banco a oferecer crédito mais barato e parcelado; JUROS E TARIFAS — os juros para pessoas físicas e MEI são limitados pelo Banco Central em ATÉ 8% AO MÊS, e é permitida uma tarifa de 0,25% pela utilização, mas SOMENTE para limites a partir de R$ 500,00 (abaixo disso, isento). O cálculo é diário e por JUROS COMPOSTOS. Alguns bancos oferecem até 10 dias sem juros, mas atenção: passado o prazo, cobram-se os juros do PERÍODO COMPLETO. Incide ainda IOF de 0,01118% ao dia para pessoa física (0,00559% para empresas). OS DOIS ERROS MAIS COMUNS: usar o limite como se fizesse parte da renda mensal — quem ganha R$ 2.000 e tem R$ 500 de limite, gastando R$ 2.500 por mês, pagará juros com frequência e tende a se endividar — e CONFUNDIR o limite com o saldo da conta, esquecendo que o saldo é o dinheiro que se tem e o limite é dinheiro do banco que, ao ser usado, vira empréstimo. Para sair: negociar rápido, reduzir ou cancelar o limite, migrar para crédito mais barato (consignado, que desconta direto da folha, ou empréstimo com garantia) e controlar as finanças pessoais.

8. POUPAR: COMPORTAMENTO ANTES DE PRODUTO (Febraban, "Quem sonha poupa"): poupar tem pouco a ver com renda ou escolaridade e muito com AUTOCONTROLE. A fórmula apresentada: AUTOCONTROLE = mais PACIÊNCIA menos PROCRASTINAÇÃO, em que paciência é a capacidade de postergar gratificações (viés do futuro) e procrastinação é a dificuldade de executar planos (viés do presente). O material recorre ao TESTE DO MARSHMALLOW, conduzido por Walter Mischel em Stanford entre o fim dos anos 1960 e o início dos 1970: crianças escolhiam entre uma recompensa imediata e duas recompensas caso esperassem cerca de 15 minutos; anos depois, as que esperaram mais apresentaram melhor desempenho em relações, profissão e vida financeira. Quanto mais imediatista a pessoa, maior o prêmio que exige em troca da espera. Razões para poupar: prevenir sustos, transformar sonhos em conquistas e fazer escolhas melhores — inclusive pagar à vista com desconto em vez de parcelar com juros. Comportamentos do poupador: autocontrole, disciplina, foco no objetivo, capacidade de postergar gratificações e paciência. E a advertência: "não espere sobrar para poupar". O material propõe ainda uma CAÇA AOS CUSTOS INVISÍVEIS, com uma tabela em que gastos pequenos somam R$ 41 por dia, R$ 840 por mês e R$ 10.080 por ano — cafezinho, academia que não se frequenta, plano de TV que não se assiste, anuidade de três cartões e assinaturas de aplicativos. Sobre JUROS COMPOSTOS, apresenta uma simulação de R$ 100 por mês a 13,75% ao ano em que, em 10 anos, acumulam-se cerca de R$ 25,5 mil, com R$ 12 mil de aportes e o restante de juros; em 25 anos, os aportes somam R$ 30 mil e o montante ultrapassa R$ 260 mil. A lição: quanto mais tempo, maior a fração do patrimônio que vem dos juros, e não do esforço de poupar.

9. O TRIPÉ DOS INVESTIMENTOS: todo investimento é avaliado por SEGURANÇA (não ter riscos), RENTABILIDADE (bons retornos) e LIQUIDEZ (poder resgatar quando quiser) — e é difícil conseguir os três numa única aplicação. Em geral, as mais seguras oferecem boa liquidez e MENOR rentabilidade; as que prometem alta rentabilidade trazem mais risco, isto é, maior probabilidade de perda. Exemplos do material: ações como investimento de maior risco, Tesouro Direto como de menor risco, fundos de renda fixa como de alta liquidez e imóveis como de baixa liquidez. Daí a DIVERSIFICAÇÃO, organizada em três reservas: emergências, realização de projetos e sonhos, e aposentadoria. Antes de investir, convém conhecer o PERFIL DE INVESTIDOR — definido no glossário do Banco Central como a classificação que indica o investimento ideal para a pessoa, considerando situação financeira, necessidades e disposição a correr riscos.

10. POUPANÇA: criada por decreto do Imperador Dom Pedro II em 1861, junto com a Caixa Econômica Federal, remunerando depósitos a 6% ao ano sob garantia do governo imperial. É o investimento mais antigo e conhecido do brasileiro. VANTAGENS: isenta de Imposto de Renda, liquidez diária e baixo risco, com garantia do FGC (Fundo Garantidor de Créditos), que cobre até R$ 250.000,00 por CPF e por instituição financeira. DESVANTAGENS: baixa rentabilidade e remuneração apenas no ANIVERSÁRIO da aplicação — quem saca antes da data perde o rendimento do período. A rentabilidade pode perder ou apenas empatar com a inflação.

11. TESOURO DIRETO: programa criado pelo Tesouro Nacional que permite a qualquer pessoa com CPF investir em títulos públicos pela internet. São de RENDA FIXA, nome que vem do fato de o investidor já conhecer, na hora de investir, a regra de rentabilidade e como serão pagos os juros — é o investimento de quem procura PREVISIBILIDADE e SEGURANÇA. Por que o governo emite títulos: quando gasta mais do que arrecada, gera dívida pública, financiada pela venda de títulos cujo montante, acrescido de juros, será pago no futuro; o Estado pode arrecadar por TRIBUTOS ou por EMISSÃO DE TÍTULOS, e a vantagem da segunda é distribuir os custos por um longo período, o que faz sentido quando os benefícios também são de longo prazo. Bancos fazem o equivalente: o CDB capta para financiar despesas ou emprestar a clientes, a LCI incentiva o setor imobiliário e a LCA, o agronegócio. SEGURANÇA — e aqui está o ponto mais importante: o Tesouro Direto é a ÚNICA opção 100% garantida pelo Tesouro Nacional, não importa o valor aplicado, e NÃO é garantido pelo FGC. Isso não é defeito: poupança, CDB, LCI e LCA têm FGC porque precisam de proteção contra a falência da instituição financeira; no Tesouro Direto os títulos são emitidos e garantidos pelo próprio Tesouro e ficam registrados DIRETAMENTE NO CPF do investidor, de modo que, se o banco ou a corretora quebrar, o dinheiro é transferido para outra instituição à escolha do investidor. Curiosidade registrada: o próprio FGC investe boa parte de suas reservas em títulos públicos. TAXAS: taxa de custódia da B3 de 0,20% ao ano sobre o valor investido, com cobrança semestral, e taxa da instituição financeira de 0% a 2% ao ano.

12. TRIBUTAÇÃO DO TESOURO DIRETO: a TABELA REGRESSIVA DO IMPOSTO DE RENDA incide sobre o RENDIMENTO — 22,5% até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 721 dias. Há ainda a TABELA REGRESSIVA DO IOF para resgates em menos de 30 dias, começando em 96% do rendimento no primeiro dia e caindo dia a dia (50% no 15º dia, 20% no 24º) até ZERAR no 30º dia. A lição prática é numérica: resgatar no primeiro dia entrega quase todo o rendimento ao IOF, e por isso renda fixa não serve como conta corrente.

13. OS CINCO TÍTULOS DO TESOURO DIRETO: TESOURO SELIC — atrelado à taxa básica de juros da economia, determinada pelo COPOM (Comitê de Política Monetária) do Banco Central, que serve de referência para as demais taxas do país; oferece segurança e liquidez diária, sendo o mais indicado para reserva. TESOURO PREFIXADO — a rentabilidade não varia: comprado a 8% ao ano, renderá 8% ao ano até o vencimento, independentemente das oscilações do mercado; oferece PREVISIBILIDADE. TESOURO IPCA+ — a rentabilidade é composta por uma taxa prefixada MAIS a variação do IPCA, o indicador oficial de inflação; garante RENTABILIDADE REAL, isto é, acima da inflação, protegendo o poder de compra. TESOURO RENDA+ — criado para complementar a renda na aposentadoria: aporta-se mensalmente, como numa previdência privada, e a partir da data escolhida o valor acumulado é convertido em 240 PARCELAS MENSAIS (20 anos); carência de 60 dias; a taxa de custódia da B3 só incide no resgate antecipado, sendo 0,50% ao ano se resgatado em menos de 10 anos, 0,20% entre 10 e 20 anos e 0,10% acima de 20 anos. TESOURO EDUCA+ — para planejar o futuro estudantil: paga 60 AMORTIZAÇÕES MENSAIS (5 anos) em vez de devolver todo o principal no vencimento; carência de 60 dias; custódia de 0,50% ao ano abaixo de 7 anos, 0,20% entre 7 e 14 anos e 0,10% acima de 14 anos. Renda+ e Educa+ são os DOIS ÚNICOS títulos que não pagam tudo no vencimento.

14. VOCABULÁRIO DO BANCO CENTRAL (glossário de 114 verbetes): JUROS SIMPLES incidem apenas sobre o capital inicial; JUROS COMPOSTOS incidem, a cada período, sobre o capital inicial MAIS os juros já ganhos — daí a expressão "juros sobre juros". AMORTIZAÇÃO é o pagamento do PRINCIPAL, a parte que efetivamente reduz a dívida; numa prestação de R$ 120 de um empréstimo de R$ 1.000 em 10 parcelas, R$ 100 amortizam e R$ 20 pagam juros e encargos. CRÉDITO PRÉ-APROVADO é o valor que a instituição deixa disponível sem necessidade de contratar — o tipo mais comum é o cheque especial. CRÉDITO CONSIGNADO tem as prestações descontadas direto da folha de pagamento, o que reduz o risco e, por isso, os juros. PORTABILIDADE DE CRÉDITO é transferir a dívida para outra instituição com condições melhores. INFLAÇÃO é o aumento generalizado de preços que reduz o poder de compra. LIQUIDEZ, RENTABILIDADE e RISCO formam o tripé. NEGATIVADO é quem tem o nome inscrito em cadastro de devedores; RESTRIÇÃO CADASTRAL só desaparece após o pagamento. CADASTRO POSITIVO, ao contrário dos restritivos, informa sobre BONS pagadores para que recebam melhores condições de crédito, e a adesão é opcional. CET (Custo Efetivo Total) reúne tudo o que se paga numa operação de crédito, e não apenas a taxa de juros nominal.

15. BETS E RISCO FINANCEIRO: a disciplina dedicou um bloco às apostas online e seus riscos para a saúde financeira dos brasileiros, com material de apoio incluindo reportagem sobre por que, segundo a matemática, quase sempre se perde dinheiro com apostas esportivas. O ponto é estrutural, não moral: as casas de aposta operam com margem embutida nas cotações, de modo que o valor esperado do apostador é negativo — perder é o resultado provável no longo prazo, independentemente de habilidade. Somam-se a isso o caráter aditivo, a ilusão de controle e o fato de as perdas serem financiadas com crédito caro, o que conecta o tema diretamente ao bloco de superendividamento.

16. TRANSFORMAR DÍVIDA EM RESERVA — A LÓGICA DA DISCIPLINA: os blocos se encadeiam. O autoconhecimento produz o diagnóstico; o diagnóstico revela o saldo; o saldo define o objetivo; o objetivo vira metas mensais; as metas exigem cortar o que não se percebe gastar; o que sobra vira reserva de emergência; a reserva evita recorrer ao crédito caro; e só depois de tudo isso faz sentido falar em investimentos. Inverter essa ordem — começar por onde investir sem ter orçamento equilibrado nem reserva — é o erro que o conjunto das cartilhas procura evitar.
`;

export const EDFI_TOPICS: QuizTopicOption[] = [
    {
        value: 'autoconhecimento',
        label: 'Autoconhecimento e planejamento',
        prompt:
            'Diagnóstico e planejamento na disciplina Educação Financeira: a fotografia financeira e as perguntas do diagnóstico; a diferença entre rentabilidade bruta e líquida e a faixa de 3% a 6% ao ano dos investimentos conservadores; os quatro indicadores patrimoniais de Cerbasi — Patrimônio Mínimo de Sobrevivência igual a 6 vezes o gasto mensal, Patrimônio Mínimo Recomendado de 12 ou 20 vezes conforme a empregabilidade, Patrimônio Ideal como 10% do gasto anual vezes a idade, e Patrimônio Necessário para a Independência Financeira como o gasto anual dividido pela rentabilidade líquida — e o fato de não serem excludentes; as quatro etapas do planejamento financeiro familiar (analisar a situação atual, definir objetivo, estabelecer metas e traçar plano de ação); despesas fixas versus variáveis; o cálculo do saldo mensal e as três leituras possíveis (positivo, empate, negativo); e a priorização de objetivos por prazo curto, médio e longo.',
    },
    {
        value: 'dividas',
        label: 'Dívidas e superendividamento',
        prompt:
            'Endividamento na disciplina Educação Financeira: a distinção entre endividado, inadimplente e superendividado; a definição de inadimplência do glossário do Banco Central e suas consequências, como protesto e negativação; a fobia financeira como relação entre dívidas e sofrimento psíquico; as desvantagens do CPF negativado e as vantagens do nome limpo; as principais causas do endividamento (falta de reserva, desemprego, doença na família, ausência de educação financeira, uso inadequado do cheque especial e do rotativo, consumo excessivo); os dez passos para sair das dívidas, com destaque para a ordem de prioridade de pagamento (serviços essenciais, depois dívidas com bem em garantia, depois as de juros mais altos), a negociação com credores e contrapropostas, o prazo de cinco dias para retirada do nome da lista após o acordo, a troca de dívidas caras por mais baratas e a regra de que a soma dos limites de crédito deve ser igual ou inferior à metade da renda líquida.',
    },
    {
        value: 'credito',
        label: 'Cartão de crédito e cheque especial',
        prompt:
            'Crédito na disciplina Educação Financeira: o cartão de crédito, sua história e os tipos (básico, diferenciado, pré-pago e de loja); a compra parcelada como invenção brasileira; o crédito rotativo, seu prazo máximo de cerca de 30 dias e a regra de migração obrigatória para parcelamento; o pagamento mínimo de 15% da fatura; as cinco tarifas admitidas; o fato de os juros do cartão serem livremente pactuados sem limite máximo; o que a fatura deve informar, incluindo o Custo Efetivo Total; o cheque especial como linha de crédito pré-aprovada sem garantias; suas regras definidas pelo Banco Central — aviso, informação separada no extrato, negociação, obrigação de oferecer modalidade mais barata quando a dívida supera 15% do limite por mais de 30 dias seguidos, teto de juros de 8% ao mês para pessoa física e MEI, e tarifa de 0,25% apenas para limites a partir de R$ 500; o cálculo diário por juros compostos e a incidência de IOF; os dois erros mais comuns (usar o limite como renda e confundi-lo com o saldo); e as alternativas mais baratas, como consignado e empréstimo com garantia.',
    },
    {
        value: 'poupar-investir',
        label: 'Poupar, tripé e Tesouro Direto',
        prompt:
            'Poupança e investimentos na disciplina Educação Financeira: o autocontrole como fórmula de mais paciência menos procrastinação; o teste do marshmallow de Walter Mischel e o que ele mostrou sobre postergar gratificações; a caça aos custos invisíveis e como pequenos gastos somam mais de dez mil reais por ano; o efeito dos juros compostos ao longo do tempo e a diferença entre juros simples e compostos; o tripé segurança, liquidez e rentabilidade e a impossibilidade de maximizar os três ao mesmo tempo; a diversificação em três reservas (emergência, projetos e aposentadoria) e o perfil do investidor; a poupança, sua origem histórica, isenção de imposto de renda, liquidez diária, garantia do FGC até R$ 250 mil por CPF e por instituição, e a desvantagem da remuneração apenas no aniversário; o Tesouro Direto como renda fixa garantida pelo Tesouro Nacional e não pelo FGC, com títulos registrados no CPF do investidor; a taxa de custódia de 0,20% ao ano; a tabela regressiva de imposto de renda e a tabela regressiva de IOF que zera no trigésimo dia; e os cinco títulos (Selic, Prefixado, IPCA+, Renda+ com 240 parcelas mensais e Educa+ com 60 amortizações mensais).',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Educação Financeira: autoconhecimento e os indicadores patrimoniais; planejamento financeiro familiar em quatro etapas, com receitas, despesas fixas e variáveis e leitura do saldo; a distinção entre endividado, inadimplente e superendividado; os dez passos para sair das dívidas e a ordem de prioridade de pagamento; cartão de crédito, crédito rotativo e as regras do cheque especial, incluindo o teto de 8% ao mês e a regra dos 15% do limite por 30 dias; o comportamento de poupar, autocontrole e o efeito dos juros compostos; o tripé segurança, liquidez e rentabilidade e a diversificação; poupança e sua garantia pelo FGC; e o Tesouro Direto, sua garantia pelo Tesouro Nacional, taxas, tributação regressiva de IR e IOF e os cinco títulos disponíveis.',
    },
];

export const EDFI_EXAMS: ExamDefinition[] = [
    {
        id: 'comportamento',
        label: 'Comportamento e dívidas',
        description:
            'Atividades sobre saúde financeira, autoconhecimento, superendividamento, análise de textos sobre prosperidade e dependência, e o caso das bets.',
    },
    {
        id: 'credito',
        label: 'Crédito e planejamento',
        description:
            'Atividades sobre planejamento financeiro familiar e o questionário sobre cartão de crédito e cheque especial.',
    },
    {
        id: 'investimentos',
        label: 'Investimentos',
        description:
            'Pesquisas em dupla e trio sobre o tripé dos investimentos, Relatório Focus e indicadores, Tesouro Direto, FGC/CDB/LCI/LCA e fundos, e as atividades sobre o Manual do Pequeno Investidor.',
    },
];

export const EDFI_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'autoconhecimento', title: 'Autoconhecimento e Diagnóstico', shortTitle: 'Autoconhecimento', exams: ['comportamento'] },
    { id: 'patrimonio', title: 'Os Quatro Indicadores Patrimoniais', shortTitle: 'Indicadores', exams: ['comportamento'] },
    { id: 'planejamento', title: 'Planejamento Financeiro Familiar', shortTitle: 'Planejamento', exams: ['credito'] },
    { id: 'dividas', title: 'Endividado, Inadimplente ou Superendividado', shortTitle: 'Dívidas', exams: ['comportamento'] },
    { id: 'sair-dividas', title: 'Como Sair das Dívidas', shortTitle: 'Sair das Dívidas', exams: ['comportamento'] },
    { id: 'cartao', title: 'Cartão de Crédito', shortTitle: 'Cartão', exams: ['credito'] },
    { id: 'cheque-especial', title: 'Cheque Especial', shortTitle: 'Cheque Especial', exams: ['credito'] },
    { id: 'bets', title: 'Bets e Saúde Financeira', shortTitle: 'Bets', exams: ['comportamento'] },
    { id: 'poupar', title: 'Poupar é Comportamento', shortTitle: 'Poupar', exams: ['investimentos'] },
    { id: 'tripe', title: 'O Tripé dos Investimentos', shortTitle: 'Tripé', exams: ['investimentos'] },
    { id: 'tesouro', title: 'Tesouro Direto', shortTitle: 'Tesouro Direto', exams: ['investimentos'] },
    { id: 'glossario', title: 'Vocabulário Essencial', shortTitle: 'Vocabulário' },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type EdfiSectionId = (typeof EDFI_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['comportamento'],
        question: 'Qual é a diferença entre rentabilidade BRUTA e rentabilidade LÍQUIDA de um investimento?',
        options: [
            'A bruta é a do banco e a líquida é a da corretora',
            'A bruta é obtida após custos e taxas, mas ANTES do Imposto de Renda e da inflação; a líquida é o que sobra depois de descontar os dois',
            'A bruta considera apenas juros simples e a líquida, juros compostos',
            'São a mesma coisa, com nomes diferentes conforme a instituição',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É a rentabilidade divulgada nos relatórios que costuma ser a bruta — e por isso ela impressiona mais. Descontados IR e inflação, a rentabilidade líquida de investimentos conservadores costuma ficar entre 3% e 6% ao ano.',
        feedbackWrong:
            'A bruta desconta custos e taxas, mas ainda não o Imposto de Renda nem a inflação. A líquida é o que efetivamente sobra — e é a única que diz se o dinheiro cresceu em poder de compra.',
    },
    {
        id: 'q2',
        exams: ['comportamento'],
        question: 'Como se calcula o Patrimônio Mínimo de Sobrevivência (PMS), e para que ele serve?',
        options: [
            '6 vezes o gasto mensal da família — reserva para reorganizar a vida em caso de desemprego',
            '12 vezes a renda mensal — valor necessário para se aposentar',
            '10% do patrimônio total — parcela que deve ficar em liquidez',
            '20 vezes o gasto anual — patrimônio para independência financeira',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto — e há uma exigência junto: o PMS deve ser constituído por investimentos de LIQUIDEZ. A casa em que se mora e o carro que se usa não contam, porque não estão disponíveis para sustentar a família durante a reorganização.',
        feedbackWrong:
            'O PMS é 6 vezes o GASTO mensal (não a renda). Quem gasta R$ 5.000 por mês precisa de R$ 30.000 em investimentos líquidos. As outras alternativas descrevem, aproximadamente, o PMR e o PNIF.',
    },
    {
        id: 'q3',
        exams: ['comportamento'],
        question: 'Por que o Patrimônio Mínimo Recomendado (PMR) varia entre 12 e 20 vezes o gasto mensal?',
        options: [
            'Conforme a idade da pessoa',
            'Conforme a EMPREGABILIDADE: 12 vezes para quem tem boa empregabilidade, 20 para quem tem baixa',
            'Conforme o número de dependentes',
            'Conforme a rentabilidade dos investimentos disponíveis',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A lógica é o tempo esperado para recolocação: quem tem dificuldade de voltar ao mercado precisa de mais meses de fôlego. É a reserva que compra escolhas — inclusive a de recusar uma oferta ruim.',
        feedbackWrong:
            'A variação é pela empregabilidade: 12 vezes o gasto mensal para boa empregabilidade, 20 vezes para baixa. Quem demora mais a se recolocar precisa de reserva maior.',
    },
    {
        id: 'q4',
        exams: ['comportamento'],
        question: 'O que representa o PNIF — Patrimônio Necessário para a Independência Financeira?',
        options: [
            'O total que a pessoa vai acumular até a aposentadoria',
            'O patrimônio cujos rendimentos líquidos cobrem integralmente os gastos anuais da família — permitindo parar de trabalhar',
            'O valor mínimo exigido para investir no Tesouro Direto',
            'A soma dos outros três indicadores patrimoniais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: PNIF = gasto anual ÷ rentabilidade líquida anual. Quem gasta R$ 60.000 por ano e obtém 8% líquidos precisaria de R$ 750.000. Note que quanto menor o gasto, menor o patrimônio necessário — cortar despesa aproxima a independência tanto quanto ganhar mais.',
        feedbackWrong:
            'O PNIF é o patrimônio que gera renda suficiente para cobrir os gastos anuais. E os quatro indicadores NÃO se somam: o PMS faz parte do PMR, que faz parte do PI, que é uma fração do PNIF.',
    },
    {
        id: 'q5',
        exams: ['credito'],
        question: 'Na análise da situação financeira, qual é a diferença entre despesas FIXAS e VARIÁVEIS?',
        options: [
            'Fixas são as essenciais; variáveis são as supérfluas',
            'Fixas têm valor igual ou parecido todo mês (aluguel, mensalidade, financiamento); variáveis mudam de valor (mercado, água, luz, transporte)',
            'Fixas são pagas em dinheiro; variáveis, no cartão',
            'Fixas são anuais; variáveis, mensais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — o critério é a PREVISIBILIDADE do valor, não a importância do gasto. Um financiamento é fixo e pode ser supérfluo; a conta de luz é variável e é essencial.',
        feedbackWrong:
            'O critério é o valor ser previsível ou não. Fixas repetem valor igual ou parecido todo mês; variáveis oscilam. Essencial e supérfluo é outra classificação, que atravessa as duas.',
    },
    {
        id: 'q6',
        exams: ['credito'],
        question: 'Segundo o material, o que fazer quando o saldo mensal do orçamento familiar está EMPATADO (igual a zero)?',
        options: [
            'Nada — orçamento equilibrado é a situação ideal',
            'Buscar fôlego financeiro para iniciar a reserva de emergência, que protegerá a família de imprevistos',
            'Aumentar o limite do cheque especial como proteção',
            'Começar imediatamente a investir em renda variável',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Empate não é equilíbrio: significa que qualquer imprevisto vira dívida, porque não há folga nem reserva. O objetivo passa a ser gerar sobra, ainda que pequena.',
        feedbackWrong:
            'Empate é orçamento apertado, não equilibrado — sem sobra, o primeiro imprevisto empurra a família para o crédito. O objetivo é conseguir folga para montar a reserva de emergência.',
    },
    {
        id: 'q7',
        exams: ['credito'],
        question: 'Como o planejamento familiar transforma um objetivo em META mensal?',
        options: [
            'Estimando o valor médio gasto pela família em objetivos semelhantes',
            'Dividindo o valor total pelo número de meses do prazo — R$ 600 em 6 meses significa poupar R$ 100 por mês',
            'Aplicando um percentual fixo de 10% da renda mensal',
            'Consultando a rentabilidade esperada do investimento escolhido',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. É a etapa que converte intenção em número verificável: no fim de cada mês dá para saber se a meta foi cumprida, sem esperar o prazo inteiro para descobrir que não vai dar.',
        feedbackWrong:
            'A meta mensal é o valor total dividido pelo prazo em meses. É o que torna o objetivo acompanhável mês a mês, em vez de uma intenção vaga.',
    },
    {
        id: 'q8',
        exams: ['comportamento'],
        question: 'Qual é a diferença entre estar ENDIVIDADO e ser INADIMPLENTE?',
        options: [
            'São sinônimos — quem tem dívida é inadimplente',
            'Endividado tem dívidas e consegue pagá-las; inadimplente é quem NÃO paga, podendo sofrer protesto e negativação',
            'Endividado deve a bancos; inadimplente deve a pessoas físicas',
            'Endividado deve mais de três meses; inadimplente, menos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Ter dívida é normal e administrável — financiar um imóvel é estar endividado. A inadimplência começa quando a obrigação deixa de ser cumprida, e é ela que gera negativação e restrição de crédito.',
        feedbackWrong:
            'Não são sinônimos. Endividado é quem tem dívidas em dia; inadimplente, na definição do Banco Central, é "quem não paga a dívida" — situação que pode resultar em protesto e negativação.',
    },
    {
        id: 'q9',
        exams: ['comportamento'],
        question: 'O que caracteriza o SUPERENDIVIDAMENTO, tratado em lei própria?',
        options: [
            'Dever a mais de três instituições financeiras ao mesmo tempo',
            'A impossibilidade de pagar o conjunto das dívidas sem comprometer o mínimo existencial',
            'Ter o nome negativado por mais de um ano',
            'Ter dívidas superiores a dez salários mínimos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A diferença em relação à inadimplência comum é estrutural: não se trata de atraso pontual, e sim de um conjunto de dívidas que a renda não comporta. Daí existir uma lei específica para tratar do tema.',
        feedbackWrong:
            'O critério não é o número de credores nem o valor absoluto: é a impossibilidade de pagar tudo sem comprometer o mínimo necessário para viver. É por isso que o superendividamento tem tratamento legal próprio.',
    },
    {
        id: 'q10',
        exams: ['comportamento'],
        question: 'Na estratégia de pagamento das dívidas, qual é a ordem de prioridade recomendada?',
        options: [
            'Da menor para a maior, para reduzir o número de credores',
            'Serviços essenciais → dívidas com bem dado em garantia → dívidas de juros mais altos',
            'Sempre as de juros mais altos primeiro, sem exceção',
            'As mais antigas primeiro, para evitar prescrição',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e a ordem tem lógica de perda. Primeiro o que interrompe a vida (água, luz, gás, internet). Depois o que faz PERDER UM BEM — o carro ou o imóvel penhorável. Só então os juros altos, que crescem rápido mas não tiram nada de você imediatamente.',
        feedbackWrong:
            'Juros altos vêm em terceiro, não em primeiro. Antes deles: serviços essenciais, que garantem o funcionamento da casa, e dívidas com bem em garantia, cuja inadimplência custa o próprio bem.',
    },
    {
        id: 'q11',
        exams: ['comportamento'],
        question: 'Após fechar um acordo de renegociação e pagar a primeira parcela, em quanto tempo o nome deve sair da lista de inadimplentes?',
        options: ['Imediatamente', 'Em até 5 dias', 'Em até 30 dias', 'Somente após a quitação total da dívida'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: até 5 dias após o pagamento da primeira parcela do acordo. Não é preciso quitar tudo — basta formalizar o acordo e honrar a primeira parcela.',
        feedbackWrong:
            'São até 5 dias após o pagamento da primeira parcela do acordo, e não após a quitação total. Vale saber disso para cobrar o cumprimento.',
    },
    {
        id: 'q12',
        exams: ['comportamento'],
        question: 'Qual regra numérica o material propõe para os limites de crédito?',
        options: [
            'O limite do cartão não deve passar de um salário mínimo',
            'A SOMA dos limites de crédito deve ser igual ou inferior à METADE da renda mensal líquida',
            'O limite deve equivaler a três meses de gastos fixos',
            'Não deve haver mais de dois cartões por pessoa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso, e a regra é sobre a SOMA de todos os limites — cartões, cheque especial, crediários. É uma trava contra o hábito de tratar limite como renda, porque impede que o crédito disponível supere a capacidade de pagamento.',
        feedbackWrong:
            'A regra é que a soma de TODOS os limites de crédito fique igual ou abaixo de metade da renda líquida mensal. Ela limita o crédito disponível em conjunto, não cartão por cartão.',
    },
    {
        id: 'q13',
        exams: ['comportamento'],
        question: 'O que o material chama de "fobia financeira"?',
        options: [
            'O medo de investir em renda variável',
            'A relação entre dívidas acumuladas e sofrimento psíquico, com custo em saúde física e mental',
            'A recusa em usar meios de pagamento eletrônicos',
            'A insegurança de negociar com bancos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Nomear isso importa porque a dívida costuma ser tratada como problema puramente aritmético — e a paralisia que ela provoca (não abrir a fatura, não atender o credor) é justamente o que impede resolver o problema.',
        feedbackWrong:
            'Fobia financeira é o sofrimento psíquico associado às dívidas acumuladas, com custos reais de saúde física e mental — e é uma das razões pelas quais o primeiro passo para sair delas é justamente "colocar tudo no papel".',
    },
    {
        id: 'q14',
        exams: ['credito'],
        question: 'Qual é a regra do CRÉDITO ROTATIVO do cartão de crédito?',
        options: [
            'Pode ser usado indefinidamente, desde que se pague o mínimo todo mês',
            'Tem prazo máximo de cerca de 30 dias e NÃO pode se repetir no mês seguinte — o banco deve oferecer o parcelamento da dívida',
            'Só pode ser usado uma vez por ano',
            'É proibido desde 2020',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A regra existe justamente porque o rotativo tem uma das taxas mais altas do mercado: permitir seu uso continuado seria empurrar o cliente para uma bola de neve. Na segunda vez, ele precisa migrar para parcelamento, que é mais barato.',
        feedbackWrong:
            'O rotativo dura cerca de 30 dias e não pode se repetir no mês seguinte. Na segunda vez, o banco é obrigado a oferecer o parcelamento do saldo — uma proteção contra o efeito bola de neve.',
    },
    {
        id: 'q15',
        exams: ['credito'],
        question: 'Sobre os juros do CARTÃO DE CRÉDITO, o que o material afirma?',
        options: [
            'São limitados em 8% ao mês pelo Banco Central',
            'São livremente pactuados entre instituição e cliente, sem limite máximo definido',
            'Não podem ultrapassar o dobro da taxa Selic',
            'São iguais em todas as instituições, por regulamentação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é uma diferença importante em relação ao cheque especial, que TEM teto de 8% ao mês. No cartão não há limite, e as taxas variam de banco para banco, o que torna a comparação responsabilidade do cliente.',
        feedbackWrong:
            'Os juros do cartão são livremente pactuados, SEM limite máximo. O teto de 8% ao mês é do CHEQUE ESPECIAL, para pessoa física e MEI — não confunda as duas modalidades.',
    },
    {
        id: 'q16',
        exams: ['credito'],
        question: 'Qual destas é uma invenção brasileira no mundo dos cartões?',
        options: [
            'O cartão com chip',
            'A compra PARCELADA no cartão, surgida nos anos 1990 para substituir o cheque pré-datado',
            'O cartão de crédito internacional',
            'O programa de milhagens',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O parcelamento sem juros no cartão é peculiaridade brasileira, herdeira direta do cheque pré-datado — e ajuda a explicar por que o Brasil é o país que mais usa cartão de crédito na América Latina.',
        feedbackWrong:
            'É a compra parcelada, criada nos anos 1990 como substituta do cheque pré-datado. As demais alternativas são inovações internacionais.',
    },
    {
        id: 'q17',
        exams: ['credito'],
        question: 'O que é o CET (Custo Efetivo Total) que deve constar na fatura?',
        options: [
            'O total gasto no mês com o cartão',
            'O custo completo da operação de crédito, e não apenas a taxa de juros nominal',
            'O limite total de crédito disponível',
            'O valor da anuidade dividido em doze meses',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O CET reúne juros, tarifas, tributos e demais encargos — é o número que permite comparar propostas de crédito de verdade, porque duas ofertas com a mesma taxa de juros podem ter custos efetivos bem diferentes.',
        feedbackWrong:
            'O CET é o custo TOTAL da operação de crédito: juros mais tarifas, tributos e encargos. É por ele que se comparam propostas, não pela taxa de juros isolada.',
    },
    {
        id: 'q18',
        exams: ['credito'],
        question: 'O cheque especial é definido como que tipo de crédito?',
        options: [
            'Um financiamento com garantia real',
            'Uma linha de crédito PRÉ-APROVADA, sem exigência de garantias, disponível a qualquer momento',
            'Um empréstimo consignado em conta',
            'Um adiantamento de salário oferecido pelo empregador',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o material faz a conexão causal explícita: é JUSTAMENTE por ser pré-aprovado, sem garantias e disponível na hora que seus juros são mais elevados que os de outras linhas. Conveniência se paga.',
        feedbackWrong:
            'É uma linha de crédito pré-aprovada e sem garantias, disponível desde a abertura da conta — mesmo sem ter sido solicitada. A ausência de garantia e a disponibilidade imediata são o que encarecem seus juros.',
    },
    {
        id: 'q19',
        exams: ['credito'],
        question: 'Qual é o teto de juros do cheque especial para pessoas físicas e MEI, definido pelo Banco Central?',
        options: ['2% ao mês', '5% ao mês', '8% ao mês', 'Não há teto definido'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto: até 8% ao mês. Parece pouco dito assim, mas o cálculo é diário e por juros compostos — 8% ao mês compostos passam de 150% ao ano.',
        feedbackWrong:
            'O teto é de 8% ao mês, limitado pelo Banco Central para pessoas físicas e MEI. Quem não tem teto é o cartão de crédito, cujos juros são livremente pactuados.',
    },
    {
        id: 'q20',
        exams: ['credito'],
        question: 'A tarifa de 0,25% pela utilização do cheque especial se aplica a quais limites?',
        options: [
            'A todos os limites, sem exceção',
            'Somente a limites a partir de R$ 500,00 — abaixo disso há isenção',
            'Somente a limites acima de um salário mínimo',
            'Somente para pessoas jurídicas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A regra protege quem tem limites pequenos, isentando-os da tarifa. É uma das mudanças que o Banco Central publicou em janeiro de 2020.',
        feedbackWrong:
            'A tarifa de 0,25% só é permitida para limites a partir de R$ 500,00; abaixo desse valor há isenção. Vale para pessoa física e MEI.',
    },
    {
        id: 'q21',
        exams: ['credito'],
        question:
            'Se a dívida no cheque especial for superior a 15% do limite por mais de 30 dias seguidos, o que o banco é obrigado a fazer?',
        options: [
            'Cancelar o limite imediatamente',
            'Oferecer opções mais baratas de crédito, com juros menores e pagamento parcelado',
            'Negativar o nome do cliente',
            'Debitar automaticamente o valor da conta salário',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É uma regra de proteção parecida com a do rotativo do cartão: quando o uso deixa de ser emergencial e vira permanente, a instituição precisa oferecer uma saída mais barata e parcelada.',
        feedbackWrong:
            'O banco deve OFERECER crédito mais barato e parcelado. A regra existe para tirar o cliente de uma linha cara em que ele se instalou — não para puni-lo.',
    },
    {
        id: 'q22',
        exams: ['credito'],
        question: 'Alguns bancos oferecem "10 dias sem juros" no cheque especial. Qual é a armadilha apontada pelo material?',
        options: [
            'A isenção só vale uma vez por ano',
            'Passado o prazo, cobram-se os juros do PERÍODO COMPLETO — quem fica 11 dias paga por 11 dias, não por 1',
            'A isenção exige solicitação prévia ao gerente',
            'Os 10 dias são contados apenas em dias úteis',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — não é uma franquia, é uma condição. Ultrapassado o prazo, ela desaparece retroativamente e o cliente paga desde o primeiro dia. É o tipo de detalhe que só aparece quando se lê a regra até o fim.',
        feedbackWrong:
            'A isenção não é cumulativa nem parcial: passado o décimo dia, cobram-se os juros de todo o período usado. Quem fica 11 dias no limite paga juros pelos 11 dias.',
    },
    {
        id: 'q23',
        exams: ['credito'],
        question: 'Qual é o segundo grande erro no uso do cheque especial, segundo o material?',
        options: [
            'Não negociar a taxa com o gerente',
            'Confundir o LIMITE pré-aprovado com o SALDO da conta — esquecendo que o limite é dinheiro do banco',
            'Usar o limite para pagar outras dívidas',
            'Manter o limite ativo sem usá-lo',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O saldo é o dinheiro que você tem; o limite é dinheiro do banco que, ao ser usado, vira empréstimo automaticamente. É justamente por isso que uma das regras do Bacen obriga o extrato a informar os dois valores SEPARADAMENTE.',
        feedbackWrong:
            'O segundo erro é confundir limite com saldo. O primeiro é usar o limite como se fizesse parte da renda mensal — quem ganha R$ 2.000, tem R$ 500 de limite e gasta R$ 2.500 por mês pagará juros continuamente.',
    },
    {
        id: 'q24',
        exams: ['comportamento'],
        question: 'Segundo o material, por que a matemática das apostas online torna a perda o resultado provável no longo prazo?',
        options: [
            'Porque os apostadores brasileiros conhecem pouco de esportes',
            'Porque as casas operam com margem embutida nas cotações, o que torna o valor esperado do apostador negativo',
            'Porque os jogos são sempre manipulados',
            'Porque as apostas são tributadas em 30%',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e o ponto é estrutural, não moral: a margem está embutida nas cotações, então o resultado esperado é negativo independentemente de habilidade ou conhecimento. Quanto mais se aposta, mais o resultado converge para essa média.',
        feedbackWrong:
            'A explicação não depende de manipulação nem de desconhecimento esportivo: as cotações já embutem a margem da casa, tornando o valor esperado negativo para quem aposta. É aritmética do produto, não sorte.',
    },
    {
        id: 'q25',
        exams: ['comportamento'],
        question: 'Por que o tema das bets aparece numa disciplina de educação financeira, conectado ao bloco de dívidas?',
        options: [
            'Porque apostar é ilegal no Brasil',
            'Porque as perdas costumam ser financiadas com crédito caro, ligando o tema diretamente ao superendividamento',
            'Porque as casas de aposta são instituições financeiras',
            'Porque apostas rendem menos que a poupança',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Somam-se o caráter aditivo, a ilusão de controle e o financiamento das perdas por cartão e cheque especial — a aposta entra pelo comportamento e sai pela dívida, atravessando todos os blocos anteriores da disciplina.',
        feedbackWrong:
            'A conexão é com o endividamento: perdas recorrentes financiadas por crédito caro alimentam exatamente o ciclo que o bloco de dívidas procura desfazer.',
    },
    {
        id: 'q26',
        exams: ['investimentos'],
        question: 'Qual é a "fórmula do sucesso dos poupadores" apresentada no material?',
        options: [
            'Renda alta menos gastos supérfluos',
            'Autocontrole = mais paciência menos procrastinação',
            'Poupança = renda menos despesas fixas',
            'Disciplina = metas mais recompensas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Paciência é a capacidade de postergar gratificações (viés do futuro); procrastinação é a dificuldade de executar planos (viés do presente). O material sustenta que poupar tem pouco a ver com renda ou escolaridade e muito com esses dois fatores.',
        feedbackWrong:
            'A fórmula é autocontrole = mais paciência menos procrastinação. O material é explícito ao dizer que o hábito de poupar se relaciona mais a comportamentos internos do que a fatores externos como renda.',
    },
    {
        id: 'q27',
        exams: ['investimentos'],
        question: 'O que o Teste do Marshmallow, citado no material, demonstrou sobre as crianças que esperaram pela recompensa maior?',
        options: [
            'Que eram mais inteligentes que as demais',
            'Que, na vida adulta, apresentaram melhor desempenho nas relações, na profissão e na vida financeira',
            'Que preferiam doces menos açucarados',
            'Que vinham de famílias de renda mais alta',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O estudo de Walter Mischel, em Stanford, ofereceu uma recompensa imediata ou duas caso a criança esperasse cerca de 15 minutos — e o acompanhamento posterior associou a capacidade de esperar a melhores resultados na vida adulta.',
        feedbackWrong:
            'O achado foi sobre desempenho posterior em relações, profissão e vida financeira — a capacidade de postergar gratificação, e não inteligência ou origem, foi o que se mostrou associado aos resultados.',
    },
    {
        id: 'q28',
        exams: ['investimentos'],
        question: 'Na "caça aos custos invisíveis", o material soma pequenos gastos diários. Qual é a ordem de grandeza anual encontrada?',
        options: [
            'Cerca de R$ 1.000 por ano',
            'Cerca de R$ 3.500 por ano',
            'Cerca de R$ 10.000 por ano',
            'Cerca de R$ 25.000 por ano',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto: R$ 41 por dia somam R$ 840 por mês e R$ 10.080 por ano — cafezinho, academia não frequentada, plano de TV não assistido, anuidade de três cartões e assinaturas de aplicativos. É o argumento de que o problema raramente está no gasto grande, e sim na soma dos pequenos.',
        feedbackWrong:
            'A tabela soma R$ 41 por dia, o que dá R$ 840 por mês e R$ 10.080 por ano. É um valor que costuma surpreender justamente porque nenhum item isolado parece relevante.',
    },
    {
        id: 'q29',
        exams: ['investimentos'],
        question: 'Qual é a diferença entre JUROS SIMPLES e JUROS COMPOSTOS, na definição do glossário do Banco Central?',
        options: [
            'Simples são cobrados por bancos; compostos, por financeiras',
            'Simples incidem apenas sobre o capital inicial; compostos incidem, a cada período, sobre o capital MAIS os juros já acumulados',
            'Simples são anuais; compostos, mensais',
            'Simples se aplicam a investimentos; compostos, a dívidas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — daí a expressão "juros sobre juros". É o mesmo mecanismo que faz a poupança de longo prazo crescer e a dívida do cartão explodir: trabalha a favor de quem investe e contra quem deve.',
        feedbackWrong:
            'A diferença é a base de cálculo: os simples incidem sempre sobre o capital inicial; os compostos, sobre o capital acrescido dos juros já ganhos. Ambos se aplicam tanto a investimentos quanto a dívidas.',
    },
    {
        id: 'q30',
        exams: ['investimentos'],
        question: 'Na simulação de juros compostos do material, o que acontece com a proporção entre aportes e juros ao longo do tempo?',
        options: [
            'Os aportes representam sempre a maior parte do montante',
            'A fração vinda dos JUROS cresce com o tempo — em 25 anos, R$ 30 mil de aportes viram mais de R$ 260 mil',
            'Juros e aportes se mantêm em proporção constante',
            'Os juros só superam os aportes se a taxa for acima de 20% ao ano',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Em 10 anos, R$ 12 mil de aportes viram cerca de R$ 25,5 mil; em 25 anos, R$ 30 mil de aportes ultrapassam R$ 260 mil. A lição é sobre TEMPO: a maior parte do patrimônio final não vem do esforço de poupar, e sim de ter começado cedo.',
        feedbackWrong:
            'A parcela vinda dos juros cresce progressivamente. Em 25 anos, os R$ 30 mil aportados se transformam em mais de R$ 260 mil — a maior parte do montante é juros, não aporte.',
    },
    {
        id: 'q31',
        exams: ['investimentos'],
        question: 'O que diz o TRIPÉ dos investimentos sobre segurança, liquidez e rentabilidade?',
        options: [
            'Um bom investimento maximiza os três simultaneamente',
            'É difícil obter os três numa única aplicação: as mais seguras costumam render menos, e as de alta rentabilidade trazem mais risco',
            'Liquidez e rentabilidade sempre andam juntas',
            'Segurança é o único critério que importa para iniciantes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é justamente por isso que se diversifica. O material dá os exemplos: ações como maior risco, Tesouro Direto como menor risco, fundos de renda fixa como alta liquidez e imóveis como baixa liquidez.',
        feedbackWrong:
            'Não é possível maximizar os três ao mesmo tempo: há trade-off. Quem promete alta rentabilidade com segurança total e liquidez diária está omitindo alguma coisa — daí a diversificação em três reservas.',
    },
    {
        id: 'q32',
        exams: ['investimentos'],
        question: 'Quais são as três reservas em que o material sugere organizar a diversificação?',
        options: [
            'Renda fixa, renda variável e imóveis',
            'Emergências, realização de projetos e sonhos, e aposentadoria',
            'Curto, médio e longo prazo',
            'Poupança, CDB e Tesouro Direto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A divisão é por FINALIDADE, e não por produto — e é ela que determina qual produto cabe em cada caso: a reserva de emergência exige liquidez, a de aposentadoria pode aceitar prazo longo em troca de rentabilidade.',
        feedbackWrong:
            'As três reservas são definidas pela finalidade: emergências, projetos e sonhos, e aposentadoria. Produtos e prazos são consequência dessa escolha, não o critério inicial.',
    },
    {
        id: 'q33',
        exams: ['investimentos'],
        question: 'Qual é a principal DESVANTAGEM da poupança apontada no material, além da baixa rentabilidade?',
        options: [
            'A incidência de Imposto de Renda sobre os rendimentos',
            'A remuneração ocorre apenas no ANIVERSÁRIO da aplicação — sacar antes faz perder o rendimento do período',
            'A ausência de garantia do FGC',
            'A exigência de valor mínimo elevado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A poupança é isenta de IR, tem liquidez diária e conta com FGC — mas o rendimento só é creditado na data de aniversário. Sacar um dia antes significa perder o mês inteiro de rendimento.',
        feedbackWrong:
            'A poupança É isenta de IR e TEM garantia do FGC. A desvantagem, além da baixa rentabilidade, é a remuneração apenas no aniversário da aplicação.',
    },
    {
        id: 'q34',
        exams: ['investimentos'],
        question: 'Até que valor o FGC (Fundo Garantidor de Créditos) garante as aplicações?',
        options: [
            'R$ 50.000,00 por CPF, no total',
            'R$ 250.000,00 por CPF e por instituição financeira',
            'R$ 1.000.000,00 por aplicação',
            'Não há limite definido',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o "por instituição" importa: quem tem valores maiores pode distribuí-los entre bancos diferentes para manter tudo coberto. A garantia vale para poupança, CDB, LCI e LCA.',
        feedbackWrong:
            'São R$ 250.000,00 por CPF e por INSTITUIÇÃO financeira. O limite por instituição é o que permite ampliar a cobertura distribuindo os recursos entre bancos.',
    },
    {
        id: 'q35',
        exams: ['investimentos'],
        question: 'O Tesouro Direto NÃO é garantido pelo FGC. Por que isso não representa um problema?',
        options: [
            'Porque o risco é assumido integralmente pelo investidor',
            'Porque os títulos são garantidos pelo próprio Tesouro Nacional e ficam registrados no CPF do investidor — se o banco quebrar, o dinheiro migra para outra instituição',
            'Porque o valor investido é sempre pequeno',
            'Porque o FGC cobre indiretamente, via corretora',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O FGC existe para proteger contra a falência da INSTITUIÇÃO FINANCEIRA; no Tesouro Direto o devedor é o próprio Tesouro Nacional, e os títulos estão no CPF do investidor. Curiosidade do material: o próprio FGC investe boa parte de suas reservas em títulos públicos.',
        feedbackWrong:
            'A ausência do FGC não significa desproteção: os títulos são emitidos e garantidos pelo Tesouro Nacional e registrados diretamente no CPF do investidor. Se a corretora quebrar, o dinheiro é transferido para outra instituição.',
    },
    {
        id: 'q36',
        exams: ['investimentos'],
        question: 'Na tabela regressiva de IOF do Tesouro Direto, o que acontece com quem resgata no primeiro dia — e a partir de quando o IOF zera?',
        options: [
            'Paga 20% de IOF; zera após 90 dias',
            'Paga 96% do RENDIMENTO em IOF; zera a partir do 30º dia',
            'Paga 50%; zera após 60 dias',
            'Não há IOF no Tesouro Direto',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto: 96% no primeiro dia, caindo dia a dia (50% no 15º) até zerar no 30º. É o argumento numérico mais forte contra usar renda fixa como conta corrente — e vale lembrar que o IOF incide sobre o RENDIMENTO, não sobre o capital.',
        feedbackWrong:
            'São 96% do rendimento no primeiro dia, com queda diária até zerar no 30º dia. É por isso que aplicações de curtíssimo prazo em renda fixa quase não rendem nada.',
    },
    {
        id: 'q37',
        exams: ['investimentos'],
        question: 'O que distingue o Tesouro RENDA+ e o Tesouro EDUCA+ dos demais títulos do Tesouro Direto?',
        options: [
            'São os únicos isentos de Imposto de Renda',
            'São os únicos que NÃO pagam tudo no vencimento: o Renda+ converte em 240 parcelas mensais e o Educa+ paga 60 amortizações mensais',
            'São os únicos com liquidez diária',
            'São os únicos indexados ao IPCA',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — 240 parcelas mensais (20 anos) no Renda+, pensado para complementar a aposentadoria, e 60 amortizações mensais (5 anos) no Educa+, para o período de estudos. Ambos têm carência de 60 dias e cobram custódia apenas no resgate antecipado.',
        feedbackWrong:
            'A distinção é a forma de pagamento: são os dois únicos que não devolvem todo o principal no vencimento. O Renda+ paga 240 parcelas mensais; o Educa+, 60 amortizações mensais. O IPCA+ também é indexado à inflação, mas paga no vencimento.',
    },
    {
        id: 'q38',
        exams: ['investimentos'],
        question: 'Quem determina a taxa Selic, referência do Tesouro Selic e das demais taxas do país?',
        options: [
            'O Ministério da Fazenda',
            'O COPOM — Comitê de Política Monetária do Banco Central',
            'A B3',
            'O Tesouro Nacional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O Copom define a taxa básica de juros da economia, que serve de referência para as demais taxas do país — inclusive para a remuneração do Tesouro Selic, o título mais indicado para reserva de emergência.',
        feedbackWrong:
            'É o Copom, Comitê de Política Monetária do Banco Central. O Tesouro Nacional EMITE os títulos, mas não define a Selic; a B3 é a bolsa, responsável pela custódia.',
    },
];
