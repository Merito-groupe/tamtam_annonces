// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { MaterialIcon } from "../components/ui/MaterialIcon";


// export const AnnonceursDetailTab = ({ onNavigate }) => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   const handleBack = () => {
//     if (typeof onNavigate === 'function') {
//       onNavigate('/');
//     } else {
//       window.history.back();
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4 }}
//       className="min-h-screen bg-[#2e274e] text-white py-12 px-6 sm:px-12"
//     >
//       <div className="max-w-5xl mx-auto space-y-10">
        
//         {/* Navigation / Back Button */}
//         <button
//           onClick={handleBack}
//           className="inline-flex items-center gap-2 text-sm font-bold text-[#aa9a56] hover:underline cursor-pointer"
//         >
//           <MaterialIcon name="arrow_back" className="text-lg" />
//           <span>Retour à l'accueil</span>
//         </button>

//         {/* Header Section */}
//         <div className="space-y-4">
//           <span className="bg-[#aa9a56]/20 text-[#aa9a56] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#aa9a56]/30">
//             TAMTAM Annonces
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-black leading-tight">
//             Offre pour les <span className="text-[#aa9a56]">Annonceurs & PME</span>
//           </h1>
//           <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
//             Diffusez vos messages audio directement dans la cabine des véhicules de transport urbain. Touchez une audience captive, ultra-ciblée et garantie sans interruption.
//           </p>
//         </div>

//         {/* Hero Visual / Image */}
//         <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
//           <img 
//             src="/section2-listen.png" 
//             alt="Annonceurs TAMTAM"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://via.placeholder.com/800x400/2e274e/aa9a56?text=TAMTAM+Annonceurs";
//             }}
//           />
//         </div>

//         {/* Key Points Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
//           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
//             <MaterialIcon name="volume_up" className="text-3xl text-[#aa9a56]" />
//             <h3 className="text-lg font-bold">100% d'Écoute Captive</h3>
//             <p className="text-xs text-slate-300 leading-relaxed">
//               Les passagers sont engagés tout au long du trajet, garantissant une mémorisation maximale de vos spots.
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
//             <MaterialIcon name="location_on" className="text-3xl text-[#aa9a56]" />
//             <h3 className="text-lg font-bold">Ciblage Géographique</h3>
//             <p className="text-xs text-slate-300 leading-relaxed">
//               Planifiez la diffusion selon des circuits précis, des quartiers spécifiques ou des créneaux horaires clés.
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
//             <MaterialIcon name="analytics" className="text-3xl text-[#aa9a56]" />
//             <h3 className="text-lg font-bold">Rapports & Certifications</h3>
//             <p className="text-xs text-slate-300 leading-relaxed">
//               Suivez le nombre réel de diffusions et la couverture géographique grâce à nos rapports certifiés GPS.
//             </p>
//           </div>
//         </div>

//         {/* Call To Action */}
//         <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div>
//             <h4 className="text-lg font-bold">Prêt à lancer votre première campagne ?</h4>
//             <p className="text-xs text-slate-300">Créez votre compte annonceur et diffusez en moins de 24h.</p>
//           </div>
//           <button 
//             type="button"
//             className="w-full sm:w-auto bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg cursor-pointer"
//           >
//             Lancer une campagne
//           </button>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // je voudrai structure mes codes comme dans le ui joint, tu peux le faire !

// // voici les parties que doivent avoire  le ui :

// // Cta avec les btn et texte 

// // ==================
// // Pourquoi chossire tamtam annonces

// // ======

// // comment ça marche

// // tu vas donner les explication sur comment çamarche
// // =========

// // call to action commencer maintennant ou lancer une campagne maintennant


// // il faut strucurer et arranger les componnent ou les widget de ce ui un peu comme comme sur l'image joint



// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { MaterialIcon } from "../components/ui/MaterialIcon";

