/**
 * DesignLab — comparação dos três cenários de reconciliação Duolingo × Falcão.
 *
 * PROTÓTIPO ISOLADO. Esta página NÃO está registrada em nenhuma rota e nenhum
 * arquivo do app a importa. Ela importa src/styles/duolingo-tokens.css, cujos
 * seletores são todos escopados por classe (nada em :root), então mesmo que
 * alguém a importe por acidente nada do app muda.
 *
 * O DESENHO DA PÁGINA É O ARGUMENTO: as três colunas renderizam o MESMO
 * markup, com as MESMAS classes de receita. A única diferença entre elas é a
 * classe de escopo de token no topo (.dl-cenario-a / -b / -c). Se as três
 * ficarem coerentes cada uma no seu idioma, o contrato semântico está
 * completo; se alguma quebrar, falta token. É o teste, não a vitrine.
 *
 * As razões de contraste exibidas são MEDIDAS em runtime a partir do
 * getComputedStyle das cores efetivamente resolvidas (inclusive color-mix),
 * não copiadas de comentário. A página é um verificador.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import "@/styles/duolingo-tokens.css";

type Tema = "escuro" | "claro";

/* ------------------------------------------------------------------ *
 * Contraste WCAG 2.x medido no DOM
 * ------------------------------------------------------------------ */

type Rgb = readonly [number, number, number];

/**
 * Aceita as formas que os navegadores usam ao serializar cor computada:
 * `rgb(r, g, b)`, `rgb(r g b / a)`, `rgba(...)` e `color(srgb r g b)` —
 * esta última é como Chrome e Safari devolvem um color-mix(in srgb, ...).
 */
function parseCssColor(input: string): Rgb | null {
  const texto = input.trim().toLowerCase();

  const srgb = texto.match(/^color\(\s*srgb\s+([^)]+)\)$/);
  if (srgb) {
    const partes = srgb[1].split("/")[0].trim().split(/[\s,]+/);
    if (partes.length < 3) return null;
    const canais = partes.slice(0, 3).map((p) => Number.parseFloat(p) * 255);
    if (canais.some((c) => Number.isNaN(c))) return null;
    return [canais[0], canais[1], canais[2]] as const;
  }

  const rgb = texto.match(/^rgba?\(([^)]+)\)$/);
  if (rgb) {
    const partes = rgb[1].split("/")[0].trim().split(/[\s,]+/);
    if (partes.length < 3) return null;
    const canais = partes.slice(0, 3).map((p) => Number.parseFloat(p));
    if (canais.some((c) => Number.isNaN(c))) return null;
    return [canais[0], canais[1], canais[2]] as const;
  }

  return null;
}

