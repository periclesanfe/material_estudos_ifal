import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const ETSO_GUIDE_CONTEXT = `
GUIA COMPLETO DE ÉTICA, TECNOLOGIA E SOCIEDADE (ETSO) - Resumo:

1. A DISCIPLINA: optativa humanística de 40 horas, no curso de Bacharelado em Sistemas de Informação. Parte de uma pergunta simples e difícil — "que interesses mobilizam as ações humanas?" — e a persegue por três escalas: a do sujeito que decide, a da profissão que estabelece deveres e a dos acordos internacionais que tentam orientar a Sociedade da Informação. A avaliação teve duas partes: a AV1, fracionada em três atividades (a leitura comentada de uma entrevista de Luciano Floridi e dois estudos de caso de dilema ético em grupo), e a AV2, um ciclo de seminários em equipe sobre temas escolhidos pelos próprios estudantes.

2. O PARADIGMA DA COMPLEXIDADE (EDGAR MORIN): a disciplina abre pelo pensamento complexo, e não pela definição de ética — uma escolha deliberada. Edgar Morin, considerado um humanista planetário, é autor da epistemologia da complexidade, surgida na década de 1960. A palavra vem do latim COMPLEXUS, "o que é tecido junto". O pensamento complexo questiona o paradigma da razão e a ciência como ÚNICO modo de interpretar a realidade, e busca religar os conhecimentos dispersos, integrando cultura científica e cultura humanística — na síntese de Petraglia (2022), "tudo se liga a tudo". A justificativa é prática: não se pode mais responder às indagações de um cotidiano multidimensional e imprevisível de maneira fragmentada ou disciplinar; os problemas exigem respostas que considerem diversas áreas do conhecimento. Ao longo de sua obra Morin convida a estabelecer uma política de civilização planetária, tendo a educação como brecha para essa construção, e propõe uma nova via para o futuro da humanidade que compreende amor, fraternidade e a regeneração do humanismo. A frase que sintetiza sua posição: ele nos faz renunciar ao melhor dos mundos, mas não desistir de um mundo melhor — lembrando que muitas mudanças na história começaram por iniciativas marginais que depois tomaram forma.

3. O QUE É ÉTICA: a definição trabalhada é "ciência que estuda o comportamento moral do homem em sociedade". Cinco características a acompanham: é uma CONSTRUÇÃO SOCIAL; é referente a um tempo, espaço, grupo e cultura determinados; é fundamental para o desenvolvimento humano; e trabalha com dilemas, conflitos e processos de tomada de decisão. A afirmação central da disciplina é que NÃO SE NASCE ÉTICO — "não nascemos prontos", a ética é construída socialmente. As palavras-chave que orbitam o conceito: vida, reflexão, comportamento humano, cultura, liberdade, escolha, decisões, consequências e responsabilidade. As inquietações do nosso tempo aparecem sob os rótulos de "vida líquida moderna" e "sociedade da informação", e a disciplina provoca com trocadilhos sobre a existência digital: "digito, logo penso?", "publico, logo sou?".

4. LEONARDO BOFF — COMO NASCE A ÉTICA: o texto de referência sustenta que a ética nasce da relação com o outro. As formulações centrais: "a ética surge quando o outro emerge diante de nós"; "diante do outro ninguém pode ficar indiferente"; "a ética surge a partir do modo como se estabelece a relação com os diferentes tipos de outro"; "ao assumir minha responsabilidade ou demitir-me dela, me faço um ser ético — dou-me conta da consequência dos meus atos, eles podem ser bons ou ruins para o outro e para mim"; e a síntese mais forte, "sem passar pelo outro, toda ética é antiética". A pergunta que o texto deixa em aberto e que a disciplina explora: quem é o outro? Para quem projeta sistemas, o outro é o usuário que nunca se encontra, e cuja existência é fácil esquecer atrás de uma tabela de dados.

5. A CLASSIFICAÇÃO DIDÁTICA DA ÉTICA — as cinco categorias trabalhadas em aula: (1) ÉTICA UNIVERSAL, que tem como referência a Declaração Universal dos Direitos do Homem; (2) ÉTICA PROFISSIONAL, normativa e específica para profissões regulamentadas; (3) ÉTICA NA ADMINISTRAÇÃO PÚBLICA, voltada a bem servir à coletividade e à imagem do serviço público, normativa e relativa aos servidores públicos; (4) ÉTICA AMBIENTAL, que trata da relação entre o homem e o meio ambiente e da sensibilidade ambiental; e (5) ÉTICA EMPRESARIAL, movimento que ganha força nos anos 1990, passando da filantropia empresarial ao conceito desenvolvido no final do século XX de responsabilidade social das empresas. A disciplina acrescenta que a área de Tecnologia da Informação, Sistemas de Informação e Computação deve contribuir também para o desenvolvimento sustentável por meio de seu TRIPÉ: econômico, social e ambiental.

6. LOGÍSTICA REVERSA E LIXO ELETRÔNICO: a Lei Federal 12.305/2010 institui a Política Nacional de Resíduos Sólidos (PNRS), que no Art. 3º, inciso XII define logística reversa como "um conjunto de ações, procedimentos e meios destinados a viabilizar a coleta e a restituição dos resíduos sólidos ao setor empresarial, para reaproveitamento, em seu ciclo ou em outros ciclos produtivos, ou outra destinação final ambientalmente adequada". Na prática, realiza-se por sistemas que promovem coleta, reuso, reciclagem, tratamento e disposição final dos resíduos gerados após o consumo — tanto o próprio produto sem uso quanto suas embalagens descartadas. Embora a implementação da PNRS ainda seja recente no Brasil, a logística reversa já é realidade há mais de trinta anos em alguns países, principalmente da Europa; no Brasil já existem experiências específicas há mais de dez anos para quatro produtos: pneus, óleo lubrificante, embalagens de agrotóxicos, e pilhas e baterias. Os decretos 10.240/2020 e 10.936/2022 aparecem como marcos regulatórios posteriores. O tema conecta diretamente com a área: o Brasil aparece entre os maiores produtores mundiais de lixo eletrônico, e equipamentos de informática são exatamente o resíduo que a área produz.

7. PROCESSOS DE TOMADA DE DECISÃO: a disciplina trabalha uma tríade — DILEMA, CONFLITO e DECISÃO. O dilema é a situação em que as alternativas disponíveis têm, todas, algum custo ético; o conflito é a tensão entre valores, interesses ou obrigações que se chocam; e a decisão é o momento em que a pessoa assume, com suas consequências, um dos caminhos. É a operacionalização da frase de Boff: fazer-se um ser ético é assumir a responsabilidade pela consequência dos próprios atos, e não se demitir dela.

8. ESTUDO DE CASO 1 — A DENÚNCIA (atividade em grupo da AV1): sua empresa de TI, pela primeira vez, presta serviço para uma grande multinacional. Para isso foi assinado um contrato milionário que obriga a respeitar o código de ética da contratante, cujo texto determina que qualquer ato ilícito ou indevido presenciado deve ser reportado ao canal de denúncias, não importando se você é funcionário ou terceiro. Durante uma reunião virtual gravada por você, o seu contato na empresa faz uma série de comentários racistas e homofóbicos, além de confessar que agride moralmente a equipe que lidera, alegando que essa postura garante produtividade e agiliza os projetos desenvolvidos em co-criação. As perguntas: você faz a denúncia? Você forneceria a gravação como prova da ilicitude? O caso cruza a obrigação contratual, o dever legal, o risco comercial de perder o contrato, a legitimidade da gravação como prova e a responsabilidade para com as pessoas agredidas. (Extraído do perfil @eticalizando, com adaptação.)

9. ESTUDO DE CASO 2 — O APLICATIVO MANIPULADOR (atividade em grupo da AV1): você trabalha em uma startup de tecnologia e o seu novo desafio é desenvolver um aplicativo que gere alto engajamento A PARTIR DA MANIPULAÇÃO DO COMPORTAMENTO DOS USUÁRIOS. Você toparia o desafio? O enunciado exige justificativa — não vale responder apenas sim ou não. O caso põe em jogo a responsabilidade de quem constrói: a distinção entre projetar algo que as pessoas queiram usar e projetar algo que as explore, o papel do desenvolvedor que "apenas executa" uma especificação, e a pergunta de a quem serve o produto. (Extraído do perfil @eticalizando, com pequena adaptação.)

10. A CÚPULA MUNDIAL SOBRE A SOCIEDADE DA INFORMAÇÃO (CMSI): realizada em duas fases, produziu quatro documentos. Em GENEBRA, 2003: a Declaração de Princípios de Genebra e o Plano de Ação de Genebra. Em TÚNIS, 2005: o Compromisso de Túnis e a Agenda de Túnis para a Sociedade da Informação. A visão comum declarada é construir uma Sociedade da Informação voltada para as pessoas, inclusiva e orientada para o desenvolvimento, em que todos possam criar, acessar, utilizar e compartilhar informação e conhecimento, com base na Carta das Nações Unidas e defendendo a Declaração Universal dos Direitos Humanos. A Declaração reafirma o ARTIGO 19 da Declaração Universal — liberdade de opinião e expressão, incluindo a liberdade de procurar, receber e transmitir informações e ideias por quaisquer meios e independentemente de fronteiras — e afirma que a comunicação é um processo social fundamental, uma necessidade humana básica e o fundamento de todas as organizações sociais.

11. OS COMPROMISSOS DA CMSI: o documento reconhece explicitamente que os benefícios da revolução das TIC são distribuídos DE FORMA DESIGUAL entre países desenvolvidos e em desenvolvimento, e também dentro das próprias sociedades, e assume o compromisso de transformar esse HIATO DIGITAL em OPORTUNIDADE DIGITAL para todos, especialmente para quem corre risco de ser deixado para trás. Reconhece que os JOVENS constituem a força de trabalho do futuro, são os principais criadores e os primeiros a adotar as TIC, e que suas capacidades devem ser promovidas. Presta atenção especial a países em desenvolvimento, economias em transição, países menos desenvolvidos, pequenos Estados insulares, países sem litoral, países pobres altamente endividados, países sob ocupação, países se recuperando de conflitos e situações de desastre natural. Afirma que a construção de uma Sociedade da Informação inclusiva requer novas formas de solidariedade, parceria e cooperação entre governos, SETOR PRIVADO, SOCIEDADE CIVIL e ORGANIZAÇÕES INTERNACIONAIS — o chamado à SOLIDARIEDADE DIGITAL. Afirma que as TIC oferecem enormes oportunidades para as MULHERES, que devem ser parte integrante e atores-chave, com integração da perspectiva de igualdade de gênero. E determina atenção especial a grupos marginalizados e vulneráveis: migrantes, deslocados internos, refugiados, desempregados e carentes, minorias, povos nômades, pessoas mais velhas e pessoas com deficiência.

12. AS DIMENSÕES ÉTICAS NA DECLARAÇÃO DE PRINCÍPIOS (seção 10, parágrafos 56 a 59): o §56 afirma que a Sociedade da Informação deve respeitar a paz e preservar os valores fundamentais de liberdade, igualdade, solidariedade, tolerância, responsabilidade compartilhada e respeito com a natureza. O §57 reconhece a importância da ética, que deve promover a justiça, a dignidade e o valor da pessoa humana. O §58 determina que a utilização das TIC e a criação de conteúdo devem respeitar os direitos humanos e as liberdades fundamentais de terceiros, INCLUSIVE A PRIVACIDADE PESSOAL e o direito à liberdade de pensamento, consciência e religião. O §59 determina que todos os atores adotem ações e medidas preventivas, conforme a lei, contra usos abusivos das TIC — atos ilícitos motivados por racismo, discriminação racial, xenofobia e formas correlatas de intolerância, ódio, violência, todas as formas de abuso de menores incluindo pedofilia e pornografia infantil, e o tráfico e a exploração de seres humanos.

13. A LINHA DE AÇÃO C10 DO PLANO DE AÇÃO DE GENEBRA: dedicada às dimensões éticas da Sociedade da Informação, seu parágrafo 25 estabelece que a Sociedade da Informação deve estar sujeita a valores universalmente reconhecidos, promover o bem comum e evitar o uso abusivo das TIC, desdobrando-se em quatro ações: (a) tomar medidas para promover o respeito pela paz e defender os valores fundamentais de liberdade, igualdade, solidariedade, tolerância, responsabilidade compartilhada e respeito à natureza; (b) todos os interessados devem AUMENTAR SUA CONSCIÊNCIA da dimensão ética de sua utilização das TIC; (c) todos os protagonistas devem promover o bem comum, PROTEGER A PRIVACIDADE E OS DADOS PESSOAIS e tomar medidas adequadas e preventivas contra usos abusivos; e (d) convidar as partes interessadas, EM ESPECIAL A ACADEMIA, a continuar a investigação sobre as dimensões éticas das TIC — item que atribui à universidade um papel explícito no tema.

14. OS COMPROMISSOS DE TÚNIS: o §39 busca criar confiança e segurança no uso das TIC e reafirma a necessidade de promover uma CULTURA GLOBAL DE SEGURANÇA CIBERNÉTICA, conforme a resolução 57/239 da Assembleia Geral da ONU, exigindo ação nacional e cooperação internacional e aprimorando a proteção da informação, da privacidade e dos dados pessoais. O §40 destaca a persecução aos CRIMES CIBERNÉTICOS, incluindo aquele cometido numa jurisdição com efeitos em outra, e conclama os governos a desenvolver a legislação necessária, citando as Resoluções 55/63 e 56/121 da ONU sobre o combate ao uso indevido das tecnologias de informação com fins criminosos e a Convenção do Conselho Europeu sobre Crime Cibernético. O §42 reafirma o compromisso com a liberdade de buscar, receber, transmitir e usar a informação, e afirma que as medidas para garantir a estabilidade e a segurança da Internet e combater crimes cibernéticos e spam DEVEM PROTEGER E RESPEITAR as disposições de privacidade e liberdade de expressão — ou seja, segurança não é licença para suprimir direitos. O §43 reitera o compromisso com os usos positivos da Internet e com medidas preventivas contra a utilização abusiva. O §44 ressalta a importância de combater o terrorismo em todas as suas formas na Internet, respeitando os direitos humanos. O §47 reconhece o aumento do volume e do valor dos negócios eletrônicos e solicita o desenvolvimento de leis e práticas nacionais de PROTEÇÃO AO CONSUMIDOR que compra bens e serviços on-line. O §48 nota com satisfação a crescente utilização das TIC pelos governos para servir aos cidadãos e incentiva o desenvolvimento de programas e estratégias de GOVERNO ELETRÔNICO.

15. A RECOMENDAÇÃO DA UNESCO SOBRE A ÉTICA DA INTELIGÊNCIA ARTIFICIAL (2022): determinou o desenvolvimento de dois recursos-chave, que constituem os principais pilares da implementação da IA em cada país — a METODOLOGIA DE AVALIAÇÃO DE PRONTIDÃO (Readiness Assessment Methodology, RAM) e a AVALIAÇÃO DE IMPACTO ÉTICO (Ethical Impact Assessment, EIA). Esses recursos pretendem avaliar e promover a resiliência de leis, políticas e instituições existentes diante da implementação da IA, bem como o alinhamento dos sistemas de IA com os valores e princípios estabelecidos na Recomendação. Além de elaborar os valores e princípios que devem orientar a concepção ética, o desenvolvimento e o uso da IA, a Recomendação estabelece as ações necessárias dos ESTADOS-MEMBROS para garantir a proteção desses valores, defendendo uma REGULAMENTAÇÃO EFICAZ e fornecendo recomendações em áreas de política como GÊNERO, MEIO AMBIENTE e COMUNICAÇÃO E INFORMAÇÃO. A RAM engloba CINCO DIMENSÕES: jurídico e regulatório; social e cultural; econômico; científico e educacional; e tecnológico e infraestrutura. Cada dimensão é dividida em subcategorias com indicadores qualitativos e quantitativos, e a metodologia fornece tanto o status individual de cada país quanto informações comparativas, para que os países aprendam uns com os outros.

16. A SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC): sociedade científica sem fins lucrativos fundada em 24 DE JULHO DE 1978, que reúne estudantes, professores, profissionais, pesquisadores e entusiastas da área de Computação e Informática de todo o Brasil. Sua função é fomentar o acesso à informação e à cultura por meio da informática, promover a inclusão digital, incentivar a pesquisa e o ensino em computação no Brasil, e contribuir para a formação do profissional da computação com responsabilidade social. Entre suas finalidades principais: incentivar atividades de ensino, pesquisa e desenvolvimento; zelar pela preservação e aprimoramento do ESPÍRITO CRÍTICO, da responsabilidade profissional e da personalidade nacional da comunidade técnico-científica; manter-se permanentemente atenta à política governamental que afeta as atividades de computação no país, no sentido de assegurar a EMANCIPAÇÃO TECNOLÓGICA; promover a disseminação do conhecimento científico por meio de reuniões, congressos, conferências e publicações; e contribuir para o desenvolvimento científico e tecnológico do país. A SBC tem secretarias regionais, e a de Alagoas é sediada no IFAL.

17. O CÓDIGO DE ÉTICA DO PROFISSIONAL DE INFORMÁTICA (SBC, 15 de julho de 2013): institui doze artigos que definem os deveres dos profissionais de informática, com o objetivo de orientá-los sobre os valores, as responsabilidades e os compromissos necessários na conduta de suas atividades em benefício da sociedade. Art. 1º contribuir para o bem-estar social, promovendo sempre que possível a inclusão de todos os setores da sociedade. Art. 2º exercer o trabalho com responsabilidade, dedicação, honestidade e justiça, buscando sempre a melhor solução. Art. 3º esforçar-se para adquirir continuamente competência técnica e profissional, mantendo-se atualizado com os avanços da profissão. Art. 4º atuar dentro dos limites de sua competência profissional e orientar-se por elevado espírito público. Art. 5º guardar sigilo profissional das informações a que tiver acesso em decorrência das atividades exercidas. Art. 6º conduzir as atividades sem discriminação, seja de raça, sexo, religião, nacionalidade, cor da pele, idade, estado civil ou qualquer outra condição humana. Art. 7º respeitar a legislação vigente, o interesse social e os direitos de terceiros. Art. 8º honrar compromissos, contratos, termos de responsabilidade, direitos de propriedade, copyrights e patentes. Art. 9º pautar a relação com os colegas de profissão nos princípios de consideração, respeito, apreço, solidariedade e harmonia da classe. Art. 10 não praticar atos que possam comprometer a honra, a dignidade e a privacidade de qualquer pessoa. Art. 11 nunca apropriar-se de trabalho intelectual, iniciativas ou soluções encontradas por outras pessoas. Art. 12 zelar pelo cumprimento deste código. Note que o artigo primeiro não trata de competência técnica, e sim de BEM-ESTAR SOCIAL — a ordem dos artigos é ela própria uma declaração de prioridades.

18. O CÓDIGO DE CONDUTA PARA PUBLICAÇÕES DA SBC: documento distinto do Código de Ética, voltado à integridade na publicação científica, partindo da premissa de que uma boa publicação pressupõe o comportamento ético, honesto e responsável dos autores E dos revisores. A PARTE I lista as CONDUTAS NÃO ACEITÁVEIS: o Art. 1º define PLÁGIO como a cópia de parte de material publicado por outro autor sem explicitar e citar o trabalho de origem, e o classifica como FRAUDE; o Art. 2º define AUTOPLÁGIO como a reutilização total ou parcial de material anteriormente publicado ou submetido pelo próprio autor sem citar o trabalho de origem e sem respeitar a percentagem mínima de material novo solicitada, e o classifica como antiético; o Art. 3º trata da SUBMISSÃO MÚLTIPLA do mesmo trabalho a mais de um veículo simultaneamente, antiética se ao menos um dos veículos não aceitar explicitamente essa prática, com três exceções em parágrafo único (veículos de natureza diferente com todos os editores informados; idiomas diferentes com todos os veículos aceitando e informados; ou submissão posterior à rejeição da anterior); e o Art. 4º prevê a EXCLUSÃO DO ARTIGO caso os problemas só sejam percebidos após a publicação, podendo levar a representação ao Conselho de Ética da SBC. A PARTE II traz AÇÕES RECOMENDÁVEIS: o Art. 5º recomenda indicar a disponibilidade pública do material usado na pesquisa, como códigos e bases de dados, para permitir a REPRODUTIBILIDADE dos resultados; e o Art. 6º estabelece que todos os autores devem ter tido EFETIVA PARTICIPAÇÃO no trabalho. A PARTE III traz as disposições gerais: violações podem ser apresentadas ao editor dos anais ou do periódico, que dará solução adequada ou encaminhará ao Comitê de Ética da SBC; o código deve ser seguido por todos os eventos e publicações realizados ou apoiados pela SBC; e situações não previstas serão analisadas pelo Comitê de Ética.

19. OS SEMINÁRIOS (AV2): o ciclo de seminários foi a segunda avaliação, com equipes de 4 a 5 pessoas e temas escolhidos pelos estudantes. Os quatro temas apresentados foram: "Uma humanidade artificial"; "Algoritmos de decisão e preconceitos sociais"; "Lucros Virtuais ou Perdas Reais? Explorando o Dilema Ético dos Jogos de Azar Online"; e "A Dualidade Ética da Inteligência Artificial: Impactos Positivos e Negativos na Sociedade Moderna". As orientações estabeleciam que cada equipe teria 35 a 40 minutos (e seminários individuais, 10 a 15 minutos), que os slides deveriam ser enviados até as 15 horas do dia da apresentação e que a equipe do dia deveria chegar dez minutos antes para organizar o espaço. Um ponto destacado nas orientações: "o seminário é uma atividade acadêmica formal, logo, deve-se observar vestuário, adequação da fala, conteúdo, organização, leiaute dos slides, além da capacidade de trabalho em equipe" — e também era avaliada a PRESENÇA dos colegas nas apresentações das outras equipes, porque a atividade é parte da jornada coletiva do semestre.

20. AS REFERÊNCIAS DA DISCIPLINA: Leonardo Boff, "Como nasce a ética" (Instituto Ethos); Luciano Floridi, "Ética digital on e offline" (entrevista publicada pelo IHU/Unisinos), leitura da primeira atividade de fixação; Eduardo Nuvens, "Ética na tecnologia: a critérios de que(m) e para que(m)?" (Olhar Digital); o Código de Ética da SBC e a análise do projeto Cidadão Digital; os documentos da CMSI reunidos na publicação Cadernos CGI.br; e a Recomendação da UNESCO sobre a Ética da IA. A referência a Edgar Morin chega pela leitura de Petraglia (2022).
`;

