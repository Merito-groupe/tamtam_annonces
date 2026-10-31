import React, { useState } from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';
import { partners } from '../../data/partners';
import './PartnersOrbit.css';

/**
 * Orbites concentriques de logos partenaires (hero « Devenir Sponsor »).
 *
 * - Les logos sont répartis automatiquement sur les orbites (3 / 5 / 7).
 * - Chaque orbite tourne, et chaque logo contre-tourne pour rester droit.
 * - L'animation se met en pause au survol et respecte prefers-reduced-motion.
 */

const ORBITS = [
  { size: 50, duration: 40, direction: 'cw', capacity: 3 },
  { size: 66, duration: 60, direction: 'ccw', capacity: 5 },
  { size: 82, duration: 80, direction: 'cw', capacity: 7 },
];

/** Répartit les partenaires en tourniquet, en sautant les orbites pleines. */
function distribute(items) {
  const buckets = ORBITS.map(() => []);
  let orbit = 0;

  items.forEach((item) => {
    let guard = 0;
    while (buckets[orbit].length >= ORBITS[orbit].capacity && guard < ORBITS.length) {
      orbit = (orbit + 1) % ORBITS.length;
      guard += 1;
    }
    if (guard >= ORBITS.length) return;
    buckets[orbit].push(item);
    orbit = (orbit + 1) % ORBITS.length;
  });

  return buckets;
}

function PartnerTile({ partner, angle, orbit }) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(partner.logo) && !failed;

  return (
    <div className="po-item" style={{ transform: `rotate(${angle}deg)` }}>
      <div className="po-anchor">
        <div
          className={`po-tile po-tile--${orbit.direction}`}
          style={{
            '--po-angle': `${angle}deg`,
            '--po-duration': `${orbit.duration}s`,
            // Repli quand l'animation est désactivée (prefers-reduced-motion)
            transform: `rotate(${-angle}deg)`,
          }}
        >
          {showLogo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              className="po-logo"
              loading="lazy"
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="po-fallback" role="img" aria-label={partner.name}>
              <MaterialIcon name="storefront" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export const PartnersOrbit = ({ className = '' }) => {
  const buckets = distribute(partners);

  return (
    <div
      className={`po-root ${className}`.trim()}
      role="group"
      aria-label="Marques partenaires"
    >
      <div className="po-glow" aria-hidden="true" />

      {ORBITS.map((orbit, orbitIndex) => {
        const items = buckets[orbitIndex];

        return (
          <div
            key={orbit.size}
            className="po-orbit"
            style={{ width: `${orbit.size}%`, height: `${orbit.size}%` }}
          >
            <div className="po-ring-border" aria-hidden="true" />
            <div
              className={`po-ring po-ring--${orbit.direction}`}
              style={{ '--po-duration': `${orbit.duration}s` }}
            >
              {items.map((partner, index) => (
                <PartnerTile
                  key={partner.name}
                  partner={partner}
                  orbit={orbit}
                  angle={(360 / items.length) * index + orbitIndex * 24}
                />
              ))}
            </div>
          </div>
        );
      })}

      <div className="po-sun">
        <img src="/logo-tamtam.png" alt="TAMTAM" className="po-sun-logo" />
      </div>
    </div>
  );
};

export default PartnersOrbit;
