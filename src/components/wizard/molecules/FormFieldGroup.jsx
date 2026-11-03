import React from 'react';

/**
 * MOLÉCULE — Groupe de champ
 * Assemble le label, le contrôle, l'aide contextuelle et le message d'erreur.
 * Injecte `id`, `invalid` et `aria-describedby` dans le contrôle enfant.
 */

export function FormFieldGroup({
  id,
  label,
  required = false,
  error,
  hint,
  className = '',
  children,
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  const control = React.isValidElement(children)
    ? React.cloneElement(children, {
        id,
        invalid: Boolean(error),
        'aria-describedby': describedBy,
      })
    : children;

  return (
    <div className={`min-w-0 ${className}`.trim()}>
      <label
        htmlFor={id}
        className="mb-2 block text-[13px] font-semibold text-[var(--navy)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--gold-600)]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {control}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-[12.5px] font-medium text-[var(--danger)]"
        >
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[12.5px] text-[var(--text-3)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default FormFieldGroup;
