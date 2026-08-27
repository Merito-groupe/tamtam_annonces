import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export default function AnnonceursDetail({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="bg-[#aa9a56]/20 text-[#aa9a56] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          TAMTAM Annonces
        </span>
        <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
          Pour les Annonceurs & PME
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Diffusez vos messages directement dans la cabine des véhicules et touchez une audience captive sans saut de pub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="campaign" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Audience Captive</h3>
          <p className="text-sm text-slate-300">Vos spots sont écoutés sans interruption pendant la durée des trajets.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="location_on" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Ciblage Géographique</h3>
          <p className="text-sm text-slate-300">Ciblez précisément les zones urbaines et axes stratégiques de votre choix.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <MaterialIcon name="analytics" className="text-3xl text-[#aa9a56] mb-4" />
          <h3 className="text-lg font-bold mb-2">Statistiques en direct</h3>
          <p className="text-sm text-slate-300">Suivez le nombre de diffusions et l'audience atteinte en temps réel.</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => onNavigate('LancerCampagne')} 
          className="bg-[#aa9a56] hover:bg-[#8f8145] text-[#2e274e] font-bold px-8 py-4 rounded-xl transition-all"
        >
          Lancer une campagne
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