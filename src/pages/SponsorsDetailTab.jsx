import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { BackLink } from '../components/ui/BackLink';

export const SponsorsDetailTab = ({ onNavigate }) => {
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

  const handleCTA = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('/devenir-sponsor');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#2e274e] text-white py-10 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
    >
      {/* Cercles organiques de fond (Glow effets) */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#aa9a56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Navigation / Bouton Retour */}
        <div>
          <BackLink onClick={handleBack} />
        </div>

        {/* SECTION HERO : Invitation à rejoindre les sponsors */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Rejoignez les marques majeures qui dominent l'audio urbain avec Tamtam annonces
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Prenez la parole au cœur de la mobilité quotidienne. En tant que canal de diffusion de publicité audio embarqué dans les transports en commun, Tamtam annonces permet d'atteindre directement <strong>plus de 2 500 personnes quotidiennement</strong> pendant leurs trajets urbains.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={handleCTA}
                className="bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-4 rounded-2xl text-sm transition-all shadow-xl cursor-pointer flex items-center gap-2"
              >
                <span>Devenir Sponsor Officiel</span>
                <MaterialIcon name="north_east" className="text-lg" />
              </button>
            </div>
          </div>

          {/* Image Hero avec forme géométrique en arrière-plan */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-4">
            {/* Formes géométriques décoratives en arrière-plan */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dashed border-[#aa9a56]/40 rounded-3xl transform -rotate-3 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#aa9a56]/15 rounded-3xl transform rotate-3 pointer-events-none" />

            <div className="w-full h-80 sm:h-[400px] rounded-3xl overflow-hidden border-2 border-[#aa9a56]/40 shadow-2xl relative bg-[#2e274e] z-10">
              <img 
                src="https://i.pinimg.com/736x/ba/15/f6/ba15f6a27fcc3b40d2d8a0da1fc0674e.jpg?auto=format&fit=crop&w=800&q=80" 
                alt="Équipe de direction et stratégie marketing Tamtam annonces" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x600/2e274e/aa9a56?text=Tamtam+Annonces";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e274e] via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </section>

        {/* SECTION 2 : Pourquoi choisir Tamtam annonces (4 Cartes Grille) */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black">
              Pourquoi choisir Tamtam annonces ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Un canal de diffusion de publicité audio conçu pour maximiser l'impact, la répétition et l'ancrage mémoriel auprès de plus de 2 500 passagers quotidiens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="card_giftcard" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Période d'Exonération Initiale</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Profitez d'une gratuité totale (0,00 $ USD) sur les frais de diffusion durant toute la période contractuelle de sponsoring d'amorçage.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="percent" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Avantage Tarifaire Garanti (-20 %)</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                À l'issue de la gratuité, continuez à diffuser vos spots audio avec une réduction préférentielle garantie de -20 % sur l'ensemble de vos campagnes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="volume_up" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Diffusion Audio Prioritaire</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Vos messages bénéficient d'un passage prioritaire à l'antenne sur toute la flotte active pour capter l'attention captive des passagers.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="verified" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Option Exclusivité Sectorielle</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Selon la formule choisie, obtenez le verrouillage complet de votre secteur d'activité pour empêcher la diffusion de marques concurrentes.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3 : Comment ça marche ? */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-black">Comment ça marche ?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Un sponsor est un partenaire stratégique qui investit dans l'amorçage du réseau Tamtam annonces afin de s'assurer une présence audio prioritaire et des conditions préférentielles. Le processus s'articule en 3 étapes :
              </p>
            </div>
            
            {/* Deuxième Image avec cadre géométrique */}
            <div className="lg:col-span-4 hidden lg:block relative p-2">
              <div className="absolute -top-2 -right-2 w-full h-full bg-[#aa9a56]/20 rounded-2xl transform rotate-3 pointer-events-none" />
              <div className="relative z-10 overflow-hidden rounded-2xl border border-[#aa9a56]/40 shadow-lg bg-[#2e274e]">
                <img 
                  src="https://i.pinimg.com/736x/d4/c9/3b/d4c93bf8d827e3013de6eeedbba34fe1.jpg?auto=format&fit=crop&w=600&q=80" 
                  alt="Équipe jeune et dynamique en réunion marketing" 
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative space-y-3 p-6 bg-[#2e274e]/80 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-[#aa9a56]">01</span>
              <h4 className="text-lg font-bold">Candidature & Validation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Soumettez votre proposition. Notre équipe étudie votre secteur pour déterminer le type de partenariat applicable (avec avantage tarifaire de -20 % et option d'exclusivité).
              </p>
            </div>

            <div className="relative space-y-3 p-6 bg-[#2e274e]/80 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-[#aa9a56]">02</span>
              <h4 className="text-lg font-bold">Période de Gratuité Initiale</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bénéficiez d'une gratuité totale de diffusion pendant la phase de sponsoring d'amorçage pour toucher plus de 2 500 personnes chaque jour.
              </p>
            </div>

            <div className="relative space-y-3 p-6 bg-[#2e274e]/80 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-[#aa9a56]">03</span>
              <h4 className="text-lg font-bold">Diffusion Préférentielle & Suivi</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Poursuivez vos campagnes avec la réduction préférentielle de -20 % et recevez des rapports mensuels certifiés mesurant les passages de vos annonces audios.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center sm:justify-start">
            <button
              onClick={handleCTA}
              className="bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-4 rounded-xl text-sm transition-all shadow-lg cursor-pointer inline-flex items-center gap-3"
            >
              <span>Devenir Sponsor Maintenant</span>
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </button>
          </div>
        </section>

        {/* SECTION 4 : CTA Final */}
        <section className="bg-gradient-to-r from-[#aa9a56] to-[#8c7e43] text-[#2e274e] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-black">
              Prêt à réserver votre priorité audio sur le réseau ?
            </h3>
            <p className="text-sm sm:text-base font-semibold opacity-90 max-w-2xl">
              Faites entendre votre marque auprès de plus de 2 500 personnes au quotidien via le canal de diffusion audio Tamtam annonces.
            </p>
          </div>
          <button
            onClick={handleCTA}
            className="bg-[#2e274e] hover:bg-[#201b38] text-white font-extrabold px-8 py-4 rounded-2xl text-sm transition-all shadow-xl cursor-pointer whitespace-nowrap"
          >
            Demander une offre sponsor
          </button>
        </section>

      </div>
    </motion.div>
  );
};