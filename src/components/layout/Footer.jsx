import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Footer = ({ onNavigate, onTabChange }) => {

  // Méthode de redirection uniforme
  const handleAction = (targetKey) => {
    if (onNavigate) {
      onNavigate(targetKey);
    } else if (onTabChange) {
      onTabChange(targetKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Liste des pages / vues gérées par App.jsx
  const navLinks = [
    { key: 'Home', label: 'Accueil' },
    { key: 'DevenirSponsor', label: 'Devenir Sponsor' },
    { key: 'LancerCampagne', label: 'Lancer une Campagne' },
    { key: 'DevenirPartenaire', label: 'Devenir Partenaire' },
  ];

  // Liens légaux
  const legalLinks = [
    { key: 'Terms', label: "Conditions d'utilisation" },
    { key: 'Privacy', label: 'Politique de confidentialité' },
  ];

  const actionsList = [
    {
      id: 'sponsor',
      key: 'DevenirSponsor',
      title: 'Devenir sponsor',
      description: 'Sponsoriser le lancement de tamtam',
      icon: 'stars',
    },
    {
      id: 'campagne',
      key: 'LancerCampagne',
      title: 'Lancer une campagne',
      description: 'Toucher plus de 2500 personnes',
      icon: 'campaign',
    },
    {
      id: 'partenaire',
      key: 'DevenirPartenaire',
      title: 'Devenir partenaire',
      description: 'Augmentez vos revenus en diffusant les publicités',
      icon: 'handshake',
    }
  ];

  // Liste des Campus
  const campuses = [
    {
      city: 'Goma',
      address: '002, Av. La frontière, Q. Katindo, DRC'
    },
    {
      city: 'Kinshasa',
      address: 'Lukunga, Commune de Ngaliema, Avenue Mbama non loin de L\'école la borne'
    },
    {
      city: 'Bunia',
      address: 'Quartier Lumumba, Avenue Ituri non loin de la galerie Kisumba'
    },
    {
      city: 'Lubumbashi',
      address: '174B Chaussée de Kasenga, Q. Bel-Air, C. Kampemba, RDC'
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-12 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">

        {/* 1. MARQUE & LIENS RAPIDES */}
        <div className="space-y-4 lg:col-span-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group w-fit"
            onClick={() => handleAction('Home')}
          >
            {/* Logo TAMTAM */}
            <img 
              src="/logo-tamtam.png" 
              alt="TAMTAM Logo" 
              className="h-10 w-auto object-contain hover:scale-105 transition-transform" 
            />
            <span className="text-xl font-black text-[#2e274e] tracking-wider group-hover:text-[#aa9a56] transition-colors">
              TAMTAM
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
            Annoncez vos messages là où ils seront vraiment écoutés.
          </p>

          {/* Navigation Rapide & Légal */}
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-xs font-bold text-[#2e274e] uppercase tracking-wider mb-2">Liens Rapides</h5>
              <ul className="space-y-1.5 text-xs font-medium">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      type="button"
                      onClick={() => handleAction(link.key)}
                      className="text-slate-600 hover:text-[#aa9a56] transition-colors underline-offset-4 hover:underline cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-[#2e274e] uppercase tracking-wider mb-2">Légal</h5>
              <ul className="space-y-1.5 text-xs font-medium">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      type="button"
                      onClick={() => handleAction(link.key)}
                      className="text-slate-600 hover:text-[#aa9a56] transition-colors underline-offset-4 hover:underline cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. ACTIONS DE NAVIGATION */}
        <div className="space-y-3 lg:col-span-3">
          <h4 className="text-xs font-bold text-[#2e274e] uppercase tracking-wider">Je voudrai...</h4>
          <div className="space-y-2">
            {actionsList.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleAction(item.key)}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center gap-3 group text-slate-800 border border-slate-200 cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-[#2e274e]/10 text-[#2e274e] group-hover:bg-[#2e274e] group-hover:text-white transition-colors shrink-0">
                  <MaterialIcon name={item.icon} className="text-lg" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-slate-800 group-hover:text-[#2e274e] transition-colors truncate">
                    {item.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. TÉLÉCHARGER L'APP */}
        <div className="space-y-3 lg:col-span-2">
          <h4 className="text-xs font-bold text-[#2e274e] uppercase tracking-wider">Télécharger l'App</h4>
          <div className="flex flex-col gap-2.5">

            <a
              href="https://play.google.com/store/apps/details?id=com.merito.tamtam_admin&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#2e274e] hover:bg-[#3d3466] text-white px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md font-bold text-sm active:scale-95"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-slate-300 leading-none">Disponible sur</div>
                <div className="text-xs font-extrabold leading-tight">Google Play</div>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-slate-100 border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl select-none opacity-80">
              <svg className="w-5 h-5 fill-current opacity-70 shrink-0" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-[#aa9a56]">Disponible très bientôt</div>
                <div className="text-xs font-bold leading-tight text-slate-700">App Store (iOS)</div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. NOS CAMPUS & CONTACTS */}
        <div className="space-y-3 lg:col-span-3">
          <h4 className="text-xs font-bold text-[#2e274e] uppercase tracking-wider">Nos Campus</h4>
          <div className="text-xs text-slate-500 space-y-2.5">

            {/* Liste des Campus */}
            {campuses.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <MaterialIcon name="location_on" className="text-[#aa9a56] text-sm shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-700">Campus {item.city} : </span>
                  <span className="text-slate-500">{item.address}</span>
                </div>
              </div>
            ))}

            {/* Téléphone et Email */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <p className="flex items-center gap-2">
                <MaterialIcon name="call" className="text-[#aa9a56] text-sm shrink-0" />
                <span className="font-medium text-slate-700">+243 842 138 532</span>
              </p>
              <p className="flex items-center gap-2">
                <MaterialIcon name="mail" className="text-[#aa9a56] text-sm shrink-0" />
                <span className="font-medium text-slate-700">contact@tamtam-annonces.com</span>

              </p>
            </div>

          </div>
        </div>

      </div>

      {/* SECTION INFÉRIEURE : COPYRIGHT, LOGO ENEO & LIENS */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} MERITO GROUPE. Tous droits réservés.</span>
          
          {/* Logo ENEO 360 avec Redirection */}
          <a 
            href="https://www.eneo360.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
            title="Visiter Eneo 360"
          >
            <img 
              src="/logo-eneo.png" 
              alt="Eneo 360 Logo" 
              className="h-6 w-auto object-contain" 
            />
          </a>
        </div>

        <div className="flex items-center gap-6">

          <button
            type="button"
            onClick={() => handleAction('Login')}
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-[11px]"
            title="Connexion membre"
          >
            Mon compte
          </button>
          <button
            type="button"
            onClick={() => handleAction('Terms')}
            className="hover:text-slate-800 transition-colors cursor-pointer"
          >
            Conditions d'utilisation
          </button>
          <button
            type="button"
            onClick={() => handleAction('Privacy')}
            className="hover:text-slate-800 transition-colors cursor-pointer"
          >
            Politique de confidentialité
          </button>

          {/* Lien Espace Interne (Monitoring) */}
          <button
            type="button"
            onClick={() => {
              window.location.href = 'https://monitorings.tamtam-annonces.com/login'; 
            }}
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-[11px]"
            title="Connexion membre"
          >
            Espace Interne
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;