/**
 * Marca do site: as duas letras de "Sistemas de Informação".
 *
 * O brilho vem de `text-shadow` em camadas (halo curto + halo largo), não de
 * `filter: drop-shadow`, porque o filtro criaria um contexto de empilhamento
 * novo e tiraria o texto do fluxo de seleção. A cor do brilho sai da variável
 * `--logo-glow`, que cada tema redefine — ver `.site-logo` em index.css.
 */
interface LogoProps {
  /** Tamanho da fonte. O brilho acompanha via `em`. */
  className?: string;
}

export default function Logo({ className = 'text-[2.1rem]' }: LogoProps) {
  return (
    <span
      className={`site-logo ${className}`}
      /* As letras já são o texto acessível; o title cobre o significado. */
      title="Sistemas de Informação"
    >
      SI
    </span>
  );
}
