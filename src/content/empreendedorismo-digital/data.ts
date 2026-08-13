import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const EMPD_GUIDE_CONTEXT = `
GUIA COMPLETO DE EMPREENDEDORISMO DIGITAL (EMPD) - Resumo:

1. FUNDAMENTOS, ESCOLAS E O EMPREENDEDOR DE SI: empreender é identificar, construir e explorar uma oportunidade sob incerteza, mobilizando recursos para gerar valor; abrir uma empresa pode ser consequência, mas não é a definição. A palavra vem do francês entreprendre. RICHARD CANTILLON: compra de recursos a preços conhecidos para venda em condições incertas, o lucro é compensação pelo risco. JEAN-BAPTISTE SAY: combinação e coordenação dos fatores de produção. FRANK KNIGHT distingue RISCO de INCERTEZA — risco admite probabilidades estimáveis, incerteza envolve eventos cuja distribuição não é conhecida; por isso uma startup não pode ser administrada só por previsão rígida. JOSEPH SCHUMPETER coloca a inovação no centro: o empreendedor introduz novas combinações (produtos, processos, mercados, fontes de recursos, formas de organização) e a DESTRUIÇÃO CRIATIVA ocorre quando essas inovações tornam estruturas anteriores menos relevantes. ISRAEL KIRZNER: o empreendedor é alguém ALERTA a desequilíbrios; a oportunidade existe porque preços, necessidades, informações e recursos ainda não estão perfeitamente coordenados — explica negócios que não criam tecnologia radical mas conectam oferta e demanda melhor. DAVID MCCLELLAND: necessidade de realização, metas desafiadoras, responsabilidade pessoal, busca de feedback e riscos moderados (calculados, não perigo). ICEK AJZEN, TEORIA DO COMPORTAMENTO PLANEJADO: a intenção de empreender depende de três fatores — atitude diante do comportamento, normas subjetivas e controle comportamental percebido. PETER DRUCKER: inovação sistemática como prática disciplinada, com fontes que incluem ocorrências inesperadas, incongruências, necessidades de processo, mudanças na indústria e no mercado, transformações demográficas, mudanças de percepção e novos conhecimentos. MISES E LACHMANN (Escola Austríaca): ação humana, conhecimento disperso, subjetividade e BRICOLAGEM — recombinar recursos disponíveis no início da startup. SEIS PERSPECTIVAS: econômica, sociológica, comportamental, cultural, gerencial/processual e educacional. CLÁSSICO x CONTEMPORÂNEO: o clássico opera em mercados mais conhecidos com foco em eficiência, lucro e expansão local; o contemporâneo é marcado por digitalização, conectividade global e modelos escaláveis, com a tecnologia integrando a própria proposta de valor. A diferença não é moral: um pequeno comércio pode ser excelente sem ser startup. COMPETÊNCIAS DE MAN E LAU: oportunidade, relacionamento, conceitual, estratégica, comprometimento e organização. HARD SKILLS (programação, arquitetura, dados, IA, segurança, integração, UX, métricas) e SOFT SKILLS (resiliência, pensamento crítico, curiosidade, comunicação, colaboração, liderança inclusiva, tolerância à ambiguidade). O empreendedor de SI atua como CIENTISTA (formula hipóteses e mede), ENGENHEIRO (constrói sistemas confiáveis) e LÍDER (alinha pessoas e decisões); o erro comum é deixar o engenheiro dominar e desenvolver antes de descobrir se alguém precisa. HÉLICE TRÍPLICE: academia, empresas e governo. Casos locais citados: Hand Talk e Trakto.

2. STARTUPS E ECOSSISTEMA DIGITAL: startup é uma organização TEMPORÁRIA em busca de um modelo de negócio REPETÍVEL, ESCALÁVEL e SUSTENTÁVEL sob condições de EXTREMA INCERTEZA. Modelo de negócio explica como se cria, entrega e captura valor. Repetibilidade: entregar valor sem reinvenção completa a cada cliente. Escalabilidade: receita e impacto crescem mais rápido que os custos. Software sob encomenda pode ser lucrativo e não escalável (cada projeto exige trabalho proporcional); um SaaS multitenant serve milhares com a mesma base. CICLO DE VIDA: ideação, validação, operação e escala. PRODUCT-MARKET FIT é quando um mercado relevante demonstra demanda consistente; sinais: retenção, uso recorrente, recomendação, crescimento orgânico e disposição para pagar. Crescer antes do PMF apenas amplifica desperdício. INCUBADORAS apoiam estágios muito iniciais, por períodos mais longos, com espaço, orientação e conexão institucional, geralmente sem participação societária; ACELERADORAS trabalham com startups que já têm equipe, MVP ou tração, em ciclos intensivos, frequentemente com investimento em troca de participação, terminando em apresentação a investidores.

3. IDENTIFICAÇÃO E VALIDAÇÃO DE OPORTUNIDADES: o mercado não remunera esforço, remunera a solução de problemas relevantes para quem está disposto e é capaz de adotar ou pagar. Uma ideia vira OPORTUNIDADE quando combina problema relevante, público identificável, solução possível, momento adequado e mecanismo econômico. O entusiasmo do fundador não é evidência; deve-se buscar dados que confirmem ou REFUTEM as hipóteses, evitando viés de confirmação. Método dos 5 PORQUÊS investiga causas mas precisa ser confrontado com observação e entrevistas — uma fila em UBS pode vir de demanda acima da capacidade, triagem inadequada, ausência de previsão, chegada simultânea, sistemas desconectados ou incentivos administrativos, e digitalizar o agendamento não resolve todas. SEGMENTAÇÃO: demográfica (idade, renda, escolaridade, ocupação, localização), psicográfica (valores, estilo de vida, motivações, atitudes), comportamental (frequência, ocasião, benefícios, lealdade) e POR PAPEL — usuário, pagador, decisor, influenciador e beneficiário podem ser pessoas diferentes. BENCHMARKING competitivo (concorrentes diretos), funcional (boas práticas de outros setores) e global (outros mercados); o objetivo não é copiar interfaces, é entender padrões de valor, custos, canais, barreiras e escolhas arquiteturais. FOUNDER-MARKET FIT é a adequação entre equipe e problema: reduz o custo de aprendizagem, não substitui validação. TIME-TO-MARKET: ser pioneiro cria vantagem mas exige educar o mercado; o fast follower aprende com os pioneiros e executa melhor.

4. BUSINESS MODEL CANVAS: mapa visual de HIPÓTESES sobre criação, entrega e captura de valor, que deve mudar quando os experimentos geram evidências. OS NOVE BLOCOS: (1) SEGMENTOS DE CLIENTES — para quem se cria valor: massa, nicho, segmentos diferenciados, portfólio diversificado ou plataforma multilateral; (2) PROPOSTA DE VALOR — benefícios que resolvem dores e geram ganhos: novidade, desempenho, personalização, execução de tarefa, design, marca, preço, redução de custo ou risco, acesso, usabilidade; formulada do ponto de vista do cliente, não como lista de funcionalidades; (3) CANAIS — criam consciência, permitem avaliação, viabilizam compra, entregam valor e oferecem pós-venda; (4) RELACIONAMENTO — assistência pessoal, atendimento dedicado, autosserviço, serviço automatizado, comunidade ou cocriação; (5) FONTES DE RECEITA — venda, taxa por uso, assinatura, aluguel, licenciamento, intermediação, publicidade; identificar quem paga, pelo quê, com que frequência e sob quais condições; (6) RECURSOS-CHAVE — físicos, intelectuais, humanos e financeiros: o que a empresa UTILIZA; (7) ATIVIDADES-CHAVE — desenvolver, operar, vender, implantar, suportar, gerir plataforma, analisar dados, garantir conformidade: o que a empresa FAZ; não confundir com recursos; (8) PARCERIAS-CHAVE — alianças, coopetição, joint ventures e relações comprador-fornecedor; (9) ESTRUTURA DE CUSTOS — fixos e variáveis, economias de escala e de escopo, modelos orientados a custo ou a valor. COERÊNCIA INTERNA: os blocos não são independentes — proposta para população vulnerável exige canais acessíveis e baixo consumo de dados; se o pagador é governo o ciclo de vendas é mais longo, elevando CAC, capital de giro e dependência de contratos; se a receita é recorrente, relacionamento, suporte e retenção precisam sustentar a renovação.

5. CUSTOMER DEVELOPMENT: organiza a busca por um modelo em QUATRO FASES. As duas primeiras são BUSCA, as duas últimas são EXECUÇÃO. (1) CUSTOMER DISCOVERY: descobrir se o problema existe, para quem importa e como as pessoas o enfrentam hoje; a equipe sai do prédio, entrevista, observa processos e mapeia dores, ganhos e partes interessadas; as perguntas exploram COMPORTAMENTO PASSADO, não intenção futura; em vendas complexas mapear usuário, decisor econômico, influenciador técnico, aprovador jurídico e bloqueadores. (2) CUSTOMER VALIDATION: transforma interesse em evidência de mercado — pré-venda, contrato, piloto pago, carta de intenção com compromisso real ou uso recorrente; busca-se processo de venda repetível e sinais de PMF; se as hipóteses não se sustentam, faz-se um pivot e volta-se à descoberta. (3) CUSTOMER CREATION: amplia aquisição e demanda, escolhe canais, testa mensagens, organiza funil; não deve anteceder a validação. (4) COMPANY BUILDING: formaliza departamentos, processos, metas, liderança e governança. CINCO PATOLOGIAS: escala prematura (investir antes de comprovar problema, solução e economia), dissonância de invalidação (rejeitar evidência negativa para proteger a ideia), métricas de vaidade (celebrar cadastros sem relação com valor), repertório técnico insuficiente (experimentos inadequados ou leitura sem rigor) e teto epistemológico (o feedback atual revela melhorias incrementais e pode não produzir visão transformadora).

6. LEAN STARTUP E EXPERIMENTAÇÃO: substitui ciclos longos baseados em previsão por ciclos curtos de CONSTRUIR, MEDIR e APRENDER. O ciclo deve ser PLANEJADO DE TRÁS PARA FRENTE: primeiro define-se o aprendizado necessário, depois a métrica, só então o MVP. O objetivo não é lançar rápido, é reduzir incerteza por unidade de tempo e recurso. CONTABILIDADE DA INOVAÇÃO: métricas acionáveis apoiam decisões e exibem relações causais; testes A/B comparam grupos equivalentes com divisão aleatória; análises de coorte acompanham pessoas que começaram em períodos semelhantes; funis mostram perdas entre etapas; MÉTRICAS DE VAIDADE crescem sem provar melhoria, como total acumulado de cadastros. ESTADO VALIDADO: uma história tecnicamente concluída não é necessariamente valiosa — acrescenta-se o estado Validado depois de Concluído, exigindo que a funcionalidade produza o comportamento esperado; integração contínua, pequenos lotes, implantação contínua e rollback reduzem o custo de experimentar. SEIS PIVOTS: zoom-in (uma funcionalidade vira o produto), zoom-out (o produto vira funcionalidade de algo maior), segmento de clientes, necessidade do cliente, plataforma e tecnologia. LIMITAÇÕES: feedback de curto prazo empurra para melhorias incrementais; inovações radicais exigem visão e teoria de valor; Lean não elimina estratégia, ética, pesquisa técnica nem compreensão sistêmica.

7. PRODUTO MÍNIMO VIÁVEL: MVP é a versão ou experimento com o MENOR ESFORÇO capaz de completar um ciclo de aprendizagem validada; mínimo não significa precário, significa suficiente para testar a hipótese central. SEIS TIPOS: VÍDEO (demonstra a experiência antes de construir a infraestrutura — o Dropbox validou interesse por sincronização), LANDING PAGE (mede interesse, conversão, preço ou mensagem por cadastro, pré-venda ou pedido de contato), WIZARD OF OZ (o usuário percebe serviço automatizado mas a operação é manual nos bastidores), CONCIERGE (a equipe entrega o serviço pessoalmente para compreender necessidades em profundidade), PIECEMEAL (combina ferramentas existentes para simular o produto) e PROTÓTIPO (testa fluxo, compreensão e usabilidade sem executar a operação real). ESCOLHA POR HIPÓTESE: compreensão de interface → protótipo; disposição a pagar → pré-venda; processo operacional → Wizard of Oz; demanda → landing page. Um protótipo elogiado NÃO valida capacidade operacional nem pagamento.

8. ARQUITETURAS DE NEGÓCIOS DIGITAIS: PIPELINES controlam uma cadeia relativamente linear — insumos são transformados e distribuídos; PLATAFORMAS facilitam interações entre grupos (compradores e vendedores, criadores e espectadores, motoristas e passageiros), e seu principal ativo é a qualidade e a frequência das interações. EFEITOS DE REDE: diretos (o valor cresce com participantes do mesmo grupo), indiretos (o valor de um lado cresce com o tamanho do outro) e negativos (congestionamento, fraude e baixa qualidade); a governança precisa definir entrada, reputação, regras e resolução de conflitos. MARKETPLACE exige inventário distribuído, catálogo, busca e matching, pagamento dividido, prevenção a fraude, reputação e tratamento de disputas; LIQUIDEZ é a capacidade de encontrar contraparte adequada em tempo aceitável, e crescer usuários sem densidade de oferta e demanda piora a experiência. SAAS transforma a aquisição de software de CAPEX em OPEX com assinatura recorrente; MULTITENANCY permite que vários clientes usem a mesma infraestrutura com isolamento lógico; APIs viabilizam ecossistemas; receita recorrente melhora previsibilidade mas exige retenção, segurança, suporte e evolução contínua. RULE OF 40 = crescimento percentual anual + margem operacional percentual, heurística que sugere soma próxima de 40 (crescer 50% com margem -10%, ou 15% com margem 25%); não é lei universal. CONTEXTO BRASILEIRO: logística, desigualdade de conectividade, meios de pagamento, tributação e LGPD moldam os modelos; casos citados: VTEX, Magalu, Conta Azul e Omie.

9. COMÉRCIO ELETRÔNICO: E-COMMERCE é a transação comercial por meios digitais; E-BUSINESS abrange processos, integração, relacionamento e gestão digital além da compra e venda. CAMADAS: frente de loja (descoberta, catálogo, busca, carrinho, checkout, atendimento), back office (pedidos, estoque, pagamentos, faturamento, CRM, análise) e logística; nuvem, big data e IA sustentam recomendação, prevenção a fraude, previsão de demanda e precificação dinâmica. TAM (Technology Acceptance Model) explica a ADOÇÃO por utilidade percebida e facilidade de uso; ECM (Expectation-Confirmation Model) explica a CONTINUIDADE — o usuário compara desempenho com expectativas, a confirmação gera satisfação e intenção de reutilização; segurança, privacidade, prova social, transparência e suporte reduzem risco percebido. SETE CARACTERÍSTICAS: ubiquidade, alcance global, padrões universais, densidade e transparência de informação, personalização, interatividade e tecnologia social. MODALIDADES: B2C (empresa a consumidor), B2B (empresa a empresa), C2C (entre consumidores), C2B (indivíduo oferece valor a empresas), B2G e G2B (empresas e governo), G2C (serviços públicos ao cidadão); M-COMMERCE enfatiza dispositivos móveis e SOCIAL COMMERCE integra descoberta, influência e compra em redes sociais.

10. AQUISIÇÃO ORGÂNICA, RETENÇÃO E CUSTOMER SUCCESS: mídia paga produz tráfego enquanto há investimento e sofre inflação de CAC; conteúdo e SEO demandam tempo mas criam ativos com custo marginal decrescente; GEO adapta conteúdo para mecanismos de resposta generativa, enfatizando clareza, autoridade, dados e estrutura. INTENÇÃO DO CONTEÚDO: informacional (educa), comercial (compara alternativas) e transacional (facilita ação); autoridade, experiência e confiança reduzem risco, especialmente em saúde, finanças e serviços públicos. CRM organiza dados, interações e oportunidades. CUSTOMER SUCCESS é PROATIVO e trabalha para que o cliente alcance o resultado desejado; SUPORTE é geralmente REATIVO e resolve incidentes. Em SaaS B2B acompanham-se onboarding, adoção, valor percebido e renovação. CHURN VOLUNTÁRIO (o cliente decide cancelar), INVOLUNTÁRIO (falha de pagamento, cartão expirado) e PASSIVO (desengajamento sem cancelamento, que antecipa risco futuro); EXPANSÃO por upsell, cross-sell e aumento de uso; REFERRAL reduz CAC por recomendação e prova social.

11. UNIT ECONOMICS E VIABILIDADE EM SAAS: revela se cada cliente cria valor; crescimento com unidade deficitária acelera prejuízo. CAC = despesas de vendas e marketing do período ÷ novos clientes adquiridos no período; inclua salários, comissões, mídia, ferramentas, eventos e custos diretamente relacionados; o CAC médio esconde diferenças entre canais e segmentos, então calcule por coorte, canal e perfil. LTV SIMPLIFICADO = ARPU × margem bruta ÷ churn mensal; ARPU é a receita média por usuário, a margem bruta exclui custos diretamente associados ao serviço, e o churn deve usar a mesma periodicidade. LTV/CAC = valor do cliente ao longo da vida ÷ custo de aquisição. PAYBACK = CAC ÷ margem de contribuição mensal por cliente. NRR = (receita inicial − churn − contração + expansão) ÷ receita inicial × 100, e acima de 100% indica que a expansão supera as perdas. BENCHMARKS: LTV/CAC próximo de 3:1 é referência de equilíbrio saudável; abaixo de 1:1 o cliente destrói valor antes de considerar custos fixos; acima de 5:1 pode sinalizar eficiência mas também subinvestimento em crescimento; payback inferior a 12 meses é geralmente confortável em SaaS e superior a 18 meses aumenta necessidade de caixa e risco. EXEMPLO COMPLETO: gastar R$ 60.000 em vendas e marketing e conquistar 100 clientes dá CAC de R$ 600; com ARPU mensal de R$ 150, margem bruta de 80% e churn de 4%, o LTV simplificado é R$ 3.000 (150 × 0,80 = 120; 120 ÷ 0,04 = 3.000), logo LTV/CAC = 5; a margem de contribuição mensal é R$ 120, então o payback é 600 ÷ 120 = 5 meses. A leitura não deve parar no resultado positivo: verifique concentração, maturidade das coortes, custos de suporte, inadimplência e se o churn permanecerá no patamar. ANÁLISE DE COORTE separa clientes por mês de entrada, canal ou plano; se a expansão dos sobreviventes supera cancelamentos e reduções, ocorre churn líquido de receita negativo, refletido por NRR acima de 100%.

12. FINANCIAMENTO DE STARTUPS: a fonte de capital altera velocidade, controle, governança, risco e expectativas de saída; não existe fonte universalmente melhor, existe adequação ao estágio e à estratégia. BOOTSTRAPPING: a empresa cresce com recursos dos fundadores e receita; vantagens são preservação de participação, autonomia, disciplina de custos e foco em clientes pagantes; limites são menor velocidade, dificuldade para financiar tecnologia intensiva ou mercados de vencedor leva tudo, e maior exposição financeira dos fundadores. INVESTIDOR-ANJO investe capital próprio em estágio inicial; smart money agrega rede, experiência e credibilidade; a negociação envolve valuation, participação, direitos de informação e influência. INSTRUMENTOS CONVERSÍVEIS postergam a definição de valuation, convertendo o aporte em participação em rodada futura segundo desconto, teto ou condições estabelecidas. DILUIÇÃO é a redução percentual da participação dos sócios quando novas quotas ou ações são emitidas; pode ser racional se o investimento aumentar o valor total da empresa em proporção superior; o risco é trocar participação e controle sem clareza sobre uso do capital e marcos. VENTURE CAPITAL: fundos investem em empresas com potencial de crescimento e retorno elevado; o capital acelera infraestrutura, contratação e expansão mas introduz governança, metas, direitos preferenciais e pressão por liquidez futura; VC não é adequado a negócios sem possibilidade de escala compatível com o fundo, ainda que lucrativos. CROWDFUNDING: recompensa ou pré-venda (apoiadores recebem produto, experiência ou benefício; valida demanda e financia produção), dívida ou P2P (empréstimo com juros) e EQUITY CROWDFUNDING (investidores recebem participação, exigindo conformidade com regras da CVM); produz marketing e comunidade, mas expõe a ideia, cria obrigação com muitos apoiadores e pode gerar dano reputacional se a entrega falhar. ESCOLHA POR ESTÁGIO: descoberta usa recursos próprios, bolsas, editais, incubação e experimentos baratos; MVP e validação usam bootstrapping, anjo, pré-venda e aceleração; tração usa seed e fundos especializados quando há métricas e uso claro do capital; escala usa rodadas maiores para canais, equipe, infraestrutura e expansão geográfica.

13. PLANO DE NEGÓCIO E PITCH DECK: o plano organiza escolhas estratégicas e financeiras com mais detalhamento operacional e projeções do que o Canvas. SUMÁRIO EXECUTIVO é escrito por último embora apareça primeiro, e resume problema, solução, mercado, modelo, equipe, diferenciais, indicadores e necessidade de recursos. EMPREENDIMENTO E EQUIPE: competências dos sócios, responsabilidades, missão, setores, forma jurídica, regime tributário, capital social e fontes de recursos. MERCADO E MARKETING: clientes, concorrentes, fornecedores, produtos, preço, promoção, canais e localização. PLANO FINANCEIRO: investimentos fixos, capital de giro, despesas pré-operacionais, receitas, custos variáveis e diretos, custos fixos e depreciação. INDICADORES: margem de contribuição = receita − custos e despesas variáveis; ponto de equilíbrio = custos fixos ÷ margem de contribuição percentual; lucratividade = lucro líquido ÷ receita total × 100 (desempenho sobre vendas); rentabilidade = lucro líquido ÷ investimento total × 100 (retorno sobre capital investido); payback simples = investimento inicial ÷ geração média de caixa por período, que não considera valor do dinheiro no tempo. SWOT: forças e fraquezas são internas, oportunidades e ameaças são externas; a utilidade está em gerar decisões, não em listar. PITCH DECK é narrativa visual cujo objetivo é conquistar a próxima conversa ou decisão, com estrutura de abertura e propósito, problema, solução, por que agora, mercado, produto e tração, modelo de negócio, concorrência e moat, go-to-market, equipe e pedido. TAM é o mercado total teórico, SAM a parcela atendível pelo modelo e geografia, SOM a participação realisticamente alcançável; estimativas BOTTOM-UP partem de número de clientes potenciais, preço e capacidade de aquisição, e são mais defensáveis que percentuais arbitrários. Investidores observam CAC, LTV, payback, margem, churn, MRR e crescimento; LTV maior que três vezes CAC e payback inferior a doze meses são referências, não garantias; ocultar limitações destrói confiança. DESIGN: 10 a 15 slides, fontes grandes, uma ideia por tela, gráficos legíveis; métricas ainda não observadas devem ser rotuladas como metas.

14. INTRAEMPREENDEDORISMO E EMPREENDEDORISMO SOCIAL: INTRAEMPREENDEDORISMO cria inovação dentro de organizações existentes, termo difundido por GIFFORD PINCHOT III; o intraempreendedor usa recursos e infraestrutura da organização mas age com iniciativa, criatividade, visão estratégica e risco calculado; benefícios incluem melhoria de processos, novos produtos, produtividade, retenção de talentos e vantagem competitiva; barreiras incluem burocracia, cultura avessa ao erro, falta de autonomia, tempo, recursos e apoio da liderança; exemplos citados: Gmail, botão Curtir, PlayStation e Post-it. EMPREENDEDORISMO SOCIAL tem impacto positivo como propósito central, com ou sem fins lucrativos, equilibrando missão, sustentabilidade financeira e governança; a inovação social deve envolver a comunidade e evitar tratar beneficiários como receptores passivos. TEORIA DA MUDANÇA: recursos e atividades produzem resultados imediatos, intermediários e impacto de longo prazo; OUTPUT é entrega (número de atendimentos), OUTCOME é mudança de comportamento (redução consistente da espera) e IMPACTO é a transformação de longo prazo (melhoria de acesso).

15. EMPREENDEDORISMO NO BRASIL SEGUNDO O GEM 2024: a taxa total de empreendedorismo chegou a 33,4%, ante 30,1% em 2023; aproximadamente 46,9 milhões de brasileiros de 18 a 64 anos estavam envolvidos em negócios iniciais ou estabelecidos; a taxa de empreendedorismo inicial foi 20,3% e a de estabelecidos 13,2%. EMPREENDEDOR NASCENTE está estruturando ou operando por período muito curto; NOVO EMPREENDEDOR tem negócio em fase inicial; ESTABELECIDO superou o período definido pelo estudo. Entre os iniciais, homens 22,3% e mulheres 18,4%; destacam-se as faixas de 25 a 34 e 35 a 44 anos, com aproximadamente 25%; houve crescimento da participação feminina, de pessoas mais velhas, com menor escolaridade e renda mais baixa. MOTIVAÇÕES: fazer diferença no mundo 74,6%, escassez de empregos 73,9%, construir riqueza ou renda elevada 69,3% e continuar tradição familiar 35,4% — elas coexistem, e empreender por necessidade não significa ausência de inovação. FORMALIZAÇÃO: 38,6% com CNPJ; cerca de 31% dos estabelecidos operavam sem empregados e menos de 20% tinham cinco ou mais; aproximadamente 800 mil novos negócios indicaram inovação ou clientes nacionais e cerca de 130 mil alcance internacional, mostrando que alta atividade empreendedora não implica alta inovação ou internacionalização. DIGITALIZAÇÃO: entre iniciais, 96,2% usavam tecnologias digitais ou aplicativos para vender e 81,9% pretendiam ampliar em seis meses; entre estabelecidos, 94,4% e 76,1%; digitalização virou infraestrutura básica, mas usar aplicativo não garante transformação de modelo, produtividade nem vantagem competitiva.

16. ESTUDOS DE CASO: FILAZERO SAÚDE é uma healthtech B2G para espera excessiva e imprevisível em UBS, com recorte em consultas simples, população dependente do SUS e celulares básicos; combina agendamento, senha online e previsão de horário; a hipótese precisa considerar capacidade da UBS, triagem clínica, faltas, urgências, integração com sistemas, LGPD, acessibilidade e pessoas sem conectividade; as métricas divulgadas (espera de 30 minutos, 500 atendimentos, 85% de comparecimento e satisfação 4,5) são METAS, não resultados observados. TWITCH surgiu do Justin.tv, uma experiência ampla de transmissão ao vivo; o excesso de conteúdo e a falta de foco revelaram que jogos concentravam interesse e em 2011 o projeto pivotou; a Amazon adquiriu a empresa por cerca de US$ 970 milhões; o modelo reúne publicidade, assinaturas, doações e Bits, é repetível porque novos criadores seguem a mesma lógica e escalável porque cresce sem produção centralizada proporcional, com efeitos de rede reforçando conteúdo, audiência e receita. TECHNOVA construiu por longo período um produto tecnicamente sólido sem tração; um MVP em vídeo captou milhares de e-mails, um Wizard of Oz simulou onboarding manual, o fluxo incorporou o estado Validado, e deploy contínuo com pequenos lotes acelerou experimentos; análises revelaram que a descoberta social gerava mais valor que a compra, conduzindo a um pivot zoom-in; o teste da funcionalidade de agendamento de retirada usou divisão aleatória entre controle e tratamento, com a conversão em transações concluídas como métrica central, e não número de cliques.

EMENTA OFICIAL (PPC, código EMPD, 6º período, 80h, 4h semanais, eixo FB, sem pré-requisitos): Conceito de empreendedorismo e empreendimento; Perfil do empreendedor; Geração de ideias; Busca de informações; Mecanismos e procedimentos para criação de empresas; Gerenciamento e negociação; Qualidade e competitividade; Marketing pessoal e empresarial; Gestão do empreendimento; Empreendedorismo digital; Startups; Startup enxuta (Lean); Negócio sustentável; Prototipação de projeto; Modelo de negócios.
`;

