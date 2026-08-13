import { useEffect, useRef, useState } from 'react';

/**
 * Limiar antes de mostrar esqueleto.
 *
 * O problema que este número resolve é o pisca-pisca: dado que chega em 60 ms
 * ainda assim monta o esqueleto, pinta e desmonta, e o que o olho registra é um
 * lampejo cinza sem significado. Pior que esperar, porque parece defeito.
 *
 * 200 ms é o patamar em que a resposta deixa de ser percebida como imediata.
 * Abaixo disso o certo é NÃO mostrar nada: a tela antiga continua no lugar e a
 * troca parece instantânea. Acima disso o silêncio começa a parecer travamento,
 * e aí o esqueleto passa a informar em vez de atrapalhar.
 */
export const LIMIAR_ESQUELETO_MS = 200;

/**
 * Permanência mínima em tela, contada de quando o esqueleto apareceu.
 *
 * É a segunda metade do pisca-pisca. Sem isso, um dado que chega em 210 ms faz o
 * esqueleto aparecer e sumir em 10 ms, que é exatamente o lampejo que o limiar
 * tentava evitar. Uma vez que o esqueleto apareceu, ele fica o suficiente para
 * ser lido como estado, e não como falha de pintura.
 */
export const MINIMO_ESQUELETO_MS = 320;

interface OpcoesEsqueleto {
  /** Espera antes de mostrar. Padrão: {@link LIMIAR_ESQUELETO_MS}. */
  atraso?: number;
  /** Permanência mínima depois de mostrado. Padrão: {@link MINIMO_ESQUELETO_MS}. */
  minimo?: number;
}

/**
 * Diz se o esqueleto deve estar em tela para um carregamento em andamento.
 *
 * Uso: `const mostrarEsqueleto = useEsqueletoVisivel(carregando)`. Enquanto
 * `false`, renderize o conteúdo antigo ou nada, nunca um espaço reservado.
 *
 * Serve para carregamento cujo booleano você controla (busca de dado, filtro
 * pesado, importação disparada à mão). Para `Suspense`, o React desmonta o
 * fallback no instante em que a promessa resolve, então a permanência mínima não
 * é aplicável de dentro dele: nesse caso use `SkeletonComLimiar`, que aplica só
 * o atraso.
 *
 * O tempo é medido com temporizador e não com animação, porque atraso não é
 * movimento: `prefers-reduced-motion` não tem nada a dizer sobre ele.
 */
export function useEsqueletoVisivel(carregando: boolean, opcoes: OpcoesEsqueleto = {}): boolean {
  const { atraso = LIMIAR_ESQUELETO_MS, minimo = MINIMO_ESQUELETO_MS } = opcoes;
  const [visivel, setVisivel] = useState(false);
  /** Instante em que o esqueleto entrou em tela, para calcular a permanência. */
  const mostradoEmRef = useRef<number | null>(null);

  useEffect(() => {
    if (carregando) {
      const temporizador = window.setTimeout(() => {
        mostradoEmRef.current = Date.now();
        setVisivel(true);
      }, atraso);

      return () => window.clearTimeout(temporizador);
    }

    // O carregamento terminou antes do limiar: o esqueleto nunca apareceu e não
    // vai aparecer agora. Este é o caminho do dado rápido, e ele não pisca.
    if (mostradoEmRef.current === null) return;

    const restante = Math.max(0, minimo - (Date.now() - mostradoEmRef.current));
    const temporizador = window.setTimeout(() => {
      mostradoEmRef.current = null;
      setVisivel(false);
    }, restante);

    return () => window.clearTimeout(temporizador);
  }, [carregando, atraso, minimo]);

  return visivel;
}
