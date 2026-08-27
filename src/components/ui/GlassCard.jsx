import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  borderColor = 'border-[#aa9a56]/20',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-[#2e274e]/70 backdrop-blur-md rounded-2xl border ${borderColor} p-6 shadow-xl shadow-black/20 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};