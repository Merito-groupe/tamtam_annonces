import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MaterialIcon } from '../../ui/MaterialIcon';
import { SponsorWizard } from '../SponsorWizard';

/**
 * ORGANISME — Modale du formulaire sponsor
 * - Ouverture / fermeture animées, fermeture au clic sur le fond ou sur Échap
 * - Scroll de la page verrouillé pendant l'ouverture
 * - Focus déplacé dans la modale, tabulation piégée à l'intérieur
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function WizardModal({ open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const nodes = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      const firstField = panelRef.current?.querySelector('input, textarea');
      (firstField || panelRef.current)?.focus({ preventScroll: true });
    }, 120);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sponsor-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(25,21,44,0.55)] backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92dvh] w-full max-w-xl flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[var(--shadow-lg)] outline-none sm:rounded-[28px]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] px-6 pb-4 pt-6 sm:px-8">
              <div className="min-w-0">
                <h2
                  id="sponsor-modal-title"
                  className="text-[1.2rem] font-bold tracking-[-0.02em] text-[var(--navy)]"
                >
                  Demander une proposition de partenariat
                </h2>
                <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[var(--text-2)]">
                  Trois étapes, moins d’une minute.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le formulaire"
                className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--text-3)] transition-colors hover:bg-[var(--surface-3)] hover:text-[var(--navy)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(217,172,78,0.3)]"
              >
                <MaterialIcon name="close" className="text-xl" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
              <SponsorWizard framed={false} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default WizardModal;
