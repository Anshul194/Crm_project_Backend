// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // dark gray
        secondary: '#3b82f6', // blue
        accent: '#f59e0b', // orange
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'slide-in': 'slide-in 0.7s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};
