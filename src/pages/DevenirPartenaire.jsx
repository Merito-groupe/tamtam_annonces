import React from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from "../components/ui/MaterialIcon";


export const DevenirPartenaire = () => {
  return (
    <div className="min-h-screen bg-[#2e274e] text-white flex flex-col justify-between font-sans selection:bg-[#aa9a56] selection:text-[#2e274e]">
      
      {/* CONTENEUR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24 w-full">

        {/* ========================================================= */}
        {/* SECTION 1 : HERO & TÉLÉCHARGEMENT APP CHAUFFEUR           */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#241e3f] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-lg">
          
          {/* Bloc Texte & CTA (Gauche) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Devenez chauffeur partenaire de <span className="text-[#aa9a56]">TAMTAM</span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rejoignez le réseau officiel des transporteurs partenaires. Intégrez notre réseau de diffusion urbain dès aujourd'hui en téléchargeant l'application <strong className="text-white font-semibold">TAMTAM Chauffeur</strong>.
            </p>

            {/* Boutons Téléchargement */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Google PlayStore */}
              <a
                href="https://play.google.com/store/apps/details?id=com.merito.tamtam_drivers_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-5 py-3 rounded-xl transition-all duration-200 shadow-md font-bold text-sm active:scale-95"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none">Disponible sur</div>
                  <div className="text-sm font-extrabold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store iOS */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 text-slate-300 px-5 py-3 rounded-xl select-none">
                <svg className="w-6 h-6 fill-current opacity-70" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-[#aa9a56]">Disponible très bientôt</div>
                  <div className="text-sm font-bold leading-tight">App Store (iOS)</div>
                </div>
              </div>

            </div>
          </div>

          {/* Mockup d'application (Droite) avec Effet 3D */}
          <div className="lg:col-span-5 flex justify-center items-center [perspective:1000px]">
            <motion.div
              whileHover={{ rotateY: 12, rotateX: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="[transform-style:preserve-3d]"
            >
              <img 
                src="/chauffeur-un.png" 
                alt="TAMTAM Chauffeur App" 
                className="max-h-[380px] w-auto drop-shadow-xl object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/260x500/241e3f/aa9a56?text=App+Chauffeur";
                }}
              />
            </motion.div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* SECTION 2 : SLOGAN GRAND ANIMÉ + IMAGE À DROITE           */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#241e3f]/60 border border-white/5 rounded-2xl p-6 sm:p-10">
          
          {/* Texte Géant Animé (Gauche) */}
          <div className="md:col-span-7">
            <motion.h2 
              animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.015, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
            >
              Passez de simple conducteur à <span className="text-[#aa9a56]">acteur clé de l'information urbaine</span>.
            </motion.h2>
          </div>

          {/* Image à Droite avec Animation 3D */}
          <div className="md:col-span-5 flex justify-center [perspective:1000px]">
            <motion.div
              whileHover={{ rotateY: -15, rotateX: 8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-full [transform-style:preserve-3d]"
            >
              <img 
                src="/section2-driver.png" 
                alt="Chauffeur au volant" 
                className="rounded-xl object-cover shadow-lg border border-white/10 max-h-64 w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x300/241e3f/aa9a56?text=Chauffeur+TAMTAM";
                }}
              />
            </motion.div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* SECTION 3 : POURQUOI DEVENIR PARTENAIRE ? (IMAGE À GAUCHE)*/}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#241e3f] border border-white/5 rounded-2xl p-6 sm:p-10">
  
  {/* Image à Gauche avec Animation 3D */}
  <div className="md:col-span-5 flex justify-center items-center [perspective:1000px]">
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      className="w-full flex justify-center [transform-style:preserve-3d]"
    >
      <img 
        src="/mockup.png" 
        alt="Avantages pour les chauffeurs" 
        className="w-full h-auto max-h-[400px] object-contain drop-shadow-lg"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/500x320/241e3f/aa9a56?text=Avantages+Chauffeur";
        }}
      />
    </motion.div>
  </div>

  {/* Contenu Texte (Droite) */}
  <div className="md:col-span-7 space-y-5">
    <h2 className="text-2xl sm:text-4xl font-black text-white">
      Pourquoi rejoindre le réseau TAMTAM ?
    </h2>

    <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
      <p>
        En sillonnant la ville au quotidien, votre véhicule constitue un canal privilégié pour toucher la population au cœur de ses déplacements.
      </p>
      <p>
        En devenant partenaire, vous transformez votre habitacle en un véritable relais d'information certifié. Vous participez à la diffusion d’annonces utiles et d'informations clés auprès de vos passagers tout en optimisant l'activité de votre véhicule.
      </p>
      <div className="p-4 rounded-xl bg-[#2e274e] border border-[#aa9a56]/50 text-white font-medium text-base shadow-sm">
        « Mettez votre véhicule au service de la communication urbaine et valorisez chaque kilomètre parcouru au sein de notre réseau. »
      </div>
    </div>
  </div>

</section>

      </div>

      {/* COMPOSANT FOOTER INCLUS */}
      {/* <Footer /> */}

    </div>
  );
};

export default DevenirPartenaire;