import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Button } from '../ui/Button';

export const HeroSection = ({ onOpenDownloadModal, onOpenContactModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation des barres de l'onde audio
  const waveHeights = [12, 28, 16, 36, 22, 40, 18, 30, 14, 38, 24, 16, 32, 20];

  return (
    <div className="w-full font-sans">

      {/* ========================================================= */}
      {/* SECTION 1 : HERO SECTION (Fond sombre original #2e274e)   */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-8 py-12 overflow-hidden bg-[#2e274e]">
        {/* Effets de lumière et de dégradé en arrière-plan */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#aa9a56]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#2e274e] border border-[#aa9a56]/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* --- COLONNE GAUCHE : COPYWRITING & ACTIONS --- */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Titre Principal H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-snug tracking-tight mb-2"
            >
              Ne cherchez plus votre audience.{' '}
              Parlez-lui directement{' '}
              là où elle écoute.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Chaque jour, des milliers de passagers prennent les bus et taxis. 
              Assis et attentifs, ils entendent chaque message. Transformez leurs trajets quotidiens 
              en opportunités de croissance avec TAMTAM Annonces.
            </motion.p>

            {/* Boutons d'Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                icon="rocket_launch"
                className="text-base px-8 py-4"
                onClick={onOpenDownloadModal}
              >
                Lancer ma Campagne
              </Button>
              <Button
                variant="glass"
                icon="support_agent"
                className="text-base px-6 py-4"
                onClick={onOpenContactModal}
              >
                Rendez-vous (12 min)
              </Button>
            </motion.div>

          </div>

          {/* --- COLONNE DROITE : MOCKUP MASQUÉ SUR MOBILE, VISIBLE SUR GRAND ÉCRAN --- */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative lg:-mt-64">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { duration: 0.6, ease: 'easeOut' },
                scale: { duration: 0.6, ease: 'easeOut' },
                y: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
              }}
              className="relative w-full max-w-[300px] sm:max-w-[360px]"
            >
              {/* Ombre portée néon en arrière-plan */}
              <div className="absolute inset-0 bg-[#aa9a56]/25 rounded-3xl blur-3xl -z-10 transform scale-95" />

              {/* Image Mockup */}
              <img
                src="/mockup-app.png"
                alt="TAMTAM Annonces App Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/260x500/241e3f/aa9a56?text=App+TAMTAM";
                }}
              />

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 : SLOGAN GRAND ANIMÉ                            */}
      {/* ========================================================= */}
      <section className="w-full bg-white text-[#2e274e] border-y border-slate-200 overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Texte + Boutons (Gauche) */}
          <div className="md:col-span-7 py-4 sm:py-8 px-4 sm:px-8 flex flex-col justify-center">
            
            {/* Slogan Animé */}
            <motion.h2 
              animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.015, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2e274e] leading-tight tracking-tight mb-8"
            >
              Annoncez vos messages là où ils seront vraiment écoutés.
            </motion.h2>

            {/* Boutons Téléchargement */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Google PlayStore */}
              <a
                href="https://play.google.com/store/apps/details?id=com.merito.tamtam_admin&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-5 py-3 rounded-xl transition-all duration-200 font-bold text-sm active:scale-95"
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
              <div className="flex items-center gap-3 bg-slate-100 text-slate-700 px-5 py-3 rounded-xl select-none">
                <svg className="w-6 h-6 fill-slate-500 shrink-0 opacity-80" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-[#8a7b3e] leading-none">Disponible très bientôt</div>
                  <div className="text-sm font-bold leading-tight text-slate-800">App Store (iOS)</div>
                </div>
              </div>

            </div>

          </div>

          {/* Image à Droite avec Arrière-plan Géométrique Incliné / Asymétrique (Style Maquette) */}
          <div className="md:col-span-5 flex items-center justify-center p-4 relative">
            
            {/* Formes Géométriques Floues & Solides en Arrière-plan (Inspirées de la maquette) */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#aa9a56]/30 to-[#aa9a56]/5 rounded-tl-[60px] rounded-br-[120px] rounded-tr-[30px] rounded-bl-[30px] transform translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-4/5 h-4/5 border-2 border-dashed border-[#aa9a56]/40 rounded-tl-[100px] rounded-br-[40px] pointer-events-none" />

            {/* Cadre d'Image Géométrique Arrondi */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-full relative z-10 overflow-hidden rounded-tl-[50px] rounded-tr-[20px] rounded-br-[90px] rounded-bl-[30px] border-4 border-white shadow-2xl bg-white"
            >
              <img 
                src="/section2-listen.png" 
                alt="Audience à l'écoute dans les transports" 
                className="w-full h-[360px] sm:h-[420px] object-cover block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x400/241e3f/aa9a56?text=TAMTAM+Ecoute";
                }}
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3 : C'EST QUOI TAMTAM ?                          */}
      {/* ========================================================= */}
      <section className="w-full bg-[#241e3f] text-white overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Image à Gauche avec Arrière-plan Géométrique Incliné / Asymétrique */}
          <div className="md:col-span-5 flex items-center justify-center p-4 relative order-2 md:order-1">
            
            {/* Formes Géométriques de Fond en contraste avec le fond sombre */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#aa9a56]/20 rounded-tl-[120px] rounded-br-[60px] rounded-tr-[30px] rounded-bl-[40px] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-dashed border-[#aa9a56]/50 rounded-br-[80px] rounded-tl-[30px] pointer-events-none" />

            {/* Cadre d'Image Géométrique Arrondi */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-full relative z-10 overflow-hidden rounded-tl-[100px] rounded-tr-[30px] rounded-br-[40px] rounded-bl-[70px] border-4 border-[#aa9a56]/30 shadow-2xl bg-[#2e274e]"
            >
              <img 
                src="/section3-about.png" 
                alt="À propos de TAMTAM" 
                className="w-full h-[360px] sm:h-[420px] object-cover block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x400/241e3f/aa9a56?text=C'est+quoi+TAMTAM";
                }}
              />
            </motion.div>

          </div>

          {/* Contenu Texte (Droite) */}
          <div className="md:col-span-7 py-4 sm:py-8 px-4 sm:px-8 flex flex-col justify-center space-y-6 order-1 md:order-2">
            
            {/* Titre Animé avec Framer Motion */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              C’est quoi TAMTAM ?
            </motion.h2>

            {/* Texte épuré */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed"
            >
              TAMTAM, c'est le moyen le plus simple de diffuser vos messages audios : publicités, annonces ou sensibilisations directement à bord des bus et taxis pendant leurs trajets.
            </motion.p>

          </div>

        </div>
      </section>

    </div>
  );
};