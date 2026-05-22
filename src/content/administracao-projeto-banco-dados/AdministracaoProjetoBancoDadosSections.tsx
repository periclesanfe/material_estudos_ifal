import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import ConceptCard from '../../components/ui/ConceptCard';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
    ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS
} from './data';

interface AdministracaoProjetoBancoDadosSectionsProps {
    activeSection: string;
}

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    colorClass: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
    title: string;
    description: string;
    accent: Accent;
}

interface PanelItem {
    title: string;
    description: string;
}

interface StatItem {
    label: string;
    value: string;
    accent: string;
}

const foundations: ConceptItem[] = [
    {
        title: 'Indivíduos',
        description: 'Valores, atitudes, percepção, personalidade, motivação e diferenças individuais explicam como cada pessoa interpreta e reage ao trabalho.',
        accent: 'accent',
    },
    {
        title: 'Grupos',
        description: 'Papéis, normas, status, coesividade, diversidade e comunicação moldam a forma como pessoas trabalham em conjunto.',
        accent: 'accent3',
    },
    {
        title: 'Estrutura',
        description: 'Processos, desenho do trabalho, liderança, recompensas e regras organizacionais influenciam o comportamento cotidiano.',
        accent: 'accent5',
    },
];

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
    return (
        <div className="space-y-2">
            <h2 className={`section-title ${colorClass}`}>{title}</h2>
            <p className="section-subtitle max-w-3xl">{subtitle}</p>
        </div>
    );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
    return (
        <div className={`grid grid-cols-1 ${columns} gap-4`}>
            {items.map(item => (
                <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
            ))}
        </div>
    );
}

function PanelList({ items }: { items: PanelItem[] }) {
    return (
        <div className="space-y-3">
            {items.map(item => (
                <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
                    <h3 className="font-semibold text-sm md:text-base text-text mb-0.5">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

function StatStrip({ items }: { items: StatItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {items.map(item => (
                <div key={item.label} className="bg-card border border-border rounded-xl px-5 py-5 text-center">
                    <p className={`font-display font-black text-2xl ${item.accent}`}>{item.label}</p>
                    <p className="text-text-muted text-sm">{item.value}</p>
                </div>
            ))}
        </div>
    );
}

function IntroSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="O que é Comportamento Organizacional?" subtitle="Campo de estudo para entender, prever e melhorar o comportamento humano nas organizações" colorClass="text-accent" />
            <HighlightBox title="Definição central">
                <p>
                    Comportamento Organizacional é o campo que investiga o impacto que <strong>indivíduos</strong>, <strong>grupos</strong> e <strong>estruturas</strong> exercem no comportamento dentro das organizações, com a finalidade de aplicar esse conhecimento na melhoria da eficácia organizacional.
                </p>
            </HighlightBox>

            <ConceptGrid items={foundations} columns="md:grid-cols-3" />

            <HighlightBox title="O comportamento não é aleatório" accent="var(--color-accent3)">
                <p>
                    O material diferencia a gestão baseada em <strong>evidências científicas</strong>, relações de causa e efeito e estudo sistemático de decisões guiadas por intuição, pressentimento ou achismo.
                </p>
            </HighlightBox>

            <div>
                <h3 className="font-display font-bold text-xl text-accent2 mb-3">Ciências comportamentais que apoiam o CO</h3>
                <PanelList items={behavioralSciences} />
            </div>
        </section>
    );
}


export default function ComportamentoOrganizacionalSections({ activeSection }: ComportamentoOrganizacionalSectionsProps) {
    switch (activeSection) {
        case 'intro':
            return <IntroSection />;
        default:
            return null;
    }
}
