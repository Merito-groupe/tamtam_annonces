import React from 'react';

export const MaterialIcon = ({ name, className = '', filled = false }) => {
  return (
    <span
      className={`material-symbols-outlined select-none ${filled ? 'FILL-1' : ''} ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
      }}
    >
      {name}
    </span>
  );
};