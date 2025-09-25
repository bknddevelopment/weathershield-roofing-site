'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  external?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  loading = false,
  external = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-[40px]',
    md: 'px-4 py-3 sm:px-5 sm:py-2.5 text-sm sm:text-base min-h-[44px]',
    lg: 'px-5 py-3 sm:px-6 text-base sm:text-lg min-h-[48px]',
    xl: 'px-6 py-4 sm:px-8 text-lg sm:text-xl min-h-[52px]',
  };

  const variantClasses = {
    primary: 'bg-weather-amber text-white shadow-lg hover:bg-weather-amber-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg focus-visible:ring-weather-amber',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md focus-visible:ring-gray-500',
    accent: 'bg-weather-navy text-white shadow-lg hover:bg-weather-navy-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg focus-visible:ring-weather-navy',
    ghost: 'bg-transparent text-current hover:bg-gray-100/10 hover:backdrop-blur-sm active:bg-gray-100/20',
    danger: 'bg-weather-danger text-white shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg focus-visible:ring-weather-danger',
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={classes}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}