import type { ComparisonRow, ConceptItem, PanelItem, StatItem } from '../../../components/sections';
import type { CriteriaRow } from './CriteriaMatrix';

// ------------------------------------------------------------------ Introdução

export const journeyStages: string[] = [
    'Compreender o fenômeno',
    'Encontrar a oportunidade',
    'Desenhar o modelo',
    'Validar com clientes',
    'Medir a viabilidade',
    'Crescer e captar',
];

export const guideMap: PanelItem[] = [
    { title: '1. Fundamentos', description: 'O que é empreender, as escolas que explicam o fenômeno e as competências de quem empreende em Sistemas de Informação.' },
    { title: '2. Startups', description: 'Por que startup não é sinônimo de empresa pequena: repetibilidade, escalabilidade, incerteza e product-market fit.' },
    { title: '3. Oportunidades', description: 'Como uma ideia vira oportunidade: problema antes da solução, segmentação, papéis de decisão e benchmarking.' },
    { title: '4. Canvas', description: 'Os nove blocos do Business Model Canvas e as relações entre eles, com um modelo preenchido de ponta a ponta.' },
    { title: '5. Customer Development', description: 'As quatro fases da busca e da execução de um modelo, e as patologias que fazem equipes escalarem cedo demais.' },
    { title: '6. Lean e MVP', description: 'O ciclo Construir-Medir-Aprender, a contabilidade da inovação, os seis tipos de pivot e os seis tipos de MVP.' },
    { title: '7. Arquiteturas', description: 'Pipeline contra plataforma, efeitos de rede, marketplaces, SaaS e as modalidades do comércio eletrônico.' },
    { title: '8. Unit Economics', description: 'Aquisição orgânica, retenção, Customer Success e as contas que dizem se cada cliente cria ou destrói valor.' },
    { title: '9. Financiamento', description: 'Bootstrapping, anjo, venture capital e crowdfunding — o que cada fonte faz com controle, velocidade e governança.' },
    { title: '10. Plano e Pitch', description: 'O plano de negócio detalhado e a narrativa de cinco minutos que busca a próxima decisão.' },
    { title: '11. Contextos', description: 'Inovação dentro de organizações existentes, negócios de impacto e o retrato do empreendedorismo brasileiro.' },
    { title: '12. Casos', description: 'FilaZero Saúde, Twitch e TechNova — três formas diferentes de tecnologia virar (ou não virar) valor.' },
];

export const essentialFormulas: PanelItem[] = [
    { title: 'CAC = despesas de vendas e marketing ÷ novos clientes', description: 'Custo de aquisição por cliente no período. Inclui salários, comissões, mídia, ferramentas e eventos. A média esconde diferenças entre canais — calcule por coorte sempre que puder.' },
    { title: 'LTV = ARPU × margem bruta ÷ churn', description: 'Valor do cliente ao longo da vida, na forma simplificada. ARPU é a receita média por usuário; o churn precisa usar a mesma periodicidade do ARPU.' },
    { title: 'LTV/CAC', description: 'Quantas vezes o cliente devolve o que custou para ser conquistado. Referência comum de equilíbrio saudável: 3 para 1.' },
    { title: 'Payback = CAC ÷ margem de contribuição mensal por cliente', description: 'Em quantos meses o cliente paga o próprio custo de aquisição. Abaixo de 12 meses costuma ser confortável em SaaS.' },
    { title: 'NRR = (receita inicial − churn − contração + expansão) ÷ receita inicial × 100', description: 'Retenção líquida de receita. Acima de 100% significa que a expansão na base já supera cancelamentos e reduções.' },
    { title: 'Ponto de equilíbrio = custos fixos ÷ margem de contribuição percentual', description: 'A receita necessária para cobrir todos os custos. Abaixo dela a operação consome caixa.' },
    { title: 'Lucratividade = lucro líquido ÷ receita total × 100', description: 'Desempenho sobre vendas: de cada real faturado, quanto sobra.' },
    { title: 'Rentabilidade = lucro líquido ÷ investimento total × 100', description: 'Retorno sobre o capital investido. Responde a uma pergunta diferente da lucratividade — não confunda as duas.' },
    { title: 'Rule of 40 = crescimento anual % + margem operacional %', description: 'Heurística de SaaS: crescimento e rentabilidade somados deveriam beirar 40. Não é lei — estágio e mercado importam.' },
];

// ---------------------------------------------------------------- Fundamentos

export const entrepreneurshipViews: ConceptItem[] = [
    { title: 'Econômica', description: 'Estuda risco, lucro, inovação, combinação de recursos e a transformação dos mercados. É a linhagem de Cantillon, Say, Knight e Schumpeter.', accent: 'accent' },
    { title: 'Sociológica', description: 'Observa redes, instituições, cultura, classe, território e as relações sociais que facilitam ou restringem a ação empreendedora.', accent: 'accent2' },
    { title: 'Comportamental', description: 'Investiga necessidade de realização, persistência, iniciativa, autoconfiança, tolerância à ambiguidade e disposição para riscos calculados.', accent: 'accent3' },
    { title: 'Cultural', description: 'Analisa os valores e crenças que definem como uma sociedade percebe sucesso, fracasso, autonomia e inovação.', accent: 'accent4' },
    { title: 'Gerencial e processual', description: 'Entende o empreendedorismo como sequência de decisões, experimentos, aquisição de recursos e construção de uma organização.', accent: 'accent5' },
    { title: 'Educacional', description: 'Considera que competências empreendedoras podem ser desenvolvidas por prática, reflexão, projetos e contato com problemas reais.', accent: 'accent' },
];

export const keyAuthors: PanelItem[] = [
    { title: 'Richard Cantillon — o lucro como prêmio pela incerteza', description: 'Destacou a compra de recursos a preços conhecidos para venda em condições incertas. O lucro seria a compensação pelo risco assumido.' },
    { title: 'Jean-Baptiste Say — a coordenação dos fatores', description: 'Enfatizou a combinação e a coordenação dos fatores de produção como o trabalho próprio do empreendedor.' },
    { title: 'Frank Knight — risco não é incerteza', description: 'Risco admite probabilidades estimáveis; incerteza envolve eventos cuja distribuição não se conhece. O empreendedor atua onde não há garantia de demanda, preço ou sucesso tecnológico — por isso uma startup não se administra só por previsão.' },
    { title: 'Joseph Schumpeter — inovação e destruição criativa', description: 'O empreendedor introduz novas combinações: produtos, processos, mercados, fontes de recursos ou formas de organização. A destruição criativa ocorre quando essas inovações tornam estruturas anteriores menos relevantes.' },
    { title: 'Israel Kirzner — o estado de alerta', description: 'A oportunidade existe porque preços, necessidades, informações e recursos ainda não estão perfeitamente coordenados. Explica negócios que não criam tecnologia radical, mas conectam oferta e demanda melhor do que os existentes.' },
    { title: 'David McClelland — necessidade de realização', description: 'Preferência por metas desafiadoras, responsabilidade pessoal, busca de feedback e riscos moderados. O ponto não é gostar de perigo: é aceitar risco calculado quando se pode influenciar o resultado.' },
    { title: 'Icek Ajzen — Teoria do Comportamento Planejado', description: 'A intenção de empreender depende de atitude diante do comportamento, normas subjetivas e controle comportamental percebido. Valorizar o empreendedorismo não basta se o ambiente desaprova ou se falta percepção de capacidade.' },
    { title: 'Peter Drucker — inovação sistemática', description: 'Trata o empreendedorismo como prática disciplinada. Fontes de inovação: ocorrências inesperadas, incongruências, necessidades de processo, mudanças na indústria e no mercado, transformações demográficas, mudanças de percepção e novos conhecimentos.' },
    { title: 'Mises, Lachmann e a bricolagem', description: 'A Escola Austríaca enfatiza ação humana, conhecimento disperso e subjetividade. Em ambientes incertos, empreendedores recombinam o que têm à mão — ferramentas existentes, trabalho manual e parcerias — antes de investir em infraestrutura definitiva.' },
];

export const classicVsContemporary: ComparisonRow[] = [
    { criterion: 'Mercado', left: 'Relativamente conhecido, com demanda observável.', right: 'Frequentemente novo ou em redefinição, com demanda a comprovar.' },
    { criterion: 'Papel da tecnologia', left: 'Suporte à operação: apoia o que o negócio já faz.', right: 'Parte da proposta de valor, da distribuição e da captura de receita.' },
    { criterion: 'Foco central', left: 'Organização de recursos, eficiência, lucro e expansão local.', right: 'Modelos repetíveis e escaláveis, com conectividade global.' },
    { criterion: 'Modo de operar', left: 'Executa um modelo relativamente conhecido.', right: 'Procura um modelo ainda não comprovado, sob incerteza extrema.' },
    { criterion: 'Julgamento', left: 'Um pequeno comércio pode ser excelente sem ser startup.', right: 'Ser digital não torna um negócio uma startup automaticamente.' },
];

