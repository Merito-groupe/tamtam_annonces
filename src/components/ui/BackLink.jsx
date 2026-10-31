import React from 'react';
import { MaterialIcon } from './MaterialIcon';

/**
 * Lien de retour unifié du projet.
 *
 * Remplace les anciennes variantes (texte souligné, pastille arrondie,
 * caractère "←" écrit en dur) par un rendu sobre : flèche + libellé sur
 * une même ligne, sans bordure ni fond.
 *
 * tone="dark"  → pour les pages sur fond sombre (#2e274e)
 * tone="light" → pour les pages sur fond clair (mentions légales)
 */
export const BackLink = ({
  onClick,
  label = "Retour à l'accueil",
  tone = 'dark',
  className = '',
}) => {
  const palette =
    tone === 'light'
      ? 'text-slate-500 hover:text-[#2e274e]'
      : 'text-[#aa9a56]/80 hover:text-[#d4c585]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group -ml-2 inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa9a56] ${palette} ${className}`}
    >
      <MaterialIcon
        name="arrow_back"
        className="text-lg transition-transform duration-200 group-hover:-translate-x-1"
      />
      <span>{label}</span>
    </button>
  );
};

export default BackLink;
