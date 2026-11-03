/**
 * ATOME — Champ de saisie
 * Style « outlined » : fond blanc, bord fin, halo doré au focus.
 * `as="textarea"` pour les champs longs.
 */

const BASE =
  'w-full rounded-2xl border bg-white px-4 text-[15px] text-[var(--ink)] placeholder:text-[var(--text-4)] transition-colors duration-200 focus:outline-none focus:ring-4';

const STATE = {
  default:
    'border-[var(--line-strong)] hover:border-[var(--gold-400)] focus:border-[var(--gold-500)] focus:ring-[rgba(217,172,78,0.18)]',
  invalid:
    'border-[var(--danger)] hover:border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[rgba(178,58,58,0.16)]',
};

export function Input({ as: Tag = 'input', invalid = false, className = '', ...rest }) {
  const isTextarea = Tag === 'textarea';

  return (
    <Tag
      className={`${BASE} ${invalid ? STATE.invalid : STATE.default} ${
        isTextarea ? 'min-h-[132px] resize-y py-3.5 leading-[1.6]' : 'h-14'
      } ${className}`.trim()}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export default Input;
