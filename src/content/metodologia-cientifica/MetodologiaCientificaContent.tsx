import { useState } from 'react';
import SectionNav from '../../components/layout/SectionNav';
import AtalhoTrilha from '../../components/trilha/AtalhoTrilha';
import MetodologiaCientificaSections from './MetodologiaCientificaSections';
import { METODOLOGIA_CIENTIFICA_SECTIONS } from './data';

export default function MetodologiaCientificaContent() {
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
                                    'radial-gradient(circle at 28% 35%, rgba(108,99,255,0.14) 0%, transparent 48%), radial-gradient(circle at 72% 62%, rgba(72,187,120,0.10) 0%, transparent 42%)',
                            }}
                        />
                    </div>

                    <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
                        3º período · 80h · METC
                    </p>

                    <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
                        Metodologia<br />
                        <span className="gradient-text">Científica</span>
                    </h1>

                    <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
                        Ciência · Problema · Objetivos · Metodologia · Revisão · Técnicas · Ética
                    </p>
                </div>
            )}
            {activeSection === 'intro' && <AtalhoTrilha codigo="METC" />}

            <div className="page-wrap flex">
                <SectionNav
                    sections={METODOLOGIA_CIENTIFICA_SECTIONS}
                    activeSection={activeSection}
                    onSelect={setActiveSection}
                />
            </div>

            <div
                className={`page-wrap pb-20 ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'
                    }`}
            >
                <MetodologiaCientificaSections activeSection={activeSection} />
            </div>
        </div>
    );
}