export const ETSO_TOPICS: QuizTopicOption[] = [
    {
        value: 'complexidade-etica',
        label: 'Complexidade e o conceito de ética',
        prompt:
            'Fundamentos da disciplina Ética, Tecnologia e Sociedade: o paradigma da complexidade de Edgar Morin (o latim complexus como "o que é tecido junto", a epistemologia surgida nos anos 60, a crítica à ciência como único modo de interpretar a realidade, a religação dos saberes e a integração entre cultura científica e humanística, a política de civilização planetária e a educação como brecha); a definição de ética como ciência que estuda o comportamento moral do homem em sociedade, sua natureza de construção social referente a tempo, espaço, grupo e cultura, e a afirmação de que não se nasce ético; e o texto de Leonardo Boff "Como nasce a ética", com a tese de que a ética surge quando o outro emerge diante de nós, de que ninguém pode ficar indiferente diante do outro, e de que sem passar pelo outro toda ética é antiética.',
    },
    {
        value: 'classificacao-ambiental',
        label: 'Classificação da ética e responsabilidade ambiental',
        prompt:
            'A classificação didática da ética na disciplina Ética, Tecnologia e Sociedade: ética universal (Declaração Universal dos Direitos do Homem), ética profissional (normativa e específica para profissões regulamentadas), ética na administração pública (bem servir à coletividade e imagem do serviço público), ética ambiental (relação homem e meio ambiente) e ética empresarial (movimento dos anos 90, da filantropia à responsabilidade social das empresas). E a responsabilidade socioambiental da área de TI: o tripé econômico, social e ambiental; a logística reversa definida pela Lei 12.305/2010 (Política Nacional de Resíduos Sólidos) no Art. 3º inciso XII; os quatro produtos com experiências consolidadas há mais de dez anos no Brasil (pneus, óleo lubrificante, embalagens de agrotóxicos, pilhas e baterias); e a questão do lixo eletrônico.',
    },
    {
        value: 'dilemas-decisao',
        label: 'Dilemas e tomada de decisão',
        prompt:
            'Processos de tomada de decisão na disciplina Ética, Tecnologia e Sociedade: a tríade dilema, conflito e decisão; o estudo de caso da denúncia (empresa de TI com contrato milionário cujo código de ética da contratante obriga a reportar atos ilícitos, e o contato faz comentários racistas e homofóbicos e confessa agressão moral à equipe numa reunião gravada — denunciar? fornecer a gravação como prova?); o estudo de caso do aplicativo que gera engajamento pela manipulação do comportamento dos usuários (aceitar o desafio? com justificativa obrigatória); e os temas dos seminários da turma: uma humanidade artificial, algoritmos de decisão e preconceitos sociais, o dilema ético dos jogos de azar online, e a dualidade ética da inteligência artificial.',
    },
    {
        value: 'cmsi-unesco',
        label: 'CMSI, documentos internacionais e IA',
        prompt:
            'Os documentos internacionais estudados na disciplina Ética, Tecnologia e Sociedade: a Cúpula Mundial sobre a Sociedade da Informação em duas fases (Genebra 2003, com a Declaração de Princípios e o Plano de Ação; Túnis 2005, com o Compromisso e a Agenda); a visão comum de uma Sociedade da Informação voltada para as pessoas, inclusiva e orientada para o desenvolvimento, ancorada no Artigo 19 da Declaração Universal dos Direitos Humanos; o reconhecimento do hiato digital e o compromisso de transformá-lo em oportunidade digital, com o chamado à solidariedade digital; a seção 10 da Declaração de Princípios sobre as dimensões éticas (parágrafos 56 a 59); a Linha de Ação C10 do Plano de Ação de Genebra e suas quatro alíneas, incluindo o convite explícito à academia; os compromissos de Túnis sobre cultura global de segurança cibernética, crimes cibernéticos, a exigência de que a segurança respeite privacidade e liberdade de expressão, proteção ao consumidor no comércio eletrônico e governo eletrônico; e a Recomendação da UNESCO sobre a Ética da IA de 2022, com a Metodologia de Avaliação de Prontidão (RAM) e a Avaliação de Impacto Ético (EIA) e as cinco dimensões da RAM.',
    },
    {
        value: 'sbc-codigos',
        label: 'SBC e os códigos profissionais',
        prompt:
            'A Sociedade Brasileira de Computação e seus códigos na disciplina Ética, Tecnologia e Sociedade: a SBC como sociedade científica sem fins lucrativos fundada em 24 de julho de 1978, suas finalidades de inclusão digital, espírito crítico, emancipação tecnológica e formação com responsabilidade social; o Código de Ética do Profissional de Informática de 15 de julho de 2013 e seus doze artigos, do bem-estar social e inclusão (Art. 1º) ao dever de zelar pelo cumprimento do código (Art. 12), passando por competência continuada, sigilo profissional, não discriminação, respeito a copyrights e patentes, e a vedação de apropriar-se de trabalho intelectual alheio; e o Código de Conduta para Publicações da SBC, com as condutas não aceitáveis (plágio como fraude, autoplágio, submissão múltipla e suas três exceções, exclusão de artigo), as ações recomendáveis (reprodutibilidade com disponibilização de códigos e bases, participação efetiva em autoria) e as disposições gerais sobre violações e o Comitê de Ética.',
    },
];

