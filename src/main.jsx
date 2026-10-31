import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const BOOT_LOADER_ID = 'boot-loader';

/**
 * Retire l'écran de démarrage défini dans index.html.
 */
function hideBootLoader() {
  const el = document.getElementById(BOOT_LOADER_ID);
  if (!el || el.classList.contains('is-hidden')) return;

  el.classList.add('is-hidden');
  window.setTimeout(() => el.remove(), 450);
}

/**
 * Attend que la police d'icônes Material Symbols soit réellement chargée.
 *
 * Sans cette attente, le navigateur affiche le nom brut des ligatures
 * ("menu", "arrow_forward", "close"...) pendant le premier rendu, ce qui
 * donne l'impression que la page se charge mal.
 *
 * L'attente est plafonnée pour ne jamais bloquer l'affichage du site.
 */
async function waitForIconFont(timeout = 3000) {
  if (!document.fonts || typeof document.fonts.load !== 'function') return;

  const fontSpec = '24px "Material Symbols Outlined"';
  const start = Date.now();

  try {
    await document.fonts.load(fontSpec, 'menu');
  } catch {
    // On continue : le plafond de temps ci-dessous prend le relais.
  }

  while (Date.now() - start < timeout) {
    if (document.fonts.check(fontSpec)) return;
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

waitForIconFont()
  .catch(() => {
    // Une erreur inattendue ne doit jamais laisser l'écran de démarrage bloqué.
  })
  .then(() => {
    // Double requestAnimationFrame : on laisse React peindre son premier écran
    // (Navbar comprise) avant de révéler la page.
    requestAnimationFrame(() => requestAnimationFrame(hideBootLoader));
  });
