import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Routes déclarées dans App.jsx (react-router).
 *
 * Les serveurs statiques renvoient 404 sur /devenir-sponsor s'il n'existe
 * aucun fichier à cet emplacement. On duplique donc index.html dans un
 * dossier par route : le lien direct fonctionne partout, sans règle de
 * rewrite côté serveur.
 */
const SPA_ROUTES = [
  'lancer-campagne',
  'devenir-sponsor',
  'devenir-partenaire',
  'offre-annonceurs',
  'offre-chauffeurs',
  'offre-sponsors',
  'conditions-utilisation',
  'politique-confidentialite',
  'connexion',
]

function spaRoutes() {
  return {
    name: 'spa-routes-fallback',
    apply: 'build',
    async closeBundle() {
      for (const route of SPA_ROUTES) {
        const dir = join('dist', route)
        await mkdir(dir, { recursive: true })
        await copyFile(join('dist', 'index.html'), join(dir, 'index.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaRoutes()],
})
