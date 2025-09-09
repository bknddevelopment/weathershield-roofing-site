import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  animate?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  padding = 'lg',
  fullWidth = false,
  animate = false,
  id,
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-weather-dark text-white',
    gradient: 'bg-gradient-to-br from-weather-navy to-weather-navy-dark text-white',
    transparent: 'bg-transparent',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12 lg:py-16',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-20 lg:py-24',
    xl: 'py-20 md:py-24 lg:py-32',
  };

  const sectionClasses = `
    relative
    ${backgroundClasses[background]}
    ${paddingClasses[padding]}
    ${className}
  `;

  const containerClasses = `
    ${fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}
    ${containerClassName}
  `;

  const content = (
    <div className={containerClasses}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      {content}
    </section>
  );
}

// Section Header Component
interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  animate?: boolean;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
  animate = true,
}: SectionHeaderProps) {
  const content = (
    <>
      {subtitle && (
        <span className="text-weather-amber font-semibold text-sm sm:text-base uppercase tracking-wider mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </>
  );

  const headerClasses = `
    ${centered ? 'text-center' : ''}
    ${className}
  `;

  if (animate) {
    return (
      <motion.div
        className={headerClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={headerClasses}>
      {content}
    </div>
  );
}

// Content Spacing Component
interface ContentSpacingProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ContentSpacing({
  children,
  size = 'md',
  className = '',
}: ContentSpacingProps) {
  const spacingClasses = {
    sm: 'space-y-4 md:space-y-6',
    md: 'space-y-6 md:space-y-8 lg:space-y-10',
    lg: 'space-y-8 md:space-y-12 lg:space-y-16',
  };

  return (
    <div className={`${spacingClasses[size]} ${className}`}>
      {children}
    </div>
  );
}