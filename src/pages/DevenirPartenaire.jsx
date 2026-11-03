import { motion } from 'framer-motion';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export const DevenirPartenaire = () => {
  return (
    <div className="min-h-screen bg-[#2e274e] text-white flex flex-col justify-between font-sans overflow-x-clip selection:bg-[var(--gold)] selection:text-[var(--navy-900)]">

      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section className="bg-[#2e274e] pt-5 pb-3 sm:pt-8 sm:pb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7 min-w-0 space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Devenez chauffeur partenaire de TAMTAM.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rejoignez le réseau officiel des transporteurs partenaires. Intégrez notre réseau de diffusion urbain dès aujourd'hui en téléchargeant l'application <strong className="font-semibold text-white">TAMTAM Chauffeur</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.merito.tamtam_drivers_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[var(--gold)] hover:bg-[var(--gold-400)] text-[var(--navy-900)] px-5 py-3 rounded-xl transition-all duration-200 font-bold text-sm active:scale-95"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none">Disponible sur</div>
                  <div className="text-sm font-extrabold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <div className="flex items-center gap-3 bg-white/8 text-slate-300 px-5 py-3 rounded-xl select-none">
                <svg className="w-6 h-6 fill-current opacity-70 shrink-0" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.9 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-[var(--gold-300)]">Disponible très bientôt</div>
                  <div className="text-sm font-bold leading-tight">App Store (iOS)</div>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 min-w-0 flex justify-center items-center [perspective:1000px]">
            <motion.div
              whileHover={{ rotateY: 12, rotateX: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="[transform-style:preserve-3d]"
            >
              <img
                src="/chauffeur-un.png"
                alt="TAMTAM Chauffeur App"
                className="max-h-[380px] w-auto max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/260x500/241e3f/aa9a56?text=App+Chauffeur";
                }}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 2 — SLOGAN + IMAGE
          ================================================================ */}
      <section className="bg-[var(--canvas)] pt-6 pb-4 sm:pt-8 sm:pb-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-7 min-w-0">
            <motion.h2
              animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.015, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight"
            >
              Passez de simple conducteur à acteur clé de l'information urbaine.
            </motion.h2>
          </div>

          <div className="md:col-span-5 min-w-0 flex justify-center [perspective:1000px]">
            <motion.div
              whileHover={{ rotateY: -15, rotateX: 8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180, damping: 12 }}
              className="w-full [transform-style:preserve-3d]"
            >
              <img
                src="/section2-driver.png"
                alt="Chauffeur au volant"
                className="rounded-2xl object-cover max-h-64 w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x300/241e3f/aa9a56?text=Chauffeur+TAMTAM";
                }}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 3 — POURQUOI REJOINDRE
          ================================================================ */}
      <section className="bg-[#2e274e] pt-6 pb-4 sm:pt-8 sm:pb-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-5 min-w-0 flex justify-center items-center [perspective:1000px] order-2 md:order-1">
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180, damping: 12 }}
              className="w-full flex justify-center [transform-style:preserve-3d]"
            >
              <img
                src="/mockup.png"
                alt="Avantages pour les chauffeurs"
                className="w-full h-auto max-h-[400px] object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x320/241e3f/aa9a56?text=Avantages+Chauffeur";
                }}
              />
            </motion.div>
          </div>

          <div className="md:col-span-7 min-w-0 space-y-5 order-1 md:order-2">
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
              <div className="p-4 rounded-2xl bg-[#241e3f] text-white font-medium text-sm sm:text-base">
                <span className="flex items-start gap-3">
                  <MaterialIcon name="format_quote" className="text-[var(--gold-300)] text-xl shrink-0" />
                  <span>
                    « Mettez votre véhicule au service de la communication urbaine et valorisez chaque kilomètre parcouru au sein de notre réseau. »
                  </span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DevenirPartenaire;
