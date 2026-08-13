import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   PREFETCH DA ROTA NO HOVER E NO FOCO

   O que este hook resolve. O projeto já divide o código certo: a /trilha e os dez
   conteúdos de matéria saem em chunks próprios (SubjectPage e App), e quem só
   abre a home não paga por eles. Só que o `import()` do lazy dispara no CLIQUE,
   e o clique é tarde: o usuário fica olhando o fallback enquanto a rede busca um
   arquivo que já podia estar em memória. O hover é o sinal de intenção mais
   barato que existe, e ele chega em média um segundo antes do clique.

   Como funciona. `lazy(() => import('./X'))` guarda a promessa do módulo. Chamar
   `import('./X')` de novo não baixa nada duas vezes: o registro de módulos do
   navegador (e o do Vite em desenvolvimento) devolve a MESMA promessa. Então
   aquecer no hover e depois clicar faz o Suspense resolver no primeiro quadro, e
   o fallback nunca aparece. Nada aqui monta ou renderiza o componente: baixa e
   avalia o módulo, e para.

   Por que não `<link rel="modulepreload">`. Precisaria da URL do chunk com hash,
   que só existe depois do build; em desenvolvimento nem existe. Chamar a função
   de importação é agnóstico de bundler e usa o mesmo caminho de código que o
   clique vai usar.

   Limites que este hook NÃO resolve, e é melhor deixar escrito:
   - aquece código, não dado. Se a página buscar da rede ao montar, essa espera
     continua inteira, e é ela que o esqueleto cobre.
   - importação em vôo não cancela. Sair do link antes de terminar só evita o que
     ainda não começou.
   - falha não é cacheada. Chunk que falhou (deploy no meio da sessão, rede caindo)
     sai do registro para o clique poder tentar de novo.
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Espera antes de aquecer, contada do hover.
 *
 * A sidebar deste projeto lista as 40 e tantas matérias do curso. Sem esta
 * espera, atravessar a lista com o mouse dispararia uma importação por link que
 * o ponteiro roçou, ou seja, o download de meio site para chegar num link só.
 * 80 ms separa "passei por cima" de "estou indo aqui", e continua muito abaixo do
 * intervalo entre parar o mouse e clicar.
 */
export const ATRASO_INTENCAO_MS = 80;

type Importador = () => Promise<unknown>;

export type EstadoPrefetch = 'ocioso' | 'aquecendo' | 'pronto' | 'falhou';

/**
 * Registro do que já foi aquecido nesta sessão, por rota.
 *
 * Vive no módulo e não no componente porque o cache é do aplicativo, não do
 * link: a mesma matéria aparece na sidebar e no catálogo, e aquecer duas vezes
 * seria trabalho jogado fora. Guarda a promessa, então quem chegar no meio do
 * caminho espera a mesma.
 */
const aquecidos = new Map<string, Promise<unknown>>();

/** Handlers prontos para espalhar num Link, NavLink ou âncora. */
export interface AtributosPrefetch {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onTouchStart: () => void;
}

export interface PrefetchRota {
  /** Espalhe no elemento: `<Link {...prefetch.atributos}>`. */
  atributos: AtributosPrefetch;
  estado: EstadoPrefetch;
  /** Dispara na hora, sem esperar intenção. Para uso programático. */
  aquecer: () => void;
}

interface NavegadorComRede extends Navigator {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

/**
 * Diz se é melhor não gastar a rede do usuário adiantado.
 *
 * Prefetch é aposta: baixa algo que ninguém pediu ainda. Em plano limitado ou em
 * 2G a aposta é ruim, porque a banda que o palpite consome é a mesma que a página
 * atual precisa. Com Save-Data ligado o usuário já disse isso em voz alta.
 *
 * A API de informação de rede não está no lib.dom padrão e não existe no Safari,
 * por isso o acesso é narrado e opcional: onde não existe, o palpite segue.
 */
function deveEconomizar(): boolean {
  if (typeof navigator === 'undefined') return true;

  const rede = (navigator as NavegadorComRede).connection;
  if (!rede) return false;
  if (rede.saveData) return true;

  return rede.effectiveType === 'slow-2g' || rede.effectiveType === '2g';
}

/**
 * Aquece o chunk de uma rota quando o usuário mostra intenção de ir nela.
 *
 * ```tsx
 * const prefetch = usePrefetchRota('/trilha', () => import('../pages/TrilhaPage'));
 * return <Link to="/trilha" {...prefetch.atributos}>Trilha</Link>;
 * ```
 *
 * `onFocus` está junto com `onMouseEnter` de propósito: quem navega por Tab tem o
 * mesmo direito ao carregamento adiantado, e o foco é o hover do teclado. No
 * toque, `onTouchStart` dispara sem esperar intenção, porque o dedo já encostou e
 * o clique vem uns 100 ms depois: a espera de intenção só desperdiçaria a janela.
 *
 * @param rota  Chave do registro de aquecidos. Use o caminho da rota.
 * @param carregar  A MESMA função de importação que o `lazy()` usa.
 */
export function usePrefetchRota(
  rota: string,
  carregar: Importador,
  opcoes: { atraso?: number } = {},
): PrefetchRota {
  const { atraso = ATRASO_INTENCAO_MS } = opcoes;
  const [estado, setEstado] = useState<EstadoPrefetch>(aquecidos.has(rota) ? 'pronto' : 'ocioso');
  const temporizadorRef = useRef<number | null>(null);
  const montadoRef = useRef(true);

  useEffect(() => {
    montadoRef.current = true;

    return () => {
      montadoRef.current = false;
      if (temporizadorRef.current !== null) {
        window.clearTimeout(temporizadorRef.current);
        temporizadorRef.current = null;
      }
    };
  }, []);

  const aquecer = () => {
    const jaAquecido = aquecidos.get(rota);
    if (jaAquecido) {
      if (montadoRef.current) setEstado('pronto');
      return;
    }

    if (deveEconomizar()) return;

    if (montadoRef.current) setEstado('aquecendo');

    const promessa = carregar().then(
      modulo => {
        if (montadoRef.current) setEstado('pronto');
        return modulo;
      },
      erro => {
        // Falha sai do registro: o clique tem que poder tentar de novo. Chunk
        // sumido depois de um deploy no meio da sessão é o caso comum.
        aquecidos.delete(rota);
        if (montadoRef.current) setEstado('falhou');
        throw erro;
      },
    );

    // A rejeição já é tratada acima; este catch existe só para a promessa
    // guardada no registro não virar unhandled rejection no console.
    promessa.catch(() => {});
    aquecidos.set(rota, promessa);
  };

  const agendar = () => {
    if (aquecidos.has(rota) || temporizadorRef.current !== null) return;
    temporizadorRef.current = window.setTimeout(() => {
      temporizadorRef.current = null;
      aquecer();
    }, atraso);
  };

  const cancelar = () => {
    if (temporizadorRef.current === null) return;
    window.clearTimeout(temporizadorRef.current);
    temporizadorRef.current = null;
  };

  return {
    atributos: {
      onMouseEnter: agendar,
      onMouseLeave: cancelar,
      onFocus: agendar,
      onBlur: cancelar,
      onTouchStart: aquecer,
    },
    estado,
    aquecer,
  };
}
