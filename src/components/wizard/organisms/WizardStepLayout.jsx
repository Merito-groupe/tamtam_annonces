import { HelpLink } from '../molecules/HelpLink';

/**
 * ORGANISME — Gabarit d'une étape de wizard
 * Hiérarchie verticale : progression → titre d'intention → consigne → aide
 * → contenu → action principale → action d'échappement.
 */

export function WizardStepLayout({
  step,
  totalSteps,
  title,
  subtitle,
  helpLabel,
  helpHref,
  framed = true,
  children,
  footer,
}) {
  const progress = Math.round((step / totalSteps) * 100);

  return (
    <section
      aria-labelledby="sponsor-wizard-title"
      className={
        framed
          ? 'w-full rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-md)] sm:p-8 lg:p-10'
          : 'w-full'
      }
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[var(--text-4)]">
          Étape {step} sur {totalSteps}
        </span>
        <span className="text-[12px] font-medium text-[var(--text-4)]">{progress} %</span>
      </div>

      <div
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-3)]"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label="Progression du formulaire"
      >
        <div
          className="h-full rounded-full bg-[var(--gold-500)] transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-7">
        <h3
          id="sponsor-wizard-title"
          className="text-[1.4rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--navy)] sm:text-[1.55rem]"
        >
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-2)]">{subtitle}</p>
        <div className="mt-3">
          <HelpLink href={helpHref}>{helpLabel}</HelpLink>
        </div>
      </div>

      <div className="mt-7 space-y-5">{children}</div>

      <div className="mt-9 space-y-1.5">{footer}</div>
    </section>
  );
}

export default WizardStepLayout;
