import { useMemo, useState, type KeyboardEvent } from 'react';
import CodeBlock from './CodeBlock';
import { parseDdl } from './schema/parseDdl';
import ErDiagram from './schema/ErDiagram';
import RelationalDiagram from './schema/RelationalDiagram';

/**
 * Esquema de banco de dados a partir do DDL: mostra o MESMO `CREATE TABLE` como
 * diagrama ER (conceitual), esquema relacional (lógico) e SQL (físico).
 *
 * A escolha de derivar tudo de um texto de SQL — em vez de receber as tabelas já
 * descritas em props — é o ponto do componente. Os três níveis de abstração que
 * a disciplina ensina passam a ser três leituras de uma única fonte, então não
 * há como o diagrama discordar do código. Também deixa o material barato de
 * manter: corrigir o SQL corrige as três visões.
 */

type Aba = 'er' | 'relacional' | 'sql';

interface DatabaseSchemaProps {
  /** O DDL. Comentários `--` no fim da linha viram glosa da coluna. */
  ddl: string;
  title?: string;
  /** Aba inicial. Padrão: relacional, o formato mais usado no curso. */
  defaultView?: Aba;
  /** Esconde abas que não interessam àquele ponto do texto. */
  views?: Aba[];
  /** Leitura em português do que o esquema modela. */
  caption?: string;
}

const ROTULOS: Record<Aba, { label: string; dica: string }> = {
  er: { label: 'Modelo ER', dica: 'Conceitual — entidades, relacionamentos e cardinalidades (Chen)' },
  relacional: { label: 'Esquema relacional', dica: 'Lógico — tabelas, PKs e FKs' },
  sql: { label: 'SQL (DDL)', dica: 'Físico — o código que cria as tabelas' },
};

export default function DatabaseSchema({
  ddl,
  title,
  defaultView = 'relacional',
  views = ['er', 'relacional', 'sql'],
  caption,
}: DatabaseSchemaProps) {
  const esquema = useMemo(() => parseDdl(ddl), [ddl]);
  const [aba, setAba] = useState<Aba>(views.includes(defaultView) ? defaultView : views[0]);
  const [destaque, setDestaque] = useState<string | null>(null);

  // Sem tabela reconhecida, cai para o SQL cru: melhor mostrar o código do que
  // um quadro vazio se o DDL usar algo que o leitor não cobre.
  if (esquema.tabelas.length === 0) {
    return <CodeBlock language="sql" title={title} code={ddl.trim()} />;
  }

  const navegarPorTeclado = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const i = views.indexOf(aba);
    const prox = e.key === 'ArrowRight' ? (i + 1) % views.length : (i - 1 + views.length) % views.length;
    setAba(views[prox]);
  };

  const resumo = [
    `${esquema.tabelas.length} ${esquema.tabelas.length === 1 ? 'tabela' : 'tabelas'}`,
    `${esquema.ligacoes.length} ${esquema.ligacoes.length === 1 ? 'chave estrangeira' : 'chaves estrangeiras'}`,
    esquema.associativas.size > 0
      ? `${esquema.associativas.size} associativa${esquema.associativas.size > 1 ? 's' : ''}`
      : null,
    esquema.fatos.size > 0 ? `${esquema.fatos.size} fato` : null,
  ].filter(Boolean).join(' · ');

  return (
    <figure className="db-schema">
      <div className="db-schema__topo">
        <div>
          {title && <figcaption className="db-schema__titulo">{title}</figcaption>}
          <p className="db-schema__resumo">{resumo}</p>
        </div>

        {views.length > 1 && (
          <div className="db-schema__abas" role="tablist" onKeyDown={navegarPorTeclado}>
            {views.map(v => (
              <button
                key={v}
                role="tab"
                type="button"
                aria-selected={aba === v}
                tabIndex={aba === v ? 0 : -1}
                title={ROTULOS[v].dica}
                className={`db-schema__aba${aba === v ? ' is-ativa' : ''}`}
                onClick={() => setAba(v)}
              >
                {ROTULOS[v].label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="db-schema__painel" role="tabpanel">
        {aba === 'er' && <ErDiagram esquema={esquema} />}
        {aba === 'relacional' && (
          <RelationalDiagram esquema={esquema} destaque={destaque} onDestaque={setDestaque} />
        )}
        {aba === 'sql' && <CodeBlock language="sql" code={ddl.trim()} />}
      </div>

      {aba !== 'sql' && (
        <div className="db-schema__legenda">
          <span><b className="db-col__pk">PK</b> chave primária</span>
          <span><b className="db-col__fk">FK</b> chave estrangeira</span>
          <span><i className="db-schema__ponto" /> NOT NULL</span>
        </div>
      )}

      {caption && <p className="db-schema__caption">{caption}</p>}
    </figure>
  );
}
