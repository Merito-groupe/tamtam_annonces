import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { BackLink } from '../components/ui/BackLink';

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
    <div className="min-h-screen bg-[#2e274e] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Container principal */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        {/* Bouton retour */}
        <BackLink
          onClick={() => onNavigate && onNavigate('Home')}
          label="Retour au site"
          className="mb-6"
        />

        {/* Logo et Titre */}
        <div className="text-center">
          <button 
            type="button"
            className="inline-flex items-center gap-3 cursor-pointer group mb-2 bg-transparent border-0 text-left focus:outline-none"
            onClick={() => onNavigate && onNavigate('Home')}
          >
            <img 
              src="/logo-tamtam.png" 
              alt="TAMTAM Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="text-2xl font-black text-white tracking-wider">
              TAMTAM
            </span>
          </button>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
            Connexion
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Accédez à votre espace sécurisé.
          </p>
        </div>
      </div>

      {/* Formulaire de connexion */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl sm:px-10 text-slate-800">
          
          {/* Message d'erreur */}
          {error && (
            <div role="alert" className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium flex items-center gap-2">
              <MaterialIcon name="error_outline" className="text-base shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Champ Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#2e274e] uppercase tracking-wider mb-1">
                Identifiant / E-mail
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <MaterialIcon name="mail_outline" className="text-lg" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2e274e] focus:border-transparent transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-xs font-bold text-[#2e274e] uppercase tracking-wider">
                  Mot de passe
                </label>
                <button
                  type="button"
                  onClick={() => alert('Veuillez contacter le support pour réinitialiser votre mot de passe.')}
                  className="text-xs text-[#aa9a56] hover:underline font-semibold cursor-pointer"
                >
                  Oublié ?
                </button>
              </div>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <MaterialIcon name="lock_outline" className="text-lg" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2e274e] focus:border-transparent transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <MaterialIcon name={showPassword ? 'visibility_off' : 'visibility'} className="text-lg" />
                </button>
              </div>
            </div>

            {/* Google reCAPTCHA v2 */}
            <div className="flex justify-center my-4 overflow-x-auto">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpired}
                onError={handleCaptchaExpired}
              />
            </div>

            {/* Bouton Valider */}
            <div>
              <button
                type="submit"
                disabled={loading || !captchaToken}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#2e274e] hover:bg-[#3d3466] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e274e] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Vérification...</span>
                  </>
                ) : (
                  <>
                    <span>Se connecter</span>
                    <MaterialIcon name="arrow_forward" className="text-base" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;