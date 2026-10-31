import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export default function SponsorsDetail({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
          Sponsors & Partenaires
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Prenez l’exclusivité sectorielle sur l’ensemble de notre flotte urbaine active (0.60 $ / jour / véhicule).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="verified" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Exclusivité Sectorielle</h3>
          </div>
          <p className="text-sm text-slate-300">Soyez le seul marqueur de votre secteur d'activité sur notre réseau.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="directions_car" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Flotte Complète</h3>
          </div>
          <p className="text-sm text-slate-300">Couverture maximale sur l'ensemble des véhicules urbains actifs.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="sell" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Tarif Préférentiel</h3>
          </div>
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