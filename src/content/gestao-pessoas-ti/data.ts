import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const GPTI_GUIDE_CONTEXT = `
GUIA COMPLETO DE GESTÃO DE PESSOAS EM TI (GPTI) - Resumo:

1. A DISCIPLINA: Gestão de Pessoas em TI (GPTI, 4º período, 40h — metade da carga das demais matérias do curso), turma 2023.2. Livro-base: Idalberto Chiavenato, "Gestão de Pessoas" (Manole, 2014); complementar: Ugo Franco Barbieri, "Gestão de Pessoas nas Organizações: o talento humano na sociedade da informação" (Atlas, 2014). O cronograma cobre 20 encontros de 2 aulas, na sequência: recursos organizacionais e a complexa natureza do homem → motivação e hierarquia de Maslow → teoria dos dois fatores de Herzberg → estilos de administração de RH segundo McGregor e objetivos da ARH → moderna gestão de pessoas → mercado de RH e mercado de trabalho → rotatividade e absenteísmo → recrutamento → seleção → cargos e avaliação do desempenho → recompensas, teoria da iniquidade e política salarial → cultura organizacional → higiene e segurança → treinamento e desenvolvimento. Avaliação: duas provas, mais atividades em grupo (apresentação sobre estilos de administração de RH, análise do caso da empresa ABC, pesquisa sobre o futuro do emprego, caso do candidato digital, apresentações sobre técnicas de seleção e pesquisa sobre o processo de avaliação de desempenho de uma empresa real).

2. OS CINCO RECURSOS ORGANIZACIONAIS: materiais ou físicos (edifícios, máquinas, equipamentos, matérias-primas, tecnologia de produção — "natureza", materials and machinery), financeiros (capital, fluxo de dinheiro, crédito, receita, investimentos — "capital", money), HUMANOS (diretores, gerentes, chefes, supervisores, funcionários, operários, técnicos — "trabalho", man), mercadológicos (mercado de clientes, consumidores ou usuários — sem correspondente na denominação tradicional, marketing) e administrativos (planejamento, organização, direção, controle — "empresa", management).

3. A COMPLEXA NATUREZA DO HOMEM: o material apresenta três enfoques do comportamento das pessoas. O homem como SER TRANSACIONAL: não apenas recebe insumos do ambiente e reage a eles, mas adota posição PROATIVA. O homem com COMPORTAMENTO DIRIGIDO PARA UM OBJETIVO: é capaz de ter objetivos ou aspirações e de aplicar esforços para alcançá-los. O homem como MODELO DE SISTEMA ABERTO: dirigido para objetivos, interdependente do meio físico e social, ativamente envolvido em transações com esse ambiente.

4. MOTIVAÇÃO: MOTIVO é tudo aquilo que impulsiona a pessoa a agir de determinada forma. A MOTIVAÇÃO relaciona-se ao sistema de cognição do indivíduo — os atos são guiados pelo que ele pensa, acredita e prevê; funciona em termos de forças ativas e impulsionadoras, traduzidas por palavras como "desejo" e "receio". As pessoas diferem quanto à motivação: necessidades, valores e capacidades variam de indivíduo para indivíduo, produzindo padrões de comportamento diferentes. TRÊS PREMISSAS explicam o comportamento humano: (a) o comportamento é CAUSADO, por estímulos internos ou externos; (b) o comportamento é MOTIVADO, não é casual nem aleatório, é orientado e dirigido para algum objetivo; (c) o comportamento é ORIENTADO PARA OBJETIVOS — em todo comportamento existe sempre um impulso, um desejo, uma necessidade ou uma tendência. O CICLO MOTIVACIONAL percorre: equilíbrio interno → estímulo ou incentivo → necessidade → tensão → comportamento ou ação → satisfação, e a satisfação realimenta o equilíbrio.

5. HIERARQUIA DAS NECESSIDADES DE MASLOW: cinco níveis, da base ao topo. FISIOLÓGICAS (fome, sede, sono), SEGURANÇA (proteção, abrigo, inexistência de perigo), SOCIAIS (amizade, amor, pertencer ao grupo, atividades sociais), ESTIMA ou EGO (status, prestígio, autorrespeito, autoconfiança, reconhecimento) e AUTORREALIZAÇÃO (crescimento, desenvolvimento pessoal, sucesso profissional). As duas primeiras são NECESSIDADES PRIMÁRIAS; as três seguintes, SECUNDÁRIAS.

6. TEORIA DOS DOIS FATORES DE HERZBERG: os FATORES HIGIÊNICOS referem-se às condições que rodeiam a pessoa enquanto trabalha — condições físicas e ambientais, salário, benefícios sociais, políticas da empresa, tipo de supervisão, relações interpessoais, segurança no cargo, vida pessoal. São LIMITADOS em sua capacidade de influenciar poderosamente o comportamento: sua ausência gera insatisfação, mas sua presença não motiva. Os FATORES MOTIVACIONAIS referem-se ao CONTEÚDO do cargo, às tarefas e aos deveres relacionados ao cargo em si — o trabalho em si, responsabilidade, progresso, crescimento — e produzem efeito duradouro de satisfação e aumento de produtividade. O material apresenta a correspondência com Maslow: os higiênicos cobrem as necessidades inferiores (fisiológicas, segurança e parte das sociais) e os motivacionais, as superiores (estima e autorrealização).

7. TEORIA X E TEORIA Y DE McGREGOR — dois estilos opostos de administração, cada um com seis pressuposições. TEORIA X: (1) os seres humanos não gostam do trabalho e o evitarão sempre que puderem; (2) para atingir os objetivos, as pessoas devem ser compelidas, controladas e mesmo ameaçadas com punições; (3) em geral preferem ser dirigidas a dirigir; (4) procuram evitar responsabilidades; (5) as pessoas médias têm pouca ambição; (6) preocupam-se acima de tudo com a própria segurança e bem-estar. TEORIA Y: (1) o trabalho pode ser fonte de satisfação OU de sofrimento, dependendo das condições; (2) o controle externo e a ameaça de punição não são os únicos meios de dirigir esforços — as pessoas podem ter autocontrole e autodirigir-se, desde que convencidas e comprometidas; (3) as recompensas no trabalho estão ligadas aos compromissos assumidos; (4) as pessoas podem aprender a aceitar e assumir responsabilidades; (5) imaginação, criatividade e engenhosidade são largamente encontradas nas pessoas; (6) o potencial intelectual do ser humano médio está longe de ser totalmente utilizado. ATENÇÃO: Herzberg (dois fatores) e McGregor (teorias X e Y) são teorias DISTINTAS, tratadas em aulas separadas no cronograma.

8. MODERNA GESTÃO DE PESSOAS: o contexto é formado por pessoas e organizações em duradoura INTERDEPENDÊNCIA — as pessoas passam boa parte da vida trabalhando em organizações, e estas dependem delas para funcionar. As organizações são constituídas de pessoas e dependem delas para atingir objetivos e cumprir missões. CINCO ASPECTOS FUNDAMENTAIS: pessoas como SERES HUMANOS (dotados de personalidade própria, história pessoal diferenciada, conhecimento, habilidades e competências); como ATIVADORAS DE RECURSOS (fonte de impulso próprio que dinamiza a organização, e não agentes passivos, inertes e estáticos); como PARCEIRAS DA ORGANIZAÇÃO (capazes de conduzi-la à excelência); como TALENTOS FORNECEDORES DE COMPETÊNCIAS; e como CAPITAL HUMANO (principal ativo organizacional, que agrega inteligência ao negócio).

9. OBJETIVOS DA GESTÃO DE PESSOAS (sete): ajudar a organização a alcançar seus objetivos e realizar sua missão; proporcionar competitividade; proporcionar pessoas bem treinadas e bem motivadas; aumentar a satisfação das pessoas no trabalho; desenvolver e elevar a qualidade de vida no trabalho; administrar e impulsionar a mudança; e manter políticas éticas e comportamento socialmente responsável.

10. OS SEIS PROCESSOS DE GESTÃO DE PESSOAS: AGREGAR pessoas (incluir novas pessoas na empresa — recrutamento e seleção); APLICAR pessoas (desenhar as atividades que realizarão, orientar e acompanhar o desempenho — desenho de cargos e avaliação); RECOMPENSAR pessoas (incentivar e satisfazer necessidades individuais mais elevadas — remuneração e benefícios); DESENVOLVER pessoas (capacitar e incrementar o desenvolvimento profissional e pessoal — treinamento); MANTER pessoas (criar condições ambientais e psicológicas satisfatórias — higiene, segurança e QVT); e MONITORAR pessoas (acompanhar, controlar as atividades e verificar resultados).

11. RESPONSABILIDADE DE LINHA E FUNÇÃO DE STAFF: quem deve gerir pessoas é o próprio EXECUTIVO OU LÍDER que lida diretamente com seus subordinados — tomar decisões a respeito deles, definir objetivos e padrões de desempenho, liderá-los, orientá-los, cuidar de seu treinamento, remuneração e incentivos. É responsabilidade LINEAR E DIRETA de cada executivo. Para assumi-la com autonomia, ele recebe assessoria e consultoria do órgão de Gestão de Pessoas, que fornece meios, serviços de apoio, políticas e procedimentos. Ou seja: a área de GP não substitui o gestor — ela o instrumenta.

12. ROTATIVIDADE E ABSENTEÍSMO: o material representa a organização como um SISTEMA ABERTO em que o meio ambiente alimenta ADMISSÕES, que entram no estoque de RECURSOS HUMANOS, do qual saem DESLIGAMENTOS de volta ao meio ambiente. Sobre esse fluxo atuam a COMPARAÇÃO (entre o que entra e o que sai), o CONTROLE e a REALIMENTAÇÃO DE DADOS. A rotatividade (turnover) é, portanto, o fluxo de entradas e saídas de pessoas, e o papel da gestão é medi-lo e controlá-lo. OBSERVAÇÃO DE FIDELIDADE: as fórmulas de índice de rotatividade e de absenteísmo NÃO constam do material raspado — foram tratadas em vídeo indicado no mural e em aula expositiva. O cronograma também dedica uma aula à distinção entre MERCADO DE TRABALHO (as vagas oferecidas pelas organizações) e MERCADO DE RECURSOS HUMANOS (os candidatos disponíveis), sem slide correspondente no material.

13. RECRUTAMENTO: conjunto de técnicas e procedimentos que visa ATRAIR candidatos potencialmente qualificados e capazes de ocupar cargos na organização; é basicamente um SISTEMA DE INFORMAÇÃO pelo qual a organização divulga ao mercado de RH as oportunidades que pretende preencher. Também definido como o conjunto de políticas e ações destinadas a atrair e agregar talentos. O processo parte de uma PESQUISA INTERNA (o que a organização precisa) e de uma PESQUISA EXTERNA (o que o mercado de RH pode oferecer), e então escolhe a técnica a aplicar. RECRUTAMENTO INTERNO: o preenchimento é feito com os próprios colaboradores atuais, que são os candidatos preferidos, por meio de promoções ou transferências — a organização oferece uma carreira de oportunidades ao colaborador. RECRUTAMENTO EXTERNO: o preenchimento é feito pela admissão de candidatos de fora, que precisam ser recrutados e selecionados — a organização oferece oportunidades ao mercado. Há ainda a combinação dos dois (misto).

14. SELEÇÃO: enquanto o recrutamento ATRAI, a seleção ESCOLHE. Sua lógica é uma comparação entre duas colunas: de um lado, as ESPECIFICAÇÕES DO CARGO (o que o cargo requer), obtidas pela análise e descrição do cargo; de outro, as CARACTERÍSTICAS DO CANDIDATO (o que o candidato oferece), obtidas pelas técnicas de seleção. QUATRO MODELOS: COLOCAÇÃO (um candidato para uma vaga), SELEÇÃO (vários candidatos para uma vaga), CLASSIFICAÇÃO (vários candidatos para várias vagas) e AGREGAÇÃO DE VALOR (vários candidatos oferecem competências que possam interessar à organização, independentemente de vaga específica). As informações sobre o cargo vêm de seis fontes: descrição e análise do cargo, requisição de pessoal, competências requeridas, pesquisa do cargo no mercado, técnica de incidentes críticos e hipótese de trabalho. As CINCO TÉCNICAS DE SELEÇÃO: entrevistas, provas de conhecimento, testes psicológicos, testes de personalidade e técnicas de simulação.

15. O CASO DO CANDIDATO DIGITAL: caso discutido em aula sobre recrutamento pela internet. Exemplos reais citados: um grupo hoteleiro que recebeu currículos por formulário na web e fez a primeira triagem de 3 mil candidatos em 45 MINUTOS, reduzindo custos operacionais em SEIS VEZES; uma agência de propaganda que substituiu o tradicional "Dia do Estagiário" por formulário on-line seguido de prova de conhecimentos na tela, o que ampliou o acesso de candidatos de outros estados; e uma empresa de tecnologia que implantou seleção pela internet em vários países para substituir currículos por e-mail. VANTAGENS PARA A EMPRESA: agilidade, redução de custos, padronização das informações recebidas (todo currículo com a mesma formatação, o que facilita a comparação) e melhor triagem no banco de dados. VANTAGENS PARA O CANDIDATO: facilidade de acesso, participação a distância, garantia de que o currículo não se extravia e — em sites que publicam as vagas e qualificações — saber de antemão quais são suas chances. QUESTÕES PROPOSTAS: como montar um formulário de solicitação de emprego presencial; como montar um formulário para recrutamento via internet; qual a opinião sobre recrutamento por e-mail; e como CONCILIAR técnicas convencionais e via internet.

16. CARGOS: o cargo se desdobra em FUNÇÕES, e cada função em TAREFAS — o exemplo do material é o cargo de Comprador, com funções como pesquisar e desenvolver fontes de suprimentos, coordenar pesquisas, programar requisições e efetuar compras, cada uma detalhada em tarefas como pesquisar preços e prazos, comparar ofertas, decidir sobre a mais favorável e negociar com o fornecedor. Todo cargo tem quatro relações estruturais: seu NÍVEL HIERÁRQUICO, sua SUBORDINAÇÃO (a quem se reporta), sua SUPERVISÃO (quem se reporta a ele) e suas RELAÇÕES LATERAIS com outros cargos. DESENHO DE CARGOS é o processo de organizar o trabalho por tarefas necessárias para desempenhar um cargo específico; envolve o CONTEÚDO do cargo, as QUALIFICAÇÕES do ocupante e as RECOMPENSAS, no sentido de atender às necessidades dos empregados e da organização.

17. AVALIAÇÃO DO DESEMPENHO: o desempenho no cargo é determinado por fatores que interagem — o VALOR DAS RECOMPENSAS (quanto o indivíduo as valoriza), as CAPACIDADES do indivíduo, o ESFORÇO individual, a PERCEPÇÃO DE QUE AS RECOMPENSAS DEPENDEM DE ESFORÇO e as PERCEPÇÕES DE PAPEL (a compreensão do que se espera do cargo). O material apresenta o PROCESSO DE ADMINISTRAÇÃO PARTICIPATIVA POR OBJETIVOS em seis etapas: (1) formulação conjunta de objetivos consensuais; (2) compromisso pessoal quanto ao alcance dos objetivos formulados; (3) negociação com o gerente sobre a alocação dos meios e recursos necessários; (4) desempenho, isto é, o comportamento no sentido de alcançar os objetivos; (5) constante medição dos resultados e comparação com os objetivos; e (6) retroação intensiva e avaliação conjunta e contínua do processo.

18. REMUNERAÇÃO: a REMUNERAÇÃO TOTAL tem quatro componentes — REMUNERAÇÃO BÁSICA (salário mensal ou por hora), INCENTIVOS SALARIAIS (bônus, prêmios, participação nos lucros, remuneração variável), INCENTIVOS NÃO FINANCEIROS (distribuição e opção de compra de ações, participação em metas e resultados, prêmios em viagens ou bens) e BENEFÍCIOS (seguro de vida, seguro saúde, refeições e transporte subsidiados). As RECOMPENSAS se dividem em FINANCEIRAS, que podem ser DIRETAS (salário direto, prêmios, comissões) ou INDIRETAS (descanso semanal remunerado, férias, gratificações, gorjetas, horas extras, 13º salário, adicionais), e NÃO FINANCEIRAS (oportunidades de desenvolvimento, reconhecimento e autoestima, segurança no emprego, qualidade de vida no trabalho, orgulho da empresa e do trabalho, promoções, liberdade e autonomia). A construção de um plano de remuneração equilibra pares em tensão: remuneração fixa × variável, ênfase no desempenho × no tempo de casa, remuneração do cargo × das competências, igualitarismo × elitismo, abaixo × acima do mercado, prêmios monetários × não monetários, remuneração aberta × confidencial, decisões centralizadas × descentralizadas. O material registra ainda que gerar riqueza depende de DISTRIBUIR adequadamente a riqueza gerada entre os stakeholders, e que as recompensas não são um custo, e sim um INVESTIMENTO para assegurar resultados. Os objetivos da administração de salários incluem atrair e reter talentos, engajá-los e desenvolvê-los, motivar e obter comprometimento, aumentar produtividade e qualidade, controlar custos laborais, proporcionar tratamento justo e equitativo, cumprir a legislação trabalhista e garantir a competitividade da organização.

19. TREINAMENTO E DESENVOLVIMENTO: o treinamento é um sistema com ENTRADA (treinandos e recursos organizacionais), PROCESSO (programas de treinamento e aprendizagem individual), SAÍDA (conhecimento, atitudes, habilidades, eficácia organizacional) e RETROAÇÃO (avaliação dos resultados, que realimenta a entrada). Provoca CINCO TIPOS DE MUDANÇA: transmissão de informações (aumentar o conhecimento), desenvolvimento de habilidades (melhorar destreza para executar tarefas e manejar equipamentos), desenvolvimento de atitudes (mudar comportamentos, conscientização e sensibilidade com clientes internos e externos), desenvolvimento de conceitos (elevar o nível de abstração, pensar em termos globais) e construção de competências alinhadas aos objetivos da organização. AS QUATRO ETAPAS DO PROCESSO: (1) LEVANTAMENTO DAS NECESSIDADES a serem satisfeitas — diagnóstico a partir dos objetivos da organização, das competências necessárias, dos problemas de produção e de pessoal e dos resultados da avaliação de desempenho; (2) DESENHO do programa — decidir quem treinar, como, em que, por quem, onde, quando e para quê; (3) APLICAÇÃO ou execução, conduzida pelo gerente de linha, pela assessoria de RH, por ambos ou por terceiros; e (4) AVALIAÇÃO DOS RESULTADOS, com monitoração, medição, comparação com a situação anterior e análise de custo-benefício. A AVALIAÇÃO acontece em cinco níveis crescentes: REAÇÃO do aprendiz (satisfação), APRENDIZAGEM (mudança em conhecimento, habilidades e atitudes), IMPACTO NO DESEMPENHO (transferência para o trabalho), IMPACTO NOS RESULTADOS (valor agregado ao negócio) e RETORNO DO INVESTIMENTO. As técnicas classificam-se quanto ao uso (orientadas para o conteúdo, para o processo ou mistas), quanto ao tempo (antes do ingresso, na indução, ou depois) e quanto ao local (no local de trabalho, com rodízio e enriquecimento de cargos, ou fora dele).

20. HIGIENE, SEGURANÇA E QUALIDADE DE VIDA NO TRABALHO: a QVT é um construto complexo e multidisciplinar que envolve satisfação com o trabalho executado, possibilidades de futuro na organização, reconhecimento pelos resultados, salário percebido, benefícios auferidos, relacionamento humano na equipe, ambiente psicológico e físico, liberdade de atuar com responsabilidade de decidir, e possibilidade de engajar-se e participar ativamente. O MODELO DE NADLER E LAWLER fundamenta a QVT em quatro aspectos: participação dos funcionários nas decisões que os afetam; reestruturação do trabalho por enriquecimento de tarefas e grupos autônomos; inovação no sistema de recompensas para influenciar o clima; e melhoria do ambiente de trabalho em condições físicas e psicológicas, com flexibilidade de horário e local. O MODELO DE WALTON traz oito fatores: compensação justa e adequada (renda adequada, equidade interna e externa); condições de segurança e saúde (jornada e ambiente físico); utilização e desenvolvimento de capacidades (autonomia, significado e identidade da tarefa, variedade de habilidades, retroação); oportunidades de crescimento contínuo e segurança (carreira, crescimento profissional, segurança do emprego); integração social (igualdade de oportunidades, relacionamentos, senso comunitário); constitucionalismo (respeito às leis e direitos trabalhistas, privacidade, liberdade de expressão, normas claras); trabalho e espaço total de vida (papel balanceado do trabalho na vida pessoal); e relevância social da vida no trabalho (imagem da empresa, responsabilidade social pelos produtos e pelos empregados).

21. CULTURA ORGANIZACIONAL: é a maneira costumeira ou tradicional de pensar e fazer as coisas, compartilhada por todos os membros, e que os novos membros devem aprender e aceitar para serem aceitos na organização; é também um sistema de significados compartilhados que distingue uma organização das demais. Sua essência provém da maneira como a organização faz negócios, trata clientes e empregados, do grau de autonomia que existe nas áreas e do grau de lealdade dos empregados. É uma complexa mistura de pressuposições, crenças, valores, comportamentos, histórias, mitos e metáforas. Exemplos do material: cultura voltada para a SEGURANÇA na DuPont, focalizada nos SERVIÇOS na Dell, de INOVAÇÃO na 3M e de QUALIDADE na Toyota. A cultura tem ASPECTOS FORMAIS E ABERTOS, visíveis e orientados a tarefas (estrutura organizacional, títulos e descrições de cargos, objetivos e estratégias, tecnologia e práticas operacionais, políticas de pessoal, métodos e procedimentos, medidas de produtividade), e ASPECTOS INFORMAIS E OCULTOS, invisíveis, afetivos e orientados ao social e psicológico (padrões de influência e poder, percepções e atitudes, sentimentos e normas de grupos, valores e expectativas, padrões de interação informal, relações afetivas). CULTURAS ADAPTATIVAS × NÃO ADAPTATIVAS: nas adaptativas, os administradores prestam atenção a todos os aspectos — especialmente aos clientes — e iniciam a mudança quando preciso, mesmo assumindo riscos, e valorizam pessoas e processos capazes de criar mudança útil; nas não adaptativas, comportam-se política e burocraticamente de modo isolado, não mudam estratégias prontamente, cuidam principalmente de si mesmos ou de seu grupo imediato e atribuem mais valor à ordem e à redução de riscos do que a liderar iniciativas. Ainda assim, o material adverte: a sobrevivência depende de EQUILÍBRIO entre estabilidade e mudança — mudança após mudança, sem estabilidade alguma, resulta em confusão, desorientação e tensão.

22. O FUTURO DO EMPREGO (textos de apoio discutidos em atividade de grupo): o primeiro texto argumenta que não há "fim do emprego" à vista, e que o mesmo se dizia na Revolução Industrial; a taxa bruta de desemprego pode ficar constante enquanto há intenso movimento de criação e destruição de empregos. Traz o conceito de DESTRUIÇÃO CRIADORA de Joseph Schumpeter, ilustrado com o caso de uma fabricante de mainframes que, por deficiências culturais e organizacionais, não se moveu com rapidez para o mercado de micros — houve brutal destruição de empregos nela e brutal criação em concorrentes mais ágeis. Adverte contra tomar a parte pelo todo, isto é, generalizar a partir de um detalhe negativo, e sustenta que as taxas de desemprego tendem a ser mais altas onde a educação é pior — a revolução tecnológica aumenta a demanda por pessoal qualificado. O segundo texto, atribuído a William Bridges, traz uma notícia ruim e uma boa: a ruim é que a era do emprego formal, com carteira assinada, horário fixo e carreira até a aposentadoria, é um conceito do século XIX que está desaparecendo; a boa é que trabalhar não é mais sinônimo de ter um emprego. As empresas se enxugam e se concentram nas atividades que agregam valor, e surge a EMPRESA VIRTUAL — entidade sem existência física, cujas partes se ligam eletronicamente —, viabilizada por duas palavras-chave: MINIATURIZAÇÃO e CONECTIBILIDADE. Daí as novas formas de trabalho: emprego temporário, tempo parcial, horários flexíveis, trabalho remoto e home office, contratos de curto prazo, subcontratação, terceirização e parceria — a chamada economia flexível, com trabalho em regime "just-in-time".
`;

