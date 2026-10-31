import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from "../components/ui/MaterialIcon";
import { supabase } from '../services/supabase'; // Ajustez le chemin vers votre client Supabase

export const DevenirSponsor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // État local pour le formulaire
  const [formData, setFormData] = useState({
    company_name: '',
    sector: '',
    contact_name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Mise à jour des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Envoi des données vers Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Insertion dans la table Supabase 'sponsor_requests'
      const { data, error } = await supabase
        .from('sponsor_requests')
        .insert([
          {
            company_name: formData.company_name,
            sector: formData.sector,
            contact_name: formData.contact_name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            created_at: new Date()
          }
        ]);

      if (error) throw error;

      setSubmitted(true);
    } catch (error) {
      console.error('Erreur Supabase :', error);
      setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2e274e] text-white flex flex-col justify-between font-sans selection:bg-[#aa9a56] selection:text-[#2e274e]">
      
      {/* CONTENEUR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24 w-full">

        {/* SECTION 1 : HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#241e3f] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Associez votre marque au <span className="text-[#aa9a56]">canal de diffusion urbain</span> de référence.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Devenez Sponsor Officiel du réseau TAMTAM et bénéficiez d'un positionnement stratégique inédit au cœur de la mobilité quotidienne.
            </p>

            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md font-bold text-sm active:scale-95"
              >
                <MaterialIcon name="mail" className="text-xl" />
                Demander une offre de sponsoring
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center [perspective:1000px]">
            <motion.div
              whileHover={{ rotateY: 12, rotateX: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full max-w-sm bg-[#2e274e]/80 border border-[#aa9a56]/30 rounded-2xl p-8 text-center shadow-2xl [transform-style:preserve-3d]"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#aa9a56]/20 border border-[#aa9a56]/50 flex items-center justify-center text-[#aa9a56] mb-4">
                <MaterialIcon name="workspace_premium" className="text-5xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 : AVANTAGES */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Un privilège d'impact <span className="text-[#aa9a56]">sur mesure</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Le programme Sponsor de TAMTAM est conçu pour les entreprises leader souhaitant dominer leur marché.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#241e3f] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="p-3 rounded-xl bg-[#aa9a56]/10 text-[#aa9a56] w-fit">
                <MaterialIcon name="verified_user" className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-white">Exclusivité Totale</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aucun concurrent direct de votre secteur d'activité ne peut diffuser sur la plateforme durant toute la durée de la convention.
              </p>
            </div>

            <div className="bg-[#241e3f] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="p-3 rounded-xl bg-[#aa9a56]/10 text-[#aa9a56] w-fit">
                <MaterialIcon name="campaign" className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-white">Priorité de Diffusion</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Vos messages sont diffusés en priorité sur l'intégralité de la flotte de véhicules partenaires.
              </p>
            </div>

            <div className="bg-[#241e3f] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="p-3 rounded-xl bg-[#aa9a56]/10 text-[#aa9a56] w-fit">
                <MaterialIcon name="groups" className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-white">Audience Captive</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Touchez quotidiennement des milliers de passagers attentifs tout au long de leurs trajets urbains.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 : FORMULAIRE CONFIDENTIEL DYNAMISÉ */}
        <section id="contact-form" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#241e3f] border border-[#aa9a56]/30 rounded-2xl p-6 sm:p-10 shadow-xl">
          
          <div className="md:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Échangez avec notre <span className="text-[#aa9a56]">direction commerciale</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Les conditions tarifaires, avantages bilatéraux et modalités d'exclusivité sont transmis sur présentation institutionnelle personnalisée.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MaterialIcon name="check_circle" className="text-[#aa9a56]" />
                <span>Proposition commerciale personnalisée</span>
              </div>
              <div className="flex items-center gap-3">
                <MaterialIcon name="check_circle" className="text-[#aa9a56]" />
                <span>Analyse d'impact sectoriel</span>
              </div>
              <div className="flex items-center gap-3">
                <MaterialIcon name="check_circle" className="text-[#aa9a56]" />
                <span>Écosystème de suivi et contrôle dédié (Monitoring)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-[#2e274e] border border-white/10 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MaterialIcon name="check" className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Demande transmise avec succès</h3>
                <p className="text-sm text-slate-300">
                  Notre équipe commerciale prendra directement contact avec votre Direction Général ou Marketing sous 24 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Formulaire de Contact Sponsor</h3>
                
                {errorMessage && (
                  <div className="p-3 bg-red-500/20 border border-red-500 text-red-300 text-xs rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom de l'entreprise *</label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      required 
                      placeholder="ex: Votre Société"
                      className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Secteur d'activité *</label>
                    <input 
                      type="text" 
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required 
                      placeholder="ex: Agroalimentaire, Banque..."
                      className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom du responsable *</label>
                    <input 
                      type="text" 
                      name="contact_name"
                      value={formData.contact_name}
                      onChange={handleChange}
                      required 
                      placeholder="Votre nom complet"
                      className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Téléphone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      placeholder="+243..."
                      className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Adresse E-mail professionnelle *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="direction@entreprise.com"
                    className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message ou précisions</label>
                  <textarea 
                    rows={3} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Saisissez votre demande..."
                    className="w-full bg-[#241e3f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#aa9a56]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#aa9a56] hover:bg-[#b8a966] text-[#2e274e] py-3 rounded-lg font-extrabold text-sm transition-all duration-200 shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <span>Demander une proposition de partenariat</span>
                  )}
                </button>
              </form>
            )}
          </div>

        </section>

      </div>

    </div>
  );
};

export default DevenirSponsor;