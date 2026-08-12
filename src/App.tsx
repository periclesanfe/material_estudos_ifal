import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import OptativesPage from './pages/OptativesPage';
import SubjectPage from './pages/SubjectPage';
import SettingsPage from './pages/SettingsPage';
import UpdatesPage from './pages/UpdatesPage';

/**
 * A trilha carrega o dataset da taxonomia, que passa de meio megabyte de JSON.
 * Fica em carregamento tardio para que quem só abre a home não pague por ele,
 * no mesmo padrão do conteúdo das matérias em SubjectPage.
 */
const TrilhaPage = lazy(() => import('./pages/TrilhaPage'));

function TrilhaFallback() {
  return (
    <div className="page-wrap py-10 md:py-12 animate-fade-in">
      <section className="study-surface px-6 py-12 md:px-10 md:py-14 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
        <p className="mt-4 text-sm text-text-muted">Montando o grafo do curso…</p>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Sidebar />
      <main id="conteudo" tabIndex={-1} className="main-surface flex-1 overflow-y-auto min-h-screen pt-14 lg:pt-0">
        <Routes>
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
      </main>
    </BrowserRouter>
  );
}
