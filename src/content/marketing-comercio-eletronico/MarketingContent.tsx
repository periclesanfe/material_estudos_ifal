import { useState } from 'react';
import ExportSubjectActions from '../../components/ui/ExportSubjectActions';
import MarketingSections from './MarketingSections';
import { MARKETING_GUIDE_CONTEXT, MARKETING_SECTIONS, QUIZ_DATA } from './data';

export default function MarketingContent() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div>
      {activeSection === 'intro' && (
        <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
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
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
            Marketing &<br /><span className="gradient-text">Comércio Eletrônico</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
            Conceitos Iniciais · Mix de Marketing · Marketing de Relacionamento · Pesquisa · Segmentação
          </p>
          <ExportSubjectActions
            title="Marketing e Comércio Eletrônico"
            fileName="marketing-comercio-eletronico"
            guideContext={MARKETING_GUIDE_CONTEXT}
            quizData={QUIZ_DATA}
          />
        </div>
      )}

      <div className="page-wrap">
        <nav className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex gap-2 overflow-x-auto whitespace-nowrap">
          {MARKETING_SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`study-pill px-3 py-1.5 inline-flex items-center gap-1.5 ${activeSection === section.id ? 'active' : ''}`}
            >
              {'exam' in section && section.exam && (
                <span className="text-[10px] font-black opacity-75">{section.exam}</span>
              )}
              {section.shortTitle}
            </button>
          ))}
        </nav>
      </div>

      <div className={`page-wrap pb-20 ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}>
        <MarketingSections activeSection={activeSection} />
      </div>
    </div>
  );
}
