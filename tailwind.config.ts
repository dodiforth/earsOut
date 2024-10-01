/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media', // or 'class' for manual toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
      //   mono: ['var(--font-geist-mono)', 'monospace'],
      // },
      // colors: {
      //   background: 'var(--background)',
      //   foreground: 'var(--foreground)',
      // },
      textShadow: {
        '3d': '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
      },
      keyframes: {
        moveClouds: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        moveClouds: 'moveClouds 60s linear infinite',
      },
      transitionDelay: {
        '30': '30s',
        '15': '15s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>, options?: any) => void }) {
      const newUtilities = {
        '.animation-delay-15': {
          'animation-delay': '15s',
        },
        '.animation-delay-30': {
          'animation-delay': '30s',
        },
        // Add more delays if needed
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>, options?: any) => void }) {
      const newUtilities = {
        '.text-shadow-3d': {
          textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};