import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AudienceTabs } from '../components/sections/AudienceTabs';
import { PricingCalculator } from '../components/sections/PricingCalculator';
import { AppDownloadModal } from '../components/ui/AppDownloadModal';

export const AnnonceursPage = () => {
  const [activeNavTab, setActiveNavTab] = useState('annonceurs');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppType, setSelectedAppType] = useState('annonces');

  const handleOpenModal = (appType = 'annonces') => {
    setSelectedAppType(appType);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#2e274e] text-white font-sans selection:bg-[#aa9a56] selection:text-[#2e274e]">
      
      {/* 1. Navbar Navigation */}
      {/* <Navbar
        activeTab={activeNavTab}
        onTabChange={(tab) => setActiveNavTab(tab)}
      /> */}

      {/* 2. Hero Section */}
      <HeroSection
        onOpenDownloadModal={() => handleOpenModal('annonces')}
        onOpenContactModal={() => handleOpenModal('annonces')}
      />

      {/* 3. Switcher d'Audience & Grille d'Écosystème */}
      <AudienceTabs
        onSelectApp={(appKey) => handleOpenModal(appKey)}
      />

      {/* 4. Calculateur de Budget Publicitaire
      <PricingCalculator
        onOpenModal={() => handleOpenModal('annonces')}
      /> */}

      {/* 5. Footer Institutionnel */}
      {/* <Footer /> */}

      {/* 6. Modale de Téléchargement globale */}
      <AppDownloadModal
        isOpen={isModalOpen}
        appType={selectedAppType}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default AnnonceursPage;