export const siCompetencies: ConceptItem[] = [
    { title: 'Oportunidade', description: 'Identificar, avaliar e priorizar problemas com potencial de valor — separando entusiasmo de evidência.', accent: 'accent' },
    { title: 'Relacionamento', description: 'Construir redes, confiança, parcerias e acesso a recursos que a equipe sozinha não teria.', accent: 'accent2' },
    { title: 'Conceitual', description: 'Analisar situações complexas, conectar informações dispersas e formular alternativas de ação.', accent: 'accent3' },
    { title: 'Estratégica', description: 'Definir direção, prioridades e posicionamento em relação ao ambiente competitivo e institucional.', accent: 'accent4' },
    { title: 'Comprometimento', description: 'Sustentar esforço, responsabilidade e padrões de entrega quando o retorno ainda não apareceu.', accent: 'accent5' },
    { title: 'Organização', description: 'Alocar pessoas, tecnologia, capital e tempo de forma coerente com o estágio do negócio.', accent: 'accent' },
];

export const hardVsSoftSkills: ComparisonRow[] = [
    { criterion: 'O que reúnem', left: 'Programação, arquitetura de software, dados, IA, segurança, integração de sistemas, experiência do usuário e análise de métricas.', right: 'Resiliência, pensamento crítico, curiosidade, comunicação, colaboração, liderança inclusiva e tolerância à ambiguidade.' },
    { criterion: 'Para que servem', left: 'Transformar hipóteses em protótipos e produtos que funcionam de verdade.', right: 'Absorver evidência, corrigir a rota e traduzir a visão técnica para clientes, parceiros e investidores.' },
    { criterion: 'Como falham sozinhas', left: 'Uma solução tecnicamente sofisticada fracassa se não resolver uma dor relevante.', right: 'Comunicação sem domínio técnico não sustenta a construção do produto.' },
    { criterion: 'Mal-entendido comum', left: 'Achar que dominar a stack basta para o negócio dar certo.', right: 'Confundir resiliência com persistir cegamente, em vez de aprender com a evidência.' },
];

export const tripleHelix: PanelItem[] = [
    { title: 'Academia', description: 'Produz conhecimento e forma talentos. Incubadoras universitárias e grupos de pesquisa reduzem o custo de experimentar.' },
    { title: 'Empresas', description: 'Conectam soluções a mercados, trazem demanda real, canais de distribuição e capacidade de operar em escala.' },
    { title: 'Governo', description: 'Cria regras, infraestrutura e políticas. No setor público também é comprador — o que muda ciclo de venda, exigência e risco.' },
];

/**
 * Interesses de cada agente afetado pela ação empreendedora.
 *
 * Existe porque a prova discursiva pede exatamente esse recorte — argumentar o
 * que empregados, fornecedores, clientes, investidores, comunidade e governo
 * percebem no mesmo empreendimento. É também o antídoto à leitura de que
 * empreender só diz respeito a quem empreende.
 */
export const stakeholderInterests: PanelItem[] = [
    { title: 'Empregados', description: 'Emprego e renda, mas também aprendizado, qualificação e perspectiva de carreira. Em empresas jovens, a troca frequente é menos estabilidade por mais responsabilidade e crescimento acelerado.' },
    { title: 'Fornecedores', description: 'Demanda nova e previsível, que permite planejar produção e diluir custos. Um cliente em crescimento amplia o próprio negócio do fornecedor; daí o interesse em que o empreendimento prospere.' },
    { title: 'Clientes', description: 'Solução para um problema, mais opções e melhor relação entre preço e valor. A entrada de um concorrente inovador pressiona os incumbentes a melhorar — o benefício alcança até quem não compra.' },
    { title: 'Investidores', description: 'Retorno proporcional ao risco assumido. Interessam-se por escalabilidade, tamanho de mercado e capacidade de execução da equipe, porque é disso que depende a valorização da participação.' },
    { title: 'Comunidade', description: 'Renda circulando na região, oportunidades locais e, quando o negócio nasce de um problema do território, solução para uma carência concreta. Também pode arcar com externalidades negativas — trânsito, pressão sobre serviços.' },
    { title: 'Governo', description: 'Arrecadação, formalização do trabalho e desenvolvimento econômico, que reduzem demanda por assistência. É também comprador e regulador, papéis que mudam o ciclo de venda e as exigências sobre o empreendimento.' },
];

/**
 * Efeitos da prática empreendedora sobre a economia.
 *
 * Complementa o recorte acima: o primeiro olha para os agentes, este para os
 * mecanismos agregados que a prova pede quando manda "comentar as contribuições
 * à economia".
 */
export const economicContributions: PanelItem[] = [
    { title: 'Geração de emprego e renda', description: 'Novos empreendimentos respondem por parcela expressiva da criação de postos de trabalho, sobretudo em pequenos negócios, que absorvem mão de obra em faixas variadas de qualificação.' },
    { title: 'Inovação e ganho de produtividade', description: 'Novas combinações de produto, processo e modelo elevam a produtividade agregada. É a destruição criativa de Schumpeter: arranjos mais eficientes deslocam os anteriores.' },
    { title: 'Concorrência e eficiência de mercado', description: 'Entrantes pressionam preços, qualidade e atendimento. Na leitura de Kirzner, o empreendedor corrige desequilíbrios ao perceber e explorar ineficiências que outros não viram.' },
    { title: 'Arrecadação e formalização', description: 'Empreendimentos formais geram tributos que sustentam serviços públicos e trazem para o sistema formal trabalho que antes circulava à margem dele.' },
    { title: 'Diversificação da estrutura produtiva', description: 'Ao criar setores e nichos, reduz a dependência de poucas atividades — o que torna a economia local menos vulnerável a choques concentrados.' },
    { title: 'Desenvolvimento regional', description: 'Negócios que nascem de problemas do próprio território retêm renda e talento onde antes havia evasão, como mostram os casos alagoanos citados adiante.' },
];

// ------------------------------------------------------------------- Startups

export const startupDefinition: ConceptItem[] = [
    { title: 'Modelo de negócio', description: 'Explica como a organização cria, entrega e captura valor. Enquanto ele não estiver comprovado, a empresa está em busca, não em execução.', accent: 'accent' },
    { title: 'Repetibilidade', description: 'O processo de entregar valor pode ser reproduzido sem reinvenção completa a cada cliente. Software sob encomenda costuma falhar aqui.', accent: 'accent2' },
    { title: 'Escalabilidade', description: 'Receita e impacto podem crescer em velocidade superior aos custos. Um SaaS multitenant serve milhares de clientes com a mesma base tecnológica.', accent: 'accent3' },
    { title: 'Incerteza extrema', description: 'Problema, solução, canal, preço ou mercado ainda não estão plenamente comprovados. É o que distingue a startup da pequena empresa tradicional.', accent: 'accent4' },
];

export const startupLifecycle: string[] = [
    'Ideação',
    'Validação',
    'Operação',
    'Escala',
];

export const pmfSignals: PanelItem[] = [
    { title: 'Retenção', description: 'As pessoas continuam usando depois da novidade passar. É o sinal mais difícil de falsificar.' },
    { title: 'Uso recorrente', description: 'A solução entra na rotina, com frequência compatível com a natureza do problema.' },
    { title: 'Recomendação', description: 'Clientes trazem outros clientes sem incentivo pago — a prova social vira canal.' },
    { title: 'Crescimento orgânico', description: 'A base cresce sem aumento proporcional de investimento em mídia.' },
    { title: 'Disposição para pagar', description: 'Há contrato, renovação ou pagamento recorrente — não apenas interesse declarado.' },
];

export const incubatorVsAccelerator: ComparisonRow[] = [
    { criterion: 'Estágio atendido', left: 'Empreendimentos muito iniciais, às vezes ainda sem produto.', right: 'Startups que já têm equipe, MVP ou tração.' },
    { criterion: 'Duração', left: 'Períodos mais longos, com acompanhamento contínuo.', right: 'Ciclos curtos e intensivos, com metas por etapa.' },
    { criterion: 'O que oferece', left: 'Espaço, orientação e conexão institucional.', right: 'Mentoria intensiva, rede setorial e, em geral, investimento.' },
    { criterion: 'Participação societária', left: 'Geralmente não há.', right: 'Frequentemente há, em troca do capital aportado.' },
    { criterion: 'Como termina', left: 'Graduação do empreendimento, com saída gradual.', right: 'Apresentação a investidores ao fim do programa.' },
];

// -------------------------------------------------------------- Oportunidades

