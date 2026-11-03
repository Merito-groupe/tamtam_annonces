import { useCallback, useState } from 'react';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { PartnersOrbit } from '../components/sections/PartnersOrbit';
import { WizardModal } from '../components/wizard/organisms/WizardModal';

const ADVANTAGES = [
  {
    icon: 'verified_user',
    title: 'Exclusivité totale',
    text: "Aucun concurrent direct de votre secteur d’activité ne peut diffuser sur la plateforme durant toute la durée de la convention.",
  },
  {
    icon: 'campaign',
    title: 'Priorité de diffusion',
    text: 'Vos messages sont diffusés en priorité sur l’intégralité de la flotte de véhicules partenaires.',
  },
  {
    icon: 'groups',
    title: 'Audience captive',
    text: 'Touchez quotidiennement des milliers de passagers attentifs tout au long de leurs trajets urbains.',
  },
];

const BENEFITS = [
  'Proposition commerciale personnalisée',
  'Analyse d’impact sectoriel',
  'Écosystème de suivi et contrôle dédié (Monitoring)',
];

export const DevenirSponsor = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#2e274e] font-sans text-white">

      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="bg-[#2e274e] pt-5 pb-3 sm:pt-8 sm:pb-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-14">

          <div className="min-w-0 lg:col-span-7">
           

            <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.4rem]">
              Associez votre marque au canal de diffusion urbain de référence.
            </h1>

            <p className="mt-5 max-w-xl text-[1rem] leading-[1.65] text-slate-300 sm:text-[1.075rem]">
              Devenez Sponsor Officiel du réseau TAMTAM et bénéficiez d’un positionnement
              stratégique inédit au cœur de la mobilité quotidienne.
            </p>

            <div className="mt-7">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-[var(--navy-900)] transition-all duration-200 hover:bg-[var(--gold-400)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(228,189,98,0.35)] active:scale-95"
              >
                Demander une offre de sponsoring
              </a>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:col-span-5">
            <PartnersOrbit />
          </div>

        </div>
      </section>

      {/* ================================================================
          AVANTAGES
          ================================================================ */}
      <section className="bg-[#241e3f] pt-6 pb-4 sm:pt-8 sm:pb-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.8rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.15rem] lg:text-[2.5rem]">
              Un privilège d’impact sur mesure
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.65] text-slate-300 sm:text-[1.075rem]">
              Le programme Sponsor de TAMTAM est conçu pour les entreprises leader souhaitant
              dominer leur marché.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
            {ADVANTAGES.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-[20px] border border-white/10 bg-[#2e274e] p-6 transition-colors duration-200 hover:border-[rgba(228,189,98,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(228,189,98,0.14)] text-[var(--gold-300)]">
                    <MaterialIcon name={item.icon} className="text-xl" />
                  </span>
                  <h3 className="min-w-0 text-[16.5px] font-bold tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-[14.5px] leading-[1.65] text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
          CONTACT
          ================================================================ */}
      <section id="contact-form" className="scroll-mt-24 bg-[#2e274e] pt-5 pb-3 sm:pt-8 sm:pb-5">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
 
          <h2 className="mt-3 text-[1.8rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.15rem] lg:text-[2.5rem]">
            Échangez avec notre direction commerciale
          </h2>

          <p className="mt-4 max-w-xl text-[1rem] leading-[1.65] text-slate-300 sm:text-[1.075rem]">
            Les conditions tarifaires, avantages bilatéraux et modalités d’exclusivité sont
            transmis sur présentation institutionnelle personnalisée.
          </p>

          <ul className="mt-7 max-w-xl divide-y divide-white/10 border-y border-white/10">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="py-3 text-[15px] leading-[1.6] text-slate-300">
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-[var(--navy-900)] transition-all duration-200 hover:bg-[var(--gold-400)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(228,189,98,0.35)] active:scale-95"
            >
              Demander une proposition de partenariat
            </button>
          </div>

        </div>
      </section>

      <WizardModal open={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default DevenirSponsor;
