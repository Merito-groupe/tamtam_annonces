import React from 'react';
import { motion } from 'framer-motion';

export const SloganSection = () => {
  return (
    <section className="bg-[#201a37] text-white py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Message animé à gauche */}
        <div className="md:col-span-7">
          <motion.h2
            animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.01, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
          >
            Annoncez vos messages là où ils seront <span className="text-[#aa9a56]">vraiment écoutés</span>.
          </motion.h2>
        </div>

        {/* Visuel illustration à droite */}
        <div className="md:col-span-5 flex justify-center [perspective:1000px]">
          <motion.div
            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="w-full [transform-style:preserve-3d]"
          >
            <img
              src="/section2-listen.png"
              alt="Audience à l'écoute dans les transports"
              className="rounded-2xl object-cover shadow-2xl max-h-72 w-full border border-white/10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/500x300/201a37/aa9a56?text=Audience+Captive";
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};