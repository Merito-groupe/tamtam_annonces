import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../services/supabase';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Button } from './atoms/Button';
import { Input } from './atoms/Input';
import { FormFieldGroup } from './molecules/FormFieldGroup';
import { WizardStepLayout } from './organisms/WizardStepLayout';

/**
 * ORGANISME — Wizard de demande de sponsoring
 * Une intention par étape, validation locale, envoi unique vers Supabase.
 */

const TOTAL_STEPS = 3;

const INITIAL_DATA = {
  company_name: '',
  sector: '',
  contact_name: '',
  phone: '',
  email: '',
  message: '',
};

const STEP_CONTENT = {
  1: {
    title: 'Votre entreprise',
    subtitle: 'Deux informations suffisent pour préparer votre proposition.',
    helpLabel: 'Comment fonctionne le programme sponsor ?',
    firstField: 'sponsor-company',
  },
  2: {
    title: 'Votre contact',
    subtitle: 'La personne que notre direction commerciale pourra joindre directement.',
    helpLabel: 'Vous préférez être rappelé ? Écrivez-nous',
    firstField: 'sponsor-name',
  },
  3: {
    title: 'Votre projet',
    subtitle: 'Quelques lignes pour cadrer votre demande. Ce champ reste facultatif.',
    helpLabel: 'Besoin d’un échange rapide ? Écrivez-nous',
    firstField: 'sponsor-message',
  },
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value);
const isValidPhone = (value) => /^[+0-9 ().-]{6,20}$/.test(value);

function validateStep(step, data) {
  const errors = {};

  if (step === 1) {
    if (data.company_name.trim().length < 2) {
      errors.company_name = 'Indiquez le nom de votre entreprise.';
    }
    if (data.sector.trim().length < 2) {
      errors.sector = 'Précisez votre secteur d’activité.';
    }
  }

  if (step === 2) {
    if (data.contact_name.trim().length < 2) {
      errors.contact_name = 'Indiquez le nom du responsable.';
    }
    if (!isValidPhone(data.phone.trim())) {
      errors.phone = 'Numéro invalide : 6 à 20 caractères (chiffres, +, espaces, ( ) . -).';
    }
    if (!isValidEmail(data.email.trim())) {
      errors.email = 'Adresse e-mail invalide.';
    }
  }

  if (step === 3 && data.message.length > 2000) {
    errors.message = '2000 caractères maximum.';
  }

  return errors;
}

export function SponsorWizard({ framed = true }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [submitError, setSubmitError] = useState('');
  const isFirstRender = useRef(true);

  const current = STEP_CONTENT[step];
  const isLastStep = step === TOTAL_STEPS;

  // Focus sur le premier champ à chaque changement d'étape (pas au premier rendu)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById(current.firstField)?.focus({ preventScroll: false });
  }, [step, current.firstField]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const goBack = () => {
    setErrors({});
    setSubmitError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    if (!isLastStep) {
      setStep((prev) => prev + 1);
      return;
    }

    setStatus('submitting');

    const payload = {
      company_name: data.company_name.trim(),
      sector: data.sector.trim(),
      contact_name: data.contact_name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
    };

    try {
      const { error } = await supabase.from('sponsor_requests').insert([payload]);
      if (error) throw error;
      setStatus('success');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Erreur Supabase :', error?.message);
      }
      setStatus('idle');
      setSubmitError("Une erreur est survenue lors de l'envoi. Réessayez dans un instant.");
    }
  };

  if (status === 'success') {
    return (
      <div
        className={
          framed
            ? 'rounded-[24px] border border-[var(--line)] bg-white p-8 text-center shadow-[var(--shadow-md)] sm:p-12'
            : 'py-2 text-center'
        }
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success-bg)] text-[var(--success)]">
          <MaterialIcon name="check" className="text-2xl" />
        </span>
        <h3 className="mt-5 text-[1.35rem] font-bold tracking-[-0.02em] text-[var(--navy)]">
          Demande transmise
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-[1.65] text-[var(--text-2)]">
          Notre direction commerciale revient vers vous sous 24 heures ouvrées avec une
          proposition personnalisée.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(INITIAL_DATA);
            setStep(1);
            setStatus('idle');
          }}
          className="mt-6 rounded-md text-[13px] font-medium text-[var(--text-3)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--navy)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(217,172,78,0.25)]"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <WizardStepLayout
        step={step}
        totalSteps={TOTAL_STEPS}
        title={current.title}
        subtitle={current.subtitle}
        helpLabel={current.helpLabel}
        framed={framed}
        footer={
          <>
            {submitError && (
              <p
                role="alert"
                className="mb-2 rounded-xl bg-[var(--danger-bg)] px-4 py-3 text-[13px] font-medium text-[var(--danger-strong)]"
              >
                {submitError}
              </p>
            )}

            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting'
                ? 'Envoi en cours…'
                : isLastStep
                  ? 'Envoyer la demande'
                  : 'Continuer'}
            </Button>

            {step > 1 && (
              <Button variant="ghost" type="button" onClick={goBack}>
                Retour
              </Button>
            )}
          </>
        }
      >
        {step === 1 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormFieldGroup
              id="sponsor-company"
              label="Nom de l’entreprise"
              required
              error={errors.company_name}
            >
              <Input
                name="company_name"
                type="text"
                autoComplete="organization"
                value={data.company_name}
                onChange={handleChange}
                maxLength={120}
                placeholder="ex. Votre société"
              />
            </FormFieldGroup>

            <FormFieldGroup
              id="sponsor-sector"
              label="Secteur d’activité"
              required
              error={errors.sector}
            >
              <Input
                name="sector"
                type="text"
                value={data.sector}
                onChange={handleChange}
                maxLength={120}
                placeholder="ex. Agroalimentaire, banque…"
              />
            </FormFieldGroup>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormFieldGroup
                id="sponsor-name"
                label="Nom du responsable"
                required
                error={errors.contact_name}
              >
                <Input
                  name="contact_name"
                  type="text"
                  autoComplete="name"
                  value={data.contact_name}
                  onChange={handleChange}
                  maxLength={120}
                  placeholder="Votre nom complet"
                />
              </FormFieldGroup>

              <FormFieldGroup
                id="sponsor-phone"
                label="Téléphone / WhatsApp"
                required
                error={errors.phone}
              >
                <Input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={data.phone}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="+243…"
                />
              </FormFieldGroup>
            </div>

            <FormFieldGroup
              id="sponsor-email"
              label="Adresse e-mail professionnelle"
              required
              error={errors.email}
            >
              <Input
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={data.email}
                onChange={handleChange}
                maxLength={160}
                placeholder="direction@entreprise.com"
              />
            </FormFieldGroup>
          </div>
        )}

        {step === 3 && (
          <FormFieldGroup
            id="sponsor-message"
            label="Message ou précisions"
            hint="Facultatif — 2000 caractères maximum."
            error={errors.message}
          >
            <Input
              as="textarea"
              name="message"
              rows={5}
              value={data.message}
              onChange={handleChange}
              maxLength={2000}
              placeholder="Votre objectif de campagne, la période visée, les formats envisagés…"
            />
          </FormFieldGroup>
        )}
      </WizardStepLayout>
    </form>
  );
}

export default SponsorWizard;
