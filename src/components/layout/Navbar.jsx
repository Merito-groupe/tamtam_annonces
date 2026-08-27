import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Navbar = ({ onNavigate, onTabChange }) => {
  const [isJeVoudraisOpen, setIsJeVoudraisOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jeVoudraisRef = useRef(null);
  const contactRef = useRef(null);

  // Fermeture au clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (jeVoudraisRef.current && !jeVoudraisRef.current.contains(event.target)) {
        setIsJeVoudraisOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (targetKey) => {
    setIsJeVoudraisOpen(false);
    setIsMobileMenuOpen(false);

    // Appelle la fonction de navigation disponible
    if (onNavigate) {
      onNavigate(targetKey);
    } else if (onTabChange) {
      onTabChange(targetKey);
    }
  };

  // Les clés d'actions (utilisez le même format que celui géré dans App.jsx / le Parent)
  const actionsList = [
    {
      id: 'sponsor',
      key: 'DevenirSponsor', // Ou 'sponsor' selon votre App.jsx
      title: 'Devenir sponsor',
      description: 'Sponsoriser le lancement de tamtam',
      icon: 'stars',
    },
    {
      id: 'campagne',
      key: 'LancerCampagne', // Ou 'campagne' selon votre App.jsx
      title: 'Lancer une campagne',
      description: 'Toucher plus de 2500 personnes',
      icon: 'campaign',
    },
    {
      id: 'partenaire',
      key: 'DevenirPartenaire', // Ou 'partenaire' selon votre App.jsx
      title: 'Devenir partenaire',
      description: 'Augmentez vos revenus en diffusant les publicités',
      icon: 'handshake',
    }
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto bg-[#2e274e]/80 backdrop-blur-md border border-[#aa9a56]/30 rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/40">
        
        {/* GAUCHE : Dropdown "Je voudrai" */}
        <div className="hidden md:block relative" ref={jeVoudraisRef}>
          <button
            onClick={() => setIsJeVoudraisOpen(!isJeVoudraisOpen)}
            className="bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] font-bold px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-[#aa9a56]/20 text-sm"
          >
            <MaterialIcon name="tune" className="text-lg" />
            <span>Je voudrai</span>
            <MaterialIcon 
              name="expand_more" 
              className={`text-lg transition-transform duration-200 ${isJeVoudraisOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          <AnimatePresence>
            {isJeVoudraisOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 mt-3 w-80 bg-[#1f1938] border border-[#aa9a56]/40 rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl"
              >
                <div className="space-y-1">
                  {actionsList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleAction(item.key)}
                      className="w-full text-left p-3 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-[#aa9a56]/15 text-[#aa9a56] group-hover:bg-[#aa9a56] group-hover:text-[#2e274e] transition-colors mt-0.5">
                        <MaterialIcon name={item.icon} className="text-xl" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#aa9a56] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-300 leading-snug mt-0.5">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MILIEU : Logo PNG TAMTAM */}
        <div 
          className="flex items-center gap-3 cursor-pointer mx-auto md:mx-0"
          onClick={() => handleAction('Home')}
        >
          <img 
            src="/logo-tamtam.png" 
            alt="TAMTAM Logo" 
            className="h-10 w-auto object-contain hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white leading-none">TAMTAM</span>
            {/* <span className="text-[10px] text-[#aa9a56] font-medium tracking-widest uppercase mt-0.5">
              Audio Ads Network
            </span> */}
          </div>
        </div>

        {/* DROITE : Contactez-nous */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 px-4 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2"
            >
              <MaterialIcon name="support_agent" className="text-lg text-[#aa9a56]" />
              <span>Contactez-nous</span>
              <MaterialIcon 
                name="expand_more" 
                className={`text-lg transition-transform duration-200 ${isContactOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-56 bg-[#1f1938] border border-white/15 rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl"
                >
                  <a
                    href="https://wa.me/243991743573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-500/15 hover:text-emerald-400 text-slate-200 transition-colors text-sm font-medium"
                    onClick={() => setIsContactOpen(false)}
                  >
                    <MaterialIcon name="chat" className="text-emerald-400 text-xl" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:contact@meritogroupe.com"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-sky-500/15 hover:text-sky-400 text-slate-200 transition-colors text-sm font-medium"
                    onClick={() => setIsContactOpen(false)}
                  >
                    <MaterialIcon name="mail" className="text-sky-400 text-xl" />
                    <span>Mail</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 text-slate-200 hover:text-white"
        >
          <MaterialIcon name={isMobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 bg-[#1f1938] border border-[#aa9a56]/30 rounded-2xl p-4 shadow-2xl space-y-4"
          >
            <div className="text-xs font-bold text-[#aa9a56] uppercase tracking-wider px-2">
              Je voudrai...
            </div>
            
            <div className="space-y-2">
              {actionsList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAction(item.key)}
                  className="w-full flex items-start gap-3 p-3 rounded-xl bg-white/5 text-left text-white active:bg-white/10"
                >
                  <MaterialIcon name={item.icon} className="text-[#aa9a56] text-xl mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                Contactez-nous
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/243991743573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-semibold"
                >
                  <MaterialIcon name="chat" className="text-base" />
                  WhatsApp
                </a>
                <a
                  href="mailto:contact@meritogroupe.com"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-sky-500/10 text-sky-400 text-xs font-semibold"
                >
                  <MaterialIcon name="mail" className="text-base" />
                  Mail
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;