export const EMPD_TOPICS: QuizTopicOption[] = [
    { value: 'fundamentos', label: 'Fundamentos, escolas e competências' },
    { value: 'startups', label: 'Startups, ciclo de vida e product-market fit' },
    { value: 'oportunidades', label: 'Oportunidades, segmentação e validação' },
    { value: 'canvas', label: 'Business Model Canvas (os nove blocos)' },
    { value: 'customer-development', label: 'Customer Development' },
    {
        value: 'lean-mvp',
        label: 'Lean Startup e MVP',
        prompt: 'Lean Startup e MVP em Empreendedorismo Digital: o ciclo Construir-Medir-Aprender planejado de trás para frente (define-se primeiro o aprendizado necessário, depois a métrica, só então o MVP), com o objetivo de reduzir incerteza por unidade de tempo e recurso. Contabilidade da inovação: métrica acionável (mostra relação causal e apoia decisão) contra métrica de vaidade (cresce sem provar melhoria, como total acumulado de cadastros); teste A/B com divisão aleatória entre controle e tratamento; análise de coorte; funil por etapa. Estado "Validado" acrescentado depois de "Concluído". Os seis pivots: zoom-in, zoom-out, segmento de clientes, necessidade do cliente, plataforma e tecnologia. Os seis tipos de MVP e a hipótese que cada um testa: vídeo e landing page testam DEMANDA; protótipo testa COMPREENSÃO e USABILIDADE da interface; Wizard of Oz e concierge testam a OPERAÇÃO; pré-venda testa DISPOSIÇÃO A PAGAR; piecemeal simula o produto com ferramentas existentes. Um protótipo elogiado não valida pagamento nem capacidade operacional. MVP mínimo não significa precário.',
    },
    { value: 'arquiteturas', label: 'Plataformas, SaaS e comércio eletrônico' },
    {
        value: 'unit-economics',
        label: 'CAC, LTV, payback e NRR',
        prompt: 'Unit Economics em Empreendedorismo Digital, com as fórmulas e as variáveis nomeadas. CAC = despesas de vendas e marketing do período ÷ novos clientes adquiridos no período (inclui salários, comissões, mídia, ferramentas e eventos). LTV simplificado = ARPU × margem bruta ÷ churn mensal, em que ARPU é a receita média por usuário e o churn usa a mesma periodicidade do ARPU. LTV/CAC = LTV ÷ CAC. Payback = CAC ÷ margem de contribuição mensal por cliente, e a margem de contribuição mensal é ARPU × margem bruta. NRR = (receita inicial − churn − contração + expansão) ÷ receita inicial × 100. Benchmarks: LTV/CAC próximo de 3:1 é equilíbrio saudável; abaixo de 1:1 o cliente destrói valor; acima de 5:1 pode indicar subinvestimento em crescimento; payback abaixo de 12 meses é confortável em SaaS e acima de 18 meses aumenta risco de caixa; NRR acima de 100% indica churn líquido de receita negativo. Exemplo resolvido: R$ 60.000 em vendas e marketing para 100 clientes dá CAC de R$ 600; com ARPU de R$ 150, margem bruta de 80% e churn de 4%, o LTV é 150 × 0,80 ÷ 0,04 = R$ 3.000, LTV/CAC = 5 e payback = 600 ÷ 120 = 5 meses. Ao gerar questões numéricas, confira a aritmética passo a passo e use erros plausíveis como distratores (esquecer a margem bruta, inverter a razão, usar o ARPU cheio no payback).',
    },
    {
        value: 'financiamento',
        label: 'Financiamento, diluição e crowdfunding',
        prompt: 'Financiamento de startups em Empreendedorismo Digital. BOOTSTRAPPING: crescer com recursos dos fundadores e com a receita; preserva participação, autonomia e disciplina de custos; limita velocidade e expõe financeiramente os fundadores; inadequado a tecnologia intensiva e a mercados de vencedor leva tudo. INVESTIDOR-ANJO: pessoa física, capital próprio, estágio inicial; smart money agrega rede, experiência e credibilidade; negocia valuation, participação e direitos de informação. VENTURE CAPITAL: fundos que buscam retorno elevado; aceleram infraestrutura, contratação e expansão mas trazem governança, metas, direitos preferenciais e pressão por liquidez futura; inadequado a negócios sem escala compatível com o fundo, ainda que lucrativos. CROWDFUNDING em três modalidades: recompensa ou pré-venda (o apoiador recebe produto ou benefício e valida demanda), dívida ou P2P (empréstimo com juros) e equity crowdfunding (participação societária, com conformidade exigida pela CVM). INSTRUMENTOS CONVERSÍVEIS postergam a definição de valuation, convertendo em participação numa rodada futura segundo desconto ou teto. DILUIÇÃO é a redução percentual da participação quando novas quotas ou ações são emitidas, e pode ser racional se o valor total da empresa crescer em proporção superior. ESCOLHA POR ESTÁGIO: descoberta usa recursos próprios, bolsas, editais e incubação; MVP e validação usam bootstrapping, anjo, pré-venda e aceleração; tração usa seed e fundos especializados; escala usa rodadas maiores.',
    },
    {
        value: 'plano-pitch',
        label: 'Plano de negócio e Pitch Deck',
        prompt: 'Plano de negócio e Pitch Deck em Empreendedorismo Digital, com as fórmulas e as variáveis nomeadas. Sumário executivo escrito por último. Plano financeiro: investimentos fixos, capital de giro, despesas pré-operacionais, receitas, custos variáveis e diretos, custos fixos e depreciação. INDICADORES: margem de contribuição = receita − custos e despesas variáveis; ponto de equilíbrio = custos fixos ÷ margem de contribuição percentual (com custos fixos de R$ 50 mil e margem de 40%, o ponto de equilíbrio é R$ 125 mil); lucratividade = lucro líquido ÷ receita total × 100, que mede desempenho sobre vendas; rentabilidade = lucro líquido ÷ investimento total × 100, que mede retorno sobre capital investido; payback simples = investimento inicial ÷ geração média de caixa por período, que não considera o valor do dinheiro no tempo. SWOT: forças e fraquezas internas, oportunidades e ameaças externas, com a utilidade em gerar decisões. PITCH: abertura e propósito, problema, solução, por que agora, mercado, produto e tração, modelo de negócio, concorrência e moat, go-to-market, equipe e pedido; 10 a 15 slides. TAM é o mercado total teórico, SAM a parcela atendível pelo modelo e geografia, SOM a participação realisticamente alcançável; estimativas bottom-up partem de número de clientes potenciais, preço e capacidade de aquisição. Métricas ainda não observadas devem ser rotuladas como metas.',
    },
    { value: 'contextos', label: 'Intraempreendedorismo, impacto social e GEM 2024' },
    { value: 'casos', label: 'FilaZero, Twitch e TechNova' },
];

