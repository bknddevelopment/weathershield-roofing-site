import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Weather Shield Logo Primary Colors
        'weather-primary': '#00B4B8',        // Teal from logo
        'weather-primary-dark': '#008B8F',   // Darker teal
        'weather-primary-light': '#4DCDD0',  // Lighter teal
        
        'weather-secondary': '#3B82F6',      // Blue from logo gradient
        'weather-secondary-dark': '#2563EB',
        'weather-secondary-light': '#60A5FA',
        
        'weather-accent': '#7C3AED',         // Purple from logo
        'weather-accent-dark': '#6D28D9',
        'weather-accent-light': '#A78BFA',
        
        // Neutral Colors from logo
        'weather-gray': '#9CA3AF',           // Gray from logo (house/hands)
        'weather-gray-dark': '#6B7280',
        'weather-gray-light': '#D1D5DB',
        'weather-dark': '#1F2937',
        'weather-light': '#F8FAFC',
        'weather-white': '#FFFFFF',
        'weather-black': '#000000',
        
        // Status Colors (keeping minimal)
        'weather-success': '#22C55E',
        'weather-warning': '#00B4B8',        // Using teal for warnings
        'weather-danger': '#EF4444',
        
        // Legacy mappings for easier migration
        'weather-teal': '#00B4B8',           // Primary teal
        'weather-blue': '#3B82F6',           // Secondary blue
        'weather-purple': '#7C3AED',         // Accent purple
        
        // DEPRECATED - Remove these references
        'weather-amber': '#00B4B8',          // Mapped to teal temporarily
        'weather-amber-dark': '#008B8F',     // Mapped to teal-dark temporarily
        'weather-amber-light': '#4DCDD0',    // Mapped to teal-light temporarily
        'weather-navy': '#3B82F6',           // Mapped to blue temporarily
        'weather-navy-dark': '#2563EB',      // Mapped to blue-dark temporarily
        'weather-navy-light': '#60A5FA',     // Mapped to blue-light temporarily
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Oswald', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'scale-up': 'scaleUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-3d': 'rotate3d 0.6s ease-in-out',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/roof-pattern.jpg')",
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(0, 86, 179, 0.3)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.3)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'elevation-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'elevation-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },
    },
  },
  plugins: [],
}

export default config