// export const AnnonceursDetailTab = ({ onNavigate }) => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   const handleBack = () => {
//     if (typeof onNavigate === 'function') {
//       onNavigate('/offre-annonceurs');
//     } else {
//       window.history.back();
//     }
//   };

//   const handleCTA = () => {
//     if (typeof onNavigate === 'function') {
//       onNavigate('/offre-annonceurs');
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4 }}
//       className="min-h-screen bg-[#2e274e] text-white py-10 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
//     >
//       {/* Halo lumineux et formes géométriques globales de fond */}
//       <div className="absolute top-10 right-0 w-96 h-96 bg-[#aa9a56]/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute top-[40%] -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
//         {/* Navigation / Bouton Retour */}
        
//         {/* 1. SECTION HERO & CTA : Présentation de l'offre */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-7 space-y-6">
             
            
//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
//               Prenez la parole directement auprès de vos clients avec <span className="text-[#aa9a56]">Tamtam annonces</span>
//             </h1>
            
//             <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
//               Diffusion de messages audio captivants dans les transports urbains. Touchez plus de <strong className="text-white font-bold">2 500 passagers au quotidien</strong> pendant leurs déplacements, avec zéro distraction.
//             </p>

//             <div className="pt-2 flex flex-wrap items-center gap-4">
//               <button
//                 onClick={handleCTA}
//                 className="bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-4 rounded-2xl text-sm transition-all cursor-pointer flex items-center gap-2 hover:scale-105"
//               >
//                 <span>Lancer une campagne maintenant</span>
//                 <MaterialIcon name="north_east" className="text-lg" />
//               </button>
//               <button
//                 onClick={handleBack}
//                 className="bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-4 rounded-2xl text-sm transition-all cursor-pointer"
//               >
//                 Découvrir les offres
//               </button>
//             </div>
//           </div>

//           {/* Visual Hero style "Cakap" : Visuel circulaire avec forme géométrique en arrière-plan et badges flottants */}
//           <div className="lg:col-span-5 relative flex items-center justify-center p-6">
//             {/* Forme géométrique décorative (Rond/Ovale d'arrière-plan avec rotation) */}
//             <div className="absolute top-0 right-0 w-80 h-80 border-2 border-dashed border-[#aa9a56]/40 rounded-full transform rotate-12 pointer-events-none" />
//             <div className="absolute -bottom-2 -left-2 w-72 h-72 bg-[#aa9a56]/15 rounded-3xl transform -rotate-6 pointer-events-none" />

//             {/* Cadre photo principal circulaire */}
//             <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#aa9a56]/50 shadow-2xl relative bg-[#2e274e] z-10">
//               <img 
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
//                 alt="Directrice marketing et annonceur Tamtam annonces" 
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Badge Flottant Audience */}
//             <div className="absolute -top-2 left-0 bg-[#2e274e]/90 border border-[#aa9a56]/50 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
//                 <MaterialIcon name="groups" className="text-xl" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-300">Audience Quotidienne</p>
//                 <p className="text-sm font-extrabold text-white">+2 500 passagers</p>
//               </div>
//             </div>

//             {/* Badge Flottant Audio */}
//             <div className="absolute -bottom-4 right-2 bg-[#2e274e]/90 border border-[#aa9a56]/50 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
//                 <MaterialIcon name="record_voice_over" className="text-xl" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-300">Format</p>
//                 <p className="text-sm font-extrabold text-white">Spot Audio HD</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 2. SECTION : Pourquoi choisir Tamtam annonces */}
//         <section className="space-y-12">
//           <div className="text-center max-w-3xl mx-auto space-y-3">
//             <h2 className="text-2xl sm:text-4xl font-black">
//               Pourquoi choisir <span className="text-[#aa9a56]">Tamtam annonces</span> ?
//             </h2>
//             <p className="text-slate-300 text-sm sm:text-base">
//               Une solution de communication audio pensée pour offrir une visibilité maximale et un fort impact sur votre cible.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
//               <div className="w-14 h-14 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
//                 <MaterialIcon name="volume_up" className="text-3xl" />
//               </div>
//               <h3 className="text-xl font-bold">100% d'Écoute Captive</h3>
//               <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
//                 Les passagers sont installés confortablement tout au long du trajet. Votre message est écouté sans zapping ni interruption.
//               </p>
//             </div>