/**
 * A apostila da turma não declara uma divisão nominal de provas (AV1/AV2), e a turma
 * `empreendedorismo-digital-bsi-2026-2` não foi coletada, então não há mural para conferir.
 * O que a apostila **nomeia** são as entregas avaliadas ao longo do semestre — Canvas,
 * Customer Development, Lean, MVP, estudo de caso de startup, financiamento e pitch. São
 * essas que viram avaliações aqui: é o recorte que existe de fato na fonte, em vez de um
 * AV1/AV2 inventado.
 *
 * `fundamentos` e `contextos` ficam de fora de todas: são teoria e pano de fundo, sem entrega
 * correspondente. Continuam acessíveis pela pill sintética "Final (tudo)", que ignora a
 * marcação (ver `ExamMode`).
 */
export const EMPD_EXAMS: ExamDefinition[] = [
    {
        id: 'canvas',
        label: 'Canvas',
        description: 'Atividade de modelo de negócio: os nove blocos aplicados a um negócio real, e as relações entre eles.',
    },
    {
        id: 'custdev',
        label: 'Cust. Dev.',
        description: 'Descoberta e validação de clientes: as quatro fases, a fronteira entre busca e execução e as patologias.',
    },
    {
        id: 'lean',
        label: 'Lean e MVP',
        description: 'Ciclo Construir-Medir-Aprender, escolha do experimento, métricas acionáveis e teste do MVP com usuários.',
    },
    {
        id: 'caso-startup',
        label: 'Estudo de caso',
        description: 'Análise de uma startup real: modelo de negócio, inovação, repetibilidade, escalabilidade e incerteza.',
    },
    {
        id: 'financiamento',
        label: 'Financiamento',
        description: 'Bootstrapping, investidor-anjo, venture capital, instrumentos conversíveis, crowdfunding e diluição.',
    },
    {
        id: 'pitch',
        label: 'Pitch Deck',
        description: 'Narrativa do pitch, TAM/SAM/SOM, tração, métricas de unidade e pedido de recursos.',
    },
];

