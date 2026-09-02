import { useState } from 'react';
import SectionNav from '../../components/layout/SectionNav.tsx';
import EmentaPPC from '../../components/ui/EmentaPPC';
import AtalhoTrilha from '../../components/trilha/AtalhoTrilha';
import AdministracaoProjetoBancoDadosSections from './AdministracaoProjetoBancoDadosSections.tsx';
import { ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS } from './data.ts';

export default function AdministracaoProjetoBancoDadosContent() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div>
      {activeSection === 'intro' && (
        <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-65">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(99, 102, 241, 0.13), transparent 38%), linear-gradient(215deg, rgba(59, 130, 246, 0.1), transparent 42%)',
              }}
            />
          </div>

          <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
            4º período · 80h · APBD
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
            Administração e<br /><span className="gradient-text">Projeto de Banco de Dados</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
            Introdução · Modelagem de Dados · Armazenamento · Segurança · Arquitetura · PL/SQL
          </p>
        </div>
      )}
      {activeSection === 'intro' && <EmentaPPC codigo="APBD" />}
      {activeSection === 'intro' && <AtalhoTrilha codigo="APBD" />}

      <div className="page-wrap flex">
        <SectionNav
          sections={ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS}
          activeSection={activeSection}
          onSelect={setActiveSection}
        />
      </div>

      <div className={`page-wrap pb-20 ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}>
        <AdministracaoProjetoBancoDadosSections activeSection={activeSection} />
      </div>
    </div>
  );
}