export const GPTI_TOPICS: QuizTopicOption[] = [
    {
        value: 'fundamentos-motivacao',
        label: 'Fundamentos e motivação',
        prompt:
            'Fundamentos da disciplina Gestão de Pessoas em TI: os cinco recursos organizacionais (materiais, financeiros, humanos, mercadológicos e administrativos) com suas denominações tradicionais e americanas; a complexa natureza do homem nos três enfoques (ser transacional e proativo, comportamento dirigido para objetivos, modelo de sistema aberto); a diferença entre motivo e motivação; as três premissas do comportamento humano (causado, motivado e orientado para objetivos); o ciclo motivacional de equilíbrio interno, estímulo, necessidade, tensão, comportamento e satisfação; a hierarquia das necessidades de Maslow com seus cinco níveis e a divisão entre necessidades primárias e secundárias; a teoria dos dois fatores de Herzberg com a distinção entre fatores higiênicos (que rodeiam a pessoa e cuja ausência gera insatisfação, mas cuja presença não motiva) e fatores motivacionais (ligados ao conteúdo do cargo); e as teorias X e Y de McGregor com as seis pressuposições de cada uma, lembrando que Herzberg e McGregor são teorias distintas.',
    },
    {
        value: 'moderna-gp',
        label: 'Moderna gestão de pessoas',
        prompt:
            'A moderna gestão de pessoas na disciplina GPTI: a interdependência entre pessoas e organizações; os cinco aspectos fundamentais que reposicionam as pessoas — como seres humanos dotados de personalidade própria, como ativadoras de recursos organizacionais e não agentes passivos, como parceiras da organização, como talentos fornecedores de competências e como capital humano; os sete objetivos da gestão de pessoas; as políticas e práticas de agregar, integrar, modelar o trabalho, recompensar, avaliar, treinar e proporcionar condições de trabalho; os SEIS PROCESSOS de gestão de pessoas (agregar, aplicar, recompensar, desenvolver, manter e monitorar) e o que cada um abrange; e a distinção entre responsabilidade de linha e função de staff, segundo a qual gerir pessoas é responsabilidade direta de cada executivo, enquanto o órgão de gestão de pessoas presta assessoria, consultoria e serviços de apoio.',
    },
    {
        value: 'agregar',
        label: 'Mercado, recrutamento e seleção',
        prompt:
            'Os processos de agregar pessoas na disciplina GPTI: a distinção entre mercado de trabalho e mercado de recursos humanos; a rotatividade de pessoal representada como fluxo de admissões e desligamentos entre a organização e o meio ambiente, com comparação, controle e realimentação de dados, e o absenteísmo; o recrutamento como sistema de informação que atrai candidatos potencialmente qualificados, partindo de uma pesquisa interna sobre o que a organização precisa e de uma pesquisa externa sobre o que o mercado oferece; recrutamento interno (promoções e transferências, oferecendo carreira ao colaborador), externo (admissão de candidatos de fora) e misto; a seleção como escolha, com a lógica de comparar as especificações do cargo com as características do candidato; os quatro modelos de colocação, seleção, classificação e agregação de valor; as seis fontes de informação sobre o cargo; as cinco técnicas de seleção (entrevistas, provas de conhecimento, testes psicológicos, testes de personalidade e técnicas de simulação); e o caso do candidato digital, com as vantagens do recrutamento pela internet para empresa e candidato.',
    },
    {
        value: 'aplicar-recompensar',
        label: 'Cargos, desempenho e remuneração',
        prompt:
            'Aplicar e recompensar pessoas na disciplina GPTI: o desdobramento de cargo em funções e tarefas com o exemplo do cargo de comprador; as quatro relações estruturais de um cargo (nível hierárquico, subordinação, supervisão e relações laterais); o desenho de cargos como processo de organizar o trabalho, envolvendo conteúdo do cargo, qualificações do ocupante e recompensas; os fatores que afetam o desempenho no cargo (valor das recompensas, capacidades do indivíduo, esforço individual, percepção de que as recompensas dependem do esforço e percepções de papel); o processo de administração participativa por objetivos em seis etapas; os quatro componentes da remuneração total (remuneração básica, incentivos salariais, incentivos não financeiros e benefícios); a classificação das recompensas em financeiras diretas e indiretas e não financeiras; os pares em tensão na construção de um plano de remuneração, como remuneração fixa versus variável e do cargo versus das competências; a ideia de que recompensas são investimento e não custo; e os objetivos da administração de salários.',
    },
    {
        value: 'desenvolver-manter',
        label: 'Treinamento, QVT e cultura',
        prompt:
            'Desenvolver e manter pessoas na disciplina GPTI: o treinamento como sistema com entrada, processo, saída e retroação; os cinco tipos de mudança que o treinamento provoca (transmissão de informações, desenvolvimento de habilidades, desenvolvimento de atitudes, desenvolvimento de conceitos e construção de competências); as quatro etapas do processo de treinamento (levantamento de necessidades, desenho do programa, aplicação e avaliação dos resultados) e as sete perguntas da programação; os cinco níveis de avaliação do treinamento (reação, aprendizagem, impacto no desempenho, impacto nos resultados e retorno do investimento); a classificação das técnicas quanto ao uso, ao tempo e ao local; a qualidade de vida no trabalho e seus componentes; o modelo de Nadler e Lawler com seus quatro aspectos; o modelo de Walton com seus oito fatores e dimensões; a cultura organizacional como sistema de significados compartilhados, com seus aspectos formais e abertos versus informais e ocultos; os exemplos de culturas da DuPont, Dell, 3M e Toyota; a comparação entre culturas adaptativas e não adaptativas; e a necessidade de equilíbrio entre estabilidade e mudança.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Gestão de Pessoas em TI: recursos organizacionais e a natureza complexa do homem; motivação, ciclo motivacional, hierarquia de Maslow, os dois fatores de Herzberg e as teorias X e Y de McGregor; a moderna gestão de pessoas, seus objetivos, os seis processos e a distinção entre responsabilidade de linha e função de staff; mercado de trabalho e de recursos humanos, rotatividade e absenteísmo; recrutamento interno, externo e misto, e o recrutamento pela internet; seleção, seus quatro modelos e suas cinco técnicas; cargos, seu desdobramento em funções e tarefas e o desenho de cargos; avaliação de desempenho e a administração participativa por objetivos; remuneração total, tipos de recompensa e política salarial; treinamento e desenvolvimento com suas quatro etapas e cinco níveis de avaliação; higiene, segurança e qualidade de vida no trabalho nos modelos de Nadler e Lawler e de Walton; cultura organizacional em seus aspectos visíveis e ocultos e a distinção entre culturas adaptativas e não adaptativas; e as transformações do mundo do trabalho, com destruição criadora, empresa virtual e economia flexível.',
    },
];

