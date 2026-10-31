import React from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';

export const SponsorsPage = ({ onBack }) => {
  return (
    <div className="w-full bg-slate-900 text-white min-h-screen py-8 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* En-tête */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-[#aa9a56] hover:underline"
        >
          <MaterialIcon name="arrow_back" className="text-base" />
          Retour à l'accueil
        </button>
      </div>

      {/* HERO SECTION ASYMÉTRIQUE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Dominez votre secteur sur l'ensemble de la <span className="text-[#aa9a56]">ville</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Verrouillez votre secteur d'activité. En devenant Sponsor Officiel TAMTAM, nous bloquons l'accès de l'application à vos concurrents directs durant toute la période du contrat.
          </p>
          
          <div className="p-4 bg-white/5 border-l-4 border-[#aa9a56] rounded-r-xl">
            <div className="text-xs text-slate-300">Tarif préférentiel Grands Comptes :</div>
            <div className="text-2xl font-black text-[#aa9a56]">0.60 $ / véhicule / jour <span className="text-xs text-slate-400 font-normal">(engagement long terme)</span></div>
          </div>
        </div>

        {/* FORMULAIRE DE CONTACT PRIVILÉGIÉ */}
        <div className="lg:col-span-5 bg-[#2e274e] border border-[#aa9a56]/40 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4">
          <h3 className="text-lg font-bold text-white">Demander une proposition officielle</h3>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] text-slate-300 uppercase font-bold block mb-1">Nom de l'Entreprise</label>
              <input type="text" placeholder="Ex: Rawbank, Vodacom..." className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#aa9a56]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-300 uppercase font-bold block mb-1">E-mail Professionnel</label>
              <input type="email" placeholder="contact@entreprise.cd" className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#aa9a56]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-300 uppercase font-bold block mb-1">Secteur d'activité</label>
              <input type="text" placeholder="Ex: Banque, Télécom, Boisson" className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#aa9a56]" />
            </div>
            <button type="submit" className="w-full bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] font-bold py-3 rounded-xl text-xs transition-all mt-2">
              Solliciter une Exclusivité
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};