import React from 'react';
import { BackLink } from '../components/ui/BackLink';

export const PrivacyPage = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen text-slate-800 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="mb-10 border-b border-slate-200 pb-6">
          <BackLink
            onClick={() => onNavigate && onNavigate('Home')}
            tone="light"
            className="mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-black text-[#2e274e] tracking-tight mb-2">
            Politique de Confidentialité et Suppression de Compte
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Dernière mise à jour : 12 août 2026 - Conforme aux normes de confidentialité des boutiques d'applications mobile (Édité par MERITO GROUPE)
          </p>
        </div>

        {/* Contenu textuel continu */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">

          {/* SECTION 1 : SUPPRESSION DE COMPTE */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              1. Demande de Suppression de Compte TAMTAM et des Données
            </h2>
            <p>
              Conformément aux exigences relatives à la protection des données personnelles et aux directives des magasins d'applications (Google Play et Apple App Store), tout utilisateur disposant d'un <strong>Compte TAMTAM</strong> peut demander à tout moment la suppression definitiva de son compte ainsi que des données personnelles et professionnelles associées.
            </p>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-[#2e274e]">Procédure de demande :</h3>
              <p>
                Pour effectuer une demande de suppression, l'utilisateur est invité à envoyer une demande écrite à l'adresse suivante :
              </p>
              <p className="font-semibold text-[#2e274e] pl-4 border-l-2 border-[#aa9a56]">
                E-mail : <a href="mailto:retasongloire12346@gmail.com" className="text-[#aa9a56] underline">retasongloire12346@gmail.com</a> <br />
                WhatsApp / Support : +243 842 138 532
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-[#2e274e]">Informations à fournir :</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>L'adresse e-mail ou le numéro de téléphone associé au Compte TAMTAM.</li>
                <li>Une mention explicite confirmant la demande de fermeture définitive du compte.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-[#2e274e]">Modalités d'effacement et retentions :</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Données supprimées immédiatement :</strong> L'identifiant, l'adresse e-mail, les identifiants d'accès, le numéro de téléphone, les données de profil, les historiques de géolocalisation ainsi que les statistiques associées au compte.
                </li>
                <li>
                  <strong>Données conservées temporairement :</strong> Les éléments multimédias ou historiques techniques peuvent être conservés de manière strictly anonymisée pour une durée maximale de 30 jours à des fins de maintenance technique avant leur purge définitive.
                </li>
                <li>
                  <strong>Délai de traitement :</strong> Toute demande est traitée par l'équipe administrative de MERITO GROUPE dans un délai de 48 à 72 heures ouvrées.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 2 : POLITIQUE GENERALE */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              2. Responsable du Traitement
            </h2>
            <p>
              Le traitement des données personnelles collectées via la plateforme et les services TAMTAM est placé sous la responsabilité exclusive de <strong>MERITO GROUPE</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              3. Collecte et Utilisation des Données
            </h2>
            <p>
              L'accès aux fonctionnalités de l'écosystème TAMTAM nécessite la création d'un Compte TAMTAM. Dans ce cadre, nous collectons les informations strictement nécessaires à la fourniture du service, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>L'adresse e-mail et le numéro de téléphone pour la vérification et la sécurité du compte.</li>
              <li>Les données de connexion chiffrées.</li>
              <li>Les données nécessaires à la gestion des campagnes publicitaires et des services de diffusion.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              4. Autorisations et Permissions
            </h2>
            <p>
              Afin de fonctionner correctement, l'application peut solliciter certaines autorisations sur l'appareil de l'utilisateur :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Accès au stockage :</strong> Utilisé exclusivement pour permettre le téléchargement ou la sélection de fichiers audio et multimédias choisis par l'utilisateur pour le fonctionnement du service. Aucun autre fichier personnel n'est consulté.
              </li>
              <li>
                <strong>Données de géolocalisation :</strong> Utilisées pour valider l'exécution des zones de diffusion et assurer le suivi analytique du service en temps réel.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              5. Sécurité et Stockage des Données
            </h2>
            <p>
              Les données collectées sont hébergées de manière sécurisée sur des infrastructures cloud certifiées (PostgreSQL / Supabase). Toutes les communications entre l'application et les serveurs sont protégées par des protocoles de chiffrement standards (HTTPS / SSL).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              6. Engagement de Non-Divulgation
            </h2>
            <p>
              <strong>MERITO GROUPE</strong> s'engage à ne jamais vendre, louer ni céder les données personnelles des utilisateurs de l'écosystème TAMTAM à des tiers à des fins commerciales ou publicitaires externes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#2e274e] border-b border-slate-200 pb-2">
              7. Mise à jour de la Politique de Confidentialité
            </h2>
            <p>
              Cette politique de confidentialité peut être mise à jour régulièrement afin de refléter l'évolution de nos services et les exigences réglementaires des plateformes de distribution d'applications. Les utilisateurs seront informés de toute modification majeure par le biais de l'application ou par e-mail.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;