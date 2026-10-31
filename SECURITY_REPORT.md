# Rapport d'audit de sécurité — TamTam Annonces

**Date :** 31 octobre 2026
**Périmètre :** application front-end React 19 + Vite 8 (`D:\Dev\tamtam_annonces`)
**Méthode :** revue statique du code source, inspection de l'historique Git, `npm audit`
**Référentiel :** OWASP Top 10 (2021)
**Phase :** 1 — audit uniquement, **aucune modification de code n'a été effectuée**

---

## 1. Synthèse chiffrée

| Gravité | Nombre |
|---|---|
| 🔴 Critique | **0** |
| 🟠 Élevée | **5** |
| 🟡 Moyenne | **4** |
| 🔵 Faible | **8** |
| **Total** | **17** |

**Corrigeables automatiquement :** 9 sur 17 (dont le n°1 partiellement — la purge d'historique et la rotation des clés restent manuelles).

Le projet ne présente **aucune faille critique** : pas d'injection HTML, pas d'`eval`, pas de secret serveur exposé.
Les risques les plus sérieux portent sur **la gestion des secrets**, **l'absence de véritable authentification** et **la configuration Supabase (RLS) qui n'est pas vérifiable depuis le code**.

---

## 2. Tableau des vulnérabilités

### 🟠 Gravité ÉLEVÉE

| N° | Gravité | Fichier:ligne | Risque | Correctif proposé | Auto |
|:--:|:--|:--|:--|:--|:--|
| 1 | Élevée | `.env:1-5` | **`.env` versionné dans Git** et présent dans l'historique (commit `ebe0734`). Expose l'URL Supabase, la clé publishable et la clé de site reCAPTCHA. Toute personne ayant accès au dépôt (ou son fork) les obtient. | `git rm --cached .env`, ajouter `.env` au `.gitignore`, créer `.env.example` sans valeurs, **purger l'historique** (`git filter-repo` / BFG) puis **rotation des clés**. | Oui* |
| 2 | Élevée | `.gitignore:1-24` | **`.env` n'est pas ignoré.** Aucun `.env.example` n'existe. Le prochain secret ajouté sera commité par inadvertance. | Ajouter `.env`, `.env.*`, `!.env.example` au `.gitignore` et créer `.env.example`. | Oui |
| 3 | Élevée | `src/pages/DevenirSponsor.jsx:38-50` | **Insertion directe en base depuis le navigateur** (`sponsor_requests`) avec la clé publishable. Si la **RLS n'est pas activée** sur cette table, n'importe qui peut lire, modifier ou supprimer les demandes sponsors (noms, e-mails, téléphones) → violation RGPD. Non vérifiable depuis le code. | Activer la RLS, autoriser uniquement `INSERT` pour `anon`, interdire `SELECT/UPDATE/DELETE`, contraindre les colonnes. | Non |
| 4 | Élevée | `src/pages/LoginPage.jsx:56-64` | **Authentification factice.** `handleSubmit` attend 1,5 s (`setTimeout`) puis redirige vers l'accueil. Aucun appel d'authentification, aucune session, aucun jeton. La page donne l'illusion d'une connexion protégée. | Brancher une vraie authentification (Supabase Auth ou API) et protéger les routes réellement sensibles. | Non |
| 5 | Élevée | `vite.config.js` / racine du projet | **Aucun en-tête de sécurité** et **aucune configuration de déploiement** (`vercel.json`, `netlify.toml`, `nginx.conf`, `_headers` absents). Pas de CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`. | Créer la configuration de la plateforme réellement utilisée avec ces en-têtes. | Oui |

\* l'extraction du fichier et le `.gitignore` sont automatisables ; la **purge d'historique** et la **rotation des clés** restent manuelles.

### 🟡 Gravité MOYENNE

| N° | Gravité | Fichier:ligne | Risque | Correctif proposé | Auto |
|:--:|:--|:--|:--|:--|:--|
| 6 | Moyenne | `src/pages/DevenirSponsor.jsx:31-61` | **Aucune protection anti-abus** sur le formulaire sponsor : pas de CAPTCHA, pas de honeypot, pas de limitation de fréquence. Un script peut saturer la table `sponsor_requests` en quelques secondes. | Ajouter un honeypot + limitation côté serveur (Edge Function) + CAPTCHA vérifié. | Non |
| 7 | Moyenne | `src/pages/DevenirSponsor.jsx:200-260` | **Validation d'entrée minimale.** Seuls `required` et `type="email"` sont présents : pas de `maxLength`, pas de validation du téléphone, aucune normalisation avant insertion. | Ajouter `maxLength`, `pattern` téléphone, `minLength` message, et une validation programmatique avant l'insertion. | Oui |
| 8 | Moyenne | `src/pages/LoginPage.jsx:28-36` | **reCAPTCHA jamais vérifié.** Le jeton est stocké dans l'état mais n'est envoyé à aucun serveur : la protection anti-brute-force est purement décorative. | Vérifier le jeton côté serveur (`siteverify`) via une Edge Function. | Non |
| 9 | Moyenne | `package.json` / `npm audit` | **11 vulnérabilités npm**, dont **5 « high »** : `vite`, `zod`, `nanoid`, `source-map-js`, `brace-expansion` (DoS, exécution de commande via `launch-editor`). Toutes concernent des **dépendances de développement** — aucun paquet runtime n'est touché. | `npm audit fix` puis vérifier le build ; monter `vite` si nécessaire. | Oui |

### 🔵 Gravité FAIBLE

| N° | Gravité | Fichier:ligne | Risque | Correctif proposé | Auto |
|:--:|:--|:--|:--|:--|:--|
| 10 | Faible | `src/pages/LoginPage.jsx:18-21` | **Clé reCAPTCHA écrite en dur** en valeur de repli. Une clé de site est publique par nature, mais sa présence dans le code empêche toute rotation propre. | Supprimer la valeur littérale et n'utiliser que `import.meta.env`. | Oui |
| 11 | Faible | `src/pages/DevenirSponsor.jsx:56` | `console.error('Erreur Supabase :', error)` journalise l'objet d'erreur complet (schéma, contraintes, messages internes). | Journaliser un message générique, garder le détail en développement uniquement. | Oui |
| 12 | Faible | `src/pages/DevenirSponsor.jsx:48` | **`created_at` fourni par le client** (`new Date()`). La date peut être falsifiée ou faussée par une horloge incorrecte. | Retirer le champ et laisser la valeur par défaut `now()` côté base. | Oui |
| 13 | Faible | `index.html:6-8` | Police **Google Fonts chargée sans SRI** : dépendance à un tiers, fuite d'IP et de référent. | Auto-héberger la police ou accepter le risque documenté. | Non |
| 14 | Faible | `index.html:11` et `index.html:106` | **Styles et script inline.** Le script de démarrage empêche une CSP stricte sans `nonce`/`hash`. | Externaliser le script ou calculer un hash pour la CSP. | Non |
| 15 | Faible | `src/pages/*.jsx` (25 occurrences) | **25 images chargées depuis des domaines tiers** (`i.pinimg.com`, `images.unsplash.com`, `via.placeholder.com`). Dépendance externe, fuite de référent, images non maîtrisées. | Héberger les visuels dans `public/`. | Non |
| 16 | Faible | `package.json` | **Dépendance inutilisée** : `lottie-react` n'est importée nulle part (seul `@lottiefiles/dotlottie-react` est utilisé). Élargit inutilement la surface d'attaque. | `npm uninstall lottie-react`. | Oui |
| 17 | Faible | `package.json` (devDependencies) | **6 vulnérabilités « moderate »** issues d'`eslint` / `@eslint/js` (`minimatch`, `brace-expansion`). Outillage de développement uniquement. | Monte `@eslint/js` en 9.39.5+ (peut nécessiter d'adapter `eslint.config.js`). | Non |

---

## 3. Points vérifiés et conformes ✅

| Contrôle | Résultat |
|---|---|
| `dangerouslySetInnerHTML` | ❌ absent (0 occurrence) |
| `innerHTML`, `eval`, `new Function`, `document.write` | ❌ absents |
| Liens `target="_blank"` sans `rel` | ✅ **9/9** possèdent `rel="noopener noreferrer"` |
| `javascript:` dans les liens | ❌ absent |
| Jeton d'authentification en `localStorage`/`sessionStorage` | ❌ aucun stockage (aucune session créée) |
| `console.log` en production | ❌ aucun (un seul `console.error`) |
| Sourcemaps de production | ✅ non activées (`vite.config.js` ne définit pas `build.sourcemap`) |
| `dist/` et `node_modules/` versionnés | ✅ correctement ignorés |
| Clé `service_role` Supabase | ✅ absente du code et du `.env` |
| Appels réseau en HTTP non chiffré | ❌ aucun (tout en HTTPS) |
| Upload de fichiers | ✅ aucune fonctionnalité d'upload |

### Note sur les variables `VITE_`

Rappel important : **toute variable préfixée `VITE_` est inlinée en clair dans le bundle** et donc publique.
Les trois valeurs actuelles (URL Supabase, clé *publishable*, clé de site reCAPTCHA) sont **conçues pour être publiques** — leur exposition n'est pas une faille en soi.
Le risque réel vient de **la configuration RLS** (point n°3) et de la tentation future d'y placer un secret réel (`service_role`, token d'API privé…).

---

## 4. Actions manuelles requises (non automatisables)

1. **Purger l'historique Git** du fichier `.env` (`git filter-repo --path .env --invert-paths`) puis forcer la mise à jour des clones.
2. **Faire tourner les clés** dans le tableau de bord Supabase (nouvelle clé publishable) et chez Google reCAPTCHA.
3. **Vérifier et activer la RLS** sur `sponsor_requests` :
   ```sql
   alter table public.sponsor_requests enable row level security;
   create policy "insert anonyme" on public.sponsor_requests
     for insert to anon with check (true);
   -- aucune policy select/update/delete pour anon
   ```
4. **Déployer une vérification serveur du reCAPTCHA** (Edge Function) et une limitation de débit.
5. **Brancher une authentification réelle** si `/connexion` doit protéger des données.
6. **Indiquer la plateforme de déploiement** (Vercel, Netlify, Nginx, GitHub Pages…) pour que les en-têtes de sécurité soient posés au bon endroit.

---

## 5. Annexe — `npm audit`

```
11 vulnerabilities (6 moderate, 5 high)

high    vite               correctif disponible
high    zod                correctif disponible
high    nanoid             correctif disponible
high    source-map-js      correctif disponible
high    brace-expansion    correctif disponible
moderate @eslint/js         correctif via 9.39.5
moderate eslint             correctif via 9.39.5
moderate @eslint/config-array, @eslint-community/eslint-utils, minimatch
moderate eslint-plugin-react-refresh   (aucun correctif)
```

Aucune de ces vulnérabilités n'affecte les dépendances **runtime** (`react`, `@supabase/supabase-js`, `framer-motion`, `react-router-dom`, `@lottiefiles/dotlottie-react`).

---

---

# Phase 2 — Corrections appliquées

**Date :** 31 octobre 2026
**Build :** ✅ `npm run build` — 2.10 s, 36 fichiers produits
**`npm audit` :** 11 → **6 vulnérabilités** (5 « high » éliminées)

## 6.1 Failles corrigées

| N° | Faille | Correction appliquée |
|:--:|:--|:--|
| 1 | `.env` versionné | `git rm --cached .env` (fichier conservé sur le disque), entrées `.env`, `.env.*` ajoutées au `.gitignore`, `!.env.example` maintenu suivi |
| 2 | `.gitignore` incomplet | Bloc « Variables d'environnement » ajouté + création de `.env.example` documenté |
| 5 | Aucun en-tête de sécurité | `vercel.json` (headers + rewrite SPA) et `public/_headers` (Netlify / Cloudflare Pages) : CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `HSTS` |
| 7 | Validation faible | `validateForm()` : `trim()`, normalisation e-mail (minuscules), regex e-mail et téléphone, bornes de longueur ; ajout de `maxLength`, `pattern` et `title` sur les champs |
| 9 | 11 vulnérabilités npm | `npm audit fix` → **5 « high » supprimées**, reste 6 « moderate » (outillage ESLint) |
| 10 | Clé reCAPTCHA en dur | Supprimée ; `SITE_KEY` provient uniquement de `import.meta.env.VITE_RECAPTCHA_SITE_KEY` |
| 11 | `console.error` verbeux | Limité à `import.meta.env.DEV` et au seul `error.message` |
| 12 | `created_at` côté client | Champ retiré de l'insertion ; la base renseigne `now()` (voir SQL) |
| 16 | `lottie-react` inutilisé | Désinstallé (2 paquets retirés) |

## 6.2 Failles restantes

| N° | Faille | Pourquoi non corrigée |
|:--:|:--|:--|
| 3 | RLS Supabase | **Action côté serveur** — script fourni : `supabase/policies.sql` |
| 4 | Authentification factice | Nécessite un backend d'authentification (décision d'architecture) |
| 6 | Anti-spam formulaire | Nécessite un service externe (Edge Function + rate limit) ; validation renforcée en attendant |
| 8 | reCAPTCHA non vérifié serveur | Nécessite une clé secrète et une Edge Function |
| 13 | Google Fonts sans SRI | Auto-hébergement de la police = décision produit |
| 14 | Script inline dans `index.html` | Écran de démarrage indispensable ; la CSP autorise `'unsafe-inline'` pour cette raison |
| 15 | 25 images externes | Décision éditoriale (héberger les visuels dans `public/`) |
| 17 | 6 « moderate » ESLint | Correctif proposé = `npm audit fix --force` (rétrogradation de `@eslint/js`), risque de casser la config ESLint |

## 6.3 Script Supabase à exécuter

Fichier complet : [`supabase/policies.sql`](supabase/policies.sql)

```sql
alter table public.sponsor_requests enable row level security;

alter table public.sponsor_requests
  alter column created_at set default now();

drop policy if exists "sponsor_requests_insert_anon" on public.sponsor_requests;

create policy "sponsor_requests_insert_anon"
on public.sponsor_requests
for insert
to anon
with check (
      char_length(trim(company_name)) between 2 and 120
  and char_length(trim(contact_name)) between 2 and 120
  and char_length(trim(sector))       between 2 and 120
  and char_length(trim(email))        between 5 and 160
  and email like '%_@_%.__%'
  and char_length(trim(phone))        between 6 and 20
  and (message is null or char_length(message) <= 2000)
);
```

## 6.4 Fichiers modifiés ou créés

| Fichier | Nature |
|---|---|
| `.gitignore` | Modifié — exclusion des `.env` |
| `.env` | **Retiré de l'index Git** (fichier local conservé) |
| `.env.example` | Créé |
| `vercel.json` | Créé — en-têtes + rewrite SPA |
| `public/_headers` | Créé — en-têtes Netlify / Cloudflare Pages |
| `supabase/policies.sql` | Créé — RLS |
| `src/pages/DevenirSponsor.jsx` | Modifié — validation, `created_at`, log |
| `src/pages/LoginPage.jsx` | Modifié — clé reCAPTCHA |
| `package.json` / `package-lock.json` | Modifiés — `lottie-react` retiré, mises à jour de sécurité |
| `SECURITY_REPORT.md` | Mis à jour |

---

*Fin de la phase 2 — aucune modification n'a été commitée.*
