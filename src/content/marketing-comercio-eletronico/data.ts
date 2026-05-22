import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const MARKETING_GUIDE_CONTEXT = `
GUIA COMPLETO DE MARKETING E COMÉRCIO ELETRÔNICO — Resumo:

1. DEFINIÇÃO DE MARKETING (Kotler): Processo social e gerencial de satisfação de necessidades/desejos por meio de trocas. "Suprir necessidades gerando lucro." O marketing NÃO cria necessidades — cria desejos. Profissional de marketing busca resposta de um prospect.

2. CONCEITOS CENTRAIS: Necessidades (inatas: ar, comida, abrigo) → Desejos (necessidades direcionadas a objetos específicos) → Demandas (desejos + capacidade de compra). Oferta, Marca, Valor (tríade: qualidade, serviço, preço). Satisfação: Decepção (desempenho < expectativa), Satisfação (=), Encantamento (>). 5 tipos de necessidades: declaradas, reais, não declaradas, "algo mais", secretas. Concorrência: rivais e substitutas.

3. APLICAÇÃO DO MARKETING: Bens, Serviços, Eventos, Experiências, Pessoas, Lugares, Propriedades, Organizações, Informações, Ideias.

4. TIPOS DE DEMANDA (8): Negativa, Inexistente, Latente, em Declínio, Irregular (sazonal), Plena (ideal), Excessiva, Indesejada.

5. PIRÂMIDE DE MASLOW (5 níveis): 1-Fisiológicas, 2-Segurança, 3-Sociais, 4-Estima, 5-Auto-realização.

6. 4 Ps: Produto, Preço (ÚNICO que gera receita), Praça, Promoção.

7. 8 Ps: 4 Ps + Pessoas, Processos, Posicionamento, Performance.

8. 4 Cs: Produto→Cliente, Preço→Custo, Praça→Conveniência, Promoção→Comunicação.

9. MARKETING DE RELACIONAMENTO: Fidelizar clientes. Jornada: Atrair→Conquistar→Reter→Fidelizar→Divulgador. Ferramentas: CRM, WhatsApp Business. Estratégias: redes sociais, programas de fidelidade, email marketing.

10. 15 CARACTERÍSTICAS: Aplicar informações, Identificar cliente, Identificar necessidades, Criar conversas, Criar proximidade, Aprimorar processos, Criar valor, Gerar afeto/confiança, Aumentar ganhos, Conquistar novos clientes, Branding, Aumentar faturamento, Fortalecimento da cultura, Reinvenção dos processos, Sustentabilidade.

11. PESQUISA DE MARKETING: 6 etapas: Definição do problema → Plano → Coleta (mais dispendiosa) → Análise → Apresentação → Decisão. Dados Primários vs Secundários. Instrumentos: Questionários (mais usado), Pesquisa Qualitativa, Mecânicos.

12. SEGMENTAÇÃO: Geográfica, Demográfica, Psicográfica, Comportamental. Níveis: Massa, Segmentado, Nicho, Local, Individual. Critérios: Identificável, Mensurável, Substancial, Acessível, Diferenciável, Acionável.

DIVISÃO POR AVALIAÇÕES:
- PROVA 1: todo o conteúdo dos itens 1 a 12.
- PROVA 2: Marketing 4.0, Marketing 5.0 e aplicações ao comércio eletrônico.

13. MARKETING 4.0: Integra marketing tradicional e digital em um mundo conectado. O poder se desloca para consumidores e comunidades. Tendências: de exclusivo para inclusivo, de vertical para horizontal e de individual para social. No e-commerce, reviews, comparadores, influenciadores, comentários e prova social afetam a decisão.

14. JORNADA DOS 5 AS: Assimilação (conhece), Atração (interessa), Arguição (pesquisa, pergunta, compara), Ação (compra/usa) e Apologia (recomenda/defende). A etapa de arguição é forte no comércio eletrônico por causa de avaliações, frete, reputação, vídeos, política de troca e preço.

15. CONTEÚDO, OMNICANALIDADE E ENGAJAMENTO: Marketing de conteúdo educa e reduz insegurança. Omnicanalidade integra canais online e offline, diferente de multicanalidade. Apps, CRM social e gamificação aumentam conveniência, relacionamento e participação.

16. MARKETING 5.0: Uso de tecnologias que mimetizam capacidades humanas para criar, comunicar, entregar e aumentar valor na jornada do cliente. Componentes: marketing direcionado por dados, preditivo, contextual, aumentado e ágil. Desafios: abismo entre gerações, polarização da prosperidade e fosso digital.

17. E-COMMERCE ORIENTADO POR DADOS: Ecossistema de dados integra navegação, compras, carrinho abandonado, redes sociais, atendimento, CRM e transações. Sistemas de recomendação viabilizam personalização, up-selling e cross-selling. Métricas importantes: conversão, retenção, recompra, CLV, abandono, CAC e defesa da marca.

18. CX, AUTOMAÇÃO E CENTRALIDADE HUMANA: A experiência do cliente depende de pontos de contato consistentes. Chatbots e assistentes automatizam dúvidas simples, enquanto humanos cuidam de casos complexos, empatia e relacionamento. Tecnologia deve servir à estratégia e à centralidade humana, respeitando privacidade, inclusão e confiança.
`;

