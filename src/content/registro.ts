import type { ComponentType } from 'react';

/**
 * Importadores do conteúdo de cada matéria, por slug.
 *
 * Existe separado de `SubjectPage` porque o mesmo importador serve a DOIS
 * consumidores: o `lazy()` que monta o componente no clique, e o prefetch que
 * aquece o chunk no hover do link. Deixar o importador embutido na chamada de
 * `lazy()` tornava o segundo uso impossível.
 *
 * Cada valor é uma função, e não uma promessa: promessa dispararia o download na
 * avaliação do módulo, o que anularia o carregamento tardio.
 */
export type ImportadorConteudo = () => Promise<{ default: ComponentType }>;

export const importadoresConteudo: Record<string, ImportadorConteudo> = {
  'administracao-projeto-banco-dados': () =>
    import('./administracao-projeto-banco-dados/AdministracaoProjetoBancoDadosContent'),
  'algoritmos-logica-programacao': () => import('./algoritmos-logica-programacao/ALPGContent'),
  'comportamento-organizacional': () => import('./comportamento-organizacional/ComportamentoOrganizacionalContent'),
  'educacao-financeira': () => import('./educacao-financeira/EdfiContent'),
  'empreendedorismo-digital': () => import('./empreendedorismo-digital/EmpdContent'),
  'estrutura-dados': () => import('./estrutura-dados/EstruturaDadosContent'),
  'etica-sociedade': () => import('./etica-sociedade/EtsoContent'),
  'fundamentos-banco-dados': () => import('./fundamentos-banco-dados/FdbdContent'),
  'fundamentos-redes-computadores': () => import('./fundamentos-redes-computadores/FrdcContent'),
  'fundamentos-si': () => import('./fundamentos-si/FundamentosSIContent'),
  'introducao-tecnologias-web': () => import('./introducao-tecnologias-web/IntwContent'),
  'linguagem-programacao': () => import('./linguagem-programacao/LPGMContent'),
  'logica-matematica-discreta': () => import('./logica-matematica-discreta/LmmdContent'),
  'marketing-comercio-eletronico': () => import('./marketing-comercio-eletronico/MarketingContent'),
  'metodologia-cientifica': () => import('./metodologia-cientifica/MetodologiaCientificaContent'),
  'processos-desenvolvimento-software': () =>
    import('./processos-desenvolvimento-software/ProcessosDesenvolvimentoSoftwareContent'),
  'programacao-orientada-objetos': () => import('./programacao-orientada-objetos/PoobContent'),
  'projeto-infraestrutura': () => import('./projeto-infraestrutura/InfrContent'),
  'topicos-avancados-banco-dados': () => import('./topicos-avancados-banco-dados/TABDContent'),
};

/** Diz se a matéria tem conteúdo carregável, sem disparar o download. */
export function temConteudoCarregavel(slug: string): boolean {
  return slug in importadoresConteudo;
}
