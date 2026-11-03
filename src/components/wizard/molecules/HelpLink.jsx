/**
 * MOLÉCULE — Lien d'aide contextuel
 * Poids visuel volontairement faible : texte simple, souligné, sans fond.
 */

export function HelpLink({
  href = 'https://wa.me/243991743573',
  children = 'Une question ? Écrivez-nous sur WhatsApp',
  className = '',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-md text-[13px] font-medium text-[var(--text-3)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors duration-200 hover:text-[var(--navy)] hover:decoration-[var(--gold-500)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(217,172,78,0.25)] ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export default HelpLink;