//             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
//               <div className="w-14 h-14 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
//                 <MaterialIcon name="location_on" className="text-3xl" />
//               </div>
//               <h3 className="text-xl font-bold">Ciblage Géographique</h3>
//               <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
//                 Programmez vos diffusions en fonction des lignes de transport, des quartiers ciblés et des créneaux horaires les plus stratégiques.
//               </p>
//             </div>

//             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
//               <div className="w-14 h-14 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
//                 <MaterialIcon name="analytics" className="text-3xl" />
//               </div>
//               <h3 className="text-xl font-bold">Rapports & Certification</h3>
//               <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
//                 Accédez à des statistiques précises et vérifiables sur le nombre de diffusions effectuées et l'estimation de l'audience touchée.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* 3. SECTION : Comment ça marche ? (Layout à 2 colonnes avec compositions de visuels circulaires) */}
//         <section className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* Composition visuelle circulaire d'équipe sur la gauche */}
//             <div className="lg:col-span-5 relative flex justify-center items-center">
//               {/* Forme géométrique de fond pour le groupe d'images */}
//               <div className="absolute w-72 h-72 bg-[#aa9a56]/10 rounded-full blur-xl pointer-events-none" />
//               <div className="absolute -top-4 -left-4 w-full h-full border border-[#aa9a56]/30 rounded-3xl transform rotate-6 pointer-events-none" />

//               <div className="grid grid-cols-2 gap-4 relative z-10">
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg">
//                   <img 
//                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" 
//                     alt="Création de contenu publicitaire" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg mt-8">
//                   <img 
//                     src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&q=80" 
//                     alt="Jeunes entrepreneurs en réflexion" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Étapes du processus "Comment ça marche" */}
//             <div className="lg:col-span-7 space-y-8">
//               <div className="space-y-3">
//                 <span className="text-[#aa9a56] font-bold text-xs uppercase tracking-widest">Processus Simple & Rapide</span>
//                 <h2 className="text-2xl sm:text-4xl font-black">Comment ça marche ?</h2>
//                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                   Lancer votre campagne publicitaire sur Tamtam annonces ne prend que quelques minutes.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
//                   <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
//                     01
//                   </span>
//                   <div>
//                     <h4 className="text-lg font-bold">Création ou dépôt du spot audio</h4>
//                     <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//                       Fournissez votre spot audio au format MP3 ou faites appel à notre studio pour concevoir un message percutant.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
//                   <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
//                     02
//                   </span>
//                   <div>
//                     <h4 className="text-lg font-bold">Paramétrage de la campagne</h4>
//                     <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//                       Choisissez vos zones géographiques, le volume de diffusions souhaité et la période de diffusion.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
//                   <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
//                     03
//                   </span>
//                   <div>
//                     <h4 className="text-lg font-bold">Diffusion & Suivi des performances</h4>
//                     <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//                       Votre publicité est diffusée à bord des véhicules partners. Vous recevez vos rapports détaillés.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* 4. SECTION : Call to action final */}
//         <section className="bg-gradient-to-r from-[#aa9a56] to-[#8c7e43] text-[#2e274e] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-3 text-center lg:text-left">
//             <h3 className="text-2xl sm:text-4xl font-black">
//               Prêt à booster la visibilité de votre entreprise ?
//             </h3>
//             <p className="text-sm sm:text-base font-semibold opacity-90 max-w-2xl">
//               Diffusez votre message auprès de plus de 2 500 passagers quotidiens grâce au canal audio Tamtam annonces.
//             </p>
//           </div>
          
