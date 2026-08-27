import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '../../assets/loading.json'; // ou ajustez le chemin de votre fichier

export function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#2e274e] text-white">
      <div className="w-48 h-48">
        <DotLottieReact
          data={animationData}
          loop
          autoplay
        />
      </div>
      <p className="text-[#aa9a56] font-medium tracking-wide mt-2">
        Chargement de TamTam Annonces...
      </p>
    </div>
  );
}