import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { BackLink } from '../components/ui/BackLink';

export const ChauffeursPage = ({ onOpenDownloadModal, onBack }) => {
  return (
    <div className="w-full bg-slate-900 text-white min-h-screen py-8 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* En-tête */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <BackLink onClick={onBack} />
      </div>

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Transformez votre véhicule en source de revenus passifs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Installez TAMTAM Driver, connectez l'application au système audio de votre véhicule et gagnez de l'argent à chaque publicité diffusée pendant vos trajets.
          </p>
          <button
            onClick={() => onOpenDownloadModal('driver')}
            className="inline-flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-6 py-3.5 rounded-xl text-sm font-bold transition-all"
          >
            <MaterialIcon name="directions_car" className="text-lg" />
            <span>Télécharger TAMTAM Driver</span>
          </button>
        </div>

        <div className="md:col-span-5 bg-[#2e274e] border border-[#aa9a56]/40 p-6 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Pourquoi nous rejoindre ?</h3>
          <ul className="space-y-3 text-xs text-slate-200">
            <li className="flex items-center gap-3">
              <MaterialIcon name="wifi_off" className="text-[#aa9a56] text-base" />
              <span><strong>Fonctionne Hors-Ligne :</strong> Les pubs diffusent même sans réseau.</span>
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon name="account_balance_wallet" className="text-[#aa9a56] text-base" />
              <span><strong>Retraits Rapides :</strong> Encaissez vos gains directement sur Mobile Money.</span>
            </li>
            <li className="flex items-center gap-3">
              <MaterialIcon name="volume_up" className="text-[#aa9a56] text-base" />
              <span><strong>Volume Automatique :</strong> Gestion fluide entre la musique et les annonces.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ÉTAPES SIMPLES */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-white text-center mb-8">Comment ça marche ?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Téléchargez l'App", desc: "Créez votre compte chauffeur en 2 minutes." },
            { step: "2", title: "Connectez le son", desc: "Branchez votre téléphone en Bluetooth ou Auxiliaire." },
            { step: "3", title: "Roulez & Gagnez", desc: "L'application gère les annonces automatiquement." }
          ].map((s, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center mx-auto text-sm">
                {s.step}
              </div>
              <h4 className="font-bold text-white">{s.title}</h4>
              <p className="text-slate-400 text-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};