export const GPTI_EXAMS: ExamDefinition[] = [
    {
        id: 'p1',
        label: '1ª Prova',
        description:
            'Fundamentos: recursos organizacionais, natureza humana, motivação, Maslow, Herzberg, teorias X e Y, moderna gestão de pessoas, mercado de trabalho, rotatividade, recrutamento e seleção.',
    },
    {
        id: 'p2',
        label: '2ª Prova',
        description:
            'Cargos e desenho de cargos, avaliação do desempenho, remuneração e benefícios, cultura organizacional, higiene e segurança, qualidade de vida e treinamento.',
    },
    {
        id: 'trabalhos',
        label: 'Trabalhos em grupo',
        description:
            'Apresentação sobre estilos de administração de RH, caso da empresa ABC, pesquisa sobre o futuro do emprego, caso do candidato digital, técnicas de seleção e pesquisa sobre avaliação de desempenho numa empresa real.',
    },
];

export const GPTI_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    { id: 'recursos-natureza', title: 'Recursos e a Natureza Humana', shortTitle: 'Recursos e Pessoas', exams: ['p1'] },
    { id: 'motivacao', title: 'Motivação: Maslow e Herzberg', shortTitle: 'Motivação', exams: ['p1'] },
    { id: 'teorias-xy', title: 'Teorias X e Y de McGregor', shortTitle: 'Teorias X e Y', exams: ['p1', 'trabalhos'] },
    { id: 'moderna-gp', title: 'A Moderna Gestão de Pessoas', shortTitle: 'Moderna GP', exams: ['p1'] },
    { id: 'processos', title: 'Os Seis Processos', shortTitle: 'Seis Processos', exams: ['p1'] },
    { id: 'mercado', title: 'Mercado, Rotatividade e o Futuro do Emprego', shortTitle: 'Mercado e Rotatividade', exams: ['p1', 'trabalhos'] },
    { id: 'recrutamento', title: 'Recrutamento de Pessoas', shortTitle: 'Recrutamento', exams: ['p1', 'trabalhos'] },
    { id: 'selecao', title: 'Seleção de Pessoas', shortTitle: 'Seleção', exams: ['p1', 'trabalhos'] },
    { id: 'cargos', title: 'Cargos e Desenho de Cargos', shortTitle: 'Cargos', exams: ['p2'] },
    { id: 'desempenho', title: 'Avaliação do Desempenho', shortTitle: 'Desempenho', exams: ['p2', 'trabalhos'] },
    { id: 'remuneracao', title: 'Remuneração e Recompensas', shortTitle: 'Remuneração', exams: ['p2'] },
    { id: 'treinamento', title: 'Treinamento e Desenvolvimento', shortTitle: 'Treinamento', exams: ['p2'] },
    { id: 'qvt', title: 'Higiene, Segurança e QVT', shortTitle: 'QVT', exams: ['p2'] },
    { id: 'cultura', title: 'Cultura Organizacional', shortTitle: 'Cultura', exams: ['p2'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type GptiSectionId = (typeof GPTI_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['p1'],
        question: 'Na classificação dos recursos organizacionais, o que caracteriza os RECURSOS ADMINISTRATIVOS?',
        options: [
            'Capital, fluxo de dinheiro, crédito e investimentos',
            'Planejamento, organização, direção e controle',
            'Diretores, gerentes, supervisores e técnicos',
            'Mercado de clientes, consumidores ou usuários',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — são as próprias funções administrativas, chamadas de "empresa" na denominação tradicional e de management na concepção americana. As outras alternativas descrevem, respectivamente, recursos financeiros, humanos e mercadológicos.',
        feedbackWrong:
            'Recursos administrativos são planejamento, organização, direção e controle. Capital é recurso financeiro; as pessoas são recursos humanos; e o mercado de clientes é recurso mercadológico — este último, aliás, sem correspondente na denominação tradicional.',
    },
    {
        id: 'q2',
        exams: ['p1'],
        question: 'O material descreve o homem como um "ser transacional". O que isso significa?',
        options: [
            'Que ele negocia constantemente salário e benefícios com a organização',
            'Que ele não apenas recebe insumos do ambiente e reage a eles, mas adota uma posição PROATIVA',
            'Que ele muda de emprego com frequência ao longo da carreira',
            'Que seu comportamento é determinado pelas transações financeiras da empresa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A palavra "transacional" aqui se refere às trocas com o ambiente — e o ponto é justamente que a pessoa não é passiva nessas trocas: ela antecipa, escolhe e age sobre o ambiente, não só reage a ele.',
        feedbackWrong:
            'Não tem a ver com negociação salarial nem com rotatividade. Ser transacional significa que a pessoa troca com o ambiente de forma ATIVA — recebe insumos e reage, mas também toma iniciativa, numa posição proativa.',
    },
    {
        id: 'q3',
        exams: ['p1'],
        question: 'Quais são as três premissas que, segundo o material, explicam o comportamento humano?',
        options: [
            'O comportamento é livre, imprevisível e individual',
            'O comportamento é causado, é motivado e é orientado para objetivos',
            'O comportamento é aprendido, reforçado e condicionado',
            'O comportamento é racional, emocional e social',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. E as três se encadeiam: há uma causa (estímulo interno ou externo), há um impulso que o dirige, e há um alvo. A consequência prática é que comportamento no trabalho não é aleatório — sempre há algo a compreender por trás dele.',
        feedbackWrong:
            'São: causado (por estímulos internos ou externos), motivado (não é casual nem aleatório) e orientado para objetivos (sempre há um impulso, desejo, necessidade ou tendência por trás dele).',
    },
    {
        id: 'q4',
        exams: ['p1'],
        question: 'Na hierarquia de Maslow, quais níveis compõem as NECESSIDADES PRIMÁRIAS?',
        options: [
            'Fisiológicas e de segurança',
            'Fisiológicas, de segurança e sociais',
            'Sociais e de estima',
            'De estima e de autorrealização',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Isso. As duas da base são as primárias; sociais, estima e autorrealização são as secundárias. É uma divisão que reaparece na correspondência com Herzberg — os fatores higiênicos cobrem sobretudo as primárias.',
        feedbackWrong:
            'As primárias são apenas as duas da base: fisiológicas e de segurança. Sociais, estima e autorrealização formam as necessidades secundárias.',
    },
    {
        id: 'q5',
        exams: ['p1'],
        question: 'Na hierarquia de Maslow, onde se situam status, prestígio, autorrespeito e reconhecimento?',
        options: [
            'Necessidades sociais',
            'Necessidades de estima (ego)',
            'Necessidades de autorrealização',
            'Necessidades de segurança',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As necessidades sociais são de PERTENCER (amizade, amor, fazer parte do grupo); as de estima são de ser RECONHECIDO dentro dele. A autorrealização, no topo, é crescimento e sucesso profissional.',
        feedbackWrong:
            'Status, prestígio, autorrespeito, autoconfiança e reconhecimento são necessidades de ESTIMA. As sociais são amizade, amor e pertencer ao grupo; a autorrealização envolve crescimento e desenvolvimento pessoal.',
    },
    {
        id: 'q6',
        exams: ['p1'],
        question: 'Segundo Herzberg, por que os FATORES HIGIÊNICOS têm capacidade limitada de motivar?',
        options: [
            'Porque são caros demais para a organização manter',
            'Porque referem-se às condições que RODEIAM a pessoa (salário, ambiente, supervisão, políticas), e não ao conteúdo do trabalho em si',
            'Porque só se aplicam a cargos operacionais',
            'Porque dependem exclusivamente da chefia imediata',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a consequência é contraintuitiva: melhorar salário e ambiente REMOVE a insatisfação, mas não produz motivação. Esta vem dos fatores motivacionais, ligados ao conteúdo do cargo: o trabalho em si, responsabilidade, progresso e crescimento.',
        feedbackWrong:
            'Os higiênicos são as condições em VOLTA do trabalho — salário, benefícios, condições físicas, políticas da empresa, supervisão, relações interpessoais. Sua ausência gera insatisfação, mas sua presença não motiva. O que motiva é o conteúdo do cargo.',
    },
    {
        id: 'q7',
        exams: ['p1'],
        question: 'Quais destes são FATORES MOTIVACIONAIS na teoria de Herzberg?',
        options: [
            'Salário, benefícios sociais e condições físicas de trabalho',
            'Políticas administrativas, supervisão técnica e segurança no cargo',
            'O trabalho em si, responsabilidade, progresso e crescimento',
            'Relações interpessoais, colegas e vida pessoal',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Todos ligados ao CONTEÚDO do cargo — e é isso que produz efeito duradouro de satisfação e aumento de produtividade. As outras três alternativas listam fatores higiênicos.',
        feedbackWrong:
            'Os motivacionais são o trabalho em si, responsabilidade, progresso e crescimento — o conteúdo do cargo. Salário, condições físicas, políticas, supervisão e relações interpessoais são todos higiênicos.',
    },
    {
        id: 'q8',
        exams: ['p1', 'trabalhos'],
        question: 'Qual destas pressuposições pertence à TEORIA X de McGregor?',
        options: [
            'O trabalho pode ser fonte de satisfação ou de sofrimento, dependendo das condições',
            'As pessoas podem ter autocontrole e autodirigir-se, desde que convencidas e comprometidas',
            'Para atingir os objetivos, as pessoas devem ser compelidas, controladas e mesmo ameaçadas com punições',
            'A imaginação, a criatividade e a engenhosidade são largamente encontradas nas pessoas',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. A Teoria X pressupõe que as pessoas evitam o trabalho, preferem ser dirigidas, fogem de responsabilidade e têm pouca ambição — daí a necessidade de coerção. As outras três alternativas são pressuposições da Teoria Y.',
        feedbackWrong:
            'Compelir, controlar e ameaçar com punições é Teoria X. As demais alternativas pertencem à Teoria Y, que pressupõe autocontrole, capacidade de assumir responsabilidades e potencial criativo subaproveitado.',
    },
    {
        id: 'q9',
        exams: ['p1', 'trabalhos'],
        question: 'Qual é a relação entre a teoria dos DOIS FATORES e as teorias X e Y?',
        options: [
            'São duas formas de nomear a mesma teoria',
            'São teorias DISTINTAS: os dois fatores (higiênicos e motivacionais) são de Herzberg; as teorias X e Y, de McGregor',
            'Os dois fatores são de McGregor e as teorias X e Y são de Herzberg',
            'A teoria X corresponde aos fatores higiênicos e a teoria Y aos motivacionais, na mesma obra',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e é uma confusão comum, porque as duas trabalham com pares. Herzberg trata do que gera satisfação no trabalho; McGregor, de dois estilos opostos de ADMINISTRAR pessoas. O cronograma da disciplina as ensina em aulas separadas.',
        feedbackWrong:
            'São autores e objetos diferentes: Herzberg formulou os dois fatores (higiênicos e motivacionais), sobre o que gera satisfação; McGregor formulou as teorias X e Y, sobre estilos de administração. Confundi-los é o erro clássico dessa unidade.',
    },
    {
        id: 'q10',
        exams: ['p1'],
        question: 'O que significa tratar as pessoas como "ativadoras de recursos organizacionais"?',
        options: [
            'Que elas devem ser vistas como um custo a ser otimizado',
            'Que são fonte de impulso próprio que DINAMIZA a organização — e não agentes passivos, inertes e estáticos',
            'Que cabe a elas operar as máquinas e equipamentos',
            'Que são responsáveis por ativar os sistemas de informação da empresa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É um dos cinco aspectos da moderna gestão de pessoas, e a expressão marca uma virada: os demais recursos (materiais, financeiros, tecnológicos) são inertes — quem os põe em movimento são as pessoas.',
        feedbackWrong:
            '"Ativadoras" significa que as pessoas dinamizam a organização por impulso próprio, em oposição a serem agentes passivos e estáticos. Vê-las como custo é justamente a concepção antiga que o material contrapõe.',
    },
    {
        id: 'q11',
        exams: ['p1'],
        question: 'Quais são os SEIS PROCESSOS de gestão de pessoas?',
        options: [
            'Planejar, organizar, dirigir, controlar, avaliar e recompensar',
            'Agregar, aplicar, recompensar, desenvolver, manter e monitorar',
            'Recrutar, selecionar, treinar, avaliar, remunerar e demitir',
            'Atrair, reter, motivar, capacitar, promover e desligar',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e cada um responde a uma pergunta: quem entra (agregar), o que faz (aplicar), o que recebe (recompensar), como cresce (desenvolver), em que condições fica (manter) e como se acompanha (monitorar).',
        feedbackWrong:
            'São agregar, aplicar, recompensar, desenvolver, manter e monitorar. Planejar, organizar, dirigir e controlar são as funções administrativas clássicas; recrutar e selecionar são atividades DENTRO do processo de agregar.',
    },
    {
        id: 'q12',
        exams: ['p1'],
        question: 'A qual processo de gestão de pessoas pertencem o desenho de cargos e a avaliação do desempenho?',
        options: [
            'Processo de agregar pessoas',
            'Processo de aplicar pessoas',
            'Processo de desenvolver pessoas',
            'Processo de manter pessoas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Aplicar pessoas é desenhar as atividades que elas realizarão, orientar e acompanhar seu desempenho — ou seja, definir o que a pessoa faz e verificar como está fazendo.',
        feedbackWrong:
            'Pertencem ao processo de APLICAR pessoas. Agregar é recrutamento e seleção; desenvolver é treinamento; manter é higiene, segurança e qualidade de vida.',
    },
    {
        id: 'q13',
        exams: ['p1'],
        question: 'Segundo o material, quem tem a responsabilidade de gerir pessoas numa organização?',
        options: [
            'Exclusivamente o órgão de Gestão de Pessoas, que centraliza as decisões',
            'O próprio executivo ou líder que lida diretamente com seus subordinados — é responsabilidade LINEAR E DIRETA dele',
            'Uma comissão paritária entre RH e representantes dos funcionários',
            'A diretoria, por meio de políticas gerais aplicadas uniformemente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É a distinção entre responsabilidade de LINHA e função de STAFF: o gestor decide, lidera, define objetivos e cuida do desenvolvimento da sua equipe; a área de GP fornece assessoria, meios, serviços de apoio, políticas e procedimentos. A área não substitui o gestor — ela o instrumenta.',
        feedbackWrong:
            'A responsabilidade é de LINHA: de cada executivo sobre sua própria equipe. O órgão de Gestão de Pessoas exerce função de STAFF, prestando assessoria e consultoria para que o gestor possa assumir essa responsabilidade com autonomia.',
    },
    {
        id: 'q14',
        exams: ['p1'],
        question: 'No modelo de rotatividade apresentado, o que atravessa as fronteiras entre a organização e o meio ambiente?',
        options: [
            'Apenas as admissões, que trazem pessoas de fora',
            'ADMISSÕES, que entram, e DESLIGAMENTOS, que saem — com comparação, controle e realimentação de dados sobre esse fluxo',
            'Somente informações e dados, sem movimentação de pessoas',
            'Recursos financeiros destinados à folha de pagamento',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A organização é tratada como SISTEMA ABERTO: pessoas entram e saem continuamente, e cabe à gestão comparar os dois fluxos, controlá-los e usar a realimentação de dados para decidir.',
        feedbackWrong:
            'O diagrama mostra os dois sentidos: admissões entrando e desligamentos saindo, com o estoque de recursos humanos entre eles. Sobre esse fluxo atuam comparação, controle e realimentação de dados.',
    },
    {
        id: 'q15',
        exams: ['p1'],
        question: 'Qual é a diferença entre MERCADO DE TRABALHO e MERCADO DE RECURSOS HUMANOS?',
        options: [
            'O mercado de trabalho é formal e o de recursos humanos é informal',
            'O mercado de trabalho são as VAGAS oferecidas pelas organizações; o de recursos humanos são os CANDIDATOS disponíveis',
            'São sinônimos usados em contextos diferentes',
            'O mercado de trabalho é regional e o de recursos humanos é nacional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — são os dois lados da mesma moeda: a oferta de oportunidades e a oferta de pessoas. Quando um está aquecido, o outro tende a ficar escasso, e é essa relação que determina a dificuldade de recrutar.',
        feedbackWrong:
            'A distinção é de objeto: o mercado de trabalho é composto pelas vagas que as organizações oferecem; o mercado de recursos humanos, pelos candidatos disponíveis para preenchê-las.',
    },
    {
        id: 'q16',
        exams: ['p1', 'trabalhos'],
        question: 'Como o material define RECRUTAMENTO?',
        options: [
            'O processo de escolher, entre os candidatos, o mais adequado ao cargo',
            'Um sistema de informação pelo qual a organização DIVULGA ao mercado as oportunidades que pretende preencher, atraindo candidatos qualificados',
            'A contratação formal do candidato aprovado',
            'A avaliação periódica do desempenho dos colaboradores',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O verbo do recrutamento é ATRAIR — e por isso ele é descrito como sistema de informação: sua matéria-prima é a divulgação. Escolher entre os atraídos já é seleção.',
        feedbackWrong:
            'Recrutamento é ATRAIR candidatos, divulgando ao mercado as oportunidades disponíveis. Escolher entre eles é a SELEÇÃO — dois processos distintos e sequenciais.',
    },
    {
        id: 'q17',
        exams: ['p1', 'trabalhos'],
        question: 'O que caracteriza o RECRUTAMENTO INTERNO?',
        options: [
            'Divulgar as vagas apenas em canais fechados, sem anúncio público',
            'Preencher as vagas com os próprios colaboradores atuais, por promoções ou transferências — oferecendo carreira ao colaborador',
            'Contratar candidatos indicados por funcionários da empresa',
            'Recrutar apenas dentro da mesma cidade ou região',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O "interno" se refere à origem do candidato, não ao canal de divulgação. A organização oferece uma carreira de oportunidades a quem já está lá — o que motiva, mas não traz sangue novo.',
        feedbackWrong:
            'Interno significa que os candidatos são os PRÓPRIOS COLABORADORES ATUAIS, promovidos ou transferidos. Indicação de funcionários ainda traz gente de fora, portanto é recrutamento externo.',
    },
    {
        id: 'q18',
        exams: ['p1', 'trabalhos'],
        question: 'Qual é a lógica da SELEÇÃO, segundo o material?',
        options: [
            'Escolher sempre o candidato com maior formação acadêmica',
            'Comparar as ESPECIFICAÇÕES DO CARGO (o que ele requer) com as CARACTERÍSTICAS DO CANDIDATO (o que ele oferece)',
            'Aplicar o maior número possível de testes para reduzir o risco',
            'Priorizar candidatos internos sobre externos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é uma balança de duas colunas. O lado esquerdo vem da análise e descrição do cargo; o direito, das técnicas de seleção. Sem a primeira metade bem-feita, nenhuma técnica de seleção resolve: não se sabe contra o que comparar.',
        feedbackWrong:
            'A lógica é comparativa: de um lado o que o cargo requer (das especificações do cargo), de outro o que o candidato oferece (das técnicas de seleção). Mais formação ou mais testes não substituem essa comparação.',
    },
    {
        id: 'q19',
        exams: ['p1', 'trabalhos'],
        question: 'No modelo de seleção chamado de CLASSIFICAÇÃO, qual é a configuração?',
        options: [
            'Um candidato para uma vaga',
            'Vários candidatos para uma vaga',
            'Vários candidatos para VÁRIAS vagas',
            'Vários candidatos oferecendo competências, sem vaga definida',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Os quatro modelos são: colocação (um para uma), seleção (vários para uma), classificação (vários para várias) e agregação de valor (candidatos que trazem competências de interesse, independentemente de vaga específica).',
        feedbackWrong:
            'Classificação é vários candidatos para VÁRIAS vagas — o candidato não aprovado numa pode ser aproveitado em outra. Um para uma é colocação; vários para uma é seleção; e sem vaga definida é agregação de valor.',
    },
    {
        id: 'q20',
        exams: ['p1', 'trabalhos'],
        question: 'Quais são as cinco TÉCNICAS DE SELEÇÃO listadas no material?',
        options: [
            'Entrevistas, provas de conhecimento, testes psicológicos, testes de personalidade e técnicas de simulação',
            'Currículo, carta de apresentação, entrevista, referências e período de experiência',
            'Dinâmica de grupo, prova escrita, prova oral, prova prática e avaliação 360 graus',
            'Análise documental, exame médico, teste de aptidão, entrevista técnica e negociação salarial',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Isso mesmo. Elas se distinguem pelo que medem: a entrevista explora trajetória e comportamento; as provas de conhecimento medem o que a pessoa sabe; os testes psicológicos e de personalidade, aptidões e traços; e a simulação observa a pessoa em situação parecida com a do cargo.',
        feedbackWrong:
            'São entrevistas, provas de conhecimento, testes psicológicos, testes de personalidade e técnicas de simulação. As demais alternativas misturam etapas do processo (currículo, exame médico) com técnicas.',
    },
    {
        id: 'q21',
        exams: ['trabalhos'],
        question: 'No caso do "candidato digital", qual foi a principal vantagem relatada pelas empresas no recrutamento via internet?',
        options: [
            'Eliminação completa da necessidade de entrevistas presenciais',
            'Agilidade e redução de custos — num dos casos, a triagem de 3 mil candidatos em 45 minutos, com custos operacionais reduzidos em seis vezes',
            'Garantia de contratação de candidatos mais qualificados',
            'Dispensa da análise de currículos pelo setor de RH',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. E há um ganho menos óbvio citado no caso: a PADRONIZAÇÃO. Como todos preenchem o mesmo formulário, as informações chegam no mesmo formato — o que torna a comparação entre candidatos muito mais rápida.',
        feedbackWrong:
            'O ganho relatado é de agilidade e custo: 3 mil candidatos triados em 45 minutos, com custo operacional seis vezes menor. O recrutamento digital não elimina entrevistas nem garante candidatos melhores — ele acelera a triagem.',
    },
    {
        id: 'q22',
        exams: ['trabalhos'],
        question:
            'Uma das questões propostas no caso do candidato digital pede para "conciliar o recrutamento por técnicas convencionais e via internet". O que essa pergunta sugere?',
        options: [
            'Que o recrutamento digital deve substituir integralmente o convencional',
            'Que os dois canais são complementares, e excluir um deles significa excluir parte dos candidatos',
            'Que o recrutamento convencional é sempre mais confiável',
            'Que a escolha depende exclusivamente do orçamento disponível',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O verbo "conciliar" já indica a resposta esperada: são canais que alcançam públicos diferentes. Depender só do digital exclui quem tem menos acesso ou familiaridade; depender só do presencial exclui candidatos de outras regiões — que foi justamente o ganho relatado no caso da agência de propaganda.',
        feedbackWrong:
            'A pergunta pede CONCILIAÇÃO, não substituição. Os canais alcançam públicos distintos, e usar apenas um deles reduz o conjunto de candidatos atraídos — o que contraria o próprio objetivo do recrutamento.',
    },
    {
        id: 'q23',
        exams: ['p2'],
        question: 'Como se desdobra um cargo, segundo o material?',
        options: [
            'Cargo → departamentos → pessoas',
            'Cargo → funções → tarefas',
            'Cargo → competências → resultados',
            'Cargo → metas → indicadores',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. No exemplo do cargo de Comprador: a função "pesquisar e desenvolver fontes de suprimentos" se desdobra em tarefas como pesquisar preços, condições de pagamento e prazos de entrega.',
        feedbackWrong:
            'O desdobramento é cargo → funções → tarefas, do mais geral ao mais específico. É essa decomposição que permite descrever com precisão o que alguém realmente faz num cargo.',
    },
    {
        id: 'q24',
        exams: ['p2'],
        question: 'Quais são as quatro relações estruturais que todo cargo possui?',
        options: [
            'Salário, jornada, benefícios e local de trabalho',
            'Nível hierárquico, subordinação, supervisão e relações laterais',
            'Autoridade, responsabilidade, autonomia e accountability',
            'Entrada, processo, saída e retroação',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato: onde o cargo está no organograma (nível), a quem ele se reporta (subordinação), quem se reporta a ele (supervisão) e com quais cargos ele interage horizontalmente (relações laterais).',
        feedbackWrong:
            'São nível hierárquico, subordinação (a quem se reporta), supervisão (quem se reporta a ele) e relações laterais com outros cargos. Salário e jornada são condições de trabalho, não relações estruturais.',
    },
    {
        id: 'q25',
        exams: ['p2'],
        question: 'O que envolve o DESENHO DE CARGOS?',
        options: [
            'Apenas a lista de tarefas a serem executadas',
            'O conteúdo do cargo, as qualificações do ocupante e as RECOMPENSAS, atendendo às necessidades dos empregados e da organização',
            'A definição do salário e dos benefícios do cargo',
            'O organograma completo da área',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A inclusão das RECOMPENSAS é o que costuma surpreender: desenhar um cargo não é só definir o que a pessoa faz, mas também o que ela recebe em troca — e isso precisa atender aos dois lados.',
        feedbackWrong:
            'O desenho de cargos envolve três coisas: conteúdo do cargo, qualificações exigidas do ocupante e recompensas. É mais amplo que uma lista de tarefas e mais específico que um organograma.',
    },
    {
        id: 'q26',
        exams: ['p2', 'trabalhos'],
        question: 'Entre os fatores que afetam o desempenho no cargo, o que significa "percepções de papel"?',
        options: [
            'A opinião dos colegas sobre o desempenho da pessoa',
            'A compreensão que a pessoa tem das responsabilidades e expectativas do seu cargo',
            'A imagem que a pessoa projeta na organização',
            'A autoavaliação feita pelo próprio colaborador',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é um fator subestimado: alguém pode ter capacidade e esforço de sobra e ainda assim ter desempenho fraco por estar aplicando tudo isso no que não era esperado dele. Os demais fatores são valor das recompensas, capacidades, esforço individual e a percepção de que as recompensas dependem do esforço.',
        feedbackWrong:
            '"Percepções de papel" é a compreensão que a pessoa tem do que se espera dela no cargo. Sem clareza sobre isso, capacidade e esforço podem ser dirigidos para o alvo errado.',
    },
    {
        id: 'q27',
        exams: ['p2', 'trabalhos'],
        question: 'Como começa o processo de administração participativa por objetivos apresentado no material?',
        options: [
            'Com a definição dos objetivos pela diretoria, comunicada às equipes',
            'Com a FORMULAÇÃO CONJUNTA de objetivos consensuais entre gerente e colaborador',
            'Com a avaliação do desempenho do período anterior',
            'Com a negociação do orçamento da área',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a palavra "participativa" está no nome justamente por isso. O ciclo então segue: compromisso pessoal, negociação dos recursos necessários, desempenho, medição dos resultados e retroação com avaliação conjunta.',
        feedbackWrong:
            'Começa pela formulação CONJUNTA e consensual dos objetivos. Se a diretoria simplesmente define e comunica, não é administração participativa — é o modelo tradicional que ela contrapõe.',
    },
    {
        id: 'q28',
        exams: ['p2'],
        question: 'Quais são os quatro componentes da REMUNERAÇÃO TOTAL?',
        options: [
            'Salário, férias, 13º e FGTS',
            'Remuneração básica, incentivos salariais, incentivos não financeiros e benefícios',
            'Salário fixo, comissões, bônus e participação nos lucros',
            'Remuneração direta, indireta, variável e diferida',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A remuneração básica é o salário mensal ou por hora; os incentivos salariais incluem bônus e participação nos lucros; os incentivos não financeiros vão de ações a prêmios em viagens; e os benefícios cobrem seguros, refeição e transporte.',
        feedbackWrong:
            'São remuneração básica, incentivos salariais, incentivos não financeiros e benefícios. Férias e 13º são recompensas financeiras INDIRETAS, que entram numa outra classificação do material.',
    },
    {
        id: 'q29',
        exams: ['p2'],
        question: 'Na classificação das recompensas, onde se enquadram férias, 13º salário e horas extras?',
        options: [
            'Recompensas financeiras DIRETAS',
            'Recompensas financeiras INDIRETAS',
            'Recompensas não financeiras',
            'Não são consideradas recompensas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. As financeiras diretas são salário direto, prêmios e comissões — o pagamento pelo trabalho realizado. As indiretas decorrem da legislação ou dos benefícios: descanso semanal remunerado, férias, gratificações, adicionais, horas extras e 13º.',
        feedbackWrong:
            'São financeiras INDIRETAS. As diretas são salário, prêmios e comissões. Já as não financeiras são coisas como reconhecimento, autonomia, segurança no emprego e oportunidades de desenvolvimento.',
    },
    {
        id: 'q30',
        exams: ['p2'],
        question: 'Segundo o material, como devem ser vistas as recompensas concedidas às pessoas?',
        options: [
            'Como um custo a ser minimizado sempre que possível',
            'Como um INVESTIMENTO necessário para assegurar os resultados finais da organização',
            'Como uma obrigação legal, sem impacto estratégico',
            'Como um diferencial reservado aos cargos de liderança',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O material sustenta que gerar riqueza depende de distribuí-la adequadamente entre quem contribuiu para gerá-la — e resume: "uma mão lava a outra". Isso não dispensa a análise de custo-benefício dos sistemas de recompensa; apenas muda a pergunta de "quanto custa?" para "que retorno traz?".',
        feedbackWrong:
            'O material afirma explicitamente que as recompensas NÃO representam um custo, mas um investimento necessário para assegurar os resultados. A organização alcança resultados e simultaneamente recompensa quem a ajudou a alcançá-los.',
    },
    {
        id: 'q31',
        exams: ['p2'],
        question: 'Quais são as quatro etapas do processo de treinamento?',
        options: [
            'Recrutar, capacitar, avaliar e promover',
            'Levantamento das necessidades, desenho do programa, aplicação e avaliação dos resultados',
            'Diagnóstico, planejamento, execução e controle orçamentário',
            'Definir objetivos, escolher instrutor, reservar sala e aplicar prova',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o processo é CÍCLICO: os resultados da avaliação alimentam o próximo levantamento de necessidades. Pular a primeira etapa é o erro mais comum: treina-se no que é fácil oferecer, não no que faz falta.',
        feedbackWrong:
            'São levantamento das necessidades, desenho do programa, aplicação e avaliação dos resultados. O ciclo se realimenta: a avaliação informa o próximo diagnóstico de necessidades.',
    },
    {
        id: 'q32',
        exams: ['p2'],
        question: 'Na avaliação dos resultados do treinamento, o que se mede no nível de "IMPACTO NO DESEMPENHO"?',
        options: [
            'Se os participantes gostaram do treinamento',
            'Se houve mudança no conhecimento e nas habilidades do aprendiz',
            'Se houve TRANSFERÊNCIA da aprendizagem para o local de trabalho, mudando o comportamento na atividade',
            'Se o treinamento gerou retorno financeiro sobre o investimento',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. Os cinco níveis são crescentes: reação (gostou), aprendizagem (aprendeu), impacto no desempenho (aplica no trabalho), impacto nos resultados (o negócio muda) e retorno do investimento. É comum parar no primeiro — e ele é o que menos diz.',
        feedbackWrong:
            'Impacto no desempenho é a TRANSFERÊNCIA para o trabalho: a pessoa mudou o comportamento na atividade. Gostar é reação; aprender é aprendizagem; o retorno financeiro é o quinto e último nível.',
    },
    {
        id: 'q33',
        exams: ['p2'],
        question: 'Entre os cinco tipos de mudança provocados pelo treinamento, o que é "desenvolvimento de conceitos"?',
        options: [
            'Ensinar a operar equipamentos e ferramentas',
            'Transmitir informações sobre produtos, políticas e regras da organização',
            'ELEVAR O NÍVEL DE ABSTRAÇÃO, desenvolvendo ideias para ajudar as pessoas a pensar em termos globais e amplos',
            'Mudar atitudes negativas para atitudes favoráveis',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. É o tipo de mudança que separa quem executa bem uma tarefa de quem entende o sistema em que a tarefa se insere — e é o que prepara alguém para posições de maior escopo.',
        feedbackWrong:
            'Desenvolvimento de conceitos é elevar o nível de abstração, para pensar em termos globais. Operar equipamentos é desenvolvimento de habilidades; informar sobre políticas é transmissão de informações; mudar atitudes é desenvolvimento de atitudes.',
    },
    {
        id: 'q34',
        exams: ['p2'],
        question: 'No modelo de QVT de Nadler e Lawler, quais são os quatro aspectos fundamentais?',
        options: [
            'Salário, benefícios, jornada e ambiente físico',
            'Participação nas decisões, reestruturação do trabalho, inovação no sistema de recompensas e melhoria do ambiente de trabalho',
            'Recrutamento, treinamento, avaliação e promoção',
            'Higiene, segurança, ergonomia e saúde ocupacional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. E vale notar o alcance: dois deles (participação nas decisões e reestruturação do trabalho por enriquecimento de tarefas e grupos autônomos) mexem em como o trabalho é organizado — não apenas nas condições em volta dele.',
        feedbackWrong:
            'São participação dos funcionários nas decisões que os afetam, reestruturação do trabalho, inovação no sistema de recompensas e melhoria do ambiente de trabalho. Salário e jornada aparecem no modelo de WALTON, que é o outro modelo do material.',
    },
    {
        id: 'q35',
        exams: ['p2'],
        question: 'No modelo de QVT de Walton, o que o fator "CONSTITUCIONALISMO" abrange?',
        options: [
            'A adequação da remuneração ao trabalho realizado',
            'Respeito às leis e aos direitos trabalhistas, privacidade pessoal, liberdade de expressão e normas claras da organização',
            'As oportunidades de carreira e crescimento profissional',
            'O equilíbrio entre trabalho e vida pessoal',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O nome vem da ideia de que a organização tem uma espécie de "constituição" — direitos que o trabalhador tem e que não dependem da boa vontade da chefia. Os demais itens listados são outros fatores do mesmo modelo.',
        feedbackWrong:
            'Constitucionalismo cobre direitos e garantias: respeito às leis trabalhistas, privacidade, liberdade de expressão e normas claras. Remuneração, crescimento e equilíbrio trabalho-vida são outros fatores do modelo de Walton.',
    },
    {
        id: 'q36',
        exams: ['p2'],
        question: 'Qual destes é um ASPECTO INFORMAL E OCULTO da cultura organizacional?',
        options: [
            'A estrutura organizacional e as descrições de cargos',
            'As políticas e diretrizes de pessoal',
            'Os padrões de influência e poder, e as normas dos grupos',
            'Os métodos e procedimentos operacionais',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. Os aspectos formais são visíveis e orientados a tarefas — estrutura, cargos, objetivos, políticas, métodos. Os informais são invisíveis, afetivos e sociais: influência e poder, percepções e atitudes, sentimentos, valores, interações informais e relações afetivas.',
        feedbackWrong:
            'Padrões de influência e poder e normas de grupos são informais e ocultos. Estrutura, descrições de cargos, políticas e métodos são todos aspectos formais e abertos — publicamente observáveis.',
    },
    {
        id: 'q37',
        exams: ['p2'],
        question: 'O que caracteriza uma cultura organizacional NÃO ADAPTATIVA?',
        options: [
            'Administradores que prestam atenção aos clientes e iniciam mudanças quando necessário',
            'Administradores que se comportam política e burocraticamente de modo isolado, cuidando principalmente de si mesmos ou de seu grupo imediato, e que valorizam mais a ordem e a redução de riscos do que liderar iniciativas',
            'Uma organização que muda de estratégia com muita frequência',
            'Uma organização sem normas ou procedimentos formais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Mas o material acrescenta uma ressalva importante: isso não significa que mudar sempre seja bom. Uma organização altamente mutável e pouco estável tem tanta chance de desaparecer quanto uma rígida — mudança após mudança, sem estabilidade, gera confusão, desorientação e tensão.',
        feedbackWrong:
            'A cultura não adaptativa é a do administrador isolado, político e burocrático, que não muda estratégias prontamente e prioriza ordem e redução de risco. Mudar com frequência excessiva é outro problema — o material defende EQUILÍBRIO entre estabilidade e mudança.',
    },
    {
        id: 'q38',
        exams: ['trabalhos'],
        question: 'O que é a "destruição criadora" de Schumpeter, no texto discutido sobre o futuro do emprego?',
        options: [
            'A destruição de empregos causada exclusivamente pelo comércio internacional',
            'O processo em que a inovação destrói empregos em empresas que não se adaptam e simultaneamente os cria em outras mais ágeis',
            'A extinção definitiva de profissões substituídas por máquinas',
            'A redução planejada do quadro de funcionários para cortar custos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o texto ilustra com um caso real: uma fabricante de mainframes que, por deficiências culturais e organizacionais, não se moveu a tempo para o mercado de micros; houve brutal destruição de empregos nela e brutal criação em concorrentes mais ágeis. O saldo agregado pode ser positivo mesmo quando a perda local é enorme.',
        feedbackWrong:
            'É o processo simultâneo de destruição e criação: a inovação elimina empregos onde não houve adaptação e os cria onde houve. O texto adverte justamente contra tomar a parte pelo todo — olhar só o lado destruído e generalizar.',
    },
];
