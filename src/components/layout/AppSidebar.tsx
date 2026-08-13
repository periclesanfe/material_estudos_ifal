import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPeriods, optativeCategories, getOptativesByCategory, type Subject } from '../../data/curriculum';
import Logo from '../ui/Logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '../ui/sidebar';
import { useSidebar } from '../../contexts/sidebarContext';

function CasaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 10.8 9-7.2 9 7.2M5.5 9.5V20h13V9.5M9.5 20v-6h5v6" />
    </svg>
  );
}

function GrafoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5.5" cy="18" r="2.2" />
      <circle cx="18.5" cy="18" r="2.2" />
      <path strokeLinecap="round" d="M10.6 6.8 6.9 15.9M13.4 6.8l3.7 9.1M7.7 18h8.6" />
    </svg>
  );
}

function SetaIcon({ aberto }: { aberto: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${aberto ? 'rotate-90' : ''}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/** Item de matéria dentro de um submenu. O ponto diz se já tem conteúdo. */
function ItemMateria({ subject, aoNavegar }: { subject: Subject; aoNavegar: () => void }) {
  return (
    <SidebarMenuItem>
      <NavLink
        to={`/materia/${subject.slug}`}
        onClick={aoNavegar}
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] leading-snug transition-colors duration-150 ${
            isActive
              ? 'bg-[color-mix(in_srgb,var(--accent-primary)_14%,transparent)] font-medium text-accent'
              : subject.hasContent
                ? 'text-text-muted hover:bg-card-hover hover:text-text'
                : 'text-text-muted/50 hover:text-text-muted/80'
          }`
        }
      >
        <span className="min-w-0 flex-1 truncate">{subject.name}</span>
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${subject.hasContent ? 'bg-success' : 'bg-border-hover'}`}
        />
      </NavLink>
    </SidebarMenuItem>
  );
}

/**
 * Sidebar da aplicação.
 *
 * Substitui o arquivo de 364 linhas que acumulava tema, modo de leitura,
 * colapso, folha mobile e acordeão numa peça só. Aqui a sidebar só navega: tema
 * e preferências foram para a barra do topo, e o estado de colapso vive no
 * SidebarProvider.
 *
 * Em trilho de ícones os grupos de período viram apenas o ícone da rota
 * principal, porque acordeão de 60 px de largura não é usável: quem quiser
 * navegar por período expande a sidebar.
 */
export default function AppSidebar() {
  const { pathname } = useLocation();
  const { estado, ehMobile, setMobileAberta } = useSidebar();
  const recolhida = estado === 'collapsed' && !ehMobile;

  const periodos = useMemo(() => getPeriods().filter(p => p.number !== 'optativa'), []);
  const [abertos, setAbertos] = useState<Set<string>>(new Set());
  const [ultimaRota, setUltimaRota] = useState(pathname);

  // Abre automaticamente o período da matéria aberta, para o usuário se
  // localizar. O ajuste acontece DURANTE o render e não num efeito: é o padrão
  // que o React recomenda para reagir a mudança de entrada, e evita o segundo
  // render em cascata que um setState dentro de useEffect provoca.
  if (pathname !== ultimaRota) {
    setUltimaRota(pathname);
    const alvo = periodos.find(p => p.subjects.some(s => pathname === `/materia/${s.slug}`));
    if (alvo && !abertos.has(`p${alvo.number}`)) {
      setAbertos(prev => new Set(prev).add(`p${alvo.number}`));
    }
  }

  const alternar = (chave: string) =>
    setAbertos(prev => {
      const proximo = new Set(prev);
      if (proximo.has(chave)) proximo.delete(chave);
      else proximo.add(chave);
      return proximo;
    });

  const aoNavegar = () => {
    if (ehMobile) setMobileAberta(false);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <NavLink
          to="/"
          onClick={aoNavegar}
          className={`flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
            recolhida ? 'justify-center' : ''
          }`}
        >
          <Logo className="h-8 w-8 shrink-0" />
          {!recolhida && (
            <span className="min-w-0">
              <span className="block truncate font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-text">
                Material de Estudo
              </span>
              <span className="block truncate text-[11px] text-text-muted">BSI · IFAL</span>
            </span>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Geral</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to="/" end onClick={aoNavegar} className="block">
                {({ isActive }) => (
                  <SidebarMenuButton asChild ativo={isActive} tooltip="Início">
                    <CasaIcon />
                    <SidebarLabel>Início</SidebarLabel>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <NavLink to="/trilha" onClick={aoNavegar} className="block">
                {({ isActive }) => (
                  <SidebarMenuButton asChild ativo={isActive} tooltip="Trilha de aprendizado">
                    <GrafoIcon />
                    <SidebarLabel>Trilha de aprendizado</SidebarLabel>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* O acordeão de períodos só existe expandido: em trilho de ícones ele
            não caberia, e um trilho com oito setas idênticas não informa nada. */}
        {!recolhida && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel>Períodos</SidebarGroupLabel>
              <SidebarMenu>
                {periodos.map(periodo => {
                  const chave = `p${periodo.number}`;
                  const aberto = abertos.has(chave);
                  const temAtivo = periodo.subjects.some(s => pathname === `/materia/${s.slug}`);
                  return (
                    <SidebarMenuItem key={chave}>
                      <SidebarMenuButton
                        ativo={temAtivo}
                        onClick={() => alternar(chave)}
                        aria-expanded={aberto}
                      >
                        <SidebarLabel>{periodo.label}</SidebarLabel>
                        <span className="font-mono text-[11px] tabular-nums text-text-muted/70">
                          {periodo.subjects.length}
                        </span>
                        <SetaIcon aberto={aberto} />
                      </SidebarMenuButton>
                      {aberto && (
                        <SidebarMenuSub>
                          {periodo.subjects.map(subject => (
                            <ItemMateria key={subject.id} subject={subject} aoNavegar={aoNavegar} />
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Optativas</SidebarGroupLabel>
              <SidebarMenu>
                {Object.entries(optativeCategories).map(([chave, { label }]) => {
                  const materias = getOptativesByCategory(chave);
                  const aberto = abertos.has(`o${chave}`);
                  const temAtivo = materias.some(s => pathname === `/materia/${s.slug}`);
                  return (
                    <SidebarMenuItem key={chave}>
                      <SidebarMenuButton
                        ativo={temAtivo}
                        onClick={() => alternar(`o${chave}`)}
                        aria-expanded={aberto}
                      >
                        <SidebarLabel>{label}</SidebarLabel>
                        <span className="font-mono text-[11px] tabular-nums text-text-muted/70">
                          {materias.length}
                        </span>
                        <SetaIcon aberto={aberto} />
                      </SidebarMenuButton>
                      {aberto && (
                        <SidebarMenuSub>
                          {materias.map(subject => (
                            <ItemMateria key={subject.id} subject={subject} aoNavegar={aoNavegar} />
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        {recolhida ? (
          <p className="py-1 text-center font-mono text-[10px] text-text-muted/70">BSI</p>
        ) : (
          <p className="px-2 py-1 text-[11px] leading-relaxed text-text-muted/70">
            Feito por alunos e egressos do IFAL BSI
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
