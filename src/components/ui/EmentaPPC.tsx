import { getEmentaPPC, type ReferenciaPPC, type TipoLink } from '../../data/ppc';

interface Props {
  /** Código da matéria, o mesmo de curriculum.ts. */
  codigo: string;
}

const ROTULO_PERIODO = (periodo: number | 'optativa') =>
  periodo === 'optativa' ? 'Optativa' : `${periodo}º período`;

/**
 * Como cada tipo de destino se anuncia.
 *
 * O rótulo existe porque as quatro coisas são diferentes para quem clica: um
 * PDF aberto, um livro que só abre com o login do SIGAA, uma ficha de catálogo
 * sem o texto, e uma página de compra. Sem dizer qual é, todo link parece
 * prometer o texto completo.
 */
const TIPOS: Record<TipoLink, { rotulo: string; titulo: string }> = {
  livre: { rotulo: 'texto livre', titulo: 'Texto completo, acesso aberto' },
  institucional: {
    rotulo: 'biblioteca IFAL',
    titulo: 'Disponível na Biblioteca Virtual do IFAL — exige login do SIGAA',
  },
  catalogo: { rotulo: 'catálogo', titulo: 'Ficha da obra; não abre o texto completo' },
  compra: { rotulo: 'onde comprar', titulo: 'Página de compra da obra' },
};

/**
 * Texto da referência com a URL impressa pelo PPC destacada, mas sem virar link.
 *
 * A URL que aparece no meio da referência NÃO é clicável de propósito: várias
 * vêm corrompidas pela extração do PDF (hífen de quebra de linha comido,
 * espaços injetados, sufixo "[Links]") e três dos domínios morreram ou hoje
 * redirecionam para outro site. O link confiável é o do rodapé do item, que
 * saiu de `links_bibliografia.json` e foi conferido um por um.
 */
function textoDaReferencia(texto: string) {
  return texto.split(/(https?:\/\/[^\s]*[^\s.,;:)\]])/g).map((pedaco, i) =>
    /^https?:\/\//.test(pedaco) ? (
      <span key={i} className="break-all font-mono text-[11.5px] text-text-muted/70">
        {pedaco}
      </span>
    ) : (
      pedaco
    ),
  );
}

/** Uma das duas listas de bibliografia da ficha. Some quando está vazia. */
function ListaReferencias({ titulo, referencias }: { titulo: string; referencias: ReferenciaPPC[] }) {
  if (!referencias.length) return null;

  return (
    <div className="mt-3 first:mt-0">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted/80">{titulo}</p>
      <ul className="space-y-1.5">
        {referencias.map((referencia, i) => {
          const tipo = referencia.url ? TIPOS[referencia.tipoLink ?? 'catalogo'] : null;

          return (
            <li
              // a chave da obra sozinha não serve: o PPC repete a mesma obra
              // dentro de um bloco em algumas fichas
              key={`${referencia.chave}-${i}`}
              className="border-l border-rule pl-3 text-[12.5px] leading-relaxed text-text-muted"
            >
              {textoDaReferencia(referencia.texto)}
              {referencia.url && tipo && (
                <>
                  {' '}
                  <a
                    href={referencia.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={tipo.titulo}
                    // inline-block com padding para o alvo de toque não ficar
                    // do tamanho do texto de 11px
                    className="inline-block whitespace-nowrap py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent underline decoration-dotted underline-offset-2 hover:text-text"
                  >
                    {tipo.rotulo} ↗
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Ementa oficial do PPC, na abertura da matéria.
 *
 * Recolhido por padrão: é referência normativa, não a leitura principal. Uma
 * matéria como FNSI tem 12 unidades e EMPD tem 15, e abrir isso por cima do
 * conteúdo autoral empurraria o guia inteiro para baixo da dobra.
 *
 * Usa <details> nativo em vez de estado no React porque o conteúdo precisa
 * existir no DOM mesmo fechado: é assim que a busca do navegador acha um termo
 * da ementa e abre a seção sozinha. Um accordion com useState não renderiza o
 * texto fechado e perderia isso, além de exigir o trabalho de teclado e ARIA
 * que o <details> já traz de fábrica.
 *
 * Some quando a matéria não tem ficha no ementário, então não precisa de guarda
 * em quem chama.
 */
export default function EmentaPPC({ codigo }: Props) {
  const ementa = getEmentaPPC(codigo);
  if (!ementa) return null;

  const {
    codigoPPC,
    periodo,
    cargaHoraria,
    preRequisito,
    unidades,
    bibliografiaBasica,
    bibliografiaComplementar,
    bibliografiaSemRotulo,
  } = ementa;

  // Uma unidade só significa que a ementa é uma frase corrida (PJSI, TOSI):
  // enumerá-la como lista de um item sugeriria uma estrutura que o PPC não tem.
  const unidadeUnica = unidades.length <= 1;
  const temEmenta = unidades.length > 0 || Boolean(ementa.ementa);
  const totalRefs = bibliografiaBasica.length + bibliografiaComplementar.length;

  return (
    <aside className="page-wrap pt-4">
      <details className="ementa-ppc group rounded-xl border border-border bg-card">
        <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1.5 px-5 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Ementa oficial do PPC</span>

          <span className="font-mono text-[11px] text-text-muted">
            {codigoPPC} · {ROTULO_PERIODO(periodo)} · <span className="tabular-nums">{cargaHoraria}h</span>
            {!unidadeUnica && (
              <>
                {' · '}
                <span className="tabular-nums">{unidades.length}</span> unidades
              </>
            )}
            {totalRefs > 0 && (
              <>
                {' · '}
                <span className="tabular-nums">{totalRefs}</span> {totalRefs === 1 ? 'referência' : 'referências'}
              </>
            )}
          </span>

          <span
            aria-hidden="true"
            className="ml-auto font-mono text-[11px] text-text-muted transition-transform group-open:rotate-90"
          >
            ▸
          </span>
        </summary>

        <div className="border-t border-rule px-5 pb-5 pt-4">
          {preRequisito && (
            <p className="mb-4 text-[13px] leading-relaxed text-text-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted/80">
                Pré-requisito
              </span>
              <br />
              <strong className="text-text">{preRequisito}</strong>
            </p>
          )}

          {/* DEVO é a única matéria cuja ficha traz a bibliografia mas não a ementa */}
          {temEmenta &&
            (unidadeUnica ? (
              <p className="reading-measure text-[13px] leading-relaxed text-text-muted">{ementa.ementa}</p>
            ) : (
              <ol className="space-y-2">
                {unidades.map((unidade, i) => (
                  <li key={unidade} className="flex gap-3 text-[13px] leading-relaxed text-text-muted">
                    <span className="shrink-0 pt-px font-mono text-[11px] tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{unidade}</span>
                  </li>
                ))}
              </ol>
            ))}

          {totalRefs > 0 && (
            <div className={temEmenta ? 'mt-5 border-t border-rule pt-4' : ''}>
              <ListaReferencias
                titulo={bibliografiaSemRotulo ? 'Bibliografia' : 'Bibliografia básica'}
                referencias={bibliografiaBasica}
              />
              <ListaReferencias titulo="Bibliografia complementar" referencias={bibliografiaComplementar} />
            </div>
          )}

          <p className="mt-4 border-t border-rule pt-3 font-mono text-[10px] leading-relaxed text-text-muted/80">
            Transcrito do ementário do PPC do BSI/IFAL. É o que a matéria deve cobrir oficialmente — o conteúdo
            desta página é mais amplo em algumas unidades e reorganiza a ordem.
          </p>
        </div>
      </details>
    </aside>
  );
}
