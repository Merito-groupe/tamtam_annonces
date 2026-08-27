import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export default function SponsorsDetail({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="bg-[#aa9a56]/20 text-[#aa9a56] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Grands Comptes
        </span>
        <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
          Sponsors & Partenaires
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Prenez l’exclusivité sectorielle sur l’ensemble de notre flotte urbaine active (0.60 $ / jour / véhicule).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="verified" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Exclusivité Sectorielle</h3>
          <p className="text-sm text-slate-300">Soyez le seul marqueur de votre secteur d'activité sur notre réseau.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="directions_car" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Flotte Complète</h3>
          <p className="text-sm text-slate-300">Couverture maximale sur l'ensemble des véhicules urbains actifs.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="sell" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Tarif Préférentiel</h3>
          <p className="text-sm text-slate-300">Tarification avantageuse fixée à 0.60 $ / jour par véhicule.</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => onNavigate('DevenirSponsor')} 
          className="bg-[#aa9a56] hover:bg-[#8f8145] text-[#2e274e] font-bold px-8 py-4 rounded-xl transition-all"
        >
          Devenir Sponsor
        </button>
        <button 
          onClick={() => onNavigate('Home')} 
          className="border border-white/20 hover:bg-white/10 text-white font-bold px-6 py-4 rounded-xl transition-all"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}