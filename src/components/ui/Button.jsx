import React from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from './MaterialIcon';

export const Button = ({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'glass'
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-xl px-6 py-3 text-sm transition-all duration-300 focus:outline-none';

  const variants = {
    primary: 'bg-[#aa9a56] text-[#2e274e] font-semibold hover:bg-[#b8a966] shadow-lg shadow-[#aa9a56]/20',
    secondary: 'bg-[#2e274e] text-white hover:bg-[#38305f] border border-[#aa9a56]/30',
    outline: 'border border-[#aa9a56] text-[#aa9a56] hover:bg-[#aa9a56] hover:text-[#2e274e]',
    glass: 'bg-[#2e274e]/60 backdrop-blur-md border border-[#aa9a56]/30 text-white hover:border-[#aa9a56] hover:bg-[#2e274e]/80'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <MaterialIcon name={icon} className="mr-2 text-lg" />
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <MaterialIcon name={icon} className="ml-2 text-lg" />
      )}
    </motion.button>
  );
};