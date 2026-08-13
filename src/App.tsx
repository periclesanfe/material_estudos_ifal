import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import AppSidebar from './components/layout/AppSidebar';
import TopBar from './components/layout/TopBar';
import { ThemeProvider } from './contexts/ThemeProvider';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import OptativesPage from './pages/OptativesPage';
import SubjectPage from './pages/SubjectPage';
import SettingsPage from './pages/SettingsPage';
import UpdatesPage from './pages/UpdatesPage';
import { useMovimentoReduzido } from './hooks/useMovimentoReduzido';
import { pagina } from './lib/movimento';

/**
 * A trilha carrega o dataset da taxonomia, que passa de meio megabyte de JSON.
 * Fica em carregamento tardio para que quem só abre a home não pague por ele,
 * no mesmo padrão do conteúdo das matérias em SubjectPage.
 */
const TrilhaPage = lazy(() => import('./pages/TrilhaPage'));

function TrilhaFallback() {
  return (
    <div className="page-wrap py-10 md:py-12">
      <p className="font-mono text-meta uppercase tracking-[0.16em] text-text-muted">
        montando o grafo do curso
      </p>
    </div>
  );
}

/**
 * Troca de rota com animação de entrada e saída.
 *
 * A chave do AnimatePresence é o pathname, então o React desmonta a página velha
 * só depois da animação de saída. `mode="wait"` evita as duas páginas ocupando o
 * fluxo ao mesmo tempo, que provocava um salto de rolagem na troca.
 */
function RotasAnimadas() {
  const local = useLocation();
  const reduzido = useMovimentoReduzido();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={local.pathname}
        variants={pagina}
        initial={reduzido ? false : 'inicio'}
        animate="visivel"
        exit={reduzido ? undefined : 'saida'}
      >
        <Routes location={local}>
          <Route path="/" element={<HomePage />} />
          <Route path="/materia/:slug" element={<SubjectPage />} />
          <Route path="/optativas" element={<OptativesPage />} />
          <Route
            path="/trilha"
            element={
              <Suspense fallback={<TrilhaFallback />}>
                <TrilhaPage />
              </Suspense>
            }
          />
          <Route path="/configuracoes" element={<SettingsPage />} />
          <Route path="/atualizacoes" element={<UpdatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <TopBar />
            <main id="conteudo" tabIndex={-1} className="main-surface min-w-0 flex-1">
              <RotasAnimadas />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