function canalLinear(valor: number): number {
  const c = valor / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminanciaRelativa([r, g, b]: Rgb): number {
  return 0.2126 * canalLinear(r) + 0.7152 * canalLinear(g) + 0.0722 * canalLinear(b);
}

function razaoContraste(a: Rgb, b: Rgb): number {
  const la = luminanciaRelativa(a);
  const lb = luminanciaRelativa(b);
  const claro = Math.max(la, lb);
  const escuro = Math.min(la, lb);
  return (claro + 0.05) / (escuro + 0.05);
}

/**
 * Classificação pela WCAG 2.1 SC 1.4.3. "Texto grande" é ≥ 24px normal ou
 * ≥ 18,66px bold — rótulo de botão a 15px/700 NÃO se qualifica, e é
 * exatamente por isso que os 2,09:1 do Duolingo não têm direito à isenção.
 */
function classificar(razao: number): { classe: string; rotulo: string } {
  if (razao >= 4.5) return { classe: "dl-cr--ok", rotulo: "AA" };
  if (razao >= 3) return { classe: "dl-cr--warn", rotulo: "só grande" };
  return { classe: "dl-cr--fail", rotulo: "reprova" };
}

type MedidorProps = {
  /** Cor do texto: nome de custom property ou literal CSS. */
  frente: string;
  /** Cor de fundo: nome de custom property ou literal CSS. */
  fundo: string;
  /** Rótulo curto do par medido. */
  nome: string;
  /** Muda quando o tema muda, para forçar nova medição. */
  chave: string;
};

function comoCor(valor: string): string {
  return valor.startsWith("--") ? `var(${valor})` : valor;
}

/** Mede o contraste realmente renderizado no escopo em que está montado. */
function Medidor({ frente, fundo, nome, chave }: MedidorProps): JSX.Element {
  const sonda = useRef<HTMLSpanElement | null>(null);
  const [razao, setRazao] = useState<number | null>(null);

  useEffect(() => {
    const alvo = sonda.current;
    if (!alvo) return;
    // rAF: garante que a folha já foi aplicada antes de ler o computed style.
    const id = requestAnimationFrame(() => {
      const estilo = getComputedStyle(alvo);
      const f = parseCssColor(estilo.color);
      const b = parseCssColor(estilo.backgroundColor);
      if (f && b) setRazao(razaoContraste(f, b));
    });
    return () => cancelAnimationFrame(id);
  }, [chave, frente, fundo]);

  const veredito = razao === null ? null : classificar(razao);

  return (
    <>
      <span
        ref={sonda}
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
          color: comoCor(frente),
          backgroundColor: comoCor(fundo),
        }}
      />
      <span className={`dl-cr ${veredito?.classe ?? ""}`}>
        {nome} {razao === null ? "—" : razao.toFixed(2)}:1 {veredito?.rotulo ?? ""}
      </span>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Blocos da vitrine — markup idêntico nos três cenários
 * ------------------------------------------------------------------ */

function Secao({ titulo, children }: { titulo: string; children: ReactNode }): JSX.Element {
  return (
    <section className="dl-sec">
      <h3 className="dl-sec__title">{titulo}</h3>
      {children}
    </section>
  );
}

function BlocoTipografia(): JSX.Element {
  return (
    <Secao titulo="Tipografia">
      <div className="dl-stack">
        <p className="dl-display">alagoas em números</p>
        <p className="dl-title">Título de tela</p>
        <p className="dl-head">Título de card</p>
        <p className="dl-body">
          O corpo do texto carrega a leitura longa. É aqui que a diferença entre 16px e 20px deixa
          de ser gosto e passa a ser densidade de tela.
        </p>
        <p className="dl-cap">Texto auxiliar, um degrau abaixo do corpo.</p>
        <span className="dl-label">Rótulo</span>
        <p className="dl-money">R$ 1.234.567,89</p>
      </div>
    </Secao>
  );
}

function BlocoPaleta({ chave }: { chave: string }): JSX.Element {
  return (
    <Secao titulo="Paleta e contraste medido">
      <div className="dl-swatches">
        <div className="dl-swatch" style={{ backgroundColor: "var(--face)", color: "var(--face-fg)" }}>
          face / rótulo
        </div>
        <div className="dl-swatch" style={{ backgroundColor: "var(--face-lip)", color: "var(--face-fg)" }}>
          lip
        </div>
        <div className="dl-swatch" style={{ backgroundColor: "var(--ok-bg)", color: "var(--ok-fg)" }}>
          acerto
        </div>
        <div className="dl-swatch" style={{ backgroundColor: "var(--err-bg)", color: "var(--err-fg)" }}>
          erro
        </div>
        <div className="dl-swatch" style={{ backgroundColor: "var(--info-bg)", color: "var(--info-fg)" }}>
          info
        </div>
        <div className="dl-swatch" style={{ backgroundColor: "var(--warn-bg)", color: "var(--warn-fg)" }}>
          aviso
        </div>
      </div>
      <div className="dl-row" style={{ marginTop: 12, gap: 6 }}>
        <Medidor chave={chave} nome="rótulo/face" frente="--face-fg" fundo="--face" />
        <Medidor chave={chave} nome="corpo" frente="--fg" fundo="--bg" />
        <Medidor chave={chave} nome="auxiliar" frente="--fg-2" fundo="--bg" />
        <Medidor chave={chave} nome="acerto" frente="--ok-fg" fundo="--ok-bg" />
        <Medidor chave={chave} nome="erro" frente="--err-fg" fundo="--err-bg" />
        <Medidor chave={chave} nome="info" frente="--info-fg" fundo="--info-bg" />
        <Medidor chave={chave} nome="aviso" frente="--warn-fg" fundo="--warn-bg" />
      </div>
    </Secao>
  );
}

function BlocoBotoes(): JSX.Element {
  return (
    <Secao titulo="Botão — os quatro estados">
      <div className="dl-btnrow">
        <span className="dl-state">Repouso</span>
        <div className="dl-row">
          <button type="button" className="dl-btn">
            Continuar
          </button>
          <button type="button" className="dl-btn dl-btn--contornado">
            Pular
          </button>
        </div>

        <span className="dl-state">Hover</span>
        <div className="dl-row">
          <button type="button" className="dl-btn is-hover">
            Continuar
          </button>
          <button type="button" className="dl-btn dl-btn--contornado is-hover">
            Pular
          </button>
        </div>

        <span className="dl-state">Pressionado</span>
        <div className="dl-row">
          <button type="button" className="dl-btn is-press">
            Continuar
          </button>
          <button type="button" className="dl-btn dl-btn--contornado is-press">
            Pular
          </button>
        </div>

        <span className="dl-state">Desabilitado</span>
        <div className="dl-row">
          <button type="button" className="dl-btn" disabled>
            Continuar
          </button>
          <button type="button" className="dl-btn dl-btn--contornado" disabled>
            Pular
          </button>
        </div>
      </div>
      <p className="dl-note">
        Os botões de cima são interativos de verdade; as linhas Hover e Pressionado forçam o mesmo
        estado por classe para os quatro serem comparáveis sem o mouse. Onde há lip, o pressionado
        afunda exatamente a espessura dele e a borda inferior transparente segura o espaço, então
        nada empurra o layout.
      </p>
    </Secao>
  );
}

function BlocoCards(): JSX.Element {
  return (
    <Secao titulo="Card, campo e progresso">
      <div className="dl-stack">
        <article className="dl-card">
          <span className="dl-label">Obras</span>
          <h4 className="dl-head" style={{ marginTop: 6 }}>
            Pavimentação da AL-220
          </h4>
          <p className="dl-cap" style={{ marginTop: 6 }}>
            Trecho de 12,4 km em execução, com medição de julho homologada.
          </p>
          <p className="dl-money" style={{ marginTop: 10 }}>
            R$ 18.402.115,00
          </p>
        </article>

        <article className="dl-card is-hover">
          <span className="dl-label">Mesmo card, em hover</span>
          <p className="dl-cap" style={{ marginTop: 6 }}>
            Onde a profundidade é lip, a borda não se move: quem é pressionável ganha física, quem é
            superfície ganha sombra.
          </p>
        </article>

        <input className="dl-field" placeholder="Município" defaultValue="" />
        <input className="dl-field is-focus" defaultValue="Maceió" aria-label="Campo em foco" />

        <div className="dl-progress" style={{ "--valor": "68%" } as CSSProperties}>
          <div className="dl-progress__fill" />
          <div className="dl-progress__shine" />
        </div>
      </div>
    </Secao>
  );
}

function BlocoFeedback({ ciclo }: { ciclo: number }): JSX.Element {
  return (
    <Secao titulo="Feedback de acerto e erro">
      <div className="dl-stack dl-stack--tight">
        <div className="dl-feedback" data-estado="acerto" key={`ok-${ciclo}`}>
          Resposta correta
        </div>
        <div className="dl-feedback" data-estado="erro" key={`err-${ciclo}`}>
          Resposta incorreta
        </div>
      </div>
      <p className="dl-note">
        Use “Repetir feedback” no topo da página para reexecutar a entrada. A assimetria é
        deliberada: o acerto entra e trava, o erro segura a cor e só depois lava. Nada se desloca
        por 800ms — o que dura é a cor esfriando.
      </p>
    </Secao>
  );
}

function Vitrine({ chave, ciclo }: { chave: string; ciclo: number }): JSX.Element {
  return (
    <>
      <BlocoTipografia />
      <BlocoPaleta chave={chave} />
      <BlocoBotoes />
      <BlocoCards />
      <BlocoFeedback ciclo={ciclo} />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Página
 * ------------------------------------------------------------------ */

export default function DesignLab(): JSX.Element {
  const [tema, setTema] = useState<Tema>("escuro");
  const [semMovimento, setSemMovimento] = useState(false);
  const [ciclo, setCiclo] = useState(0);

  const alternarTema = useCallback((): void => {
    setTema((atual) => (atual === "escuro" ? "claro" : "escuro"));
  }, []);

  const chave = `${tema}`;

  return (
    <div
      className="dl-lab"
      data-tema={tema}
      data-reduced-motion={semMovimento ? "" : undefined}
    >
      <header className="dl-lab__head">
        <p className="dl-lab__kicker">Protótipo isolado · não integrado ao app</p>
        <h1 className="dl-lab__h1">
          Três reconciliações entre o Duolingo e o Falcão System Design
        </h1>
        <p className="dl-lab__lead">
          As três colunas renderizam o <strong>mesmo markup</strong>, com as mesmas classes de
          receita. Só a classe de escopo de token muda. É assim que se verifica se a camada de
          tokens é completa: se uma coluna quebrar, falta token — não falta CSS.
        </p>
        <p className="dl-lab__lead">
          As fontes do Duolingo (Feather Bold, Duolingo Sans) são proprietárias e não podem entrar
          em projeto open source. As colunas que usam vocabulário Duolingo estão em{" "}
          <strong>Nunito</strong> (a substituta indicada pela própria Duolingo) e{" "}
          <strong>Baloo 2</strong> no display. As razões de contraste abaixo são medidas em runtime
          nas cores efetivamente resolvidas, inclusive as vindas de color-mix.
        </p>
        <div className="dl-lab__controls">
          <button
            type="button"
            className="dl-lab__ctl"
            aria-pressed={tema === "claro"}
            onClick={alternarTema}
          >
            <span>Tema: {tema === "escuro" ? "escuro" : "claro"}</span>
          </button>
          <button
            type="button"
            className="dl-lab__ctl"
            aria-pressed={semMovimento}
            onClick={() => setSemMovimento((v) => !v)}
          >
            <span>Movimento reduzido</span>
          </button>
          <button type="button" className="dl-lab__ctl" onClick={() => setCiclo((c) => c + 1)}>
            <span>Repetir feedback</span>
          </button>
        </div>
        <p className="dl-note">
          Alterne o tema: é aí que aparece o achado que só surge na implementação. O lip é uma
          invenção de tema claro, e o custo é mensurável — a faixa de luminância disponível entre o
          chão escuro e a face é de 0,016 numa face neutra contra 0,296 numa face saturada, cerca de
          18× menos. O lip no escuro não desaparece: ele fica fraco. Compare o “Pular” do cenário A
          no escuro e no claro.
        </p>
      </header>

      <div className="dl-lab__grid">
        {/* ---------------- CENÁRIO A ---------------- */}
        <div className="dl-col">
          <div className="dl-col__banner">
            <span className="dl-col__tag">Cenário A</span>
            <h2 className="dl-col__name">Duolingo na forma, Falcão na cor</h2>
            <p className="dl-col__verdict">
              <strong>Ganha</strong> a física do pressável (lip, afundar 4px, blur zero, grade de
              4px) sem importar nenhum problema de cor. <strong>Perde</strong> o calor lúdico: a
              aresta de brinquedo sobre chão editorial escuro só se sustenta em face saturada.{" "}
              <strong>Risco no PR</strong>: baixo-médio. Diff largo mas raso — a borda inferior de
              4px muda o box model de todo botão.
            </p>
          </div>
          <div className="dl-col__body dl-cenario-a dl-superficie" data-tema={tema}>
            <Vitrine chave={`a-${chave}`} ciclo={ciclo} />
          </div>
        </div>

        {/* ---------------- CENÁRIO B ---------------- */}
        <div className="dl-col">
          <div className="dl-col__banner">
            <span className="dl-col__tag">Cenário B</span>
            <h2 className="dl-col__name">Duolingo no lúdico, Falcão no denso</h2>
            <p className="dl-col__verdict">
              <strong>Ganha</strong> os dois idiomas em força plena, sem diluir nenhum.{" "}
              <strong>Perde</strong> a economia: esta coluna é literalmente duas vezes mais longa
              que as outras, e isso é o custo real — dois de tudo.{" "}
              <strong>Risco no PR</strong>: alto. Introduz uma política que todo contribuinte futuro
              precisa lembrar.
            </p>
          </div>
          <div className="dl-cenario-b" data-tema={tema}>
            <div className="dl-col__body dl-superficie" data-superficie="pratica">
              <div style={{ padding: "16px 16px 0" }}>
                <span className="dl-frontier">Superfície de prática · vocabulário Duolingo</span>
              </div>
              <Vitrine chave={`b-pratica-${chave}`} ciclo={ciclo} />
            </div>
            <div
              className="dl-col__body dl-superficie"
              data-superficie="leitura"
              style={{ borderTop: "3px solid rgb(128 128 128 / 45%)" }}
            >
              <div style={{ padding: "16px 16px 0" }}>
                <span className="dl-frontier">Superfície de leitura · vocabulário Falcão</span>
              </div>
              <Vitrine chave={`b-leitura-${chave}`} ciclo={ciclo} />
            </div>
          </div>
        </div>

        {/* ---------------- CENÁRIO C ---------------- */}
        <div className="dl-col">
          <div className="dl-col__banner">
            <span className="dl-col__tag">Cenário C</span>
            <h2 className="dl-col__name">Duolingo integral</h2>
            <p className="dl-col__verdict">
              <strong>Ganha</strong> um idioma só, light-first, sem fronteira para ninguém esquecer.{" "}
              <strong>Perde</strong> a identidade Falcão e ganha os buracos do Duolingo (sem
              skeleton, sem token de duração, sem grade de ícone, sem contraste publicado).{" "}
              <strong>Risco no PR</strong>: o mais alto. É o único cenário que também é risco de
              trade dress num repositório público.
            </p>
          </div>
          <div className="dl-col__body dl-cenario-c dl-superficie" data-tema={tema}>
            <Vitrine chave={`c-${chave}`} ciclo={ciclo} />
            <Secao titulo="O rótulo branco que a pesquisa flagrou">
              <div
                className="dl-swatch"
                style={{ backgroundColor: "var(--p-feather-green)", color: "#ffffff", minHeight: 64 }}
              >
                branco sobre Feather Green — como o Duolingo faz
              </div>
              <div className="dl-row" style={{ marginTop: 10, gap: 6 }}>
                <Medidor chave={`c-fiel-${chave}`} nome="fiel" frente="#ffffff" fundo="--p-feather-green" />
                <Medidor
                  chave={`c-corr-${chave}`}
                  nome="corrigido"
                  frente="--p-black-text"
                  fundo="--p-feather-green"
                />
              </div>
              <p className="dl-note">
                Este é o único ponto em que as três colunas se afastam do Duolingo de propósito. A
                correção que preserva o verde não é escurecer a face — branco sobre Tree Frog ainda
                dá 3,02:1 e reprova — é <strong>escurecer o rótulo</strong>. O Duolingo já faz isso
                nos botões amarelos; aqui a regra só foi estendida ao verde e ao azul.
              </p>
              <p className="dl-note">
                A conta fechada das correções que os cenários C e B/prática precisam pagar, e que o
                cenário A não paga em lugar nenhum: <strong>(1)</strong> o rótulo do botão, 2,09 →
                5,28:1; <strong>(2)</strong> os quatro <code>-fg</code> das triplas semânticas,
                2,72–3,46 → 4,89–6,86:1; <strong>(3)</strong> o texto secundário, Wolf #777777 →
                #717171. Nesta terceira o conserto óbvio engana: #767676 é o cinza mínimo sobre
                branco (4,54:1), mas continua reprovando sobre Polar #F7F7F7 (4,24:1), que é a
                superfície de card deles — onde este mesmo texto vive. O primeiro cinza que passa
                nos dois chões é #717171.
              </p>
            </Secao>
          </div>
        </div>
      </div>

      <section className="dl-verdict">
        <h2>Recomendação: cenário A</h2>
        <p>
          A escolha não é de gosto, é sobre em que camada cada sistema é de fato forte. A
          contribuição transferível do Duolingo é <strong>mecanismo</strong>: a física do
          pressável, a grade de 4px, as alturas de controle, o blur zero, a assimetria pedagógica do
          feedback. Mecanismo viaja. A camada de cor e tipo dele é justamente a parte que não pode
          ser copiada (as duas fontes são proprietárias), que não tem documentação de contraste
          (5 ocorrências de “accessib” no bundle, nenhuma sobre cor) e que carrega um defeito
          confirmado no componente mais usado.
        </p>
        <ol>
          <li>
            <strong>É o único cenário em que o problema de acessibilidade desaparece por
            construção</strong>, não por remendo — a cor nunca vem do Duolingo. Nos cenários B e C
            é preciso conscientemente consertar o rótulo do botão. Num projeto institucional de
            alunos do IFAL isso deixa de ser detalhe de design: acessibilidade em serviço público
            digital brasileiro tem lastro legal, e um PR que sabidamente entrega 2,09:1 é um PR de
            risco, não de estilo.
          </li>
          <li>
            <strong>É o único com diff limitado e sem política.</strong> Um arquivo de tokens, o
            primitivo de botão e o alinhamento de raios e alturas. Não há regra nova para um
            contribuinte do semestre seguinte esquecer — existe um vocabulário só, e não dá para
            errar.
          </li>
          <li>
            <strong>Mantém o projeto na família Falcão</strong> (que é a premissa inteira daquele
            design system) e ainda assim entrega o que o Duolingo tem de famoso: o botão que
            responde ao dedo.
          </li>
          <li>
            <strong>O conflito de movimento se dissolve em vez de ser negociado.</strong> O teto de
            350ms do Falcão nunca valeu para toda animação — o radial reveal dele é 450ms e o do
            tema é 550ms. Separando movimento (≤350ms), revelação (450–550ms) e permanência (300ms
            no acerto, 800ms no erro), os 800ms do Duolingo deixam de contradizer qualquer coisa:
            nada se move por 800ms, é a cor que esfria. Permanência é a categoria que o Falcão não
            nomeou e o Duolingo mediu.
          </li>
        </ol>
        <p>
          <strong>O que eu levaria do cenário B, e só isso:</strong> a coreografia assimétrica do
          feedback dentro de um modo de prática em tela cheia. Ela é achado pedagógico, não visual —
          punir por tempo e não por intensidade (o som de erro e o de acerto saem no mesmo volume
          0,35; o que difere é a duração), e o Falcão não tem equivalente. Mas com a regra dura do
          cenário B: <strong>a fronteira é de rota ou tela cheia, nunca dentro de uma página</strong>.
          Botão Duolingo dentro de card Falcão a 8px de distância é exatamente o frankenstein a
          evitar.
        </p>
        <p>
          <strong>Por que não B:</strong> B só é honesto enquanto alguém guarda a fronteira. Sem
          dono de design e com contribuintes rotativos, uma política não mecanizada decai em um
          semestre — e B decaído é A com passos extras e dois conjuntos de componentes para manter.
          Se um dia B for escolhido, a fronteira precisa ser mecânica (escopo de CSS em que o token
          errado literalmente não resolve, ou regra de lint), não documental.
        </p>
        <p>
          <strong>Por que não C:</strong> “integral” é uma promessa que o cenário não pode cumprir.
          Sem Feather Bold e sem Duolingo Sans, o que se adota é o formato sem a identidade. E
          adotar o sistema é adotar os buracos: zero skeleton, zero spinner, zero @media
          prefers-reduced-motion, zero token de duração ou de espaçamento, zero grade de ícone,
          nenhum valor escuro conhecido para quatro dos fundos semânticos — sem upstream para
          consultar quando cada buraco virar decisão local. Some a isso o único risco de trade
          dress da lista: geometria e token não são protegíveis, mas o conjunto reconhecível de um
          produto comercial, num repositório público institucional, é uma conversa diferente.
        </p>
      </section>
    </div>
  );
}
