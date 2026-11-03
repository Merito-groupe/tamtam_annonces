import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { BackLink } from '../components/ui/BackLink';

const FIELD =
  'h-14 w-full rounded-2xl border border-[var(--line-strong)] bg-white pl-4 text-[15px] text-[var(--ink)] placeholder:text-[var(--text-4)] transition-colors duration-200 hover:border-[var(--gold-400)] focus:border-[var(--gold-500)] focus:outline-none focus:ring-4 focus:ring-[rgba(217,172,78,0.18)]';

const LINK =
  'rounded-md text-[13px] font-medium text-[var(--text-3)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors duration-200 hover:text-[var(--navy)] hover:decoration-[var(--gold-500)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(217,172,78,0.25)]';

const LINK_ON_DARK =
  'rounded-md font-medium text-[var(--gold-300)] underline decoration-[rgba(242,219,166,0.4)] underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(228,189,98,0.35)]';

export const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // État et référence pour Google reCAPTCHA
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // Récupération de la clé de site v2 (compatible Vite & Create React App)
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) setError('');
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
    setError('Le test de sécurité a expiré. Veuillez le valider à nouveau.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 1. Validation des champs
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // 2. Vérification anti-brute force (reCAPTCHA)
    if (!captchaToken) {
      setError('Veuillez valider le test de sécurité ci-dessous.');
      return;
    }

    setLoading(true);

    try {
      // Remplacez cette simulation par votre véritable appel API backend
      // ex: await api.post('/auth/login', { email, password, captchaToken });
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // En cas de succès :
      if (onNavigate) {
        onNavigate('Home');
      }
    } catch (err) {
      // 3. Réinitialisation obligatoire du reCAPTCHA après un échec
      resetCaptcha();
      setError(err?.response?.data?.message || 'Identifiants incorrects ou erreur serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2e274e] px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-[420px]">

        {/* Retour */}
        <BackLink
          onClick={() => onNavigate && onNavigate('Home')}
          label="Retour au site"
          tone="dark"
        />

        {/* Titre d'intention */}
        <div className="mt-6">
          <h1 className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            Connexion
          </h1>
          <p className="mt-2 text-[15px] leading-[1.6] text-white/60">
            Accédez à votre espace sécurisé.
          </p>
        </div>

        {/* Carte formulaire */}
        <div className="mt-8 rounded-[20px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-md)] sm:p-8">

          {error && (
            <div
              role="alert"
              className="mb-5 flex items-start gap-2 rounded-xl bg-[var(--danger-bg)] px-4 py-3 text-[13px] font-medium leading-[1.5] text-[var(--danger-strong)]"
            >
              <MaterialIcon name="error" className="mt-px text-base" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] font-semibold text-[var(--navy)]"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                className={`${FIELD} pr-4`}
              />
            </div>

            {/* Mot de passe */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-[13px] font-semibold text-[var(--navy)]"
                >
                  Mot de passe
                </label>
                <button
                  type="button"
                  onClick={() =>
                    alert('Veuillez contacter le support pour réinitialiser votre mot de passe.')
                  }
                  className={LINK}
                >
                  Mot de passe oublié ?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${FIELD} pr-12`}
                />

                <button
                  type="button"
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-3)] transition-colors hover:bg-[var(--surface-3)] hover:text-[var(--navy)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(217,172,78,0.3)]"
                >
                  <MaterialIcon
                    name={showPassword ? 'visibility_off' : 'visibility'}
                    className="text-xl"
                  />
                </button>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="overflow-x-auto">
              <div className="flex justify-center py-1">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={SITE_KEY}
                  onChange={handleCaptchaChange}
                  onExpired={handleCaptchaExpired}
                  onError={handleCaptchaExpired}
                />
              </div>
            </div>

            {/* Action principale */}
            <button
              type="submit"
              disabled={loading || !captchaToken}
              aria-busy={loading}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--navy)] px-6 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[var(--navy-700)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(228,189,98,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Vérification…</span>
                </>
              ) : (
                <span>Se connecter</span>
              )}
            </button>

          </form>
        </div>

        {/* Métadonnées */}
        <p className="mt-6 text-center text-[12.5px] leading-[1.6] text-white/55">
          Accès réservé aux comptes TAMTAM.{' '}
          <a
            href="mailto:contact@tamtam-annonces.com"
            className={LINK_ON_DARK}
          >
            Besoin d’aide ?
          </a>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
