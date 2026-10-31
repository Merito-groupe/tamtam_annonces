import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/common/PageLoader';

// Dynamic imports (React.lazy)
const AnnonceursPage = lazy(() => import('./pages/AnnonceursPage'));
const LancerCampagne = lazy(() => import('./pages/LancerCampagne'));
const DevenirSponsor = lazy(() => import('./pages/DevenirSponsor'));
const DevenirPartenaire = lazy(() => import('./pages/DevenirPartenaire'));

// Handling named exports for Detail Tabs
const AnnonceursDetailTab = lazy(() => import('./pages/AnnonceursDetailTab').then(m => ({ default: m.AnnonceursDetailTab })));
const ChauffeursDetailTab = lazy(() => import('./pages/ChauffeursDetailTab').then(m => ({ default: m.ChauffeursDetailTab })));
const SponsorsDetailTab = lazy(() => import('./pages/SponsorsDetailTab').then(m => ({ default: m.SponsorsDetailTab })));

// Dynamic imports for legal and auth pages
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

function App() {
  const navigate = useNavigate();

  const handleNavigate = (view) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof view === 'string' && view.startsWith('/')) {
      navigate(view);
      return;
    }

    switch (view) {
      case 'LancerCampagne':
      case 'campagne':
        navigate('/lancer-campagne');
        break;
      case 'DevenirSponsor':
      case 'sponsor':
        navigate('/devenir-sponsor');
        break;
      case 'DevenirPartenaire':
      case 'partenaire':
        navigate('/devenir-partenaire');
        break;
      case 'AnnonceursDetail':
        navigate('/offre-annonceurs');
        break;
      case 'ChauffeursDetail':
        navigate('/offre-chauffeurs');
        break;
      case 'SponsorsDetail':
        navigate('/offre-sponsors');
        break;
      case 'Terms':
      case 'terms':
        navigate('/conditions-utilisation');
        break;
      case 'Privacy':
      case 'privacy':
        navigate('/politique-confidentialite');
        break;
      case 'Login':
      case 'login':
      case 'connexion':
        navigate('/connexion');
        break;
      case 'Home':
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#2e274e] text-white antialiased selection:bg-[#aa9a56] selection:text-[#2e274e] flex flex-col justify-between">
      <div>
        <Navbar 
          onNavigate={handleNavigate} 
          onTabChange={handleNavigate} 
        />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<AnnonceursPage onNavigate={handleNavigate} />} />
              <Route path="/lancer-campagne" element={<LancerCampagne onNavigate={handleNavigate} />} />
              <Route path="/devenir-sponsor" element={<DevenirSponsor onNavigate={handleNavigate} />} />
              <Route path="/devenir-partenaire" element={<DevenirPartenaire onNavigate={handleNavigate} />} />
              
              <Route path="/offre-annonceurs" element={<AnnonceursDetailTab onNavigate={handleNavigate} />} />
              <Route path="/offre-chauffeurs" element={<ChauffeursDetailTab onNavigate={handleNavigate} />} />
              <Route path="/offre-sponsors" element={<SponsorsDetailTab onNavigate={handleNavigate} />} />

              <Route path="/conditions-utilisation" element={<TermsPage onNavigate={handleNavigate} />} />
              <Route path="/politique-confidentialite" element={<PrivacyPage onNavigate={handleNavigate} />} />

              <Route path="/connexion" element={<LoginPage onNavigate={handleNavigate} />} />

              <Route path="*" element={<AnnonceursPage onNavigate={handleNavigate} />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      <Footer 
        onNavigate={handleNavigate} 
        onTabChange={handleNavigate} 
      />
    </div>
  );
}

export default App;