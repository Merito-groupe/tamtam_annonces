import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export default function ChauffeursDetail({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
          Pour Chauffeurs & Transporteurs
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Monétisez chaque trajet en diffusant des publicités audio. Mode hors-ligne et retraits instantanés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="payments" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Revenu Passif</h3>
          </div>
          <p className="text-sm text-slate-300">Gagnez de l'argent simplement en faisant vos trajets habituels.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="wifi_off" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Mode Hors-Ligne</h3>
          </div>
          <p className="text-sm text-slate-300">L'application fonctionne même sans connexion internet permanente.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MaterialIcon name="account_balance_wallet" className="shrink-0 text-3xl text-[#aa9a56]" />
            <h3 className="min-w-0 text-lg font-bold">Retraits Instantanés</h3>
          </div>
          <p className="text-sm text-slate-300">Demandez le virement de vos gains à tout moment sur votre compte.</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => onNavigate('DevenirPartenaire')} 
          className="bg-[#aa9a56] hover:bg-[#8f8145] text-[#2e274e] font-bold px-8 py-4 rounded-xl transition-all"
        >
          Devenir chauffeur partenaire
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