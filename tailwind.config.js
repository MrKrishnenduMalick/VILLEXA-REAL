/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#071225',
          dark: '#040b17',
          light: '#0c1b36',
        },
        sapphire: {
          DEFAULT: '#10264D',
          dark: '#0c1d3c',
          light: '#18386f',
        },
        royal: {
          DEFAULT: '#233F70',
          dark: '#1b3158',
          light: '#315696',
        },
        gold: {
          champagne: '#E8C58A',
          warm: '#F4D49B',
          light: '#FBF1DC',
          dark: '#B89248',
          accent: '#DFC082',
        },
        softwhite: '#E8ECF5',
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Cormorant Garamond', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4D49B 0%, #E8C58A 50%, #C89F56 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(232, 197, 138, 0.25) 0%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'glass-card': 'linear-gradient(180deg, rgba(16, 38, 77, 0.45) 0%, rgba(7, 18, 37, 0.75) 100%)',
        'arc-glow': 'radial-gradient(ellipse at 50% 0%, rgba(76, 133, 230, 0.25) 0%, transparent 60%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(232, 197, 138, 0.35)',
        'gold-sm': '0 0 12px rgba(232, 197, 138, 0.25)',
        'blue-glow': '0 0 35px rgba(35, 63, 112, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(232, 197, 138, 0.25)' },
          '100%': { boxShadow: '0 0 30px rgba(232, 197, 138, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
