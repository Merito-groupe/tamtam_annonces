import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from '../ui/MaterialIcon';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export const PricingCalculator = ({ onOpenModal }) => {
  const [vehiclesCount, setVehiclesCount] = useState(10);
  const [daysCount, setDaysCount] = useState(7);
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = {
    standard: {
      name: 'Standard',
      rate: 1.30,
      minVehicles: 5,
      minDays: 1,
      badge: 'Flexible',
      desc: 'Parfait pour les lancements rapides, promos et événements.'
    },
    premium: {
      name: 'Premium',
      rate: 1.00,
      minVehicles: 20,
      minDays: 31,
      badge: 'Recommandé',
      desc: 'Pour les marques recherchant une visibilité continue et étendue.'
    },
    humanitaire: {
      name: 'Humanitaire & Social',
      rate: 0.80,
      minVehicles: 20,
      minDays: 31,
      badge: 'ONG & Asbl',
      desc: 'Tarif préférentiel adapté aux campagnes de sensibilisation.'
    },
    sponsor: {
      name: 'Sponsor Officiel',
      rate: 0.60,
      minVehicles: 50,
      minDays: 180,
      badge: 'Exclusivité',
      desc: 'Exclusivité sectorielle totale sur l\'ensemble de la flotte.'
    }
  };

  const currentPlan = plans[selectedPlan];
  const totalPrice = (vehiclesCount * daysCount * currentPlan.rate).toFixed(2);

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <span className="px-3 py-1 bg-[#aa9a56]/20 border border-[#aa9a56]/30 text-[#aa9a56] text-xs font-semibold rounded-full">
          Tarification Transparente
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Simulez votre <span className="text-[#aa9a56]">budget publicitaire</span>
        </h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Calculez instantanément le coût de votre campagne en fonction de la taille de votre flotte et de la durée.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Choix des Plans */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(plans).map((key) => {
            const plan = plans[key];
            const isSelected = selectedPlan === key;
            return (
              <div
                key={key}
                onClick={() => {
                  setSelectedPlan(key);
                  if (vehiclesCount < plan.minVehicles) setVehiclesCount(plan.minVehicles);
                  if (daysCount < plan.minDays) setDaysCount(plan.minDays);
                }}
                className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-[#2e274e] border-[#aa9a56] shadow-xl shadow-[#aa9a56]/10 ring-1 ring-[#aa9a56]'
                    : 'bg-[#2e274e]/60 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-base">{plan.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#aa9a56]/20 text-[#aa9a56] font-semibold">
                    {plan.badge}
                  </span>
                </div>
                <div className="text-2xl font-black text-[#aa9a56] mb-2">
                  {plan.rate.toFixed(2)} $ <span className="text-xs text-slate-400 font-normal">/ véh. / jour</span>
                </div>
                <p className="text-slate-300 text-xs">{plan.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Panneau de Simulation Interactif */}
        <GlassCard className="lg:col-span-5 p-6 sm:p-8 border-[#aa9a56]/40 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <MaterialIcon name="calculate" className="text-[#aa9a56]" />
            Simulateur de Campagne
          </h3>

          {/* Slider 1 : Nombre de Véhicules */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Taille de la flotte :</span>
              <span className="text-[#aa9a56] font-bold">{vehiclesCount} Véhicules</span>
            </div>
            <input
              type="range"
              min={currentPlan.minVehicles}
              max="100"
              value={vehiclesCount}
              onChange={(e) => setVehiclesCount(Number(e.target.value))}
              className="w-full accent-[#aa9a56] bg-black/40 h-2 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400">Min. requis pour cette formule : {currentPlan.minVehicles} véhicules</span>
          </div>

          {/* Slider 2 : Nombre de Jours */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Durée de diffusion :</span>
              <span className="text-[#aa9a56] font-bold">{daysCount} Jours</span>
            </div>
            <input
              type="range"
              min={currentPlan.minDays}
              max="180"
              value={daysCount}
              onChange={(e) => setDaysCount(Number(e.target.value))}
              className="w-full accent-[#aa9a56] bg-black/40 h-2 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400">Min. requis pour cette formule : {currentPlan.minDays} jours</span>
          </div>

          {/* Total Estimé */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Estimation Totale</div>
              <div className="text-3xl font-black text-white">{totalPrice} $ USD</div>
            </div>
            <Button
              variant="primary"
              icon="rocket_launch"
              onClick={onOpenModal}
            >
              Réserver
            </Button>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};