export const opportunityCriteria: ConceptItem[] = [
    { title: 'Problema relevante', description: 'A dor precisa ser frequente, cara ou incapacitante o bastante para que alguém mude de comportamento por causa dela.', accent: 'accent' },
    { title: 'Público identificável', description: 'É preciso saber quem sente a dor, onde encontrá-lo e como falar com ele — não "todo mundo".', accent: 'accent2' },
    { title: 'Solução possível', description: 'A tecnologia, os dados e a operação necessários precisam estar ao alcance da equipe, hoje ou num horizonte crível.', accent: 'accent3' },
    { title: 'Momento adequado', description: 'Mudanças tecnológicas, regulatórias ou de comportamento que tornam viável agora o que não era antes.', accent: 'accent4' },
    { title: 'Mecanismo econômico', description: 'Alguém disposto e capaz de pagar, com margem que suporte aquisição, entrega e retenção.', accent: 'accent5' },
];

export const fiveWhysCauses: PanelItem[] = [
    { title: 'Demanda superior à capacidade', description: 'A unidade não tem profissionais ou horários suficientes para o volume que chega. Nenhum aplicativo cria capacidade nova.' },
    { title: 'Triagem inadequada', description: 'Casos simples e complexos disputam a mesma fila, sem separação por prioridade clínica.' },
    { title: 'Ausência de previsão', description: 'Não se estima quantas pessoas chegarão, nem quando — o que impede distribuir o atendimento ao longo do dia.' },
    { title: 'Chegada simultânea', description: 'Sem horário marcado, todos chegam cedo para garantir lugar, concentrando a espera na primeira hora.' },
    { title: 'Sistemas desconectados', description: 'Prontuário, agendamento e regulação não conversam, então a informação é redigitada ou se perde.' },
    { title: 'Incentivos administrativos', description: 'Metas e formas de medir o serviço podem premiar volume em vez de fluxo, sustentando o problema.' },
];

export const segmentationTypes: ConceptItem[] = [
    { title: 'Demográfica', description: 'Idade, renda, escolaridade, ocupação e localização. Fácil de obter, mas raramente explica por que alguém compra.', accent: 'accent' },
    { title: 'Psicográfica', description: 'Valores, estilo de vida, motivações e atitudes. Ajuda a construir mensagem e proposta de valor.', accent: 'accent2' },
    { title: 'Comportamental', description: 'Frequência de uso, ocasião, benefícios procurados e grau de lealdade. É a que melhor prevê adoção.', accent: 'accent3' },
    { title: 'Por papel', description: 'Usuário, pagador, decisor, influenciador e beneficiário podem ser pessoas diferentes — e frequentemente são.', accent: 'accent4' },
];

export const stakeholderRoles: PanelItem[] = [
    { title: 'Usuário', description: 'Quem opera a solução no dia a dia. No FilaZero, o paciente que reserva o horário e comparece.' },
    { title: 'Beneficiário', description: 'Quem colhe o resultado. Também o paciente, que ganha previsibilidade e deixa de esperar em pé.' },
    { title: 'Decisor', description: 'Quem autoriza a adoção. A gestão da unidade ou a secretaria municipal de saúde.' },
    { title: 'Pagador', description: 'Quem assina o contrato e libera o recurso. No B2G, normalmente o município, não o usuário final.' },
    { title: 'Influenciador', description: 'Quem acelera ou trava a adoção sem decidir formalmente: profissionais de saúde, agentes comunitários, órgãos de controle.' },
];

export const benchmarkingTypes: PanelItem[] = [
    { title: 'Competitivo', description: 'Compara concorrentes diretos: preço, funcionalidades, posicionamento e canais. Mostra a régua imediata do mercado.' },
    { title: 'Funcional', description: 'Busca boas práticas em setores distintos que resolvem um problema análogo. É onde aparecem as ideias que a concorrência não tem.' },
    { title: 'Global', description: 'Amplia a observação para outros mercados e países, revelando padrões de valor e escolhas arquiteturais ainda não replicados aqui.' },
];

// --------------------------------------------------------------------- Canvas

export const canvasBlocks: ConceptItem[] = [
    { title: '1. Segmentos de Clientes', description: 'Para quem a empresa cria valor. Pode ser mercado de massa, nicho, segmentos diferenciados, portfólio diversificado ou plataforma multilateral. A segmentação deve distinguir necessidades, disposição a pagar, canais e relacionamento.', accent: 'accent' },
    { title: '2. Proposta de Valor', description: 'O conjunto de benefícios que resolve dores e gera ganhos: novidade, desempenho, personalização, execução de uma tarefa, design, marca, preço, redução de custo ou risco, acesso e usabilidade. Formule do ponto de vista do cliente, não como lista de funcionalidades.', accent: 'accent2' },
    { title: '3. Canais', description: 'Criam consciência, permitem avaliação, viabilizam compra, entregam valor e oferecem pós-venda. O aplicativo é parte do canal de entrega — a aquisição pode depender de equipes de saúde, campanhas municipais ou integração com sistemas oficiais.', accent: 'accent3' },
    { title: '4. Relacionamento com Clientes', description: 'Assistência pessoal, atendimento dedicado, autosserviço, serviço automatizado, comunidade ou cocriação. A escolha influencia custo, experiência, retenção e capacidade de escala.', accent: 'accent4' },
    { title: '5. Fontes de Receita', description: 'Venda, taxa por uso, assinatura, aluguel, licenciamento, intermediação e publicidade. Identifique quem paga, pelo quê, com que frequência, por qual unidade de valor e sob quais condições contratuais.', accent: 'accent5' },
    { title: '6. Recursos-Chave', description: 'Recursos físicos, intelectuais, humanos e financeiros que o modelo exige. Numa healthtech: software, dados, integrações, conhecimento regulatório, equipe de implantação, segurança e capital de giro.', accent: 'accent' },
    { title: '7. Atividades-Chave', description: 'O que é indispensável fazer para entregar a proposta: desenvolver, operar, vender, implantar, suportar, gerir a plataforma, analisar dados e garantir conformidade. Atividade é o que se faz; recurso é o que se usa.', accent: 'accent2' },
    { title: '8. Parcerias-Chave', description: 'Alianças, coopetição, joint ventures e relações comprador-fornecedor que reduzem risco, fornecem recursos ou viabilizam escala. No setor público, municípios, UBS e fornecedores de prontuário podem ser determinantes.', accent: 'accent3' },
    { title: '9. Estrutura de Custos', description: 'Custos fixos e variáveis, economias de escala e de escopo. Modelos orientados a custo buscam eficiência máxima; orientados a valor aceitam custo maior por experiência diferenciada. Todo custo se conecta a atividades, recursos e parceiros.', accent: 'accent4' },
];

export const resourceVsActivity: ComparisonRow[] = [
    { criterion: 'Definição', left: 'O que a empresa utiliza — ativos de que ela dispõe.', right: 'O que a empresa faz — processos que ela executa.' },
    { criterion: 'Numa healthtech', left: 'Plataforma, base de dados, integrações prontas, equipe, conhecimento regulatório, capital de giro.', right: 'Desenvolver, implantar, integrar, dar suporte, monitorar e garantir conformidade.' },
    { criterion: 'Teste rápido', left: 'Cabe na frase "nós temos…".', right: 'Cabe na frase "nós fazemos…".' },
    { criterion: 'Erro frequente', left: 'Listar a equipe como se fosse a atividade que ela executa.', right: 'Listar "ter um bom software" como atividade, quando é recurso.' },
];

export const filaZeroCanvas: PanelItem[] = [
    { title: 'Segmentos', description: 'Pacientes do SUS, gestores de UBS e secretarias municipais; profissionais de saúde como usuários internos.' },
    { title: 'Proposta de valor', description: 'Previsibilidade e dignidade para o paciente; melhor gestão de fluxo e de capacidade para a unidade.' },
    { title: 'Canais', description: 'Web leve, WhatsApp e SMS, agentes comunitários, recepção da unidade e integração com portais públicos.' },
    { title: 'Relacionamento', description: 'Autosserviço assistido, suporte da própria unidade, lembretes e comunicação ativa de atrasos.' },
    { title: 'Fontes de receita', description: 'Licença SaaS B2G por unidade, mais implantação, suporte e integração cobrados à parte.' },
    { title: 'Recursos-chave', description: 'Plataforma, equipe, integrações, segurança da informação e conhecimento de saúde pública.' },
    { title: 'Atividades-chave', description: 'Desenvolver, implantar, integrar, suportar, monitorar e garantir conformidade com a LGPD.' },
    { title: 'Parcerias-chave', description: 'Municípios, UBS, fornecedores de prontuário eletrônico, provedores de conectividade e instituições de pesquisa.' },
    { title: 'Estrutura de custos', description: 'Equipe, nuvem, mensagens, suporte, implantação, venda ao setor público, segurança e jurídico.' },
];

// --------------------------------------------------------- Customer Development

export const cdFlow: string[] = [
    'Customer Discovery',
    'Customer Validation',
    'Customer Creation',
    'Company Building',
];

