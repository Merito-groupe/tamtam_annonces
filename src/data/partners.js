/**
 * Partenaires affichés dans l'orbite du hero « Devenir Sponsor ».
 *
 * ➜ POUR AJOUTER UN LOGO : dépose simplement l'image dans
 *   src/assets/partners/  (svg, png, jpg ou webp).
 *   Elle est détectée automatiquement, placée sur une orbite libre et
 *   son angle est calculé tout seul. Aucune autre modification à faire.
 *
 * Le libellé (name) ne sert qu'à l'accessibilité (attribut alt).
 * Il n'est jamais affiché à l'écran.
 */

const logoFiles = import.meta.glob('../assets/partners/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

/** Libellés lisibles — accessibilité uniquement. Facultatif. */
const LABELS = {
  'AHB.png': 'AHB',
  'Hub-Un-Jour-1024x724.webp': 'Hub Un Jour',
  'ujn-logo-w.svg': 'UJN',
  'fpeej.png': 'FPEEJ',
  '2eb1ce0a685923426ee1ee60756c7aef.png': 'Partenaire',
};

const labelFor = (path) => {
  const fileName = path.split('/').pop();
  if (LABELS[fileName]) return LABELS[fileName];

  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
};

/** Un partenaire par image présente dans le dossier, dans l'ordre alphabétique. */
export const partners = Object.keys(logoFiles)
  .sort()
  .map((path) => ({ name: labelFor(path), logo: logoFiles[path] }));

export default partners;