export const EMPD_SECTIONS = [
    { id: 'intro', title: 'A jornada de uma startup', shortTitle: 'Introdução' },
    { id: 'fundamentos', title: 'Fundamentos, Escolas e o Empreendedor de SI', shortTitle: 'Fundamentos' },
    { id: 'startups', title: 'Startups e Ecossistema Digital', shortTitle: 'Startups', exams: ['canvas', 'caso-startup'] },
    { id: 'oportunidades', title: 'Identificação e Validação de Oportunidades', shortTitle: 'Oportunidades', exams: ['canvas', 'custdev'] },
    { id: 'canvas', title: 'Business Model Canvas', shortTitle: 'Canvas', exams: ['canvas'] },
    { id: 'customer-development', title: 'Customer Development', shortTitle: 'Cust. Dev.', exams: ['custdev'] },
    { id: 'lean-mvp', title: 'Lean Startup, Experimentação e MVP', shortTitle: 'Lean e MVP', exams: ['lean', 'caso-startup'] },
    { id: 'arquiteturas', title: 'Arquiteturas Digitais e Comércio Eletrônico', shortTitle: 'Arquiteturas', exams: ['caso-startup', 'pitch'] },
    { id: 'unit-economics', title: 'Aquisição, Retenção e Unit Economics', shortTitle: 'Unit Economics', exams: ['pitch'] },
    { id: 'financiamento', title: 'Financiamento de Startups', shortTitle: 'Financiamento', exams: ['financiamento'] },
    { id: 'plano-pitch', title: 'Plano de Negócio e Pitch Deck', shortTitle: 'Plano e Pitch', exams: ['pitch'] },
    { id: 'contextos', title: 'Intraempreendedorismo, Impacto Social e GEM 2024', shortTitle: 'Contextos' },
    { id: 'casos', title: 'Estudos de Caso: FilaZero, Twitch e TechNova', shortTitle: 'Casos', exams: ['caso-startup', 'pitch'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type EmpdSectionId = (typeof EMPD_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    // ------------------------------------------------------- Fundamentos
    {
        id: 'q1',
        question: 'Qual alternativa distingue corretamente risco de incerteza, na formulação de Frank Knight?',
        options: [
            'Risco se refere a perdas financeiras; incerteza se refere a perdas de reputação',
            'Risco é o que ameaça a empresa; incerteza é o que ameaça o mercado como um todo',
            'Risco existe em empresas tradicionais; incerteza existe apenas em startups de tecnologia',
            'Risco admite probabilidades estimáveis; incerteza envolve eventos cuja distribuição não é conhecida',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Exato. Uma seguradora calcula sinistros a partir de histórico — isso é risco. Ninguém sabe se um produto inédito terá demanda, a que preço e com que uso — isso é incerteza. É por isso que uma startup não pode ser administrada apenas por previsões rígidas: faltariam os dados.',
        feedbackWrong: 'A distinção é sobre o conhecimento da distribuição de probabilidade, não sobre o tipo ou o alvo da perda. Risco admite probabilidades estimáveis; na incerteza, nem a distribuição dos eventos é conhecida — e é justamente aí que o empreendedor atua.',
    },
    {
        id: 'q2',
        question: 'A perspectiva de Israel Kirzner é especialmente útil para explicar que tipo de oportunidade?',
        options: [
            'As que dependem de uma inovação tecnológica radical ainda inexistente',
            'As que surgem porque preços, necessidades, informações e recursos ainda não estão perfeitamente coordenados',
            'As que resultam exclusivamente de mudanças demográficas de longo prazo',
            'As que só aparecem em mercados já maduros e com forte regulação',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Kirzner descreve o empreendedor como alguém alerta a desequilíbrios do mercado. Isso explica negócios que não criam tecnologia nova, mas conectam oferta e demanda de forma superior — a maior parte dos negócios digitais bem-sucedidos.',
        feedbackWrong: 'A resposta é a segunda. O estado de alerta de Kirzner trata de desequilíbrios: a oportunidade existe porque a coordenação ainda é imperfeita. A inovação radical é a ênfase de Schumpeter, não de Kirzner.',
    },
    {
        id: 'q3',
        question: 'Segundo a Teoria do Comportamento Planejado, de Ajzen, a intenção de empreender depende de quais três fatores?',
        options: [
            'Capital disponível, formação técnica e rede de contatos',
            'Necessidade de realização, tolerância ao risco e criatividade',
            'Atitude diante do comportamento, normas subjetivas e controle comportamental percebido',
            'Oportunidade de mercado, viabilidade financeira e momento adequado',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Por isso uma pessoa pode valorizar o empreendedorismo e ainda assim não agir: se o ambiente ao redor desaprova (normas subjetivas) ou se ela não acredita ter recursos e capacidade (controle percebido), a intenção não se forma.',
        feedbackWrong: 'São atitude diante do comportamento, normas subjetivas e controle comportamental percebido. A necessidade de realização é a contribuição de McClelland; capital e rede são recursos, não os componentes do modelo de Ajzen.',
    },
    // ---------------------------------------------------------- Startups
    {
        id: 'q4',
        exams: ['canvas', 'caso-startup'],
        question: 'Qual é o melhor exemplo de negócio digital que NÃO se enquadra na definição de startup, e por quê?',
        options: [
            'Uma fábrica de software sob encomenda lucrativa, porque cada projeto exige trabalho proporcional à receita',
            'Um SaaS multitenant com poucos clientes, porque ainda não atingiu faturamento relevante',
            'Um marketplace regional, porque atua apenas em uma cidade',
            'Um aplicativo gratuito, porque ainda não tem fonte de receita definida',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso. O critério é a relação entre crescimento de receita e crescimento de custo, não o faturamento nem o alcance geográfico. Software sob encomenda pode ser muito lucrativo e mesmo assim não escalável: dobrar a receita exige praticamente dobrar a equipe.',
        feedbackWrong: 'A resposta é a primeira. Faturamento baixo, atuação regional ou ausência de receita não descaracterizam uma startup — podem descrever exatamente o estágio de busca. O que quebra a definição é a falta de escalabilidade: trabalho proporcional a cada novo cliente.',
    },
    {
        id: 'q5',
        exams: ['canvas', 'caso-startup'],
        question: 'Por que investir pesadamente em aquisição antes do product-market fit é considerado perigoso?',
        options: [
            'Porque a legislação impede a compra de mídia antes da constituição formal da empresa',
            'Porque o custo de mídia é sempre maior no início da operação',
            'Porque paga-se para levar pessoas a um produto que elas não vão manter, ampliando o desperdício em vez de corrigir o modelo',
            'Porque a equipe de vendas ainda não teve tempo de ser treinada adequadamente',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Sem retenção, o CAC é gasto e não retorna. O crescimento antes do ajuste não conserta o funil: apenas o opera em volume maior, consumindo o caixa que financiaria a próxima rodada de aprendizado.',
        feedbackWrong: 'A resposta é a terceira. O problema não é jurídico, nem o preço da mídia, nem o treinamento: é que, sem product-market fit, os clientes adquiridos não permanecem — e escalar apenas amplifica o desperdício.',
    },
    // ----------------------------------------------------- Oportunidades
    {
        id: 'q6',
        exams: ['canvas', 'custdev'],
        question: 'No FilaZero Saúde, uma solução vendida a municípios, qual é o mapeamento correto dos papéis?',
        options: [
            'O paciente é usuário, beneficiário e pagador, já que é ele quem recebe o atendimento',
            'A secretaria municipal é usuária e o paciente é decisor, porque escolhe se usa o aplicativo',
            'O paciente é usuário e beneficiário; a gestão municipal ou da unidade é decisora e pagadora; profissionais de saúde influenciam a adoção',
            'Todos os papéis recaem sobre a UBS, que concentra uso, decisão e pagamento',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Usuário, decisor e pagador são pessoas diferentes — é a marca de uma venda B2G. Desenhar tudo pensando só no paciente produz uma solução atraente que ninguém pode comprar.',
        feedbackWrong: 'A correta é a terceira. Num modelo B2G, quem usa não é quem paga: o paciente é usuário e beneficiário, a gestão decide e paga, e os profissionais de saúde influenciam a adoção sem decidir formalmente.',
    },
    {
        id: 'q7',
        exams: ['canvas', 'custdev'],
        question: 'Uma equipe estuda como companhias aéreas fazem check-in para repensar a recepção de uma unidade de saúde. Que tipo de benchmarking é esse?',
        options: ['Competitivo', 'Funcional', 'Global', 'Interno'],
        correctIndex: 1,
        feedbackCorrect: 'Isso. O benchmarking funcional busca boas práticas em setores distintos que resolvem um problema análogo — e é justamente onde aparecem as ideias que a concorrência direta não tem.',
        feedbackWrong: 'É funcional. O competitivo compara concorrentes diretos, e o global amplia a observação para outros mercados e países. Buscar em um setor completamente diferente uma prática que resolve o mesmo tipo de problema é a definição do funcional.',
    },
    // ------------------------------------------------------------ Canvas
    {
        id: 'q8',
        exams: ['canvas'],
        question: 'Qual das alternativas classifica corretamente itens de uma healthtech entre Recursos-Chave e Atividades-Chave?',
        options: [
            'Recurso: implantar nas unidades. Atividade: equipe de desenvolvimento',
            'Recurso: conhecimento regulatório e integrações prontas. Atividade: implantar, suportar e garantir conformidade',
            'Recurso e atividade são o mesmo bloco, apenas nomeados de forma diferente',
            'Recurso: garantir conformidade com a LGPD. Atividade: capital de giro',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Recurso é o que a empresa utiliza — cabe na frase "nós temos…". Atividade é o que a empresa faz — cabe na frase "nós fazemos…". Conhecimento e integrações são ativos; implantar e suportar são processos.',
        feedbackWrong: 'A correta é a segunda. Aplique o teste: "nós temos conhecimento regulatório" (recurso) contra "nós implantamos e damos suporte" (atividade). As demais alternativas invertem os dois ou os tratam como equivalentes.',
    },
    {
        id: 'q9',
        exams: ['canvas'],
        question: 'Qual das opções abaixo é uma proposta de valor, e não uma lista de funcionalidades?',
        options: [
            'Agendamento online, senha digital e notificação por SMS',
            'Aplicativo leve, com login por CPF e painel administrativo',
            'Saber a que horas serei atendido, sem precisar chegar de madrugada',
            'Integração com prontuário eletrônico e relatórios exportáveis',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Isso. A proposta de valor descreve a mudança na vida do cliente; a funcionalidade descreve o mecanismo que a produz. O teste é simples: funcionalidade responde "o que o sistema faz", proposta de valor responde "que dor deixa de existir".',
        feedbackWrong: 'A terceira. As outras três descrevem o que o sistema faz — são mecanismos. A proposta de valor precisa ser formulada do ponto de vista do cliente, dizendo qual dor é resolvida e qual ganho é gerado.',
    },
    {
        id: 'q10',
        exams: ['canvas'],
        question: 'Se o pagador de uma solução deixa de ser o consumidor e passa a ser o governo, que efeitos em cadeia isso produz no Canvas?',
        options: [
            'Nenhum: a mudança afeta apenas o bloco Fontes de Receita',
            'O ciclo de vendas se alonga, elevando CAC, necessidade de capital de giro e dependência de contratos',
            'O CAC cai, porque contratos públicos dispensam esforço comercial',
            'Os canais deixam de importar, já que a adoção passa a ser obrigatória',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Os blocos não são independentes. Venda ao setor público significa processo formal e demorado: mais tempo até a primeira receita, mais capital para atravessar esse intervalo e receita concentrada em poucos contratos.',
        feedbackWrong: 'A resposta é a segunda. Mudar o pagador altera canais, relacionamento, custos e estrutura de receita ao mesmo tempo — e o ciclo de vendas público é mais longo, não mais curto, o que eleva o CAC em vez de reduzi-lo.',
    },
    // ----------------------------------------------- Customer Development
    {
        id: 'q11',
        exams: ['custdev'],
        question: 'Quais fases do Customer Development pertencem à BUSCA de um modelo de negócio?',
        options: [
            'Customer Discovery e Customer Validation',
            'Customer Validation e Customer Creation',
            'Customer Creation e Company Building',
            'Customer Discovery e Company Building',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso. As duas primeiras procuram hipóteses válidas: o problema existe, e existe um jeito repetível de vender a solução? Customer Creation e Company Building executam e escalam um modelo já comprovado.',
        feedbackWrong: 'São Customer Discovery e Customer Validation. A fronteira entre busca e execução cai exatamente depois da validação — inverter essa ordem é a definição operacional de escala prematura.',
    },
    {
        id: 'q12',
        exams: ['custdev'],
        question: 'Para uma solução vendida a prefeituras, qual das evidências abaixo é a mais forte na fase de Customer Validation?',
        options: [
            'Um secretário municipal elogiar a demonstração e dizer que a solução é necessária',
            'Trezentos cadastros de pacientes numa landing page da solução',
            'Um piloto formal com orçamento alocado e compromisso do decisor',
            'Reportagem em veículo local destacando o projeto',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Pagar e assumir compromisso formal muda a natureza da evidência. É o que separa interesse declarado de intenção de contratar — e no setor público, sem orçamento alocado, não há contrato.',
        feedbackWrong: 'A resposta é o piloto formal com orçamento e compromisso do decisor. Elogio, cadastros e imprensa não custam nada a quem os oferece: uma declaração como "eu usaria" vale pouco sem contexto, frequência, custo atual e comprometimento.',
    },
    // -------------------------------------------------------- Lean e MVP
    {
        id: 'q13',
        exams: ['lean', 'caso-startup'],
        question: 'Qual das métricas abaixo é acionável, e não uma métrica de vaidade?',
        options: [
            'Total acumulado de cadastros desde o lançamento',
            'Número de visualizações da página inicial no mês',
            'Conversão em transações concluídas no grupo de tratamento comparada à do grupo de controle',
            'Quantidade de seguidores nas redes sociais da empresa',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A métrica acionável exibe uma relação causal e sustenta a decisão de perseverar, ajustar ou pivotar. Comparar tratamento e controle isola o efeito da mudança feita.',
        feedbackWrong: 'A terceira. As outras três só crescem: um total acumulado nunca desce, e visualizações e seguidores sobem sem provar que algo melhorou. Métrica acionável precisa permitir uma decisão.',
    },
    {
        id: 'q14',
        exams: ['lean', 'caso-startup'],
        question: 'Uma equipe quer testar se as pessoas estão dispostas a PAGAR pela solução. Qual experimento é o mais adequado?',
        options: [
            'Protótipo navegável, medindo se os usuários concluem a tarefa sem ajuda',
            'Pré-venda, medindo pagamentos efetivados',
            'Wizard of Oz, medindo o tempo por atendimento manual',
            'Landing page, medindo o número de visitas recebidas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Cada experimento responde a uma pergunta e cala sobre as outras: protótipo testa compreensão da interface, Wizard of Oz testa a operação, landing page testa demanda — e só a pré-venda testa disposição a pagar.',
        feedbackWrong: 'É a pré-venda. Um protótipo elogiado não valida pagamento; o Wizard of Oz responde sobre a operação; e visitas numa landing page medem interesse, não disposição a pagar. Escolha o experimento a partir da hipótese.',
    },
    {
        id: 'q15',
        exams: ['lean', 'caso-startup'],
        question: 'A TechNova percebeu que a descoberta social gerava mais valor que o fluxo completo de compra e reorganizou o produto em torno dela. Que tipo de pivot é esse?',
        options: [
            'Zoom-out, porque o produto passou a fazer parte de uma solução maior',
            'Pivot de tecnologia, porque a base técnica foi substituída',
            'Zoom-in, porque uma funcionalidade se tornou o produto principal',
            'Pivot de segmento de clientes, porque o público prioritário mudou',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. No zoom-in, uma funcionalidade isolada se revela mais valiosa que o produto inteiro e passa a ser o produto. Pivot não é fracasso aleatório: é mudança estruturada que preserva o aprendizado e altera uma hipótese fundamental.',
        feedbackWrong: 'É um pivot zoom-in: a funcionalidade virou o produto. O zoom-out é o caminho inverso, e nem a tecnologia nem o público mudaram no caso — o que mudou foi o recorte do que se considera o produto.',
    },
    // ------------------------------------------------------ Arquiteturas
    {
        id: 'q16',
        exams: ['caso-startup', 'pitch'],
        question: 'O que diferencia essencialmente uma plataforma de um pipeline?',
        options: [
            'A plataforma opera na nuvem e o pipeline opera em servidores próprios',
            'A plataforma atende consumidores e o pipeline atende empresas',
            'A plataforma cobra assinatura e o pipeline cobra por transação',
            'A plataforma facilita interações entre grupos distintos; o pipeline controla uma cadeia relativamente linear de transformação',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Isso. No pipeline, insumos entram, são transformados e distribuídos. Na plataforma, o principal ativo é a qualidade e a frequência das interações entre os participantes — e é por isso que efeitos de rede aparecem numa e não na outra.',
        feedbackWrong: 'A distinção é sobre como o valor flui: a plataforma intermedeia interações entre grupos, o pipeline transforma insumos numa cadeia linear. Não é sobre infraestrutura, público ou forma de cobrança — uma plataforma pode rodar em servidor próprio e cobrar por transação sem deixar de ser plataforma.',
    },
    {
        id: 'q17',
        exams: ['caso-startup', 'pitch'],
        question: 'O que significa liquidez em um marketplace?',
        options: [
            'A quantidade de caixa disponível para a plataforma honrar repasses aos vendedores',
            'O número total de usuários cadastrados na plataforma',
            'A capacidade de encontrar contraparte adequada em tempo aceitável',
            'A velocidade com que os pagamentos são processados no checkout',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Por isso crescer o número de usuários sem densidade de oferta e demanda piora a experiência: mais gente procurando o que ninguém oferece. É a razão de marketplaces crescerem por cidade ou categoria antes de abrir tudo.',
        feedbackWrong: 'Liquidez é encontrar contraparte adequada em tempo aceitável. Não se refere ao caixa da empresa nem à velocidade do pagamento — e explicitamente não é o total de usuários, já que crescer usuários sem densidade reduz a liquidez percebida.',
    },
    {
        id: 'q18',
        exams: ['caso-startup', 'pitch'],
        question: 'Uma empresa de SaaS cresce 32% ao ano e opera com margem operacional de 6%. Qual é a Rule of 40 e como interpretá-la?',
        options: [
            '38 — abaixo do limiar de referência, embora perto dele',
            '26 — a margem deve ser subtraída do crescimento',
            '40 — o resultado é sempre o próprio limiar da heurística',
            '192 — crescimento e margem devem ser multiplicados',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso. Rule of 40 = crescimento percentual anual + margem operacional percentual = 32 + 6 = 38. Fica logo abaixo do limiar de 40. Vale lembrar que é heurística, não lei: estágio e mercado importam, e empresas muito jovens raramente atingem o número.',
        feedbackWrong: 'São 38: a regra soma crescimento e margem, ou seja, 32 + 6. Subtrair daria 26 e multiplicar daria 192 — nenhuma das duas operações corresponde à heurística. E 40 é o limiar de comparação, não o resultado.',
    },
    // ----------------------------------------------------- Unit Economics
    {
        id: 'q19',
        exams: ['pitch'],
        question: 'Uma startup gastou R$ 90.000 com vendas e marketing no trimestre e conquistou 150 novos clientes. Qual é o CAC e o que deve compor esse gasto?',
        options: [
            'R$ 600, incluindo salários da equipe comercial, comissões, mídia, ferramentas e eventos',
            'R$ 600, considerando apenas o investimento em mídia paga, já que salários são custo fixo',
            'R$ 450, descontando antes os clientes que chegaram por indicação espontânea',
            'R$ 150, porque o CAC divide o número de clientes pelo gasto do período',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Exato. CAC = 90.000 ÷ 150 = R$ 600. E o numerador inclui salários, comissões, mídia, ferramentas, eventos e demais custos diretamente relacionados à aquisição — limitar a conta à mídia paga subestima o CAC de forma sistemática.',
        feedbackWrong: 'O CAC é R$ 600 (90.000 ÷ 150), com o gasto incluindo salários, comissões, mídia, ferramentas e eventos. Considerar só a mídia produz o mesmo número neste caso, mas pela razão errada; e R$ 150 inverte a divisão.',
    },
    {
        id: 'q20',
        exams: ['pitch'],
        question: 'Calcule o LTV simplificado de um cliente com ARPU mensal de R$ 200, margem bruta de 75% e churn mensal de 5%.',
        options: ['R$ 3.000', 'R$ 4.000', 'R$ 150', 'R$ 7,50'],
        correctIndex: 0,
        feedbackCorrect: 'Correto. LTV = ARPU × margem bruta ÷ churn = 200 × 0,75 ÷ 0,05 = 150 ÷ 0,05 = R$ 3.000. Note que a margem entra antes da divisão pelo churn.',
        feedbackWrong: 'São R$ 3.000. Calcule 200 × 0,75 = 150 e depois 150 ÷ 0,05 = 3.000. O valor R$ 4.000 esquece a margem bruta (200 ÷ 0,05); R$ 150 para na margem; e R$ 7,50 multiplica pelo churn em vez de dividir.',
    },
    {
        id: 'q21',
        exams: ['pitch'],
        question: 'Uma startup gasta R$ 60.000 em vendas e marketing e conquista 100 clientes. O ARPU mensal é R$ 150, a margem bruta é 80% e o churn mensal é 4%. Qual é a relação LTV/CAC?',
        options: ['3,0', '5,0', '6,25', '0,2'],
        correctIndex: 1,
        feedbackCorrect: 'Exato. CAC = 60.000 ÷ 100 = R$ 600. LTV = 150 × 0,80 ÷ 0,04 = 120 ÷ 0,04 = R$ 3.000. Logo LTV/CAC = 3.000 ÷ 600 = 5. Está acima da referência de 3:1 — mas antes de comemorar, verifique concentração, maturidade das coortes e se o churn seguirá em 4%.',
        feedbackWrong: 'A resposta é 5,0. Se você chegou a 6,25, esqueceu de aplicar a margem bruta (150 ÷ 0,04 = 3.750). Se marcou 0,2, inverteu a razão e calculou CAC/LTV. E 3,0 é o benchmark de referência, não o resultado deste cenário.',
    },
    {
        id: 'q22',
        exams: ['pitch'],
        question: 'No mesmo cenário — CAC de R$ 600, ARPU mensal de R$ 150 e margem bruta de 80% —, qual é o payback do CAC?',
        options: [
            '5 meses, abaixo dos 12 meses tratados como faixa confortável em SaaS',
            '4 meses, porque o payback divide o CAC pelo ARPU cheio',
            '20 meses, o que aumenta a necessidade de caixa e o risco',
            '0,2 mês, porque o payback divide a margem mensal pelo CAC',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso. A margem de contribuição mensal por cliente é 150 × 0,80 = R$ 120, então payback = 600 ÷ 120 = 5 meses. Abaixo de 12 meses é geralmente confortável em SaaS; acima de 18 meses o caixa começa a apertar.',
        feedbackWrong: 'São 5 meses: payback = CAC ÷ margem de contribuição mensal = 600 ÷ (150 × 0,80) = 600 ÷ 120. Quem marcou 4 meses usou o ARPU cheio e ignorou a margem; 20 meses aplicou 20% em vez de 80%; e 0,2 inverteu a divisão.',
    },
    {
        id: 'q23',
        exams: ['pitch'],
        question: 'Uma empresa começou o período com R$ 100 mil de receita recorrente na base. Perdeu R$ 8 mil por cancelamento, R$ 2 mil por contração de planos e ganhou R$ 15 mil por expansão. Qual é o NRR e o que ele indica?',
        options: [
            '90% — a base encolheu, porque expansão não entra no cálculo do NRR',
            '107% — churn e contração são o mesmo item e só devem ser descontados uma vez',
            '105% — a expansão superou churn e contração, então a base cresceu sem clientes novos',
            '125% — todas as movimentações do período somam-se à receita inicial',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. NRR = (100 − 8 − 2 + 15) ÷ 100 × 100 = 105 ÷ 100 × 100 = 105%. Acima de 100% significa churn líquido de receita negativo: a base cresce sozinha. Isso não elimina a necessidade de novos clientes — demonstra a força econômica da base já conquistada.',
        feedbackWrong: 'O NRR é 105%. A fórmula é (receita inicial − churn − contração + expansão) ÷ receita inicial × 100 = (100 − 8 − 2 + 15) ÷ 100 × 100. Quem marcou 90% ignorou a expansão; 107% esqueceu a contração; 125% somou as perdas como se fossem ganhos.',
    },
    // ------------------------------------------------------ Financiamento
    {
        id: 'q24',
        exams: ['financiamento'],
        question: 'Por que venture capital pode ser inadequado até para uma empresa lucrativa?',
        options: [
            'Porque fundos de VC só investem em empresas que ainda não faturam',
            'Porque o fundo precisa de escala e de um evento de liquidez no seu horizonte, o que um crescimento moderado não entrega',
            'Porque a legislação brasileira impede aporte de VC em empresas com lucro',
            'Porque empresas lucrativas não podem emitir novas quotas ou ações',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Um fundo depende de poucos investimentos devolvendo muitas vezes o capital, porque a maioria não devolve nada. Isso exige potencial de escala compatível com o tamanho do fundo e uma saída — venda ou abertura de capital — num prazo determinado.',
        feedbackWrong: 'A resposta é a segunda. Não há impedimento legal nem exigência de prejuízo. Uma empresa lucrativa, estável e de crescimento moderado é um ótimo negócio e um péssimo ativo de VC: não entrega o múltiplo esperado nem a saída no prazo do fundo.',
    },
    {
        id: 'q25',
        exams: ['financiamento'],
        question: 'Dois sócios detêm 100% de uma empresa avaliada em R$ 1.000.000. Um investidor aporta R$ 250.000 por 20% do capital. O que acontece com a participação e com o valor da fatia de cada sócio?',
        options: [
            'Cada sócio cai de 50% para 40%, e o valor da sua fatia permanece em R$ 500.000',
            'Cada sócio cai de 50% para 40%, e o valor da sua fatia cai para R$ 400.000',
            'Cada sócio mantém 50%, porque o aporte cria quotas novas sem afetar as antigas',
            'Cada sócio cai de 50% para 30%, porque a diluição recai integralmente sobre os fundadores',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. Com R$ 250.000 valendo 20%, a empresa passa a valer R$ 1.250.000. Cada sócio vai de 50% para 40%, mas 40% de 1.250.000 são os mesmos R$ 500.000 de antes. No momento do aporte empata-se: o ganho só existe se o capital fizer a empresa valer mais que R$ 1,25 milhão.',
        feedbackWrong: 'A primeira. Os 20% cedidos vêm dos 100% dos sócios, então cada um vai de 50% para 40%. Em valor, porém, 40% de R$ 1.250.000 equivalem a R$ 500.000 — o mesmo de antes. Diluir não destrói valor por si só; é racional quando o capital faz a empresa crescer além do novo valuation.',
    },
    {
        id: 'q26',
        exams: ['financiamento'],
        question: 'Qual modalidade de crowdfunding entrega participação societária ao apoiador e exige conformidade com as regras da CVM?',
        options: [
            'Crowdfunding de recompensa',
            'Crowdfunding de dívida ou P2P',
            'Pré-venda de produto',
            'Equity crowdfunding',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Isso. No equity crowdfunding o apoiador vira sócio, o que traz obrigações regulatórias e cria um número grande de investidores no cap table. Recompensa e pré-venda entregam produto ou benefício; dívida e P2P entregam devolução com juros.',
        feedbackWrong: 'É o equity crowdfunding. A recompensa e a pré-venda entregam produto, experiência ou benefício; a modalidade de dívida ou P2P empresta recursos com expectativa de pagamento e juros. Só a modalidade de participação envolve a CVM.',
    },
    // ------------------------------------------------------ Plano e Pitch
    {
        id: 'q27',
        exams: ['pitch'],
        question: 'Uma operação tem custos fixos mensais de R$ 50.000 e margem de contribuição de 40%. Qual é o ponto de equilíbrio?',
        options: ['R$ 20.000', 'R$ 50.000', 'R$ 83.333', 'R$ 125.000'],
        correctIndex: 3,
        feedbackCorrect: 'Exato. Ponto de equilíbrio = custos fixos ÷ margem de contribuição percentual = 50.000 ÷ 0,40 = R$ 125.000 de receita. Abaixo disso a operação consome caixa; acima, cada real adicional contribui com 40 centavos para o lucro.',
        feedbackWrong: 'São R$ 125.000: divide-se 50.000 por 0,40. O valor R$ 20.000 multiplica em vez de dividir; R$ 83.333 divide por 0,60, que é a parcela de custo variável e não a margem; e R$ 50.000 apenas repete os custos fixos.',
    },
    {
        id: 'q28',
        exams: ['pitch'],
        question: 'Por que uma estimativa bottom-up de mercado é mais defensável do que aplicar um percentual sobre um relatório amplo?',
        options: [
            'Porque parte de número de clientes potenciais, preço e capacidade de aquisição, tornando cada premissa verificável',
            'Porque resulta sempre em números maiores, o que impressiona mais o investidor',
            'Porque dispensa qualquer pesquisa de mercado prévia',
            'Porque é exigida por lei em planos de negócio apresentados a investidores',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Correto. "Vamos capturar 1% de um mercado de bilhões" não é uma estimativa: é um desejo com aparência de conta. O bottom-up expõe cada premissa — quantos clientes, a que preço, com que capacidade de implantação — e por isso pode ser discutido.',
        feedbackWrong: 'A primeira. O bottom-up costuma produzir números menores, não maiores, e exige mais pesquisa, não menos. Sua vantagem é que cada premissa fica explícita e verificável, em vez de escondida atrás de um percentual arbitrário.',
    },
    // --------------------------------------------------------- Contextos
    {
        id: 'q29',
        question: 'Segundo o GEM 2024, 96,2% dos empreendedores iniciais usavam tecnologias digitais ou aplicativos para vender. O que esse número permite — e não permite — concluir?',
        options: [
            'Permite concluir que o empreendedorismo brasileiro se tornou altamente inovador',
            'Permite concluir que a digitalização virou infraestrutura básica, mas não prova transformação de modelo, produtividade nem vantagem competitiva',
            'Permite concluir que a maioria dos negócios brasileiros já atua em mercados internacionais',
            'Não permite concluir nada, por se tratar de uma amostra não representativa',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Usar aplicativo para vender é adotar uma ferramenta, não redesenhar um modelo de negócio. O próprio relatório reforça o ponto: cerca de 800 mil novos negócios indicaram inovação ou clientes nacionais e apenas cerca de 130 mil, alcance internacional.',
        feedbackWrong: 'A segunda. Alta digitalização não implica alta inovação nem internacionalização — o próprio GEM mostra que só uma pequena parcela apresentou impacto nacional ou internacional. Confundir adoção de ferramenta com transformação de modelo é o erro clássico aqui.',
    },
    {
        id: 'q30',
        question: 'Na avaliação de impacto de uma solução como o FilaZero, o que distingue output, outcome e impacto?',
        options: [
            'Output é o lucro do período; outcome é a receita recorrente; impacto é o valuation da empresa',
            'Os três são sinônimos, usados conforme a preferência do avaliador',
            'Output é o impacto de longo prazo; outcome é a entrega imediata; impacto é a atividade executada',
            'Output é o número de atendimentos agendados; outcome é a redução consistente da espera e das faltas; impacto é a melhoria de acesso à atenção básica',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. A teoria da mudança encadeia recursos e atividades em resultados imediatos, intermediários e impacto de longo prazo. Indicadores precisam distinguir entrega de transformação: número de atendimentos é entrega, melhoria de acesso é transformação.',
        feedbackWrong: 'Output é a entrega direta, outcome é a mudança de comportamento ou condição, e impacto é a transformação de longo prazo. As alternativas restantes invertem essa ordem ou trocam os conceitos por indicadores financeiros, que medem o negócio e não a mudança social.',
    },
    // ------------------------------------------------------------- Casos
    {
        id: 'q31',
        exams: ['caso-startup', 'pitch'],
        question: 'O que torna a Twitch um exemplo de modelo repetível e escalável com efeitos de rede?',
        options: [
            'A empresa produz internamente todo o conteúdo transmitido, garantindo padrão de qualidade',
            'Cada novo criador segue a mesma lógica de transmissão e monetização, e a audiência cresce sem produção centralizada proporcional',
            'A receita vem de uma única fonte, o que simplifica a operação e reduz custos',
            'A plataforma limita o número de criadores para preservar a experiência dos espectadores',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Repetível porque o processo não é reinventado a cada criador; escalável porque o crescimento não exige produção centralizada proporcional. Mais criadores atraem mais espectadores, que atraem mais criadores — e a receita reúne publicidade, assinaturas, doações e Bits.',
        feedbackWrong: 'A segunda. A Twitch não produz o conteúdo, não depende de fonte única de receita e não limita criadores — cada uma dessas escolhas quebraria justamente a escalabilidade e os efeitos de rede que a definem.',
    },
    {
        id: 'q32',
        exams: ['caso-startup', 'pitch'],
        question: 'Ao testar a funcionalidade de agendamento de retirada com divisão aleatória entre controle e tratamento, qual deveria ser a métrica central da TechNova?',
        options: [
            'O número de cliques no botão da nova funcionalidade',
            'O total acumulado de cadastros na plataforma desde o lançamento',
            'A conversão em transações concluídas',
            'O tempo médio de permanência na página de checkout',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Isso. Cliques medem exposição e sobem só por a funcionalidade existir. A conversão em transações concluídas é o comportamento que o negócio precisa — e é comparável entre os dois grupos, que é o que torna o teste A/B conclusivo.',
        feedbackWrong: 'A conversão em transações concluídas. Cliques e tempo de permanência são métricas intermediárias que podem subir sem que nenhuma venda a mais aconteça, e o total acumulado de cadastros é métrica de vaidade: nunca desce.',
    },
];
