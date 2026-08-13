import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SITE_LAST_UPDATED_LABEL } from '../../data/siteMetadata';
import { useMovimentoReduzido } from '../../hooks/useMovimentoReduzido';
import { cascata, item, revela } from '../../lib/movimento';

interface SubjectHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Ações da matéria (ex.: exportar em md e PDF), abaixo da descrição. */
  actions?: ReactNode;
  /**
   * Fundo decorativo herdado das matérias antigas. Mantido no contrato para não
   * quebrar os dez componentes de conteúdo que o passam, mas não é mais
   * desenhado: o gradiente atrás do título competia com a leitura e era o
   * elemento que mais datava o visual.
   */
  background?: string;
}

/**
 * Abertura da matéria, exibida apenas na seção de introdução.
 *
 * Era um bloco centralizado de 42vh com gradiente atrás, o que empurrava o
 * conteúdo para baixo da dobra e não dizia nada. Agora é cabeçalho de documento
 * técnico: alinhado à esquerda, metadado em mono acima do título, régua fechando
 * o bloco, e a descrição em medida de leitura.
 */
export default function SubjectHero({ eyebrow, title, description, actions }: SubjectHeroProps) {
  const reduzido = useMovimentoReduzido();

  return (
    <motion.header
      variants={cascata}
      initial={reduzido ? false : 'inicio'}
      animate="visivel"
      className="page-wrap border-b border-rule pb-7 pt-10 md:pb-9 md:pt-14"
    >
      <motion.p
        variants={item}
        className="mb-3 font-mono text-meta uppercase tracking-[0.18em] text-text-muted"
      >
        {eyebrow}
      </motion.p>

      {/* o título é revelado por máscara vertical, como texto sendo composto */}
      <motion.h1
        variants={reduzido ? item : revela}
        className="font-display text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-text text-balance"
      >
        {title}
      </motion.h1>

      <motion.p variants={item} className="reading-measure mt-4 text-lead leading-relaxed text-text-muted">
        {description}
      </motion.p>

      {actions && (
        <motion.div variants={item} className="mt-5">
          {actions}
        </motion.div>
      )}

      <motion.p variants={item} className="mt-5 font-mono text-micro text-text-muted/80">
        <Link to="/atualizacoes" className="underline decoration-dotted underline-offset-4 hover:text-text">
          atualizado em {SITE_LAST_UPDATED_LABEL}
        </Link>
      </motion.p>
    </motion.header>
  );
}
