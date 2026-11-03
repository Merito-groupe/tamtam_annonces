/**
 * ATOME — Texte
 * Source unique des styles typographiques de la page sponsor.
 */

const VARIANTS = {
  eyebrow:
    'text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--gold-700)]',
  h1:
    'text-[2.1rem] sm:text-[2.75rem] lg:text-[3.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--navy)]',
  h2:
    'text-[1.8rem] sm:text-[2.15rem] lg:text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--navy)]',
  h3:
    'text-[1.25rem] sm:text-[1.4rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--navy)]',
  lead:
    'text-[1rem] sm:text-[1.075rem] leading-[1.65] text-[var(--text-2)]',
  body:
    'text-[15px] leading-[1.7] text-[var(--text-2)]',
  muted:
    'text-[13.5px] leading-[1.6] text-[var(--text-3)]',
  caption:
    'text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[var(--text-4)]',
};

export function Text({ as: Tag = 'p', variant = 'body', className = '', children, ...rest }) {
  const base = VARIANTS[variant] || VARIANTS.body;

  return (
    <Tag className={`${base} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Text;
