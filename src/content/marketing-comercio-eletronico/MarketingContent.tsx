import { useState } from 'react';
import MarketingSections from './MarketingSections';
import { MARKETING_SECTIONS } from './data';

export default function MarketingContent() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div>
      <div className="relative min-h-[52vh] flex flex-col items-center justify-center text-center px-6 py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 35%, rgba(108,99,255,0.15) 0%, transparent 48%), radial-gradient(circle at 70% 60%, rgba(255,107,107,0.1) 0%, transparent 42%)',
            }}
          />
        </div>

        <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">Optativa · Gestão de TI · 80h</p>
        <h1 className="font-display font-black text-4xl md:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
          Marketing &<br /><span className="gradient-text">Comércio Eletrônico</span>
        </h1>
        <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
          Conceitos Iniciais · Mix de Marketing · Marketing de Relacionamento · Pesquisa · Segmentação
        </p>
      </div>

      <div className="page-wrap">
        <nav className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-2.5 flex gap-1.5 overflow-x-auto whitespace-nowrap">
          {MARKETING_SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`study-pill px-3 py-1.5 ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.shortTitle}
            </button>
          ))}
        </nav>
      </div>

      <div className="page-wrap pt-8 md:pt-10 pb-20">
        <MarketingSections activeSection={activeSection} />
      </div>
    </div>
  );
}
