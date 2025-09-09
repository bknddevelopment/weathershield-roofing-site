import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  variant?: 'default' | 'interactive' | 'glass' | 'dark' | 'service';
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Card({
  variant = 'default',
  children,
  className = '',
  padding = 'md',
  onClick,
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantClasses = {
    default: 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300',
    interactive: 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 active:translate-y-0 active:shadow-lg',
    glass: 'backdrop-blur-xl bg-white/80 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300',
    dark: 'bg-gray-900 text-white rounded-xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300',
    service: 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-weather-amber/30 transform-style-3d',
  };

  const classes = `
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${className}
  `;

  if (variant === 'interactive' || variant === 'service') {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={{ 
          scale: 1.02,
          rotateX: variant === 'service' ? -2 : 0,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  badge?: string;
  onClick?: () => void;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  badge,
  onClick,
  className = '',
}: ServiceCardProps) {
  const content = (
    <>
      {badge && (
        <span className="absolute top-4 right-4 bg-weather-amber text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="w-16 h-16 mb-6 text-weather-navy transition-all duration-300 group-hover:scale-110 group-hover:text-weather-amber">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-weather-dark group-hover:text-weather-navy transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </>
  );

  const cardClasses = `
    relative group bg-white rounded-xl shadow-sm border border-gray-100 p-6
    cursor-pointer transition-all duration-300
    hover:shadow-xl hover:-translate-y-1 hover:border-weather-amber/30
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cardClasses}
        whileHover={{ scale: 1.02, rotateX: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02, rotateX: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.div>
  );
}