//           <button
//             onClick={handleCTA}
//             className="bg-[#2e274e] hover:bg-[#201b38] text-white font-extrabold px-8 py-4 rounded-2xl text-sm transition-all cursor-pointer whitespace-nowrap hover:scale-105"
//           >
//             Lancer une campagne maintenant
//           </button>
//         </section>

//       </div>
//     </motion.div>
//   );
// };




import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from "../components/ui/MaterialIcon";

export const AnnonceursDetailTab = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('/');
    } else {
      window.history.back();
    }
  };

  const handleCTA = () => {
    if (typeof onNavigate === 'function') {
      // Redirection vers le formulaire de création de campagne
      onNavigate('/creer-campagne');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#2e274e] text-white py-10 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
    >
      {/* Halos et formes géométriques de fond */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#aa9a56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Navigation / Bouton Retour */}
        

        {/* 1. SECTION HERO & CTA : Présentation de l'offre */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
             
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Prenez la parole directement auprès de vos clients avec Tamtam annonces
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Diffusion de messages audio captivants dans les transports urbains. Touchez plus de <strong className="font-bold">2 500 passagers au quotidien</strong> pendant leurs déplacements, avec zéro distraction.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCTA}
                className="bg-[#aa9a56] hover:bg-[#aa9a56]/90 text-[#2e274e] font-extrabold px-8 py-4 rounded-2xl text-sm transition-all cursor-pointer flex items-center gap-2 hover:scale-105"
              >
                <span>Lancer une campagne maintenant</span>
                <MaterialIcon name="north_east" className="text-lg" />
              </button>
              <button
                onClick={handleBack}
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-4 rounded-2xl text-sm transition-all cursor-pointer"
              >
                Voir les autres offres
              </button>
            </div>
          </div>

          {/* Visual Hero avec cadre géométrique et badges flottants */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-6">
            <div className="absolute top-0 right-0 w-80 h-80 border-2 border-dashed border-[#aa9a56]/40 rounded-full transform rotate-12 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-72 h-72 bg-[#aa9a56]/15 rounded-3xl transform -rotate-6 pointer-events-none" />

            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#aa9a56]/50 shadow-2xl relative bg-[#2e274e] z-10">
              <img 
                src="https://i.pinimg.com/736x/73/6b/25/736b252366c42f8618ed8afe22496bdb.jpg?auto=format&fit=crop&w=800&q=80" 
                alt="Directrice marketing et annonceur Tamtam annonces" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-2 left-0 bg-[#2e274e]/90 border border-[#aa9a56]/50 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                <MaterialIcon name="groups" className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-300">Audience Quotidienne</p>
                <p className="text-sm font-extrabold text-white">+2 500 passagers</p>
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 bg-[#2e274e]/90 border border-[#aa9a56]/50 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <MaterialIcon name="record_voice_over" className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-300">Format</p>
                <p className="text-sm font-extrabold text-white">Spot Audio HD</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION : Pourquoi choisir Tamtam annonces */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black">
              Pourquoi choisir Tamtam annonces ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Une solution de communication audio pensée pour offrir une visibilité maximale et un fort impact sur votre cible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="volume_up" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">100% d'Écoute Captive</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Les passagers sont installés confortablement tout au long du trajet. Votre message est écouté sans zapping ni interruption.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="location_on" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Ciblage Géographique</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Programmez vos diffusions en fonction des lignes de transport, des quartiers ciblés et des créneaux horaires les plus stratégiques.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:border-[#aa9a56]/50 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#aa9a56]/20 flex items-center justify-center text-[#aa9a56]">
                  <MaterialIcon name="analytics" className="text-3xl" />
                </div>
                <h3 className="min-w-0 text-xl font-bold">Rapports & Certification</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Accédez à des statistiques précises et vérifiables sur le nombre de diffusions effectuées et l'estimation de l'audience touchée.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECTION : Comment ça marche ?
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-[#aa9a56]/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#aa9a56]/30 rounded-3xl transform rotate-6 pointer-events-none" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" 
                    alt="Création de contenu publicitaire" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&q=80" 
                    alt="Jeunes entrepreneurs en réflexion" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                 <h2 className="text-2xl sm:text-4xl font-black">Comment ça marche ?</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Lancer votre campagne publicitaire sur Tamtam annonces ne prend que quelques minutes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
                  <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="text-lg font-bold">Création ou dépôt du spot audio</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
  Importez votre spot audio au format MP3. Nous assurons la diffusion exclusive de votre message sur notre canal.
</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
                  <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="text-lg font-bold">Paramétrage de la campagne</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Choisissez vos zones géographiques, le volume de diffusions souhaité et la période de diffusion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
                  <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="text-lg font-bold">Diffusion & Suivi des performances</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Votre publicité est diffusée à bord des véhicules partenaires. Vous recevez vos rapports détaillés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section> */}


        {/* 3. SECTION : Comment ça marche ? (Processus fusionné) */}
<section className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* Visuels circulaires */}
    <div className="lg:col-span-5 relative flex justify-center items-center">
      <div className="absolute w-72 h-72 bg-[#aa9a56]/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -top-4 -left-4 w-full h-full border border-[#aa9a56]/30 rounded-3xl transform rotate-6 pointer-events-none" />

      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg">
          <img 
            src="https://i.pinimg.com/736x/b4/11/7b/b4117b7a39618e11d0868ead385cbbdf.jpg?auto=format&fit=crop&w=400&q=80" 
            alt="Annonceur sur smartphone" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#aa9a56]/50 shadow-lg mt-8">
          <img 
            src="https://i.pinimg.com/1200x/a0/19/90/a01990c71a307cc685b1ed267491361d.jpg?auto=format&fit=crop&w=400&q=80" 
            alt="Passagers écoutant un spot audio" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Étapes du processus */}
    <div className="lg:col-span-7 space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-4xl font-black">Comment ça marche ?</h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Lancer votre campagne sur le canal de diffusion Tamtam ne prend que quelques étapes depuis votre téléphone.
        </p>
      </div>

      <div className="space-y-4">
        {/* Étape 1 */}
        <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
          <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
            01
          </span>
          <div>
            <h4 className="text-lg font-bold">Téléchargement & Création de compte</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Téléchargez l'application mobile Tamtam et créez votre compte annonceur en quelques secondes.
            </p>
          </div>
        </div>

        {/* Étape 2 */}
        <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
          <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
            02
          </span>
          <div>
            <h4 className="text-lg font-bold">Soumission de votre spot audio</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Importez votre spot publicitaire prêt à l'emploi au format MP3 directement depuis l'application.
            </p>
          </div>
        </div>

        {/* Étape 3 */}
        <div className="flex items-start gap-4 p-4 bg-[#2e274e]/60 rounded-2xl border border-white/5">
          <span className="w-10 h-10 rounded-xl bg-[#aa9a56] text-[#2e274e] font-black flex items-center justify-center shrink-0">
            03
          </span>
          <div>
            <h4 className="text-lg font-bold">Paramétrage & Diffusion</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Définissez votre cible, validez votre campagne et suivez la diffusion de votre message dans les véhicules.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* 4. SECTION : Call to action final */}
        <section className="bg-gradient-to-r from-[#aa9a56] to-[#8c7e43] text-[#2e274e] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-black">
              Prêt à booster la visibilité de votre entreprise ?
            </h3>
            <p className="text-sm sm:text-base font-semibold opacity-90 max-w-2xl">
              Diffusez votre message auprès de plus de 2 500 passagers quotidiens grâce au canal audio Tamtam annonces.
            </p>
          </div>
          
          <button
            onClick={handleCTA}
            className="bg-[#2e274e] hover:bg-[#201b38] text-white font-extrabold px-8 py-4 rounded-2xl text-sm transition-all cursor-pointer whitespace-nowrap hover:scale-105"
          >
            Lancer une campagne maintenant
          </button>
        </section>

      </div>
    </motion.div>
  );
};