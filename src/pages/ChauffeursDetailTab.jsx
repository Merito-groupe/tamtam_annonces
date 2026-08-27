import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from "../components/ui/MaterialIcon";

export const ChauffeursDetailTab = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('/');
    } else {
      window.history.back();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#2e274e] text-white py-12 px-6 sm:px-12"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Navigation / Back Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#aa9a56] hover:underline cursor-pointer"
        >
          <MaterialIcon name="arrow_back" className="text-lg" />
          <span>Retour à l'accueil</span>
        </button>

        {/* Header Section */}
        <div className="space-y-4">
          <span className="bg-[#aa9a56]/20 text-[#aa9a56] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#aa9a56]/30">
            TAMTAM Driver
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Pour <span className="text-[#aa9a56]">Chauffeurs & Transporteurs</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Transformez votre véhicule en canal de diffusion. Monétisez chacun de vos trajets quotidiens sans changer vos habitudes de conduite.
          </p>
        </div>

        {/* Hero Visual / Image */}
        <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
          <img 
            src="/driver-hero.png" 
            alt="Chauffeurs TAMTAM"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x400/2e274e/aa9a56?text=TAMTAM+Driver";
            }}
          />
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
            <MaterialIcon name="monetization_on" className="text-3xl text-[#aa9a56]" />
            <h3 className="text-lg font-bold">Revenus Complémentaires</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Gagnez de l'argent automatiquement à chaque publicité lue pendant vos trajets urbains.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
            <MaterialIcon name="wifi_off" className="text-3xl text-[#aa9a56]" />
            <h3 className="text-lg font-bold">Mode Hors-Ligne</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              L'application fonctionne même sans connexion Internet permanente dans votre zone de transport.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
            <MaterialIcon name="account_balance_wallet" className="text-3xl text-[#aa9a56]" />
            <h3 className="text-lg font-bold">Retraits Instantanés</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transférez vos gains directement vers votre compte Mobile Money rapidement et en toute sécurité.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold">Rejoignez la flotte des chauffeurs TAMTAM</h4>
            <p className="text-xs text-slate-300">Inscrivez votre véhicule et commencez à générer des gains.</p>
          </div>
          <button 
            type="button"
            className="w-full sm:w-auto bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg cursor-pointer"
          >
            Télécharger TAMTAM Driver
          </button>
        </div>

      </div>
    </motion.div>
  );
};