export const cdPhases: ConceptItem[] = [
    { title: 'Customer Discovery', description: 'Descobrir se o problema existe, para quem importa e como as pessoas o enfrentam hoje. A equipe sai do prédio, entrevista, observa processos e mapeia dores, ganhos e partes interessadas. As perguntas exploram comportamento passado, não intenção futura.', accent: 'accent' },
    { title: 'Customer Validation', description: 'Transformar interesse em evidência de mercado: pré-venda, contrato, piloto pago, carta de intenção com compromisso real ou uso recorrente. Busca-se um processo de venda repetível. Se as hipóteses não se sustentam, pivota-se e volta-se à descoberta.', accent: 'accent2' },
    { title: 'Customer Creation', description: 'Ampliar aquisição e demanda: escolher canais conforme o tipo de mercado, testar mensagens, organizar o funil e aumentar investimento. Não deve anteceder a validação — marketing gera tráfego sem retenção nem receita saudável.', accent: 'accent3' },
    { title: 'Company Building', description: 'A organização deixa de ser apenas uma equipe de busca e formaliza departamentos, processos, metas, liderança e governança. Os processos passam a reproduzir o que foi aprendido, sem eliminar a capacidade de adaptação.', accent: 'accent4' },
];

export const searchVsExecution: CriteriaRow[] = [
    {
        criterion: 'Customer Discovery',
        cells: ['Busca', 'O problema existe e importa para alguém identificável?', 'Entrevistas sobre comportamento passado, observação de processo, mapa de stakeholders.'],
    },
    {
        criterion: 'Customer Validation',
        cells: ['Busca', 'Existe um processo de venda repetível para esse problema?', 'Pré-venda, contrato, piloto pago, carta de intenção com compromisso, uso recorrente.'],
    },
    {
        criterion: 'Customer Creation',
        cells: ['Execução', 'Como ampliar demanda no canal certo, ao custo certo?', 'Funil organizado, testes de mensagem, investimento crescente em aquisição.'],
    },
    {
        criterion: 'Company Building',
        cells: ['Execução', 'Como sustentar a entrega em escala sem perder adaptação?', 'Departamentos, processos, metas, liderança e governança formalizados.'],
    },
];

export const strongEvidence: PanelItem[] = [
    { title: 'Contrato assinado', description: 'Compromisso formal com prazo, escopo e responsabilidade — o mais difícil de conseguir e o mais informativo.' },
    { title: 'Piloto pago', description: 'A instituição aloca orçamento para testar. Pagar muda a natureza do comprometimento.' },
    { title: 'Pré-venda', description: 'O cliente paga antes de existir o produto completo. Testa disposição a pagar sem construir tudo.' },
    { title: 'Uso recorrente', description: 'A solução é usada de novo, sem lembrete nem incentivo. Comportamento repetido supera declaração.' },
    { title: 'Carta de intenção com decisor', description: 'Vale quando vem de quem tem autoridade orçamentária e traz condições objetivas. Sem isso, é apenas simpatia registrada.' },
];

export const cdPathologies: PanelItem[] = [
    { title: 'Escala prematura', description: 'Contratar, automatizar ou investir em aquisição antes de comprovar problema, solução e economia. Crescer sem ajuste apenas amplifica o desperdício.' },
    { title: 'Dissonância de invalidação', description: 'Rejeitar evidências negativas para proteger a ideia original. O sinal aparece quando toda entrevista contrária vira "esse não é nosso público".' },
    { title: 'Métricas de vaidade', description: 'Celebrar cadastros ou visualizações sem conexão com comportamento ou valor. Números que só sobem não informam decisão.' },
    { title: 'Repertório técnico insuficiente', description: 'Escolher experimentos inadequados à hipótese ou interpretar dados sem rigor — inclusive confundir correlação com efeito.' },
    { title: 'Teto epistemológico', description: 'O feedback atual revela melhorias incrementais e pode não produzir uma visão transformadora. Por isso ainda é preciso uma teoria de valor.' },
];

// ------------------------------------------------------------------ Lean e MVP

export const bmlCycle: string[] = [
    'Construir',
    'Medir',
    'Aprender',
];

export const metricTypes: ComparisonRow[] = [
    { criterion: 'O que mostra', left: 'Relação causal entre uma mudança e um comportamento.', right: 'Um número que cresce, sem explicar por quê.' },
    { criterion: 'Exemplo', left: 'Conversão em transações concluídas no grupo de tratamento contra o de controle.', right: 'Total acumulado de cadastros desde o lançamento.' },
    { criterion: 'Decisão que permite', left: 'Perseverar, ajustar ou pivotar, com base em evidência.', right: 'Nenhuma — o número sobe de qualquer forma.' },
    { criterion: 'Ferramenta típica', left: 'Teste A/B, análise de coorte, funil por etapa.', right: 'Contador acumulado no painel da diretoria.' },
];

export const innovationAccounting: PanelItem[] = [
    { title: 'Teste A/B', description: 'Compara grupos equivalentes, divididos aleatoriamente, mudando uma variável de cada vez. É o que permite atribuir a diferença à mudança feita.' },
    { title: 'Análise de coorte', description: 'Acompanha pessoas que começaram em períodos semelhantes. Separa melhora real de mudança na composição da base.' },
    { title: 'Funil por etapa', description: 'Mostra onde as pessoas se perdem entre uma etapa e a seguinte. Aponta o gargalo, não só o resultado final.' },
];

export const pivotTypes: ConceptItem[] = [
    { title: 'Zoom-in', description: 'Uma funcionalidade isolada se revela mais valiosa que o produto inteiro e passa a ser o produto principal.', accent: 'accent' },
    { title: 'Zoom-out', description: 'O caminho inverso: o produto atual mostra-se pequeno demais e vira apenas uma funcionalidade de uma solução mais ampla.', accent: 'accent2' },
    { title: 'Segmento de clientes', description: 'A solução resolve um problema real, mas para um público diferente do que se imaginava. Mantém-se o produto e troca-se o alvo.', accent: 'accent3' },
    { title: 'Necessidade do cliente', description: 'A pesquisa revela que o público tem um problema diferente e mais relevante do que o atacado até aqui.', accent: 'accent4' },
    { title: 'Plataforma', description: 'Mudança entre ser uma aplicação e ser uma plataforma sobre a qual terceiros constroem — ou o contrário.', accent: 'accent5' },
    { title: 'Tecnologia', description: 'Uma tecnologia diferente entrega o mesmo valor com custo menor ou desempenho superior, preservando o problema e o público.', accent: 'accent' },
];

export const mvpTypes: ConceptItem[] = [
    { title: 'Vídeo', description: 'Demonstra a experiência antes de construir a infraestrutura. Testa se a promessa desperta interesse — foi como o Dropbox validou a demanda por sincronização.', accent: 'accent' },
    { title: 'Landing page', description: 'Mede interesse, conversão, preço ou mensagem por cadastro, pré-venda ou pedido de contato. Barata e rápida, mas não prova operação.', accent: 'accent2' },
    { title: 'Wizard of Oz', description: 'O usuário percebe um serviço automatizado, mas a operação é manual nos bastidores. Testa o processo operacional antes de automatizá-lo.', accent: 'accent3' },
    { title: 'Concierge', description: 'A equipe entrega o serviço pessoalmente, sem disfarce, para compreender a necessidade em profundidade. Não escala — e não precisa.', accent: 'accent4' },
    { title: 'Piecemeal', description: 'Combina ferramentas existentes (formulários, planilhas, mensageria) para simular o produto sem desenvolver nada de novo.', accent: 'accent5' },
    { title: 'Protótipo', description: 'Testa fluxo, compreensão e usabilidade sem executar a operação real. Um protótipo elogiado não valida pagamento nem capacidade operacional.', accent: 'accent' },
];

export const hypothesisToExperiment: CriteriaRow[] = [
    {
        criterion: 'Existe demanda?',
        cells: ['Landing page ou vídeo', 'Cadastros, cliques em "quero", pedidos de contato', 'Não prova que a pessoa pagaria nem que a operação funciona.'],
    },
    {
        criterion: 'A interface se entende?',
        cells: ['Protótipo navegável', 'Conclusão da tarefa sem ajuda, erros por etapa', 'Não prova demanda: entender a tela não é querer usá-la.'],
    },
    {
        criterion: 'A operação se sustenta?',
        cells: ['Wizard of Oz ou concierge', 'Tempo por atendimento, retrabalho, exceções encontradas', 'Não prova escala — o custo manual some quando o volume cresce.'],
    },
    {
        criterion: 'Alguém paga?',
        cells: ['Pré-venda ou piloto pago', 'Pagamentos efetivados, valor médio, taxa de conversão', 'Não prova retenção: comprar uma vez não é continuar usando.'],
    },
];

// --------------------------------------------------------------- Arquiteturas

