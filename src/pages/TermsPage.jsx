import React from 'react';
import { BackLink } from '../components/ui/BackLink';

export const TermsPage = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-800 py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="mb-10 border-b border-slate-200 pb-6">
          <BackLink
            onClick={() => onNavigate && onNavigate('Home')}
            tone="light"
            className="mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-black text-[#2e274e] tracking-tight mb-2">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Intro */}
        <p className="mb-8 text-sm sm:text-base leading-relaxed text-slate-700">
          En utilisant l'application TAMTAM, vous acceptez les présentes Conditions Générales d'Utilisation (CGU). Si vous n'êtes pas d'accord, veuillez ne pas utiliser le service. Pour toute question, contactez-nous aux coordonnées figurant à la fin de ce document.
        </p>

        {/* Contenu principal */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
          
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">1. Qui sommes-nous ?</h2>
            <p>
              L'écosystème publicitaire audio <strong>TAMTAM</strong> (comprenant les applications mobiles <strong>TAMTAM Annonces</strong> et <strong>TAMTAM Driver</strong>) est développé, édité et exploité à titre exclusif par <strong>MERITO GROUPE</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">2. Acceptation des CGU</h2>
            <p>
              L'utilisation de la plateforme et des applications TAMTAM vaut acceptation pleine et entière des présentes CGU. Ces CGU peuvent être modifiées à tout moment par <strong>MERITO GROUPE</strong>. L'utilisateur sera informé de toute modification par notification ou via un moyen de communication fourni lors de son inscription. La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">3. Accès au service</h2>
            <p>
              L'accès à TAMTAM nécessite une connexion internet. Les frais de connexion, d'équipement et de données mobiles sont à la charge exclusive de l'utilisateur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">4. Rôles et Profils Utilisateurs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Annonceurs & PME (TAMTAM Annonces) :</strong> Permet la création, le téléversement de spots audio, la gestion de budgets et le suivi statistique des campagnes publicitaires.
              </li>
              <li>
                <strong>Chauffeurs & Transporteurs (TAMTAM Driver) :</strong> Permet la diffusion des spots audio publicitaires géolocalisés à bord des véhicules de transport public et la rémunération des trajets effectués.
              </li>
              <li>
                <strong>Sponsors & Partenaires :</strong> Permet la réservation d'exclusivité sectorielle sur la flotte urbaine active.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">5. Modération et Validation des Contenus</h2>
            <p>
              Notre équipe chez <strong>MERITO GROUPE</strong> valide chaque spot publicitaire audio avant sa diffusion effective sur le réseau pour garantir le respect strict des droits humains, de l'équité des genres et bannir tout propos haineux, diffamatoire ou illégal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">6. Modèle Financier, Devises et Paiement des Chauffeurs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Devise de référence :</strong> Toutes les transactions, facturations et rémunérations au sein du système sont établies en <strong>Dollar Américain (USD)</strong> ou son équivalent en monnaie locale au taux applicable.
              </li>
              <li>
                <strong>Seuil de paiement des chauffeurs :</strong> Le versement des gains accumulés par un chauffeur via l'application TAMTAM Driver est déclenché dès que le solde de son compte atteint ou dépasse <strong>5 USD (cinq Dollars Américains)</strong>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">7. Engagements des Utilisateurs</h2>
            <p>En utilisant la plateforme TAMTAM, chaque utilisateur s'engage à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir des données d'identification exactes et maintenir la sécurité de ses identifiants.</li>
              <li>Ne pas téléverser ou diffuser de contenus non autorisés ou non validés par l'équipe de modération.</li>
              <li>Ne pas interférer avec les mécanismes de suivi par géolocalisation et les algorithmes de comptage des trajets.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">8. Propriété Intellectuelle</h2>
            <p>
              L'ensemble des logiciels, marques, architectures techniques et éléments visuels de la plateforme TAMTAM sont la propriété exclusive de <strong>MERITO GROUPE</strong>. Toute reproduction ou tentative de rétro-ingénierie est strictement interdite.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#2e274e]">9. Contact & Support</h2>
            <p className="text-xs sm:text-sm">
              Pour toute question technique, litige ou demande d'assistance administrative : <br />
              <span className="font-semibold text-slate-800">E-mail :</span> meritogroup2022@gmail.com / retasongloire12346@gmail.com <br />
              <span className="font-semibold text-slate-800">Téléphone / WhatsApp :</span> +243 842 138 532
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;