export const MARKETING_TOPICS: QuizTopicOption[] = [
  {
    value: 'prova1',
    label: 'Prova 1: Fundamentos',
    prompt: 'Conteúdo da Prova 1: definição de marketing, necessidades, desejos, demandas, oferta, marca, valor, satisfação, aplicação do marketing, tipos de demanda, Pirâmide de Maslow, 4 Ps, 8 Ps, 4 Cs, marketing de relacionamento, ferramentas de relacionamento, pesquisa de marketing e segmentação de mercado.',
  },
  {
    value: 'prova2',
    label: 'Prova 2: Marketing 4.0/5.0',
    prompt: 'Conteúdo da Prova 2: Marketing 4.0, consumidor conectado, prova social, subculturas digitais, jornada dos 5 As, métricas digitais, marketing de conteúdo, omnicanalidade, CRM social, apps, gamificação, marcas humanas, Marketing 5.0, desafios geracionais, polarização da prosperidade, fosso digital, marketing direcionado por dados, marketing preditivo, marketing contextual, marketing aumentado, marketing ágil, sistemas de recomendação, up-selling, cross-selling, CX, chatbots, privacidade e tecnologia com centralidade humana.',
  },
  { value: 'conceitos', label: 'Conceitos Centrais de Marketing' },
  { value: 'demanda', label: 'Tipos de Demanda' },
  { value: 'maslow', label: 'Pirâmide de Maslow' },
  { value: '4ps', label: '4 Ps do Marketing' },
  { value: '8ps', label: '8 Ps do Marketing' },
  { value: '4cs', label: '4 Cs do Marketing' },
  { value: 'relacionamento', label: 'Marketing de Relacionamento' },
  { value: 'pesquisa', label: 'Pesquisa de Marketing' },
  { value: 'segmentacao', label: 'Segmentação de Mercado' },
  { value: 'marketing40', label: 'Marketing 4.0 e Consumidor Conectado' },
  { value: 'jornada5a', label: 'Jornada dos 5 As' },
  { value: 'marketing50', label: 'Marketing 5.0 e Martech' },
  { value: 'cx-dados', label: 'Dados, CX e E-commerce' },
];