export const ETSO_EXAMS: ExamDefinition[] = [
    {
        id: 'av1',
        label: 'AV1 — atividades de fixação',
        description:
            'Fracionada em três atividades: a leitura comentada da entrevista de Luciano Floridi e os dois estudos de caso de dilema ético em grupo.',
    },
    {
        id: 'av2',
        label: 'AV2 — seminários',
        description:
            'Ciclo de seminários em equipe, com temas escolhidos pelos estudantes sobre IA, algoritmos e apostas online.',
    },
];

export const ETSO_SECTIONS = [
    { id: 'intro', shortTitle: 'Introdução', title: 'Ética, Tecnologia e Sociedade' },
    { id: 'complexidade', shortTitle: 'Complexidade', title: 'O paradigma da complexidade', exams: ['av1'] },
    { id: 'etica', shortTitle: 'O que é ética', title: 'Ética como construção social', exams: ['av1'] },
    { id: 'boff', shortTitle: 'Boff', title: 'Como nasce a ética', exams: ['av1'] },
    { id: 'classificacao', shortTitle: 'Classificação', title: 'As cinco éticas', exams: ['av1'] },
    { id: 'ambiental', shortTitle: 'Ambiental', title: 'Logística reversa e lixo eletrônico', exams: ['av1'] },
    { id: 'decisao', shortTitle: 'Decisão', title: 'Dilema, conflito e decisão', exams: ['av1'] },
    { id: 'casos', shortTitle: 'Estudos de caso', title: 'Os dois dilemas da AV1', exams: ['av1'] },
    { id: 'cmsi', shortTitle: 'CMSI', title: 'A Cúpula Mundial e seus documentos', exams: ['av2'] },
    { id: 'dimensoes', shortTitle: 'Dimensões éticas', title: 'As dimensões éticas e a Linha C10', exams: ['av2'] },
    { id: 'tunis', shortTitle: 'Túnis', title: 'Segurança, crimes e direitos', exams: ['av2'] },
    { id: 'unesco', shortTitle: 'UNESCO e IA', title: 'A Recomendação sobre a Ética da IA', exams: ['av2'] },
    { id: 'sbc', shortTitle: 'SBC', title: 'A Sociedade Brasileira de Computação', exams: ['av2'] },
    { id: 'codigo-etica', shortTitle: 'Código de Ética', title: 'Os doze deveres do profissional', exams: ['av2'] },
    { id: 'codigo-conduta', shortTitle: 'Publicações', title: 'Integridade na publicação científica', exams: ['av2'] },
    { id: 'seminarios', shortTitle: 'Seminários', title: 'A AV2 e os temas da turma', exams: ['av2'] },
    { id: 'quiz', shortTitle: 'Quiz', title: 'Quiz de Revisão' },
] as const;