export const pipelineVsPlatform: ComparisonRow[] = [
    { criterion: 'Como o valor flui', left: 'Cadeia relativamente linear: insumos entram, são transformados e distribuídos.', right: 'Interações entre grupos distintos, facilitadas pela plataforma.' },
    { criterion: 'Ativo principal', left: 'O processo de produção e a eficiência da cadeia.', right: 'A qualidade e a frequência das interações entre os participantes.' },
    { criterion: 'Como cresce', left: 'Aumentando produção, canais e alcance da mesma cadeia.', right: 'Atraindo mais participantes de cada lado, com densidade suficiente.' },
    { criterion: 'Risco típico', left: 'Custo marginal que não cai o bastante para sustentar a margem.', right: 'Congestionamento, fraude e queda de qualidade quando a governança falha.' },
    { criterion: 'Exemplo', left: 'Uma fábrica de software sob encomenda, ou um varejo próprio.', right: 'Marketplaces, transporte por aplicativo, transmissão ao vivo com criadores.' },
];

export const networkEffects: ConceptItem[] = [
    { title: 'Diretos', description: 'O valor cresce com o número de participantes do mesmo grupo: quanto mais pessoas usam, melhor para cada uma delas.', accent: 'accent' },
    { title: 'Indiretos', description: 'O valor de um lado cresce com o tamanho do outro lado. Mais vendedores atraem mais compradores, que atraem mais vendedores.', accent: 'accent2' },
    { title: 'Negativos', description: 'Congestionamento, fraude e baixa qualidade também crescem com a escala. Por isso a governança precisa definir entrada, reputação, regras e resolução de conflitos.', accent: 'accent3' },
];

export const marketplaceRequirements: PanelItem[] = [
    { title: 'Inventário distribuído', description: 'A oferta pertence a terceiros e muda o tempo todo, o que exige sincronização e regras de disponibilidade.' },
    { title: 'Catálogo', description: 'Padronização de descrição, categoria e atributos para que itens de vendedores diferentes sejam comparáveis.' },
    { title: 'Busca e matching', description: 'Encontrar a contraparte adequada é o serviço central. Busca ruim destrói liquidez mesmo com oferta abundante.' },
    { title: 'Pagamento dividido', description: 'A plataforma recebe, retém a comissão e repassa ao vendedor, com prazos e obrigações fiscais próprios.' },
    { title: 'Prevenção a fraude', description: 'Sem isso, o crescimento atrai justamente os participantes que corroem a confiança dos demais.' },
    { title: 'Reputação', description: 'Avaliações e histórico substituem o conhecimento pessoal entre desconhecidos que transacionam.' },
    { title: 'Tratamento de disputas', description: 'Regras claras de devolução, cancelamento e mediação. É o que sustenta a confiança depois do primeiro problema.' },
];

export const saasEconomics: PanelItem[] = [
    { title: 'De CAPEX para OPEX', description: 'O cliente deixa de comprar licença e infraestrutura e passa a pagar uma assinatura recorrente, o que reduz a barreira de entrada.' },
    { title: 'Multitenancy', description: 'Vários clientes usam a mesma infraestrutura com isolamento lógico. É o que permite servir milhares sem multiplicar o custo na mesma proporção.' },
    { title: 'APIs e ecossistema', description: 'Integrações viabilizam que terceiros construam sobre o produto, aumentando o custo de troca e o valor percebido.' },
    { title: 'Receita recorrente', description: 'Melhora a previsibilidade, mas cobra o preço: retenção, segurança, suporte e evolução contínua passam a ser condição de sobrevivência.' },
];

export const ecommerceLayers: ConceptItem[] = [
    { title: 'Frente de loja', description: 'Descoberta, catálogo, busca, carrinho, checkout e atendimento. É onde a promessa é feita.', accent: 'accent' },
    { title: 'Back office', description: 'Pedidos, estoque, pagamentos, faturamento, CRM e análise. É onde a promessa é processada.', accent: 'accent2' },
    { title: 'Logística', description: 'Conecta promessa e entrega. Nuvem, big data e IA sustentam recomendação, prevenção a fraude, previsão de demanda e precificação dinâmica.', accent: 'accent3' },
];

export const ecommerceTraits: PanelItem[] = [
    { title: 'Ubiquidade', description: 'A loja está disponível a qualquer momento e de qualquer lugar, não apenas no horário comercial.' },
    { title: 'Alcance global', description: 'As fronteiras geográficas deixam de limitar quem pode comprar — embora logística e tributação voltem a impô-las.' },
    { title: 'Padrões universais', description: 'Os protocolos da internet reduzem o custo de entrada e tornam a infraestrutura comum a todos.' },
    { title: 'Densidade de informação', description: 'Mais dados sobre preço, custo e comportamento, com mais transparência para os dois lados da transação.' },
    { title: 'Personalização', description: 'A oferta pode adaptar-se ao histórico e ao contexto de cada pessoa, o que muda a experiência e a conversão.' },
    { title: 'Interatividade', description: 'A comunicação é bidirecional: o cliente responde, avalia, reclama e influencia o produto.' },
    { title: 'Tecnologia social', description: 'Comunidades e redes participam da descoberta e da decisão, transformando prova social em canal.' },
];

export const tamVsEcm: ComparisonRow[] = [
    { criterion: 'Pergunta que responde', left: 'Por que a pessoa adota a tecnologia da primeira vez?', right: 'Por que ela continua usando depois da primeira vez?' },
    { criterion: 'Fatores centrais', left: 'Utilidade percebida e facilidade de uso percebida.', right: 'Comparação entre desempenho e expectativa, gerando confirmação e satisfação.' },
    { criterion: 'Onde atua no funil', left: 'Aquisição e primeira conversão.', right: 'Retenção, recompra e intenção de continuar.' },
];

export const ecommerceModalities: CriteriaRow[] = [
    { criterion: 'B2C', cells: ['Empresa', 'Consumidor final', 'Loja online que vende direto ao público.'] },
    { criterion: 'B2B', cells: ['Empresa', 'Outra empresa', 'Distribuidor que atende varejistas, ou um SaaS vendido a empresas.'] },
    { criterion: 'C2C', cells: ['Consumidor', 'Outro consumidor', 'Marketplace de usados, com a plataforma intermediando.'] },
    { criterion: 'C2B', cells: ['Consumidor', 'Empresa', 'Criador ou freelancer que oferece trabalho e licenciamento a empresas.'] },
    { criterion: 'B2G', cells: ['Empresa', 'Governo', 'Fornecimento de software a um município — o caso do FilaZero.'] },
    { criterion: 'G2B', cells: ['Governo', 'Empresa', 'Serviços e obrigações digitais oferecidos pelo Estado às empresas.'] },
    { criterion: 'G2C', cells: ['Governo', 'Cidadão', 'Serviços públicos digitais prestados diretamente à população.'] },
    { criterion: 'M-commerce e social commerce', cells: ['Qualquer', 'Qualquer', 'Recortes por dispositivo (móvel) e por contexto (descoberta e compra dentro de redes sociais).'] },
];

// -------------------------------------------------------------- Unit Economics

export const organicVsPaid: ComparisonRow[] = [
    { criterion: 'Como gera tráfego', left: 'Conteúdo e SEO acumulam autoridade e continuam atraindo depois de publicados.', right: 'Mídia paga entrega enquanto houver investimento e para quando ele para.' },
    { criterion: 'Custo ao longo do tempo', left: 'Custo marginal decrescente: o mesmo material serve mais pessoas sem custo novo.', right: 'Sujeito à inflação de CAC conforme a concorrência pelo mesmo espaço aumenta.' },
    { criterion: 'Prazo de retorno', left: 'Demora — exige constância antes do primeiro resultado relevante.', right: 'Imediato, o que o torna útil para testar mensagem e demanda.' },
    { criterion: 'Natureza contábil', left: 'Comporta-se como ativo: o esforço fica.', right: 'Comporta-se como despesa: o resultado é consumido no período.' },
];

export const contentIntent: PanelItem[] = [
    { title: 'Informacional', description: 'A pessoa quer entender um problema. O conteúdo educa e constrói autoridade antes de qualquer oferta.' },
    { title: 'Comercial', description: 'A pessoa compara alternativas. O conteúdo posiciona, diferencia e responde objeções concretas.' },
    { title: 'Transacional', description: 'A pessoa já decidiu e quer agir. O conteúdo remove atrito: preço, contrato, prazo, próximo passo.' },
    { title: 'GEO — otimização para respostas generativas', description: 'Adapta o conteúdo para mecanismos que geram resposta em vez de listar links: clareza, autoridade, dados e estrutura explícita. Em saúde, finanças e serviços públicos, experiência e confiança pesam ainda mais.' },
];

export const csVsSupport: ComparisonRow[] = [
    { criterion: 'Postura', left: 'Proativo: age antes de o cliente pedir.', right: 'Reativo: responde ao chamado que chega.' },
    { criterion: 'Objetivo', left: 'Que o cliente alcance o resultado que o levou a contratar.', right: 'Que o incidente seja resolvido e o serviço volte ao normal.' },
    { criterion: 'O que acompanha', left: 'Onboarding, adoção, valor percebido e renovação.', right: 'Tempo de resposta, tempo de solução e reincidência.' },
];