export const MARKETING_SECTIONS = [
  { id: 'intro', title: 'Introdução', shortTitle: 'Introdução', exam: 'P1' },
  { id: 'conceitos', title: 'Conceitos Centrais', shortTitle: 'Conceitos', exam: 'P1' },
  { id: 'aplicacao', title: 'Aplicação do Marketing', shortTitle: 'Aplicação', exam: 'P1' },
  { id: 'demanda', title: 'Tipos de Demanda', shortTitle: 'Demanda', exam: 'P1' },
  { id: 'maslow', title: 'Pirâmide de Maslow', shortTitle: 'Maslow', exam: 'P1' },
  { id: '4ps', title: 'Os 4 Ps do Marketing', shortTitle: '4 Ps', exam: 'P1' },
  { id: '8ps', title: 'A Evolução: 8 Ps', shortTitle: '8 Ps', exam: 'P1' },
  { id: '4cs', title: 'Os 4 Cs do Marketing', shortTitle: '4 Cs', exam: 'P1' },
  { id: 'mktrel', title: 'Marketing de Relacionamento', shortTitle: 'Mkt Rel.', exam: 'P1' },
  { id: '15carac', title: '15 Características', shortTitle: '15 Carac.', exam: 'P1' },
  { id: 'ferramentas', title: 'Ferramentas e Estratégias', shortTitle: 'Ferramentas', exam: 'P1' },
  { id: 'pesquisa', title: 'Pesquisa de Marketing', shortTitle: 'Pesquisa', exam: 'P1' },
  { id: 'segmentacao', title: 'Segmentação de Mercado', shortTitle: 'Segmentação', exam: 'P1' },
  { id: 'mkt40', title: 'Marketing 4.0 e Consumidor Conectado', shortTitle: 'Mkt 4.0', exam: 'P2' },
  { id: 'jornada5a', title: 'Jornada Digital dos 5 As', shortTitle: '5 As', exam: 'P2' },
  { id: 'mkt50', title: 'Marketing 5.0 e Martech', shortTitle: 'Mkt 5.0', exam: 'P2' },
  { id: 'cx-dados', title: 'Dados, CX e Comércio Eletrônico', shortTitle: 'Dados/CX', exam: 'P2' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_PROVA1: QuizQuestionData[] = [
  { id: 'q1', question: '1. Qual a definição mais sucinta de marketing?', options: ['Criar necessidades para vender produtos', 'Suprir necessidades gerando lucro', 'Fazer propaganda de produtos na TV', 'Vender produtos pelo menor preço'], correctIndex: 1, feedbackCorrect: 'Marketing = suprir necessidades gerando lucro (definição de Kotler).', feedbackWrong: 'O marketing NÃO cria necessidades. A definição correta é: suprir necessidades gerando lucro.' },
  { id: 'q2', question: '2. O marketing cria necessidades?', options: ['Sim, o marketing cria necessidades e desejos', 'Não, o marketing cria desejos — as necessidades são inatas', 'Sim, sem marketing não teríamos necessidades', 'Não, o marketing elimina desejos existentes'], correctIndex: 1, feedbackCorrect: 'As necessidades são inatas (fome, abrigo). O marketing cria desejos direcionados a objetos específicos.', feedbackWrong: 'O marketing NÃO cria necessidades. Nascemos com elas. O marketing cria DESEJOS.' },
  { id: 'q3', question: '3. Qual é o único P do mix de marketing que gera receita?', options: ['Produto', 'Preço', 'Praça', 'Promoção'], correctIndex: 1, feedbackCorrect: 'O Preço é o único P que gera receita diretamente. Os demais representam custos.', feedbackWrong: 'O PREÇO é o único P que gera receita. Produto, Praça e Promoção representam custos.' },
  { id: 'q4', question: '4. Qual a diferença entre desejo e demanda?', options: ['Não há diferença, são sinônimos', 'Demanda é mais genérica que desejo', 'Demanda é o desejo sustentado pela capacidade de compra', 'Desejo é mais específico que demanda'], correctIndex: 2, feedbackCorrect: 'Demanda = desejo + capacidade de compra.', feedbackWrong: 'Demanda é o desejo sustentado pela capacidade de compra.' },
  { id: 'q5', question: '5. Nos 4 Cs, o que substitui "Praça"?', options: ['Comunicação', 'Custo', 'Conveniência', 'Cliente'], correctIndex: 2, feedbackCorrect: 'Praça → Conveniência. Foco em facilitar o acesso do cliente ao produto.', feedbackWrong: 'Praça corresponde à Conveniência nos 4 Cs.' },
  { id: 'q6', question: '6. Quando o desempenho do produto supera a expectativa, o resultado é:', options: ['Satisfação', 'Encantamento', 'Decepção', 'Indiferença'], correctIndex: 1, feedbackCorrect: 'Desempenho > Expectativa = Encantamento!', feedbackWrong: 'Quando o desempenho SUPERA a expectativa, temos encantamento.' },
  { id: 'q7', question: '7. A Tríade do Valor para o cliente é composta por:', options: ['Produto, Preço, Promoção', 'Qualidade, Serviço, Preço', 'Marca, Valor, Satisfação', 'Necessidade, Desejo, Demanda'], correctIndex: 1, feedbackCorrect: 'A tríade do valor é: Qualidade + Serviço + Preço.', feedbackWrong: 'A Tríade do Valor é: Qualidade, Serviço e Preço.' },
  { id: 'q8', question: '8. Qual é o nível mais alto da Pirâmide de Maslow?', options: ['Estima', 'Segurança', 'Auto-realização', 'Sociais'], correctIndex: 2, feedbackCorrect: 'Auto-realização é o topo da pirâmide.', feedbackWrong: 'O nível mais alto é Auto-realização (5º nível).' },
  { id: 'q9', question: '9. Quando há mais consumidores querendo comprar do que produtos disponíveis:', options: ['Demanda plena', 'Demanda excessiva', 'Demanda latente', 'Demanda irregular'], correctIndex: 1, feedbackCorrect: 'Demanda excessiva = mais consumidores do que produtos disponíveis.', feedbackWrong: 'Quando a demanda supera a oferta, chamamos de Demanda Excessiva.' },
  { id: 'q10', question: '10. O 7º P (Posicionamento) trata de:', options: ['Resultados financeiros', 'Processos internos', 'Como a empresa é percebida pelos clientes', 'Gestão de funcionários'], correctIndex: 2, feedbackCorrect: 'O 7º P trata da imagem da empresa na mente do cliente.', feedbackWrong: 'Posicionamento (7º P) é sobre como a empresa é percebida pelos clientes.' },
  { id: 'q11', question: '11. Qual é o principal objetivo do Marketing de Relacionamento?', options: ['Vender o máximo em curto prazo', 'Fidelizar clientes com relacionamentos de longo prazo', 'Reduzir o preço dos produtos', 'Aumentar funcionários'], correctIndex: 1, feedbackCorrect: 'O Marketing de Relacionamento visa fidelizar clientes com relacionamentos de longo prazo lucrativos.', feedbackWrong: 'O objetivo principal é FIDELIZAR clientes, criando relacionamentos de longo prazo.' },
  { id: 'q12', question: '12. O que é CRM?', options: ['Central de Reclamações do Mercado', 'Controle de Resultados do Marketing', 'Customer Relationship Management', 'Certificado de Registro de Marca'], correctIndex: 2, feedbackCorrect: 'CRM = Customer Relationship Management — gestor de relacionamento com o cliente.', feedbackWrong: 'CRM significa Customer Relationship Management.' },
  { id: 'q13', question: '13. Qual NÃO é estratégia de Marketing de Relacionamento?', options: ['Programas de fidelidade', 'Gestão de redes sociais', 'Reduzir qualidade para baixar preço', 'Email marketing personalizado'], correctIndex: 2, feedbackCorrect: 'Reduzir qualidade contradiz o Marketing de Relacionamento.', feedbackWrong: 'Reduzir a qualidade NÃO é estratégia de relacionamento.' },
  { id: 'q14', question: '14. O "efeito boca a boca" representa:', options: ['Clientes indicam a marca para outras pessoas', 'A empresa liga para todos os clientes', 'Propaganda paga em rádio', 'Promoções relâmpago nas lojas'], correctIndex: 0, feedbackCorrect: 'Clientes satisfeitos indicam a marca, atraindo novos clientes organicamente.', feedbackWrong: 'O efeito boca a boca ocorre quando clientes satisfeitos indicam a marca.' },
  { id: 'q15', question: '15. "Branding" no Marketing de Relacionamento refere-se a:', options: ['Definir preço dos produtos', 'Construção e fortalecimento da imagem da marca', 'Criar novos produtos', 'Contratar mais vendedores'], correctIndex: 1, feedbackCorrect: 'Branding é a construção e fortalecimento da imagem da marca.', feedbackWrong: 'Branding se refere à construção e fortalecimento da imagem da marca.' },
  { id: 'q16', question: '16. O que é Pesquisa de Marketing?', options: ['Apenas análise de redes sociais', 'Atividades sistemáticas de concepção, coleta e análise de dados', 'O mesmo que pesquisa de preços', 'Processo de definir preço dos produtos'], correctIndex: 1, feedbackCorrect: 'Envolve atividades sistemáticas de concepção, coleta, análise e edição de relatórios.', feedbackWrong: 'A Pesquisa de Marketing é um processo sistemático de coleta e análise de dados.' },
  { id: 'q17', question: '17. Diferença entre dados primários e secundários?', options: ['Primários são mais importantes', 'Primários coletados pela 1ª vez; secundários já existiam', 'Secundários são mais confiáveis', 'Não há diferença prática'], correctIndex: 1, feedbackCorrect: 'Dados primários: coletados pela primeira vez. Dados secundários: já existiam (ex: IBGE).', feedbackWrong: 'Primários são coletados pela primeira vez; secundários já foram coletados para outro fim.' },
  { id: 'q18', question: '18. Instrumento mais usado para coleta de dados primários?', options: ['Instrumentos mecânicos', 'Pesquisa etnográfica', 'Questionários', 'Focus group'], correctIndex: 2, feedbackCorrect: 'O questionário é o instrumento mais usado para coleta de dados primários.', feedbackWrong: 'O questionário é o instrumento mais utilizado.' },
  { id: 'q19', question: '19. Fase mais dispendiosa da pesquisa de marketing?', options: ['Definição do problema', 'Coleta de informações', 'Apresentação dos resultados', 'Tomada de decisão'], correctIndex: 1, feedbackCorrect: 'A coleta de dados é a mais dispendiosa e sujeita a erros.', feedbackWrong: 'A coleta de informações é a fase mais dispendiosa e sujeita a erros.' },
  { id: 'q20', question: '20. A pesquisa qualitativa é indicada para:', options: ['Gerar dados numéricos tabuláveis', 'Calcular market share', 'Explorar percepção dos consumidores sobre marcas', 'Medir preços da concorrência'], correctIndex: 2, feedbackCorrect: 'A pesquisa qualitativa explora percepções e sentimentos dos consumidores.', feedbackWrong: 'A pesquisa qualitativa é voltada para explorar percepções dos consumidores.' },
  { id: 'q21', question: '21. O que é segmentação de mercado?', options: ['Vender para o maior número possível', 'Dividir mercado em grupos com necessidades semelhantes', 'Reduzir preço para atingir mais clientes', 'Criar produtos para cada consumidor'], correctIndex: 1, feedbackCorrect: 'Segmentação é dividir o mercado em grupos com necessidades semelhantes.', feedbackWrong: 'Segmentação significa dividir o mercado em grupos com características semelhantes.' },
  { id: 'q22', question: '22. Variável que considera estilos de vida e valores é:', options: ['Geográfica', 'Demográfica', 'Psicográfica', 'Comportamental'], correctIndex: 2, feedbackCorrect: 'A variável psicográfica considera estilos de vida, valores e atitudes.', feedbackWrong: 'Psicográfica analisa estilos de vida, valores e atitudes.' },
  { id: 'q23', question: '23. Marketing concentrado (nicho) é indicado quando:', options: ['A empresa quer atingir todo o mercado', 'Os recursos são limitados e busca grande fatia de segmento menor', 'A empresa oferece produtos para vários segmentos', 'O produto é igual para todos'], correctIndex: 1, feedbackCorrect: 'Marketing de nicho é ideal quando recursos são limitados.', feedbackWrong: 'Marketing concentrado é indicado quando os recursos são limitados.' },
  { id: 'q24', question: '24. Consumidores que compram sempre a mesma marca são:', options: ['Fiéis divididos', 'Muito fiéis', 'Inconstantes', 'Infiéis'], correctIndex: 1, feedbackCorrect: 'Consumidores muito fiéis compram sempre a mesma marca.', feedbackWrong: 'São classificados como "muito fiéis".' },
  { id: 'q25', question: '25. Critério "Substancial" de segmentação significa:', options: ['Acessível', 'Diferenciável', 'Grande e rentável o suficiente para justificar um programa', 'Acionável'], correctIndex: 2, feedbackCorrect: 'Substancial = grande e rentável o suficiente para justificar um programa de marketing.', feedbackWrong: 'O critério "Substancial" exige que o segmento seja grande e rentável suficiente.' },
];

const QUIZ_DATA_PROVA2: QuizQuestionData[] = [
  {
    id: 'q26',
    question: '26. No Marketing 4.0, qual mudança melhor resume o consumidor conectado?',
    options: [
      'Ele recebe mensagens de forma passiva e depende apenas da propaganda da empresa',
      'Ele pesquisa, compara, avalia, recomenda e influencia outros consumidores',
      'Ele ignora comunidades digitais e decide apenas pelo preço',
      'Ele elimina a necessidade de atendimento e relacionamento pós-venda',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. O consumidor conectado participa da conversa e influencia a jornada de outras pessoas.',
    feedbackWrong: 'No Marketing 4.0, o consumidor conectado pesquisa, compara, avalia, recomenda e influencia comunidades.',
  },
  {
    id: 'q27',
    question: '27. Qual alternativa diferencia multicanalidade de omnicanalidade?',
    options: [
      'Multicanalidade integra dados; omnicanalidade usa apenas loja física',
      'Multicanalidade existe quando a empresa usa vários canais; omnicanalidade integra esses canais em uma experiência contínua',
      'Multicanalidade e omnicanalidade são sinônimos',
      'Omnicanalidade significa abandonar canais offline e operar só por aplicativo',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Omnicanalidade não é só estar em vários canais, mas conectá-los na jornada do cliente.',
    feedbackWrong: 'Multicanalidade é presença em vários canais; omnicanalidade integra os canais e o histórico do cliente.',
  },
  {
    id: 'q28',
    question: '28. Na jornada dos 5 As, a etapa de Arguição representa:',
    options: [
      'O momento em que o consumidor conhece a marca pela primeira vez',
      'A pesquisa ativa: perguntar, comparar, ler avaliações e buscar provas antes de agir',
      'A recomendação espontânea depois da compra',
      'A recompra automática sem análise de alternativas',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Isso. A arguição é forte no e-commerce porque envolve reviews, frete, reputação, preço e política de troca.',
    feedbackWrong: 'Arguição é a fase de pesquisa e comparação antes da compra.',
  },
  {
    id: 'q29',
    question: '29. O que é Marketing 5.0 segundo a lógica de Kotler, Kartajaya e Setiawan?',
    options: [
      'Uso de tecnologias que mimetizam capacidades humanas para criar, comunicar, entregar e aumentar valor na jornada do cliente',
      'Substituição completa do marketing tradicional por anúncios em redes sociais',
      'Retorno ao marketing focado apenas em produto e produção em massa',
      'Eliminação da centralidade humana em favor de automação total',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Marketing 5.0 combina centralidade humana e tecnologias avançadas ao longo da jornada.',
    feedbackWrong: 'Marketing 5.0 aplica tecnologias que simulam capacidades humanas para gerar valor sem abandonar a centralidade humana.',
  },
  {
    id: 'q30',
    question: '30. Qual conjunto reúne os cinco componentes do Marketing 5.0?',
    options: [
      'Produto, preço, praça, promoção e pessoas',
      'Direcionado por dados, preditivo, contextual, aumentado e ágil',
      'Atenção, interesse, desejo, ação e recompra',
      'Geográfico, demográfico, psicográfico, comportamental e local',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Perfeito. Esses são os cinco componentes centrais trabalhados no Marketing 5.0.',
    feedbackWrong: 'Os componentes do Marketing 5.0 são: direcionado por dados, preditivo, contextual, aumentado e ágil.',
  },
  {
    id: 'q31',
    question: '31. Em comércio eletrônico, up-selling ocorre quando:',
    options: [
      'A loja recomenda um produto complementar ao item principal',
      'A loja estimula o cliente a comprar uma versão superior ou mais cara do produto',
      'O cliente abandona o carrinho antes do pagamento',
      'A empresa interrompe a personalização para proteger dados',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Up-selling busca elevar o valor da compra com uma opção superior.',
    feedbackWrong: 'Up-selling é estimular a compra de uma versão superior ou mais cara; produto complementar é cross-selling.',
  },
  {
    id: 'q32',
    question: '32. Cross-selling é melhor exemplificado por:',
    options: [
      'Sugerir uma capa e uma película ao cliente que está comprando um celular',
      'Mostrar uma versão premium do celular escolhido',
      'Reduzir todos os preços sem considerar margem',
      'Enviar a mesma oferta para toda a base de clientes',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Isso. Cross-selling recomenda itens complementares à compra principal.',
    feedbackWrong: 'Cross-selling é a venda cruzada de itens complementares, como acessórios para um produto principal.',
  },
  {
    id: 'q33',
    question: '33. Marketing preditivo ajuda principalmente a:',
    options: [
      'Tomar decisões sem dados para acelerar campanhas',
      'Antecipar demanda, abandono, resposta a campanhas ou potencial de novos produtos',
      'Eliminar a necessidade de medir resultados',
      'Substituir todos os pontos de contato humanos por robôs',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A predição usa dados e modelos para reduzir incerteza antes da ação.',
    feedbackWrong: 'Marketing preditivo estima resultados prováveis, como demanda, abandono, vendas e resposta a campanhas.',
  },
  {
    id: 'q34',
    question: '34. Marketing contextual no e-commerce significa:',
    options: [
      'Enviar a mesma comunicação para todos os clientes',
      'Personalizar a interação em tempo real conforme comportamento, localização, canal ou situação',
      'Focar somente no preço como argumento de venda',
      'Usar dados apenas depois que a campanha termina',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. O contexto ajuda a entregar a oferta certa no momento e canal mais adequados.',
    feedbackWrong: 'Marketing contextual usa dados do momento e da situação para personalizar a interação.',
  },
  {
    id: 'q35',
    question: '35. No marketing aumentado, a melhor divisão de trabalho é:',
    options: [
      'Bots resolvem tudo e humanos deixam de ser necessários',
      'Tecnologia cuida de interações simples e repetitivas, enquanto humanos assumem casos complexos, consultivos e empáticos',
      'Humanos fazem apenas tarefas repetitivas e bots fazem toda a estratégia',
      'A empresa abandona atendimento para reduzir custos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. O valor está na combinação entre automação, conveniência e toque humano.',
    feedbackWrong: 'Marketing aumentado usa tecnologia para elevar a produtividade humana, sem eliminar empatia e julgamento.',
  },
  {
    id: 'q36',
    question: '36. Por que o marketing de conteúdo é importante no comércio eletrônico?',
    options: [
      'Porque substitui a necessidade de produto, preço e entrega',
      'Porque educa, tira dúvidas, reduz insegurança e apoia a decisão de compra',
      'Porque serve apenas para propaganda institucional',
      'Porque impede que consumidores comparem alternativas',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Isso. Conteúdo útil ajuda o consumidor a avançar na jornada com mais confiança.',
    feedbackWrong: 'Marketing de conteúdo informa, educa e reduz incertezas, especialmente antes da compra online.',
  },
  {
    id: 'q37',
    question: '37. Qual é uma boa prática de marketing ágil em campanhas digitais?',
    options: [
      'Planejar tudo por meses e medir somente no fim do ano',
      'Testar rapidamente versões de campanha, página ou checkout e ajustar com dados reais',
      'Evitar equipes multidisciplinares para preservar silos',
      'Ignorar feedbacks para manter a campanha original',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Marketing ágil combina experimentação, dados e aprendizado contínuo.',
    feedbackWrong: 'Marketing ágil usa testes, MVPs, equipes rápidas e ajustes baseados em resultados reais.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_PROVA1.map(question => ({ ...question, exam: 'prova1' as const })),
  ...QUIZ_DATA_PROVA2.map(question => ({ ...question, exam: 'prova2' as const })),
];
