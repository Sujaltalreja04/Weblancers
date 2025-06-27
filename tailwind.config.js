/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a1a1a', // Deep charcoal (primary) - gray-900
        'primary-light': '#2d2d2d', // Subtle surface elevation - gray-800
        'primary-dark': '#0f0f0f', // Rich black for depth - gray-950
        
        // Secondary Colors
        'secondary': '#2d2d2d', // Component definition - gray-800
        'secondary-light': '#404040', // Elevated surfaces - gray-700
        'secondary-dark': '#1a1a1a', // Deep contrast - gray-900
        
        // Accent Colors
        'accent': '#00d4ff', // Electric blue innovation - cyan-400
        'accent-light': '#33ddff', // Lighter blue variant - cyan-300
        'accent-dark': '#0099cc', // Darker blue variant - cyan-600
        
        // Background Colors
        'background': '#fafafa', // Clean canvas - gray-50
        'background-dark': '#0f0f0f', // Dark theme background - gray-950
        'surface': '#ffffff', // Card backgrounds - white
        'surface-dark': '#1a1a1a', // Dark surface - gray-900
        
        // Text Colors
        'text-primary': '#1a1a1a', // Optimal readability - gray-900
        'text-primary-dark': '#ffffff', // Dark theme primary text - white
        'text-secondary': '#666666', // Supporting information - gray-500
        'text-secondary-dark': '#b3b3b3', // Dark theme secondary text - gray-400
        
        // Status Colors
        'success': '#10b981', // Project completion - emerald-500
        'success-light': '#34d399', // Success light variant - emerald-400
        'success-dark': '#059669', // Success dark variant - emerald-600
        
        'warning': '#f59e0b', // Timeline attention - amber-500
        'warning-light': '#fbbf24', // Warning light variant - amber-400
        'warning-dark': '#d97706', // Warning dark variant - amber-600
        
        'error': '#ef4444', // Form validation - red-500
        'error-light': '#f87171', // Error light variant - red-400
        'error-dark': '#dc2626', // Error dark variant - red-600
        
        // Conversion Colors
        'conversion': '#ff6b35', // CTA buttons - orange-500
        'conversion-light': '#ff8a65', // CTA hover state - orange-400
        'conversion-dark': '#e55100', // CTA active state - orange-600
        
        // Premium Accent
        'gold': '#ffd700', // Premium highlights - yellow-400
        'gold-light': '#ffed4e', // Gold light variant - yellow-300
        'gold-dark': '#eab308', // Gold dark variant - yellow-500
        
        // Border Colors
        'border': '#e5e5e5', // Minimal borders - gray-200
        'border-dark': 'rgba(255, 255, 255, 0.1)', // Dark theme borders - white/10
        
        // Glassmorphism
        'glass': 'rgba(0, 212, 255, 0.1)', // Glass background - cyan/10
        'glass-border': 'rgba(255, 255, 255, 0.2)', // Glass border - white/20
        jetblack: '#000000',
        purewhite: '#FFFFFF',
        lightgreen: '#B5FF6D',
        mutedolive: '#8A9A5B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem', // 52px - Golden ratio scaling
        '21': '5.25rem', // 84px - Golden ratio scaling
        '34': '8.5rem', // 136px - Golden ratio scaling
        '55': '13.75rem', // 220px - Golden ratio scaling
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow': '0 8px 40px rgba(0, 212, 255, 0.2)',
        'glow-gold': '0 8px 40px rgba(255, 215, 0, 0.2)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}