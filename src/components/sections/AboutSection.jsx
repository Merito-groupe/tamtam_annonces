import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="bg-[#181329] text-white py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Image d'explication à gauche */}
        <div className="md:col-span-5 flex justify-center [perspective:1000px]">
          <motion.div
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="w-full [transform-style:preserve-3d]"
          >
            <img
              src="/section3-about.png"
              alt="À propos de TAMTAM"
              className="rounded-2xl object-cover shadow-2xl max-h-80 w-full border border-white/10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/500x320/181329/aa9a56?text=Concept+TAMTAM";
              }}
            />
          </motion.div>
        </div>

        {/* Explication du concept à droite */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            C’est quoi TAMTAM ?
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              Chaque matin et chaque soir, des milliers de personnes montent dans les bus et les taxis de notre ville pour aller travailler, étudier ou rentrer chez elles.
            </p>
            <p>
              Pendant le trajet, les passagers sont assis, ils attendent... et ils écoutent !
            </p>
            <div className="p-5 rounded-2xl bg-[#2e274e] border border-[#aa9a56]/40 text-white font-medium shadow-lg">
              « TAMTAM, c'est le moyen le plus simple de diffuser vos messages audios : publicités, annonces ou sensibilisations directement à bord des bus et taxis pendant leurs trajets. »
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};