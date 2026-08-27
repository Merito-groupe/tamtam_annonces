import React from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export const LancerCampagne = () => {
  return (
    <div className="min-h-screen bg-[#2e274e] text-white flex flex-col justify-between font-sans selection:bg-[#aa9a56] selection:text-[#2e274e]">
      
      {/* CONTENEUR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24 w-full">

        {/* ========================================================= */}
        {/* SECTION 1 : HERO & TÉLÉCHARGEMENT APP                     */}
        {/* ========================================================= */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#241e3f] border border-white/5 rounded-3xl p-6 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Halo d'ambiance d'arrière-plan */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#aa9a56]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Bloc Texte & CTA (Gauche) */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
            >
              Diffusez vos annonces auprès de +2 500 personnes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa9a56] to-[#d4c585]">
                quotidiennement
              </span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl"
            >
              Commencez votre campagne marketing dès aujourd'hui en téléchargeant l'application <strong className="text-white font-semibold">TAMTAM Annonces</strong>.
            </motion.p>

            {/* Boutons Téléchargement */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Google PlayStore */}
              <a
                href="https://play.google.com/store/apps/details?id=com.merito.tamtam_admin&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-5 py-3 rounded-xl transition-all duration-200 shadow-md font-bold text-sm active:scale-95"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none">Disponible sur</div>
                  <div className="text-sm font-extrabold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store iOS */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 text-slate-300 px-5 py-3 rounded-xl select-none">
                <svg className="w-6 h-6 fill-current opacity-70 shrink-0" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-[#aa9a56]">Disponible très bientôt</div>
                  <div className="text-sm font-bold leading-tight">App Store (iOS)</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mockup d'application (Droite) avec Animation Flottante */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#aa9a56]/20 blur-2xl rounded-full transform scale-90 -z-10" />
              <img 
                src="/app-mockup.png" 
                alt="TAMTAM Annonces App" 
                className="max-h-[380px] sm:max-h-[420px] w-auto drop-shadow-2xl object-contain select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/260x500/241e3f/aa9a56?text=App+TAMTAM";
                }}
              />
            </motion.div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* SECTION 2 : SLOGAN GRAND ANIMÉ + IMAGE À DROITE           */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#241e3f]/60 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* Texte Géant Animé (Gauche) */}
          <div className="md:col-span-7 space-y-6">
            <motion.h2 
              animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.01, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
            >
              Annoncez vos messages là où ils seront <span className="text-[#aa9a56]">vraiment écoutés</span>.
            </motion.h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Commencez votre campagne marketing dès aujourd'hui en téléchargeant l'application <strong className="text-white font-semibold">TAMTAM Annonces</strong>.
            </p>
            
            {/* Boutons Téléchargement */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.merito.tamtam_admin&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-5 py-3 rounded-xl transition-all duration-200 shadow-md font-bold text-sm active:scale-95"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none">Disponible sur</div>
                  <div className="text-sm font-extrabold leading-tight">Google Play</div>
                </div>
              </a>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 text-slate-300 px-5 py-3 rounded-xl select-none">
                <svg className="w-6 h-6 fill-current opacity-70 shrink-0" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-[#aa9a56]">Disponible très bientôt</div>
                  <div className="text-sm font-bold leading-tight">App Store (iOS)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image à Droite avec Cadre Asymétrique */}
          <div className="md:col-span-5 flex justify-center items-center relative p-2">
            
            {/* Formes géométriques d'arrière-plan */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#aa9a56]/20 rounded-tl-[60px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-3/4 h-3/4 border-2 border-dashed border-[#aa9a56]/40 rounded-tl-[80px] rounded-br-[30px] pointer-events-none" />

            {/* Conteneur d'image masqué */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-full relative z-10 overflow-hidden rounded-tl-[50px] rounded-tr-[20px] rounded-br-[80px] rounded-bl-[20px] border-2 border-[#aa9a56]/40 shadow-xl bg-[#2e274e]"
            >
              <img 
                src="/section2-listen.png" 
                alt="Audience à l'écoute dans les transports" 
                className="object-cover h-64 sm:h-72 w-full block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x300/241e3f/aa9a56?text=TAMTAM+Ecoute";
                }}
              />
            </motion.div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* SECTION 3 : C'EST QUOI TAMTAM ? (IMAGE À GAUCHE)          */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#241e3f] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* Image à Gauche avec Cadre Asymétrique Inverse */}
          <div className="md:col-span-5 flex justify-center items-center relative p-2 order-2 md:order-1">
            
            {/* Formes de fond en miroir */}
            <div className="absolute -top-3 -left-3 w-full h-full bg-[#aa9a56]/20 rounded-tl-[80px] rounded-br-[50px] rounded-tr-[20px] rounded-bl-[20px] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-3/4 h-3/4 border-2 border-dashed border-[#aa9a56]/40 rounded-br-[70px] rounded-tl-[20px] pointer-events-none" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-full relative z-10 overflow-hidden rounded-tl-[80px] rounded-tr-[20px] rounded-br-[30px] rounded-bl-[60px] border-2 border-[#aa9a56]/40 shadow-xl bg-[#2e274e]"
            >
              <img 
                src="/section3-about.png" 
                alt="À propos de TAMTAM" 
                className="object-cover h-64 sm:h-72 w-full block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x320/241e3f/aa9a56?text=C'est+quoi+TAMTAM";
                }}
              />
            </motion.div>
          </div>

          {/* Contenu Texte (Droite) */}
          <div className="md:col-span-7 space-y-5 order-1 md:order-2">
            
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              C’est quoi <span className="text-[#aa9a56]">TAMTAM</span> ?
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Chaque matin et chaque soir, des milliers de personnes montent dans les bus et les taxis de notre ville pour aller travailler, étudier ou rentrer chez elles.
              </p>
              <p>
                Pendant le trajet, les passagers sont assis, ils attendent... et ils écoutent !
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#2e274e] border border-[#aa9a56]/40 text-white font-medium text-sm sm:text-base shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full " />
                <p className="pl-2">
                  « TAMTAM, c'est le canal de diffusion le plus simple pour vos annonces audios : publicités, messages d'information ou de sensibilisation directement à bord des bus et taxis pendant leurs trajets.»
                </p>
              </div>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
};

export default LancerCampagne;