export const churnAndGrowthLevers: PanelItem[] = [
    { title: 'Churn voluntário', description: 'O cliente decide cancelar por preço, valor percebido, concorrência ou experiência. É o que mais responde a mudanças no produto.' },
    { title: 'Churn involuntário', description: 'Falha de pagamento, cartão expirado ou problema operacional. Parte dele se recupera com processo, não com produto.' },
    { title: 'Churn passivo', description: 'Desengajamento sem cancelamento imediato. Não aparece na receita hoje, mas antecipa o cancelamento de amanhã.' },
    { title: 'Expansão', description: 'Upsell, cross-sell e aumento de uso elevam a receita dentro da base já conquistada, sem CAC novo.' },
    { title: 'Referral', description: 'Clientes satisfeitos reduzem o CAC por recomendação e prova social — o canal mais barato e o mais difícil de forçar.' },
];

export const unitEconomicsFormulas: PanelItem[] = [
    { title: 'CAC = despesas de vendas e marketing do período ÷ novos clientes do período', description: 'Inclua salários, comissões, mídia, ferramentas, eventos e custos diretamente relacionados. O CAC médio esconde diferenças entre canais e segmentos: calcule por coorte, canal e perfil sempre que possível.' },
    { title: 'LTV = ARPU × margem bruta ÷ churn mensal', description: 'ARPU é a receita média por usuário; a margem bruta exclui os custos diretamente associados ao serviço; o churn precisa usar a mesma periodicidade. A fórmula pressupõe comportamento estável — complemente com coortes quando o negócio amadurecer.' },
    { title: 'LTV/CAC = LTV ÷ CAC', description: 'Quantas vezes o cliente devolve o custo de conquistá-lo. É a razão que resume se crescer faz sentido financeiro.' },
    { title: 'Payback = CAC ÷ margem de contribuição mensal por cliente', description: 'Em quantos meses o cliente se paga. Note que o denominador é a margem, não o ARPU cheio — usar o ARPU subestima o prazo.' },
    { title: 'NRR = (receita inicial − churn − contração + expansão) ÷ receita inicial × 100', description: 'Retenção líquida de receita da base existente. Acima de 100% indica que a expansão supera as perdas.' },
];

export const ltvCacBenchmarks: PanelItem[] = [
    { title: 'LTV/CAC próximo de 3:1', description: 'Referência comum de equilíbrio saudável: sobra margem para custos fixos e ainda faz sentido investir em crescimento.' },
    { title: 'Abaixo de 1:1', description: 'O cliente destrói valor antes mesmo de considerar custos fixos. Crescer nessa condição acelera o prejuízo.' },
    { title: 'Acima de 5:1', description: 'Pode sinalizar eficiência — ou subinvestimento em crescimento, deixando mercado na mesa para o concorrente.' },
    { title: 'Payback inferior a 12 meses', description: 'Geralmente confortável em SaaS: o caixa retorna dentro do primeiro ano de relacionamento.' },
    { title: 'Payback superior a 18 meses', description: 'Aumenta a necessidade de capital de giro e o risco: qualquer alta no churn corrói o retorno antes que ele chegue.' },
];

export const unitEconomicsWorked: StatItem[] = [
    { label: 'R$ 600', value: 'CAC — R$ 60.000 ÷ 100 clientes', accent: 'text-accent' },
    { label: 'R$ 3.000', value: 'LTV — R$ 150 × 0,80 ÷ 0,04', accent: 'text-accent2' },
    { label: '5,0', value: 'LTV/CAC — R$ 3.000 ÷ R$ 600', accent: 'text-accent3' },
    { label: '5 meses', value: 'Payback — R$ 600 ÷ R$ 120', accent: 'text-accent4' },
];

// --------------------------------------------------------------- Financiamento

export const fundingSources: ConceptItem[] = [
    { title: 'Bootstrapping', description: 'A empresa cresce com recursos dos fundadores e com a própria receita. Preserva participação, autonomia e disciplina de custos, mas limita a velocidade e expõe financeiramente quem empreende.', accent: 'accent' },
    { title: 'Investidor-anjo', description: 'Pessoa física que investe capital próprio em estágio inicial. O smart money agrega rede, experiência e credibilidade além do dinheiro; a negociação envolve valuation, participação e direitos de informação.', accent: 'accent2' },
    { title: 'Venture Capital', description: 'Fundos que investem em empresas com potencial de crescimento e retorno elevado. O capital acelera infraestrutura, contratação e expansão, mas traz governança, metas, direitos preferenciais e pressão por liquidez futura.', accent: 'accent3' },
    { title: 'Crowdfunding', description: 'Captação junto a muitas pessoas, por recompensa, dívida ou participação. Financia e valida ao mesmo tempo, mas expõe a ideia e cria obrigação com um número grande de apoiadores.', accent: 'accent4' },
];

export const fundingMatrix: CriteriaRow[] = [
    {
        criterion: 'Controle societário',
        cells: [
            'Integral: não há diluição.',
            'Reduzido em parte, com participação minoritária e direitos de informação.',
            'Compartilhado: entram assento em conselho e direitos preferenciais.',
            'Depende da modalidade: recompensa não dilui, equity dilui.',
        ],
    },
    {
        criterion: 'Velocidade de crescimento',
        cells: [
            'Limitada pela geração de caixa.',
            'Acelera a saída do zero, mas raramente financia escala.',
            'Alta: é a razão de existir do instrumento.',
            'Pontual — financia um lançamento ou lote, não a operação contínua.',
        ],
    },
    {
        criterion: 'Governança exigida',
        cells: [
            'A que os sócios decidirem.',
            'Relatórios periódicos e conversas com o investidor.',
            'Formal: metas, prestação de contas e cláusulas contratuais.',
            'Prestação de contas pública aos apoiadores; equity exige conformidade com a CVM.',
        ],
    },
    {
        criterion: 'Risco para o fundador',
        cells: [
            'Alto no plano pessoal: o capital em jogo é o próprio.',
            'Compartilhado, mas com expectativa de retorno definida.',
            'Menor no plano pessoal, maior no de controle e continuidade no cargo.',
            'Reputacional: falhar na entrega atinge muita gente ao mesmo tempo.',
        ],
    },
    {
        criterion: 'Quando costuma servir',
        cells: [
            'Descoberta e primeiros clientes pagantes.',
            'MVP e validação, quando falta capital para o primeiro salto.',
            'Tração comprovada, com uso claro do capital e mercado grande.',
            'Pré-venda de produto com apelo direto ao público.',
        ],
    },
    {
        criterion: 'Quando não serve',
        cells: [
            'Tecnologia intensiva ou mercados de vencedor leva tudo.',
            'Necessidades de capital muito acima do bolso de uma pessoa física.',
            'Negócios lucrativos sem escala compatível com o retorno esperado pelo fundo.',
            'Produtos complexos, longos ou difíceis de explicar em campanha.',
        ],
    },
];

export const crowdfundingTypes: CriteriaRow[] = [
    {
        criterion: 'Recompensa ou pré-venda',
        cells: ['Produto, experiência ou benefício', 'Demanda real e disposição a pagar', 'Atraso na entrega vira dano reputacional público.'],
    },
    {
        criterion: 'Dívida ou P2P',
        cells: ['Devolução do valor com juros', 'Capacidade de pagamento, não a ideia', 'Obrigação financeira mesmo se o negócio não decolar.'],
    },
    {
        criterion: 'Equity crowdfunding',
        cells: ['Participação societária', 'Interesse de investidores no modelo', 'Exige conformidade com as regras da CVM e cria muitos sócios.'],
    },
];

export const stageToFunding: CriteriaRow[] = [
    {
        criterion: 'Descoberta',
        cells: ['Recursos próprios, bolsas, editais, incubação', 'A incerteza é máxima e o capital necessário é baixo — o certo é comprar aprendizado barato.'],
    },
    {
        criterion: 'MVP e validação',
        cells: ['Bootstrapping, anjo, pré-venda, aceleração', 'Já há hipótese formulada; o dinheiro serve para testá-la, não para escalar.'],
    },
    {
        criterion: 'Tração',
        cells: ['Seed e fundos especializados', 'Existem métricas e uso claro do capital; o risco agora é de execução, não de existência do problema.'],
    },
    {
        criterion: 'Escala',
        cells: ['Rodadas maiores', 'Canais, equipe, infraestrutura e expansão geográfica exigem capital acima do que a operação gera.'],
    },
];

// ------------------------------------------------------------- Plano e Pitch

