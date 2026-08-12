import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/material_estudos_ifal/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    // O chunk da /trilha é grande porque É dado: o JSON da taxonomia com 420
    // conceitos, 608 dependências e a citação verbatim que prova cada uma. Ele
    // já sai em carregamento tardio, então só quem abre a trilha paga, e são
    // 145 kB comprimidos. O aviso padrão de 500 kB só geraria ruído no build.
    chunkSizeWarningLimit: 700,
  },
}))
