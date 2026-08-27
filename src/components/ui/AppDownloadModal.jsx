import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MaterialIcon } from './MaterialIcon';

export const AppDownloadModal = ({ isOpen, onClose, appType = 'annonces' }) => {
  const [platform, setPlatform] = useState('android'); // 'android' | 'ios'
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const playStoreLinks = {
    annonces: 'https://play.google.com/store/apps/details?id=com.merito.tamtam_admin&pcampaignid=web_share',
    driver: 'https://play.google.com/store/apps/details?id=com.merito.tamtam_drivers_app&pcampaignid=web_share'
  };

  const modalContent = {
    annonces: {
      title: 'TAMTAM Annonces',
      subtitle: 'Lancez vos spots publicitaires et touchez des milliers de passagers au quotidien.',
      playLink: playStoreLinks.annonces,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(playStoreLinks.annonces)}&color=2e274e&bgcolor=ffffff`,
      target: 'Pour Entreprises & Annoceurs'
    },
    driver: {
      title: 'TAMTAM Driver',
      subtitle: 'Transformez vos trajets en revenus passifs en diffusant des publicités dans votre véhicule.',
      playLink: playStoreLinks.driver,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(playStoreLinks.driver)}&color=2e274e&bgcolor=ffffff`,
      target: 'Pour Chauffeurs de Taxis & Bus'
    }
  };

  const currentApp = modalContent[appType] || modalContent.annonces;

  const handleIosNotifySubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Logique pour enregistrer l'e-mail (Firebase, Supabase, API, etc.)
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay d'arrière-plan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#2e274e] border border-[#aa9a56]/40 rounded-3xl p-6 shadow-2xl z-10 text-white overflow-hidden"
          >
            {/* Gradient d'ambiance */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#aa9a56]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Bouton de fermeture */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <MaterialIcon name="close" className="text-xl" />
            </button>

            {/* En-tête */}
            <div className="text-center mt-2">
              <span className="inline-block px-3 py-1 bg-[#aa9a56]/20 border border-[#aa9a56]/40 text-[#aa9a56] text-xs font-semibold rounded-full mb-3">
                {currentApp.target}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{currentApp.title}</h3>
              <p className="text-slate-300 text-sm mb-5">{currentApp.subtitle}</p>

              {/* Onglets Sélection Android / iOS */}
              <div className="flex bg-white/5 p-1 rounded-xl mb-6 border border-white/10">
                <button
                  onClick={() => setPlatform('android')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                    platform === 'android'
                      ? 'bg-[#aa9a56] text-[#2e274e] shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <MaterialIcon name="android" className="text-base" />
                  Android
                </button>
                <button
                  onClick={() => setPlatform('ios')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                    platform === 'ios'
                      ? 'bg-[#aa9a56] text-[#2e274e] shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                  </svg>
                  iPhone (iOS)
                </button>
              </div>

              {/* CONTENU ANDROID */}
              {platform === 'android' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white p-4 rounded-2xl inline-block shadow-inner mb-6 border-2 border-[#aa9a56]">
                    <img
                      src={currentApp.qrCodeUrl}
                      alt={`QR Code Google Play Store ${currentApp.title}`}
                      className="w-40 h-40 object-contain mx-auto"
                    />
                    <p className="text-[#2e274e] text-xs font-bold mt-2 flex items-center justify-center gap-1">
                      <MaterialIcon name="qr_code_scanner" className="text-sm" />
                      Scannez pour ouvrir Google Play
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={currentApp.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] font-bold py-3.5 px-5 rounded-xl transition-all duration-200 shadow-md text-sm active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 512 512">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                      </svg>
                      <span>Télécharger sur Google Play</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {/* CONTENU iOS */}
              {platform === 'ios' && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#aa9a56]/20 text-[#aa9a56] rounded-xl">
                      <MaterialIcon name="schedule" className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Version iOS bientôt disponible</h4>
                      <p className="text-xs text-slate-300">L'application est en cours de validation Apple.</p>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center text-emerald-300 text-xs font-semibold my-2">
                      <MaterialIcon name="check_circle" className="text-xl block mx-auto mb-1 text-emerald-400" />
                      Merci ! Vous serez notifié en priorité dès la sortie sur l'App Store.
                    </div>
                  ) : (
                    <form onSubmit={handleIosNotifySubmit} className="space-y-3 mt-4">
                       
                      
                      
                    </form>
                  )}
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};