export const businessPlanSections: PanelItem[] = [
    { title: 'Sumário executivo', description: 'Escrito por último, embora apareça primeiro. Resume problema, solução, mercado, modelo, equipe, diferenciais, indicadores e necessidade de recursos.' },
    { title: 'Empreendimento e equipe', description: 'Competências dos sócios, responsabilidades, missão, setores de atividade, forma jurídica, regime tributário, capital social e fontes de recursos.' },
    { title: 'Análise de mercado', description: 'Clientes, concorrentes e fornecedores — quem são, como decidem e que alternativas já usam.' },
    { title: 'Plano de marketing', description: 'Produtos ou serviços, preço, promoção, canais e localização. Em produto digital, localização inclui infraestrutura, cobertura, disponibilidade e acesso aos canais.' },
    { title: 'Plano financeiro', description: 'Investimentos, capital de giro, despesas pré-operacionais, receitas, custos e depreciação, com as projeções que sustentam a operação.' },
    { title: 'Análise estratégica', description: 'A matriz SWOT e as decisões que dela decorrem — não a lista, mas o que se fará com ela.' },
];

export const financialPlanItems: PanelItem[] = [
    { title: 'Investimentos fixos', description: 'Equipamentos, instalações e ativos permanentes. Em produto digital costumam ser menores, mas não desaparecem.' },
    { title: 'Capital de giro', description: 'Recursos para sustentar a operação entre o que se paga e o que se recebe. Ciclo de venda longo aumenta essa necessidade.' },
    { title: 'Despesas pré-operacionais', description: 'Registros, pesquisa, implantação e lançamento — gastos que ocorrem antes da primeira receita.' },
    { title: 'Receitas', description: 'Volume, preço, recorrência e sazonalidade. Em assinatura, a recorrência muda completamente o desenho do fluxo de caixa.' },
    { title: 'Custos variáveis e diretos', description: 'Crescem com produção, venda ou uso: nuvem por consumo, mensagens, taxas de pagamento, comissões.' },
    { title: 'Custos fixos', description: 'Ocorrem mesmo com baixo volume, dentro de determinada faixa de operação: equipe, aluguel, licenças.' },
    { title: 'Depreciação', description: 'Apropria a perda de valor dos ativos ao longo do tempo, distribuindo o custo pelos períodos em que eles são usados.' },
];

export const planFormulas: PanelItem[] = [
    { title: 'Margem de contribuição = receita − custos e despesas variáveis', description: 'O que sobra de cada venda para cobrir os custos fixos. É a base de quase todo o resto do plano financeiro.' },
    { title: 'Ponto de equilíbrio = custos fixos ÷ margem de contribuição percentual', description: 'A receita necessária para cobrir todos os custos. Com custos fixos de R$ 50 mil e margem de 40%, são R$ 125 mil de receita.' },
    { title: 'Lucratividade = lucro líquido ÷ receita total × 100', description: 'Mede o desempenho sobre as vendas: de cada real faturado, quanto vira lucro.' },
    { title: 'Rentabilidade = lucro líquido ÷ investimento total × 100', description: 'Mede o retorno sobre o capital investido. Responde a outra pergunta — um negócio pode ser lucrativo e pouco rentável.' },
    { title: 'Payback simples = investimento inicial ÷ geração média de caixa por período', description: 'Tempo de recuperação do investimento. Não considera o valor do dinheiro no tempo nem os fluxos posteriores ao retorno.' },
];

export const profitabilityVsReturn: ComparisonRow[] = [
    { criterion: 'Sobre o que mede', left: 'Sobre a receita: eficiência da operação.', right: 'Sobre o capital investido: eficiência do investimento.' },
    { criterion: 'Fórmula', left: 'Lucro líquido ÷ receita total × 100.', right: 'Lucro líquido ÷ investimento total × 100.' },
    { criterion: 'Pergunta que responde', left: 'De cada real vendido, quanto sobra?', right: 'Valeu a pena imobilizar esse capital aqui?' },
];

export const swotActions: CriteriaRow[] = [
    { criterion: 'Força', cells: ['Interna', 'Usar a força para explorar uma oportunidade concreta — e nomear qual.'] },
    { criterion: 'Fraqueza', cells: ['Interna', 'Reduzir a fraqueza que, combinada com uma ameaça, poderia inviabilizar o negócio.'] },
    { criterion: 'Oportunidade', cells: ['Externa', 'Priorizar as que a equipe consegue atacar no horizonte do plano, não todas.'] },
    { criterion: 'Ameaça', cells: ['Externa', 'Definir o gatilho de reação: o que precisa acontecer para mudar a rota.'] },
];

export const pitchSlides: PanelItem[] = [
    { title: '1. Abertura e propósito', description: 'Uma frase que situa a oportunidade e dá ao ouvinte o quadro geral antes dos detalhes.' },
    { title: '2. Problema', description: 'Específico, relevante e demonstrado — com evidência, não com adjetivo.' },
    { title: '3. Solução', description: 'Como a experiência do cliente muda. Não é a lista de funcionalidades.' },
    { title: '4. Por que agora', description: 'Mudanças tecnológicas, regulatórias ou comportamentais que abriram a janela.' },
    { title: '5. Mercado', description: 'TAM, SAM e SOM com o método explícito. Estimativa sem método não é dado.' },
    { title: '6. Produto e tração', description: 'Demonstração, usuários, receita, retenção ou pilotos — a evidência de que algo já acontece.' },
    { title: '7. Modelo de negócio', description: 'Quem paga, quanto, como e com qual margem.' },
    { title: '8. Concorrência e moat', description: 'As alternativas reais do cliente e a capacidade de defender a posição conquistada.' },
    { title: '9. Go-to-market', description: 'Canais, ciclo de vendas e como o crescimento acontece na prática.' },
    { title: '10. Equipe', description: 'Por que essas pessoas conseguem executar isto, e não outro time qualquer.' },
    { title: '11. Pedido', description: 'Valor, uso dos recursos, valuation quando aplicável e os próximos marcos que o dinheiro compra.' },
];

export const tamSamSom: ConceptItem[] = [
    { title: 'TAM', description: 'Mercado total teórico: todo mundo que tem o problema, sem restrição de modelo ou geografia. Serve para dimensionar a ambição, não para projetar receita.', accent: 'accent' },
    { title: 'SAM', description: 'A parcela atendível pelo modelo e pela geografia escolhidos. Já considera canal, idioma, regulação e forma de contratação.', accent: 'accent2' },
    { title: 'SOM', description: 'A participação realisticamente alcançável no horizonte analisado, dada a capacidade de aquisição e entrega da equipe.', accent: 'accent3' },
];

export const pitchMetrics: PanelItem[] = [
    { title: 'CAC', description: 'Quanto custa conquistar um cliente, idealmente aberto por canal e por segmento.' },
    { title: 'LTV', description: 'Quanto o cliente devolve ao longo do relacionamento, com a premissa de churn explicitada.' },
    { title: 'Payback', description: 'Em quantos meses o cliente se paga. Abaixo de doze é referência, não garantia.' },
    { title: 'Margem', description: 'Margem bruta e de contribuição, que determinam quanto do crescimento se autofinancia.' },
    { title: 'Churn', description: 'Voluntário, involuntário e passivo — separados, porque exigem respostas diferentes.' },
    { title: 'MRR', description: 'Receita recorrente mensal e sua composição: quanto vem de novos, de expansão e quanto se perde.' },
    { title: 'Crescimento', description: 'Ritmo e consistência. Ocultar limitações destrói confiança: premissas, riscos e data room devem estar disponíveis.' },
];

// ------------------------------------------------------------------ Contextos

export const intrapreneurshipEnablers: PanelItem[] = [
    { title: 'Segurança para experimentar', description: 'Errar num experimento bem desenhado não pode custar a carreira de quem o propôs.' },
    { title: 'Critérios de seleção', description: 'Regras claras sobre quais iniciativas avançam, para que a escolha não dependa de proximidade com a chefia.' },
    { title: 'Mentoria', description: 'Acesso a quem já levou uma ideia da proposta à operação dentro daquela mesma estrutura.' },
    { title: 'Reconhecimento', description: 'Retorno visível para quem contribui — sem isso, a iniciativa seguinte não aparece.' },
    { title: 'Integração à estratégia', description: 'Mecanismos para que a iniciativa vire linha de produto ou processo, em vez de morrer como piloto bem avaliado.' },
];

export const intrapreneurshipBarriers: PanelItem[] = [
    { title: 'Burocracia', description: 'O caminho de aprovação consome mais tempo do que o experimento levaria para responder à pergunta.' },
    { title: 'Cultura avessa ao erro', description: 'Se todo resultado negativo é tratado como falha pessoal, ninguém testa hipótese arriscada.' },
    { title: 'Falta de autonomia', description: 'Sem poder de decisão sobre escopo e recursos, a iniciativa depende de negociação a cada passo.' },
    { title: 'Falta de tempo e recursos', description: 'Inovação alocada como "além das suas atribuições" perde para a urgência operacional todos os dias.' },
    { title: 'Ausência de apoio da liderança', description: 'Sem patrocínio explícito, a iniciativa não sobrevive à primeira disputa por orçamento.' },
];

