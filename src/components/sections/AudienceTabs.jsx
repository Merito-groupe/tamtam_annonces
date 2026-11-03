
import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MaterialIcon } from '../ui/MaterialIcon';

export const AudienceTabs = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const cards = [
    {
      id: 'annonceurs',
      title: 'Pour les Annonceurs & PME',
      desc: 'Diffusez vos messages directement dans la cabine des véhicules et touchez une audience captive sans saut de pub.',
      image: '/section2-listen.png',
      path: '/offre-annonceurs', // L'URL exacte gérée par votre routeur
      targetPage: 'AnnonceursDetail'
    },
    {
      id: 'chauffeurs',
      title: 'Pour Chauffeurs & Transporteurs',
      desc: 'Monétisez chaque trajet en diffusant des publicités audio. Mode hors-ligne et retraits instantanés.',
      image: '/driver-hero.jpg',
      path: '/offre-chauffeurs',
      targetPage: 'ChauffeursDetail'
    },
    {
      id: 'sponsors',
      title: 'Sponsors & Partenaires',
      desc: 'Prenez l’exclusivité sectorielle sur l’ensemble de notre flotte urbaine active (0.60 $ / jour / véhicule).',
      image: '/sponsor-banner.jpg',
      path: '/offre-sponsors',
      targetPage: 'SponsorsDetail'
    }
  ];

  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const cardWidth = 340;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % cards.length;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
    scrollToCard(prevIndex);
  };

  const handleRedirect = (card) => {
    // Si une fonction onNavigate est fournie par le composant parent
    if (typeof onNavigate === 'function') {
      onNavigate(card.path || card.targetPage);
    } else {
      // Sinon redirection directe via React Router
      navigate(card.path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCard = cards[activeIndex];

  return (
    <section className="w-full bg-[#2e274e] text-white py-16 px-6 sm:px-12 rounded-3xl my-8 overflow-hidden border border-[#aa9a56]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* BLOC GAUCHE */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight mb-4">
              L'Écosystème TAMTAM
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sélectionnez votre profil pour découvrir nos offres dédiées et l'impact direct sur votre activité.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => handleRedirect(activeCard)}
              className="inline-flex items-center gap-3 bg-[#aa9a56]/15 hover:bg-[#aa9a56] text-white hover:text-[#2e274e] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 group cursor-pointer"
            >
              <span>Découvrir l'offre</span>
              <MaterialIcon name="north_east" className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* BLOC DROIT : Carrousel */}
        <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden">
          
          <div 
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scrollbar-none py-2 px-1 snap-x scroll-smooth"
          >
            {cards.map((card, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setActiveIndex(idx);
                    handleRedirect(card);
                  }}
                  className={`min-w-[280px] sm:min-w-[320px] max-w-[340px] bg-white text-[#2e274e] rounded-3xl p-4 flex flex-col justify-between shadow-xl cursor-pointer snap-start transition-all border-2 ${
                    isActive ? 'border-[#aa9a56] ring-2 ring-[#aa9a56]/20' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <div>
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x250/2e274e/aa9a56?text=TAMTAM";
                        }}
                      />
                    </div>

                    <h3 className="text-lg font-bold leading-snug mb-2 text-[#2e274e]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#aa9a56]">
                    <span>Voir la page dédiée</span>
                    <MaterialIcon name="arrow_forward" className="text-base" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contrôles carrousel */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 active:scale-95 text-white transition-all cursor-pointer"
                aria-label="Précédent"
              >
                <MaterialIcon name="arrow_back" className="text-lg" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 active:scale-95 text-white transition-all cursor-pointer"
                aria-label="Suivant"
              >
                <MaterialIcon name="arrow_forward" className="text-lg" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex ? 'w-8 bg-[#aa9a56]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};