export type EtsoSectionId = (typeof ETSO_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['av1'],
        question: 'De onde vem a palavra COMPLEXIDADE, no sentido usado por Edgar Morin?',
        options: [
            'Do grego kompleksos, "aquilo que é difícil"',
            'Do latim COMPLEXUS, "o que é tecido junto"',
            'Do francês complexité, "sistema de muitas partes"',
            'Do latim complicatus, "aquilo que tem dobras"',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a etimologia carrega a tese. Complexo não é sinônimo de complicado: é aquilo cujos fios estão entrelaçados e não podem ser separados sem perder o objeto. Daí a síntese de Petraglia: "tudo se liga a tudo".',
        feedbackWrong:
            'Vem do latim COMPLEXUS, "o que é tecido junto". A etimologia importa: complexo não quer dizer complicado, mas entrelaçado — o que justifica religar saberes em vez de fragmentá-los.',
    },
    {
        id: 'q2',
        exams: ['av1'],
        question: 'O que o pensamento complexo de Morin questiona?',
        options: [
            'A validade de qualquer conhecimento científico',
            'O paradigma da razão e a ciência como ÚNICO modo de interpretar a realidade',
            'A necessidade de especialização profissional',
            'A existência de valores universais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e note a precisão: Morin não nega a ciência, questiona sua pretensão de ser o único modo válido de interpretar a realidade. A proposta é integrar cultura científica e cultura humanística, não substituir uma pela outra.',
        feedbackWrong:
            'O pensamento complexo questiona a ciência como ÚNICO modo de interpretar a realidade — não a ciência em si. Busca religar conhecimentos dispersos e integrar as culturas científica e humanística.',
    },
    {
        id: 'q3',
        exams: ['av1'],
        question: 'Qual a justificativa PRÁTICA que Morin dá para o pensamento complexo?',
        options: [
            'Ele é mais fácil de ensinar do que as disciplinas isoladas',
            'Não se pode responder às indagações de um cotidiano multidimensional e imprevisível de maneira fragmentada ou disciplinar',
            'Ele elimina a necessidade de pesquisa empírica',
            'Ele reduz o custo da formação universitária',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. O argumento não é estético: sociedades cada vez mais complexas produzem problemas que atravessam várias áreas ao mesmo tempo, e respostas de uma disciplina só chegam incompletas.',
        feedbackWrong:
            'A justificativa é que problemas multidimensionais e imprevisíveis não admitem respostas fragmentadas ou disciplinares — precisam de respostas que considerem diversas áreas do conhecimento.',
    },
    {
        id: 'q4',
        exams: ['av1'],
        question: 'Qual frase sintetiza a posição de Morin sobre o futuro da humanidade?',
        options: [
            'Devemos aceitar o mundo como ele é',
            'Ele nos faz renunciar ao melhor dos mundos, mas não desistir de um mundo melhor',
            'Só a tecnologia pode salvar a civilização',
            'O progresso é inevitável e automático',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É uma posição entre o utopismo e o cinismo: abandona-se a perfeição como meta, sem abandonar a melhora como possibilidade — e o material lembra que muitas mudanças históricas começaram por iniciativas marginais.',
        feedbackWrong:
            'A formulação é "renunciar ao melhor dos mundos, mas não desistir de um mundo melhor". Morin propõe uma política de civilização planetária, tendo a educação como brecha para essa construção.',
    },
    {
        id: 'q5',
        exams: ['av1'],
        question: 'Como a disciplina define ÉTICA?',
        options: [
            'Conjunto de regras impostas pelo Estado aos cidadãos',
            'Ciência que estuda o comportamento moral do homem em sociedade',
            'Sentimento inato de distinguir o certo do errado',
            'Norma religiosa aplicada à vida profissional',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. E a definição vem acompanhada de características importantes: é uma construção social, é referente a um tempo, espaço, grupo e cultura, e trabalha com dilemas, conflitos e processos de tomada de decisão.',
        feedbackWrong:
            'A definição trabalhada é "ciência que estuda o comportamento moral do homem em sociedade". Não é norma estatal nem sentimento inato — é justamente o oposto de inato, como diz a afirmação central da disciplina.',
    },
    {
        id: 'q6',
        exams: ['av1'],
        question: 'Qual é a afirmação central da disciplina sobre a origem da conduta ética?',
        options: [
            'Nascemos com um senso ético que a educação apenas desperta',
            'NÃO SE NASCE ÉTICO — a ética é uma construção social',
            'A ética depende exclusivamente da formação religiosa',
            'Apenas profissões regulamentadas exigem conduta ética',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — "não nascemos prontos". E a consequência é otimista: se a ética é construída, ela pode ser aprendida, discutida e revista. É exatamente o que uma disciplina de ética se propõe a fazer.',
        feedbackWrong:
            'A afirmação é que não se nasce ético: a ética é uma construção social, referente a um tempo, espaço, grupo e cultura. É por ser construída que pode ser ensinada.',
    },
    {
        id: 'q7',
        exams: ['av1'],
        question: 'Segundo Leonardo Boff, quando surge a ética?',
        options: [
            'Quando o Estado promulga uma lei',
            'Quando o OUTRO emerge diante de nós',
            'Quando a pessoa atinge a maioridade',
            'Quando um código profissional é assinado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. É uma tese relacional: a ética não nasce de dentro do sujeito isolado nem de uma norma externa, mas do encontro. Daí a pergunta que o texto deixa aberta — quem é o outro?',
        feedbackWrong:
            'Para Boff, "a ética surge quando o outro emerge diante de nós". Ela nasce da relação, não da norma — e "diante do outro ninguém pode ficar indiferente".',
    },
    {
        id: 'q8',
        exams: ['av1'],
        question: 'O que significa a frase de Boff "sem passar pelo outro, toda ética é antiética"?',
        options: [
            'Que decisões éticas precisam ser aprovadas por um comitê',
            'Que uma ética construída apenas a partir dos próprios interesses, sem considerar o outro, contradiz a própria noção de ética',
            'Que só há ética em relações profissionais formalizadas',
            'Que a ética depende de consenso majoritário',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Se a ética nasce da relação com o outro, uma "ética" que o ignore está negando sua própria origem — por mais coerente que pareça internamente. É a formulação mais forte do texto.',
        feedbackWrong:
            'A frase afirma que a ética construída sem considerar o outro contradiz a si mesma, porque é justamente do encontro com o outro que ela nasce. Não se trata de comitê nem de maioria.',
    },
    {
        id: 'q9',
        exams: ['av1'],
        question: 'Segundo Boff, como uma pessoa "se faz um ser ético"?',
        options: [
            'Estudando filosofia moral',
            'Assumindo sua responsabilidade — ou demitindo-se dela —, dando-se conta da consequência dos próprios atos',
            'Seguindo estritamente o código de sua profissão',
            'Evitando qualquer situação de conflito',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e o texto é preciso ao incluir as duas possibilidades: assumir a responsabilidade OU demitir-se dela. Nos dois casos a pessoa se define eticamente — inclusive na omissão. Os atos "podem ser bons ou ruins para o outro e para mim".',
        feedbackWrong:
            'É pela responsabilidade assumida (ou pela renúncia a ela) e pela consciência das consequências dos próprios atos. Boff inclui deliberadamente a omissão: demitir-se da responsabilidade também é uma definição ética de si.',
    },
    {
        id: 'q10',
        exams: ['av1'],
        question: 'Quais são as cinco categorias da classificação didática da ética trabalhada na disciplina?',
        options: [
            'Individual, coletiva, religiosa, jurídica e política',
            'Universal, profissional, na administração pública, ambiental e empresarial',
            'Teórica, aplicada, normativa, descritiva e comparada',
            'Pessoal, familiar, comunitária, nacional e global',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada uma tem uma referência própria: a universal remete à Declaração Universal dos Direitos do Homem; a profissional é normativa e específica de profissões regulamentadas; a da administração pública trata de bem servir à coletividade; a ambiental, da relação com o meio ambiente; e a empresarial, da responsabilidade social das empresas.',
        feedbackWrong:
            'São ética universal, profissional, na administração pública, ambiental e empresarial. Cada categoria tem sua referência normativa e seu campo de aplicação próprios.',
    },
    {
        id: 'q11',
        exams: ['av1'],
        question: 'A ética EMPRESARIAL ganha força em qual período, e com que conceito?',
        options: [
            'Anos 1950, com a filantropia industrial',
            'Anos 1990, evoluindo da filantropia empresarial ao conceito de RESPONSABILIDADE SOCIAL das empresas, no final do século XX',
            'Anos 2010, com as normas ISO de compliance',
            'Anos 1930, com a regulamentação trabalhista',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. A distinção entre filantropia e responsabilidade social é o ponto: a primeira é doação eventual, a segunda é assumir consequências da própria operação — outro modo de dizer que a empresa responde pelo efeito do que faz, não só pelo que doa.',
        feedbackWrong:
            'É um movimento forte nos anos 90, com a filantropia empresarial evoluindo para o conceito de responsabilidade social das empresas, desenvolvido no final do século XX.',
    },
    {
        id: 'q12',
        exams: ['av1'],
        question: 'Qual é o TRIPÉ pelo qual a área de TI deve contribuir com o desenvolvimento sustentável?',
        options: [
            'Técnico, jurídico e financeiro',
            'Econômico, social e ambiental',
            'Software, hardware e pessoas',
            'Inovação, eficiência e lucro',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O material é explícito ao dizer que Tecnologia da Informação, Sistemas de Informação e Computação devem contribuir para o desenvolvimento sustentável nas três dimensões — não apenas na econômica.',
        feedbackWrong:
            'O tripé é econômico, social e ambiental. A disciplina afirma que a área de TI deve contribuir para o desenvolvimento sustentável por meio dele.',
    },
    {
        id: 'q13',
        exams: ['av1'],
        question: 'Qual lei institui a Política Nacional de Resíduos Sólidos (PNRS) e define logística reversa?',
        options: ['Lei 12.305/2010', 'Lei 9.605/1998', 'Lei 13.709/2018', 'Lei 10.257/2001'],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. A definição está no Art. 3º, inciso XII: um conjunto de ações, procedimentos e meios destinados a viabilizar a coleta e a restituição dos resíduos sólidos ao setor empresarial, para reaproveitamento ou outra destinação final ambientalmente adequada.',
        feedbackWrong:
            'É a Lei 12.305/2010. A Lei 13.709/2018 é a LGPD, a 9.605/1998 é a de crimes ambientais e a 10.257/2001 é o Estatuto da Cidade.',
    },
    {
        id: 'q14',
        exams: ['av1'],
        question: 'Para quais produtos o Brasil já tem experiências de logística reversa há mais de dez anos?',
        options: [
            'Eletrodomésticos, celulares, computadores e televisores',
            'Pneus, óleo lubrificante, embalagens de agrotóxicos, e pilhas e baterias',
            'Papel, vidro, plástico e metal',
            'Medicamentos, cosméticos, alimentos e bebidas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — quatro categorias com sistemas específicos consolidados. Vale notar o que NÃO está na lista: equipamentos de informática, justamente o resíduo que a área produz. É o gancho da discussão sobre lixo eletrônico.',
        feedbackWrong:
            'São pneus, óleo lubrificante, embalagens de agrotóxicos, e pilhas e baterias. A logística reversa já é realidade há mais de trinta anos em alguns países da Europa, enquanto a PNRS ainda é recente no Brasil.',
    },
    {
        id: 'q15',
        exams: ['av1'],
        question: 'Qual é a tríade dos processos de tomada de decisão trabalhada na disciplina?',
        options: [
            'Problema, análise e solução',
            'Dilema, conflito e decisão',
            'Percepção, julgamento e ação',
            'Norma, exceção e sanção',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O dilema é a situação em que toda alternativa tem custo ético; o conflito é a tensão entre valores ou obrigações que se chocam; e a decisão é o momento de assumir um caminho com suas consequências — a operacionalização da tese de Boff sobre responsabilidade.',
        feedbackWrong:
            'A tríade é dilema (01), conflito (02) e decisão (03). Ela estrutura os dois estudos de caso trabalhados em grupo na AV1.',
    },
    {
        id: 'q16',
        exams: ['av1'],
        question: 'No estudo de caso da denúncia, qual obrigação contratual está em jogo?',
        options: [
            'A cláusula de confidencialidade que proíbe gravar reuniões',
            'O código de ética da contratante, que exige reportar ao canal de denúncias qualquer ato ilícito presenciado, seja funcionário ou terceiro',
            'A exclusividade na prestação do serviço',
            'A obrigação de entregar o projeto em prazo determinado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a expressão "não importando se você é funcionário ou terceiro" é decisiva: a obrigação alcança quem presta serviço de fora, exatamente a posição de quem enfrenta o dilema.',
        feedbackWrong:
            'É o código de ética da contratante, cuja observância foi condição do contrato milionário. Ele obriga a reportar atos ilícitos presenciados, independentemente de vínculo empregatício.',
    },
    {
        id: 'q17',
        exams: ['av1'],
        question: 'O que o contato da multinacional faz na reunião gravada, no estudo de caso 1?',
        options: [
            'Revela informações financeiras sigilosas',
            'Faz comentários racistas e homofóbicos e confessa agredir moralmente a equipe que lidera, alegando que isso garante produtividade',
            'Propõe uma alteração ilegal no contrato',
            'Ameaça cancelar o projeto sem justificativa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a justificativa dele ("para garantir produtividade, visando agilizar os projetos") é parte do dilema: ela apresenta a violência como método de gestão, o que envolve o próprio projeto em co-criação.',
        feedbackWrong:
            'Ele faz comentários racistas e homofóbicos e confessa agressão moral à equipe que lidera, alegando que a postura garante produtividade e agiliza os projetos desenvolvidos em co-criação.',
    },
    {
        id: 'q18',
        exams: ['av1'],
        question: 'Quais são as DUAS perguntas do estudo de caso 1?',
        options: [
            'Você aceitaria o contrato? Você renegociaria os valores?',
            'Você faz a denúncia? Você forneceria a gravação como prova da ilicitude?',
            'Você comunicaria a imprensa? Você processaria a empresa?',
            'Você pediria demissão? Você avisaria a equipe agredida?',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e são perguntas distintas de propósito. Dá para concluir que se deve denunciar e ainda hesitar sobre usar a gravação: entram aí legitimidade da prova, exposição das pessoas envolvidas e consequências para quem denuncia.',
        feedbackWrong:
            'As perguntas são se você faz a denúncia e se forneceria a gravação como prova. Separá-las é o que torna o caso interessante: são duas decisões, não uma.',
    },
    {
        id: 'q19',
        exams: ['av1'],
        question: 'No estudo de caso 2, qual é o desafio proposto na startup?',
        options: [
            'Desenvolver um aplicativo que colete dados sem consentimento',
            'Desenvolver um aplicativo que gere alto engajamento A PARTIR DA MANIPULAÇÃO DO COMPORTAMENTO dos usuários',
            'Desenvolver um aplicativo sem testes de segurança, para acelerar o lançamento',
            'Desenvolver um aplicativo que copie funcionalidades de um concorrente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e repare que o enunciado nomeia a manipulação abertamente, sem eufemismo. Não há "zona cinzenta" para descobrir: a questão é o que você faz sabendo exatamente o que está sendo pedido.',
        feedbackWrong:
            'O desafio é desenvolver um aplicativo que gere alto engajamento a partir da manipulação do comportamento dos usuários. O enunciado é explícito quanto ao meio — e por isso a resposta exige justificativa.',
    },
    {
        id: 'q20',
        exams: ['av1'],
        question: 'Qual exigência o enunciado do estudo de caso 2 faz explicitamente?',
        options: [
            'Que a resposta seja dada em grupo de no máximo três pessoas',
            'Que a resposta seja JUSTIFICADA — "não vale Sim ou Não"',
            'Que a resposta cite ao menos duas referências bibliográficas',
            'Que a resposta seja anônima',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A exigência é pedagógica: em ética, a posição importa menos que o raciocínio que a sustenta — e é o raciocínio que pode ser discutido, contestado e revisto.',
        feedbackWrong:
            'O enunciado exige justificativa: "não vale Sim ou Não". Em ética, o que se avalia é o argumento, não a escolha isolada.',
    },
    {
        id: 'q21',
        exams: ['av2'],
        question: 'Quais são as duas fases da Cúpula Mundial sobre a Sociedade da Informação e seus documentos?',
        options: [
            'Genebra 2003 (Declaração de Princípios e Plano de Ação) e Túnis 2005 (Compromisso e Agenda)',
            'Rio 1992 (Agenda 21) e Joanesburgo 2002 (Plano de Implementação)',
            'Paris 2003 (Carta de Princípios) e Genebra 2005 (Plano Global)',
            'Nova York 2000 (Metas do Milênio) e Túnis 2005 (Agenda Digital)',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Exato — quatro documentos ao todo, em duas fases. Genebra estabelece os princípios e o plano; Túnis assume compromissos e detalha a agenda de implementação.',
        feedbackWrong:
            'São Genebra 2003, com a Declaração de Princípios e o Plano de Ação, e Túnis 2005, com o Compromisso de Túnis e a Agenda de Túnis para a Sociedade da Informação.',
    },
    {
        id: 'q22',
        exams: ['av2'],
        question: 'Qual artigo da Declaração Universal dos Direitos Humanos a Declaração de Princípios de Genebra reafirma como fundamento?',
        options: ['Artigo 1', 'Artigo 12', 'Artigo 19', 'Artigo 26'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto — o Artigo 19, sobre liberdade de opinião e expressão, incluindo a liberdade de procurar, receber e transmitir informações e ideias por quaisquer meios e independentemente de fronteiras. É o fundamento jurídico do documento inteiro.',
        feedbackWrong:
            'É o Artigo 19, que trata da liberdade de opinião e expressão e do direito de procurar, receber e transmitir informações por quaisquer meios, independentemente de fronteiras.',
    },
    {
        id: 'q23',
        exams: ['av2'],
        question: 'Como a Declaração de Princípios caracteriza a COMUNICAÇÃO?',
        options: [
            'Como um serviço econômico regulado pelos Estados',
            'Como um processo social fundamental, uma necessidade humana básica e o fundamento de todas as organizações sociais',
            'Como um direito secundário, derivado da liberdade de imprensa',
            'Como uma tecnologia neutra em relação a valores',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Ao colocar a comunicação como necessidade humana básica e fundamento de toda organização social, o documento justifica tratar o acesso à informação como questão de direitos, e não como mercadoria.',
        feedbackWrong:
            'A Declaração afirma que a comunicação é um processo social fundamental, uma necessidade humana básica e o fundamento de todas as organizações sociais — é essencial para a Sociedade da Informação.',
    },
    {
        id: 'q24',
        exams: ['av2'],
        question: 'O que a CMSI propõe fazer com o HIATO DIGITAL?',
        options: [
            'Aceitá-lo como consequência natural do desenvolvimento desigual',
            'Transformá-lo em OPORTUNIDADE DIGITAL para todos, especialmente para quem corre risco de ser deixado para trás',
            'Resolvê-lo exclusivamente por meio do mercado',
            'Tratá-lo como questão interna de cada país',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O documento reconhece que os benefícios das TIC são distribuídos de forma desigual entre países E dentro das próprias sociedades — a desigualdade digital não é só internacional, é doméstica também.',
        feedbackWrong:
            'O compromisso declarado é transformar o hiato digital em oportunidade digital para todos. E o reconhecimento é duplo: a desigualdade existe entre países e também dentro de cada sociedade.',
    },
    {
        id: 'q25',
        exams: ['av2'],
        question: 'O que a CMSI chama de SOLIDARIEDADE DIGITAL?',
        options: [
            'Doação de equipamentos usados a países pobres',
            'O chamado a novas formas de solidariedade, parceria e cooperação entre governos, setor privado, sociedade civil e organizações internacionais',
            'Um fundo internacional obrigatório para conectividade',
            'A gratuidade do acesso à Internet',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o desenho multissetorial é a parte importante: a construção de uma Sociedade da Informação inclusiva não é atribuída só aos governos, mas também ao setor privado, à sociedade civil e às organizações internacionais.',
        feedbackWrong:
            'É o chamado a novas formas de solidariedade, parceria e cooperação entre os governos e as demais partes interessadas — setor privado, sociedade civil e organizações internacionais —, em nível nacional e internacional.',
    },
    {
        id: 'q26',
        exams: ['av2'],
        question: 'Segundo a Declaração de Princípios, qual é o papel atribuído aos JOVENS na Sociedade da Informação?',
        options: [
            'São o público que mais precisa de proteção contra as TIC',
            'Constituem a força de trabalho do futuro, são os principais criadores e os primeiros a adotarem as TIC',
            'Devem ter acesso restrito até a maioridade',
            'São consumidores prioritários dos serviços digitais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o documento pede que suas capacidades sejam promovidas como estudantes, desenvolvedores, colaboradores, empresários e tomadores de decisões, com atenção especial a quem ainda não pôde se beneficiar das oportunidades das TIC.',
        feedbackWrong:
            'O documento os reconhece como força de trabalho do futuro, principais criadores e primeiros adotantes das TIC. Separadamente, ele trata da proteção dos direitos e do bem-estar das crianças.',
    },
    {
        id: 'q27',
        exams: ['av2'],
        question: 'Os parágrafos 56 a 59 da Declaração de Princípios tratam de quê?',
        options: [
            'Do financiamento da infraestrutura de telecomunicações',
            'Das DIMENSÕES ÉTICAS da Sociedade da Informação',
            'Da governança da Internet',
            'Da propriedade intelectual no meio digital',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — é a seção 10 do documento. O §56 elenca os valores fundamentais; o §57 trata de justiça e dignidade; o §58, do respeito aos direitos humanos incluindo a privacidade; e o §59, das medidas contra usos abusivos das TIC.',
        feedbackWrong:
            'Os parágrafos 56 a 59 formam a seção 10, sobre as dimensões éticas da Sociedade da Informação — os valores fundamentais, a justiça e a dignidade, o respeito à privacidade e as medidas contra usos abusivos.',
    },
    {
        id: 'q28',
        exams: ['av2'],
        question: 'Quais valores fundamentais o §56 da Declaração de Princípios determina preservar?',
        options: [
            'Eficiência, inovação, competitividade e crescimento',
            'Liberdade, igualdade, solidariedade, tolerância, responsabilidade compartilhada e respeito com a natureza',
            'Ordem, segurança, hierarquia e disciplina',
            'Privacidade, anonimato, criptografia e neutralidade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A inclusão do "respeito com a natureza" numa declaração sobre tecnologia da informação é digna de nota — conecta diretamente com a discussão de logística reversa e lixo eletrônico da primeira parte da disciplina.',
        feedbackWrong:
            'São liberdade, igualdade, solidariedade, tolerância, responsabilidade compartilhada e respeito com a natureza — os mesmos valores que reaparecem na alínea (a) da Linha de Ação C10.',
    },
    {
        id: 'q29',
        exams: ['av2'],
        question: 'A Linha de Ação C10 do Plano de Ação de Genebra convida explicitamente qual setor a continuar a investigação sobre as dimensões éticas das TIC?',
        options: ['O setor privado', 'A ACADEMIA', 'Os organismos de defesa do consumidor', 'A imprensa'],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a alínea (d) do §25 convida as partes interessadas, "em especial a academia". É um documento internacional atribuindo à universidade um papel formal no tema, o que dá sentido a uma disciplina como esta existir.',
        feedbackWrong:
            'A alínea (d) convida as partes interessadas, em especial a ACADEMIA, a continuar a investigação sobre as dimensões éticas das TIC.',
    },
    {
        id: 'q30',
        exams: ['av2'],
        question: 'O que a alínea (b) do §25 da Linha C10 pede de todos os interessados?',
        options: [
            'Que financiem programas de inclusão digital',
            'Que AUMENTEM SUA CONSCIÊNCIA da dimensão ética de sua utilização das TIC',
            'Que criem comitês nacionais de ética digital',
            'Que restrinjam o acesso a conteúdos nocivos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. É uma ação de natureza formativa, e não regulatória: antes de normas, o documento pede consciência de que o uso da tecnologia tem dimensão ética — o que é, exatamente, o propósito da disciplina.',
        feedbackWrong:
            'A alínea (b) pede que todos os interessados aumentem a consciência da dimensão ética de sua utilização das TIC. A proteção da privacidade e dos dados pessoais está na alínea (c).',
    },
    {
        id: 'q31',
        exams: ['av2'],
        question: 'O que o §39 do Compromisso de Túnis busca promover?',
        options: [
            'Um tratado internacional de censura de conteúdo',
            'Uma CULTURA GLOBAL DE SEGURANÇA CIBERNÉTICA, conforme a resolução 57/239 da ONU',
            'A criação de uma autoridade mundial de Internet',
            'A padronização técnica dos protocolos de rede',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e o documento é cuidadoso ao dizer que essa cultura requer ação nacional E cooperação internacional, e que ela aprimora a proteção da informação, da privacidade e dos dados pessoais. Segurança e privacidade aparecem como aliadas, não como opostos.',
        feedbackWrong:
            'O §39 promove uma cultura global de segurança cibernética, conforme a resolução AGNU 57/239, exigindo ação nacional e cooperação internacional e aprimorando a proteção da informação, da privacidade e dos dados pessoais.',
    },
    {
        id: 'q32',
        exams: ['av2'],
        question:
            'Segundo o §42 do Compromisso de Túnis, o que as medidas de segurança e de combate a crimes cibernéticos e spam devem fazer?',
        options: [
            'Prevalecer sobre outros direitos quando houver conflito',
            'PROTEGER E RESPEITAR as disposições relativas à privacidade e à liberdade de expressão',
            'Ser definidas exclusivamente por cada país, sem parâmetros internacionais',
            'Priorizar a estabilidade técnica sobre questões de direitos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e este é um dos pontos mais importantes do documento: segurança não é licença para suprimir direitos. As medidas devem respeitar a privacidade e a liberdade de expressão previstas na Declaração Universal e na Declaração de Genebra.',
        feedbackWrong:
            'O §42 determina que essas medidas devem proteger e respeitar a privacidade e a liberdade de expressão. O documento recusa expressamente o trade-off entre segurança e direitos.',
    },
    {
        id: 'q33',
        exams: ['av2'],
        question: 'O §40 de Túnis destaca a persecução aos crimes cibernéticos, incluindo qual situação particular?',
        options: [
            'Crimes cometidos por menores de idade',
            'O crime cometido em uma determinada jurisdição que venha a ter efeitos em OUTRA',
            'Crimes cometidos por servidores públicos',
            'Crimes que envolvam criptomoedas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — a transnacionalidade é o problema central do crime cibernético, e é o que exige cooperação internacional entre as agências de aplicação da lei. O documento cita as Resoluções 55/63 e 56/121 da ONU e a Convenção do Conselho Europeu sobre Crime Cibernético.',
        feedbackWrong:
            'É o crime cometido numa jurisdição com efeitos em outra — a transnacionalidade que torna a cooperação internacional indispensável.',
    },
    {
        id: 'q34',
        exams: ['av2'],
        question: 'O que o §47 do Compromisso de Túnis solicita em relação ao comércio eletrônico?',
        options: [
            'A isenção de tributos sobre transações on-line',
            'O desenvolvimento de leis e práticas nacionais de PROTEÇÃO AO CONSUMIDOR que compra bens e serviços on-line',
            'A criação de uma moeda digital internacional',
            'A limitação do comércio eletrônico transfronteiriço',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — reconhecendo o aumento do volume e do valor dos negócios eletrônicos, o documento pede leis de proteção ao consumidor e mecanismos de aplicação, além de cooperação internacional para ampliar o comércio eletrônico e a confiança do consumidor.',
        feedbackWrong:
            'O §47 solicita leis e práticas nacionais de proteção ao consumidor on-line e mecanismos para sua aplicação — a confiança do consumidor é tratada como condição da expansão do comércio eletrônico.',
    },
    {
        id: 'q35',
        exams: ['av2'],
        question: 'Quais são os dois recursos-chave determinados pela Recomendação da UNESCO sobre a Ética da IA (2022)?',
        options: [
            'Um comitê internacional e um fundo de fomento',
            'A Metodologia de Avaliação de Prontidão (RAM) e a Avaliação de Impacto Ético (EIA)',
            'Uma certificação de algoritmos e um selo de conformidade',
            'Um tratado vinculante e um tribunal especializado',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Os dois constituem os principais pilares da implementação da IA em cada país: avaliam e promovem a resiliência de leis, políticas e instituições existentes, e o alinhamento dos sistemas de IA com os valores da Recomendação.',
        feedbackWrong:
            'São a Readiness Assessment Methodology (RAM), de avaliação de prontidão, e a Ethical Impact Assessment (EIA), de avaliação de impacto ético.',
    },
    {
        id: 'q36',
        exams: ['av2'],
        question: 'Quais são as CINCO dimensões da Metodologia de Avaliação de Prontidão (RAM) da UNESCO?',
        options: [
            'Técnica, financeira, jurídica, ambiental e social',
            'Jurídico e regulatório; social e cultural; econômico; científico e educacional; tecnológico e infraestrutura',
            'Governança, dados, algoritmos, pessoas e processos',
            'Privacidade, transparência, justiça, segurança e explicabilidade',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Cada dimensão se divide em subcategorias com indicadores qualitativos e quantitativos. Além do status individual de cada país, a RAM fornece informações comparativas, para que os países aprendam uns com os outros.',
        feedbackWrong:
            'São jurídico e regulatório, social e cultural, econômico, científico e educacional, e tecnológico e infraestrutura. Note que a prontidão para a IA não é avaliada só por capacidade técnica.',
    },
    {
        id: 'q37',
        exams: ['av2'],
        question: 'Quando foi fundada a Sociedade Brasileira de Computação (SBC)?',
        options: ['24 de julho de 1978', '15 de julho de 2013', '5 de outubro de 1988', '12 de janeiro de 1995'],
        correctIndex: 0,
        feedbackCorrect:
            'Exato. É uma sociedade científica sem fins lucrativos que reúne estudantes, professores, profissionais, pesquisadores e entusiastas de todo o Brasil. A data de 15 de julho de 2013 é a do Código de Ética, não a da fundação.',
        feedbackWrong:
            'A SBC foi fundada em 24 de julho de 1978. A data de 15 de julho de 2013 é a instituição do Código de Ética do Profissional de Informática.',
    },
    {
        id: 'q38',
        exams: ['av2'],
        question: 'Entre as finalidades da SBC, qual se refere à postura diante da política governamental?',
        options: [
            'Manter neutralidade absoluta em relação a políticas públicas',
            'Manter-se permanentemente atenta à política governamental que afeta a computação, no sentido de assegurar a EMANCIPAÇÃO TECNOLÓGICA do país',
            'Representar oficialmente o governo em fóruns internacionais',
            'Fiscalizar o exercício profissional mediante registro obrigatório',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e o vocabulário é significativo: "emancipação tecnológica" e "personalidade nacional da comunidade técnico-científica" indicam que a entidade se pensa também como ator de soberania, não apenas como associação técnica.',
        feedbackWrong:
            'A finalidade declarada é manter-se atenta à política governamental para assegurar a emancipação tecnológica do país. A SBC também zela pelo espírito crítico e pela personalidade nacional da comunidade técnico-científica.',
    },
    {
        id: 'q39',
        exams: ['av2'],
        question: 'Qual é o Art. 1º do Código de Ética do Profissional de Informática da SBC?',
        options: [
            'Exercer o trabalho com responsabilidade, dedicação, honestidade e justiça',
            'Contribuir para o BEM-ESTAR SOCIAL, promovendo, sempre que possível, a inclusão de todos os setores da sociedade',
            'Esforçar-se para adquirir continuamente competência técnica e profissional',
            'Guardar sigilo profissional das informações a que tiver acesso',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e a ordem é uma declaração de prioridades. O código não abre pela competência técnica nem pelo dever para com o cliente: abre pelo bem-estar social e pela inclusão. As outras alternativas são os artigos 2º, 3º e 5º.',
        feedbackWrong:
            'O Art. 1º trata de contribuir para o bem-estar social e promover a inclusão de todos os setores da sociedade. As demais alternativas são os artigos 2º, 3º e 5º — a ordem não é acidental.',
    },
    {
        id: 'q40',
        exams: ['av2'],
        question: 'Segundo o Art. 6º do Código de Ética da SBC, as atividades profissionais devem ser conduzidas sem discriminação de quê?',
        options: [
            'Apenas de raça e religião',
            'Raça, sexo, religião, nacionalidade, cor da pele, idade, estado civil ou qualquer outra condição humana',
            'Apenas de nacionalidade e formação acadêmica',
            'Apenas em relação a clientes, não a colegas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — e a cláusula aberta ao final, "ou qualquer outra condição humana", impede que a lista funcione como limite. O que se veda é a discriminação, não apenas as formas nomeadas.',
        feedbackWrong:
            'A lista é ampla — raça, sexo, religião, nacionalidade, cor da pele, idade, estado civil — e termina com "ou qualquer outra condição humana", cláusula aberta que impede leitura restritiva.',
    },
    {
        id: 'q41',
        exams: ['av2'],
        question: 'O que diz o Art. 11 do Código de Ética do Profissional de Informática?',
        options: [
            'Que se deve respeitar a legislação vigente e os direitos de terceiros',
            'Que nunca se deve apropriar-se de trabalho intelectual, iniciativas ou soluções encontradas por outras pessoas',
            'Que se deve zelar pelo cumprimento do código',
            'Que se deve honrar contratos, copyrights e patentes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Note que ele vai além do Art. 8º, que trata de copyrights e patentes: o Art. 11 protege também iniciativas e soluções, coisas que muitas vezes não têm proteção legal formal — mas cuja apropriação continua sendo antiética.',
        feedbackWrong:
            'O Art. 11 veda apropriar-se de trabalho intelectual, iniciativas ou soluções de outras pessoas. As demais alternativas são os artigos 7º, 12 e 8º.',
    },
    {
        id: 'q42',
        exams: ['av2'],
        question: 'Como o Código de Conduta para Publicações da SBC classifica o PLÁGIO?',
        options: [
            'Como falta leve, sujeita a advertência',
            'Como FRAUDE — cópia de material publicado por outro autor sem explicitar e citar o trabalho de origem',
            'Como conduta aceitável se houver autorização do autor original',
            'Como questão exclusivamente jurídica, fora do escopo do código',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — o Art. 1º usa a palavra "fraude", não um termo atenuado. E o critério é objetivo: a cópia sem citação da origem, quando é possível identificar a ocorrência.',
        feedbackWrong:
            'O Art. 1º classifica o plágio como FRAUDE e o declara não aceitável pela SBC. É a qualificação mais severa do documento.',
    },
    {
        id: 'q43',
        exams: ['av2'],
        question: 'O que é AUTOPLÁGIO, segundo o Art. 2º do Código de Conduta para Publicações?',
        options: [
            'Publicar o mesmo trabalho em dois idiomas',
            'Reutilizar total ou parcialmente material anteriormente publicado PELO PRÓPRIO AUTOR sem citar o trabalho de origem e sem respeitar a percentagem mínima de material novo',
            'Citar excessivamente os próprios trabalhos anteriores',
            'Submeter um artigo rejeitado a outro periódico',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato, e é um conceito que costuma surpreender: copiar a si mesmo também é problema, porque apresenta como novo aquilo que já foi publicado. O código o classifica como antiético.',
        feedbackWrong:
            'Autoplágio é reutilizar material próprio já publicado ou submetido sem citar a origem e sem respeitar a percentagem mínima de material novo. Submeter após rejeição é expressamente permitido pelo parágrafo único do Art. 3º.',
    },
    {
        id: 'q44',
        exams: ['av2'],
        question: 'Em quais condições a SUBMISSÃO MÚLTIPLA é aceitável, segundo o parágrafo único do Art. 3º?',
        options: [
            'Nunca é aceitável, em nenhuma hipótese',
            'Veículos de natureza diferente com todos os editores informados; idiomas diferentes com todos os veículos aceitando e informados; ou submissão posterior à REJEIÇÃO da anterior',
            'Apenas quando o autor for o mesmo em todos os veículos',
            'Apenas quando os veículos forem de países diferentes',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — três exceções, e o fio comum entre as duas primeiras é a TRANSPARÊNCIA: todos os editores precisam ser informados no momento da submissão. O problema não é o duplo envio em si, é a omissão.',
        feedbackWrong:
            'São três condições: veículos de natureza diferente com editores informados, idiomas diferentes com todos aceitando e informados, ou submissão após a rejeição anterior. A transparência é o critério comum.',
    },
    {
        id: 'q45',
        exams: ['av2'],
        question: 'O que o Art. 5º do Código de Conduta recomenda sobre REPRODUTIBILIDADE?',
        options: [
            'Que todo artigo seja replicado por um segundo laboratório antes da publicação',
            'Que os artigos indiquem a disponibilidade pública do material usado na pesquisa, como códigos e bases de dados',
            'Que os resultados sejam publicados apenas após três anos de verificação',
            'Que os revisores executem os experimentos descritos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — e é uma AÇÃO RECOMENDÁVEL (Parte II), não uma vedação. O objetivo declarado é facilitar a reprodução dos resultados por outros pesquisadores, o que é particularmente concreto em computação, onde o material é código e dados.',
        feedbackWrong:
            'O Art. 5º recomenda indicar a disponibilidade pública do material da pesquisa — códigos e bases de dados —, para facilitar a reprodução dos resultados por outros pesquisadores.',
    },
    {
        id: 'q46',
        exams: ['av2'],
        question: 'Segundo o Art. 6º do Código de Conduta, o que se espera de todos os autores de um trabalho?',
        options: [
            'Que sejam membros da SBC',
            'Que tenham tido EFETIVA PARTICIPAÇÃO no respectivo trabalho',
            'Que assinem um termo de responsabilidade individual',
            'Que estejam vinculados à mesma instituição',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O artigo trata da autoria de cortesia — nomes acrescentados por hierarquia, reciprocidade ou conveniência. A regra é simples: quem assina, participou.',
        feedbackWrong:
            'Espera-se que todos os autores tenham tido efetiva participação no trabalho. É a resposta do código à prática de incluir nomes que não contribuíram.',
    },
    {
        id: 'q47',
        exams: ['av2'],
        question: 'Quais foram os temas dos seminários apresentados pela turma na AV2?',
        options: [
            'Criptografia, blockchain, computação quântica e metaverso',
            'Uma humanidade artificial; algoritmos de decisão e preconceitos sociais; o dilema ético dos jogos de azar online; e a dualidade ética da inteligência artificial',
            'LGPD, marco civil da internet, direito digital e crimes cibernéticos',
            'Sustentabilidade, lixo eletrônico, energia e mineração de dados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato — quatro temas escolhidos pelos próprios estudantes. Vale notar a concentração: três dos quatro tratam de IA ou de algoritmos, o que diz algo sobre as inquietações da turma em 2024.',
        feedbackWrong:
            'Os temas foram "Uma humanidade artificial", "Algoritmos de decisão e preconceitos sociais", "Lucros Virtuais ou Perdas Reais? Explorando o Dilema Ético dos Jogos de Azar Online" e "A Dualidade Ética da Inteligência Artificial".',
    },
    {
        id: 'q48',
        exams: ['av2'],
        question: 'Além do conteúdo, o que as orientações do seminário afirmavam que seria observado?',
        options: [
            'Apenas o domínio do tema e a clareza da explicação',
            'Vestuário, adequação da fala, organização, leiaute dos slides, capacidade de trabalho em equipe — e a PRESENÇA nas apresentações das outras equipes',
            'A quantidade de referências bibliográficas citadas',
            'O uso de recursos audiovisuais elaborados',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto — "o seminário é uma atividade acadêmica formal". E a exigência de assistir às outras equipes tem justificativa explícita: a atividade é parte da jornada coletiva do semestre, não uma apresentação isolada de cada grupo.',
        feedbackWrong:
            'As orientações incluíam vestuário, adequação da fala, conteúdo, organização, leiaute dos slides, trabalho em equipe e a presença nas apresentações das outras equipes — por ser atividade acadêmica formal e coletiva.',
    },
];