export const intrapreneurshipExamples: PanelItem[] = [
    { title: 'Gmail', description: 'Nasceu dentro do Google, como projeto de um colaborador antes de virar produto.' },
    { title: 'Botão Curtir', description: 'Desenvolvido internamente e incorporado à experiência central da rede social.' },
    { title: 'PlayStation', description: 'Surgiu de uma iniciativa interna na Sony, fora da linha de produtos então principal.' },
    { title: 'Post-it', description: 'Resultado de um adesivo considerado fracasso na 3M, reaproveitado para outro uso.' },
];

export const impactChain: string[] = [
    'Recursos',
    'Atividades',
    'Resultados imediatos',
    'Resultados intermediários',
    'Impacto de longo prazo',
];

export const outputOutcomeImpact: CriteriaRow[] = [
    { criterion: 'Output', cells: ['O que foi entregue', 'Número de atendimentos agendados pela plataforma.'] },
    { criterion: 'Outcome', cells: ['O que mudou no comportamento', 'Redução consistente do tempo de espera e queda nas faltas.'] },
    { criterion: 'Impacto', cells: ['A transformação de longo prazo', 'Melhoria de acesso à atenção básica na população atendida.'] },
];

export const gemHeadlineStats: StatItem[] = [
    { label: '33,4%', value: 'taxa total de empreendedorismo em 2024, ante 30,1% em 2023', accent: 'text-accent' },
    { label: '46,9 mi', value: 'brasileiros de 18 a 64 anos em negócios iniciais ou estabelecidos', accent: 'text-accent2' },
    { label: '20,3%', value: 'taxa de empreendedorismo inicial', accent: 'text-accent3' },
    { label: '13,2%', value: 'taxa de empreendedores estabelecidos', accent: 'text-accent4' },
    { label: '38,6%', value: 'proporção com CNPJ — cerca de quatro em cada dez', accent: 'text-accent5' },
    { label: '96,2%', value: 'dos iniciais usavam tecnologias digitais ou aplicativos para vender', accent: 'text-accent' },
];

export const gemMotivations: StatItem[] = [
    { label: '74,6%', value: 'fazer diferença no mundo', accent: 'text-accent' },
    { label: '73,9%', value: 'escassez de empregos', accent: 'text-accent2' },
    { label: '69,3%', value: 'construir riqueza ou renda elevada', accent: 'text-accent3' },
    { label: '35,4%', value: 'continuar tradição familiar', accent: 'text-accent4' },
];

export const gemProfiles: PanelItem[] = [
    { title: 'Empreendedor nascente', description: 'Está estruturando o negócio ou operando há muito pouco tempo. É a porta de entrada da atividade empreendedora.' },
    { title: 'Novo empreendedor', description: 'Já tem negócio em fase inicial, com operação em curso mas ainda dentro do período que o estudo trata como inicial.' },
    { title: 'Empreendedor estabelecido', description: 'Superou o período definido pelo estudo. Concentra maior participação masculina e as faixas de 45 a 64 anos.' },
];

// ---------------------------------------------------------------------- Casos

export const caseSynthesis: ConceptItem[] = [
    { title: 'FilaZero Saúde', description: 'Parte de um problema social concreto e precisa validar múltiplos stakeholders e uma operação pública — usuário, decisor e pagador são pessoas diferentes.', accent: 'accent' },
    { title: 'Twitch', description: 'Demonstra pivot, efeitos de rede, arquitetura de plataforma e receitas múltiplas convivendo no mesmo modelo.', accent: 'accent2' },
    { title: 'TechNova', description: 'Demonstra aprendizagem validada, experimentação causal e a mudança do critério de "pronto" dentro do time de desenvolvimento.', accent: 'accent3' },
    { title: 'O que os três compartilham', description: 'A tecnologia é meio. Quem determina a validade do modelo é o valor entregue e o comportamento observado do usuário.', accent: 'accent4' },
];

export const filaZeroBlindSpots: PanelItem[] = [
    { title: 'Capacidade da unidade', description: 'Organizar a fila não cria vagas. Se a demanda excede a capacidade, o agendamento apenas redistribui a espera.' },
    { title: 'Triagem clínica', description: 'Ordem por horário não pode atropelar prioridade clínica. A regra de fila precisa conviver com a classificação de risco.' },
    { title: 'Faltas', description: 'Horário marcado sem confirmação gera vaga ociosa. Lembrete e confirmação viram parte do produto, não um extra.' },
    { title: 'Urgências', description: 'O fluxo precisa absorver casos não agendados sem quebrar a promessa feita a quem agendou.' },
    { title: 'Integração com sistemas', description: 'Prontuário e regulação municipal já existem. Sem integração, a equipe da unidade digita duas vezes — e para de usar.' },
    { title: 'LGPD', description: 'Dado de saúde é dado sensível. Base legal, minimização, retenção e segurança precisam estar definidas antes do piloto.' },
    { title: 'Acessibilidade', description: 'A interface precisa servir a pessoas com baixa visão, baixa letramento digital e aparelhos antigos.' },
    { title: 'Pessoas sem conectividade', description: 'Quem não tem internet não pode ser excluído do atendimento. O canal digital precisa conviver com o presencial.' },
];

export const filaZeroExperiments: PanelItem[] = [
    { title: 'Mapear o fluxo real', description: 'Acompanhar duas UBS e medir a distribuição dos tempos de espera. Sem a linha de base, nenhuma melhoria é demonstrável.' },
    { title: 'Reserva manual assistida', description: 'Testar com um grupo pequeno, operando nos bastidores, e comparar o comparecimento com o do fluxo atual.' },
    { title: 'Lembretes contra controle', description: 'Enviar SMS ou WhatsApp para um grupo e nada para o outro, medindo a diferença de faltas.' },
    { title: 'Medir os quatro indicadores', description: 'Satisfação, tempo de espera, taxa de não comparecimento e carga administrativa da equipe.' },
    { title: 'Validar disposição institucional', description: 'Um piloto formal com compromisso do decisor. É a evidência que separa interesse de contrato.' },
];

export const twitchModel: PanelItem[] = [
    { title: 'A origem e o pivot', description: 'Nasceu do Justin.tv, uma experiência ampla de transmissão ao vivo. O excesso de conteúdo e a falta de foco revelaram que jogos concentravam o interesse; em 2011 o projeto pivotou para a Twitch. A Amazon adquiriu a empresa por cerca de US$ 970 milhões.' },
    { title: 'Receitas múltiplas', description: 'Publicidade, assinaturas, doações e Bits convivem no mesmo modelo, distribuindo o risco entre fontes com comportamentos diferentes.' },
    { title: 'Repetível e escalável', description: 'Repetível porque cada novo criador segue a mesma lógica de transmissão, audiência e monetização. Escalável porque a plataforma cresce sem produção centralizada proporcional.' },
    { title: 'Efeitos de rede', description: 'Mais criadores atraem mais espectadores, que atraem mais criadores. O chat e a interação ao vivo diferenciaram a experiência do vídeo sob demanda.' },
];

export const technovaTimeline: string[] = [
    'Produto sólido, sem tração',
    'MVP em vídeo',
    'Wizard of Oz no onboarding',
    'Estado "Validado" no fluxo',
    'Pivot zoom-in',
];

// ----------------------------------------------------------------------- Quiz

export const discursiveAnswerSteps: string[] = [
    'Sinalize a pergunta',
    'Defina em uma ou duas frases',
    'Desenvolva o mecanismo',
    'Aplique a um caso',
    'Conclua com a decisão',
];

export const examChecklist: PanelItem[] = [
    { title: 'Risco, incerteza, inovação e oportunidade', description: 'Sei diferenciar os quatro e dar um exemplo de cada um num negócio digital.' },
    { title: 'Os nove blocos do Canvas', description: 'Consigo explicar cada bloco e, mais importante, conectar um ao outro — segmento muda canal, que muda custo.' },
    { title: 'As quatro fases de Customer Development', description: 'Sei a ordem correta e sei dizer quais pertencem à busca e quais à execução.' },
    { title: 'O ciclo Construir-Medir-Aprender', description: 'Consigo desenhar um ciclo completo, começando pelo aprendizado necessário e terminando no MVP.' },
    { title: 'Escolha do tipo de MVP', description: 'Sei escolher o experimento conforme a hipótese, e sei dizer o que aquele experimento não prova.' },
    { title: 'As contas de unidade', description: 'Consigo calcular CAC, LTV, LTV/CAC, payback e NRR, e interpretar cada resultado.' },
    { title: 'Fontes de financiamento e diluição', description: 'Sei comparar bootstrapping, anjo, VC e crowdfunding em controle, velocidade e governança, e explicar diluição com números.' },
    { title: 'Plano financeiro e Pitch Deck', description: 'Consigo montar um plano financeiro básico e esboçar os slides de um pitch com TAM, SAM, SOM, tração e pedido.' },
    { title: 'Os números do GEM 2024', description: 'Conheço os principais indicadores e sei interpretá-los sem confundir volume de empreendedores com qualidade ou inovação.' },
    { title: 'Estrutura da resposta discursiva', description: 'Em prova, sinalizo claramente qual pergunta estou respondendo antes de desenvolver.' },
];
