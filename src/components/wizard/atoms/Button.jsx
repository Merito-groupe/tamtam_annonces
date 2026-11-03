/**
 * ATOME — Bouton
 * `primary` : action unique et centrale (plein, fort contraste, pleine largeur).
 * `secondary` : action de moindre importance.
 * `ghost` : échappatoire discrète, sans fond, reléguée en bas du parcours.
 */

const BASE =
  'inline-flex select-none items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-60';

const VARIANTS = {
  primary:
    'h-14 w-full bg-[var(--navy)] px-6 text-[15px] text-white hover:bg-[var(--navy-700)] active:scale-[0.99] focus-visible:ring-[rgba(228,189,98,0.35)]',
  secondary:
    'h-12 w-full bg-[var(--surface-3)] px-5 text-[14px] text-[var(--navy)] hover:bg-[var(--line)] focus-visible:ring-[rgba(228,189,98,0.3)]',
  ghost:
    'h-11 w-full px-4 text-[13.5px] font-medium text-[var(--text-3)] hover:bg-[var(--surface-3)] hover:text-[var(--navy)] focus-visible:ring-[rgba(217,172,78,0.25)]',
};

export function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${BASE} ${VARIANTS[variant] || VARIANTS.primary} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
