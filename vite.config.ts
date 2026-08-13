import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/material_estudos_ifal/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    // O chunk da /trilha é grande porque É dado: 597 conceitos, 828 dependências
    // e a citação verbatim que prova cada uma. Ele já sai em carregamento tardio,
    // então só quem abre a trilha paga, e são 224 kB comprimidos.
    //
    // OTIMIZAÇÃO CONHECIDA E NÃO FEITA: 90% do peso é prosa que só aparece no
    // painel de detalhe, quando o leitor clica num conceito (descricao 195 kB,
    // razao 99 kB, trecho 86 kB, evidencia 84 kB). O grafo em si precisa de uns
    // 60 kB: id, matéria, período, ordem, centralidade, nome e as pontas das
    // arestas. Separar o esqueleto do detalhe, carregando o segundo na primeira
    // seleção, cortaria o payload inicial em torno de 90%. Fica registrado como
    // próximo passo em vez de escondido atrás de um teto de aviso.
    chunkSizeWarningLimit: 900,
  },
}))
