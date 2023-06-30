/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bottomFade: {
          '0%': { transform: 'translateY(60px)' },
          '100%': { transform: 'translateY(0)' },
        },
        topFade: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade1SecDelay: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '20%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade2SecDelay: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '30%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade3SecDelay: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '40%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade4SecDelay: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '60%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        bottomFade: 'bottomFade 1s ease-in-out',
        topFade: 'topFade 1s ease-in-out',
        fade1SecDelay: 'fade1SecDelay 1s ease-in-out',
        fade2SecDelay: 'fade2SecDelay 1s ease-in-out',
        fade3SecDelay: 'fade3SecDelay 1s ease-in-out',
        fade4SecDelay: 'fade4SecDelay 1.1s ease-in-out',
      },
    },
  },
  plugins: [],
}
