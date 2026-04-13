import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className="main-surface flex-1 overflow-y-auto min-h-screen pt-14 lg:pt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/materia/:slug" element={<SubjectPage />} />
          <Route path="/configuracoes" element={<SettingsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
