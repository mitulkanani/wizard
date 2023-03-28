/** @type {import('tailwindcss').Config} */
const path = require('path');
// const clamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      heading: '50px',
      mobHeading: '38px',
      subHeadline: '22px',
      mobileHeading: '32px',
      mobileSubHeading: '34px',
    },
    letterSpacing: {
      heading: '-0.03em',
      paragraph: '-0.02em',
    },
    extend: {
      height: {
        17.5: '70px',
        23: '90px',
        btn: '52px',
        img: '400px',
      },
      margin: {
        7.5: '30px',
        13.25: '53px',
      },
      width: {
        17.5: '70px',
        100: '400px',
        155: '620px',
        btn: '180px',
        img: '580px',
      },
      lineHeight: {
        13: '52px',
        15: '60px',
        7.2: '29px',
        6.5: '26px',
        12: '47px',
        120: '120%',
      },
      fontFamily: {
        sans: ['Open Sans'],
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          50: '#3187e6',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        lightGray: {
          25: '#A1A7B1',
          50: '#E1E4EE',
          100: '#F1F3F8',
          200: '#F0F3F9',
          300: '#FAFBFD',
          400: '#F4F7FB',
          500: '#F5F7FB',
          800: '#4B5156',
          900: '#33383C',
          1000: '#17253A',
        },
        lightBlack: {
          100: '#1B1E20',
          200: '#A0B3C1',
        },
        lightText: {
          100: '#738196',
        },
        bullet: {
          100: '#E1E1E1',
          200: '#B7BCC5',
        },
        lightGreen: {
          100: '#D2DDDD',
        },
        dark: {
          100: '#0F1E35',
          200: '#313E48',
          300: '#15181B',
        },
        light: {
          100: '#F5F5FA',
        },
      },
    },
    keyframes: {
      'fade-in-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(50px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'button-animation': {
        from: {
          scale: '0.5',
        },
        to: {
          scale: 1,
        },
      },
    },
    animation: {
      'fade-in-right': 'fade-in-right 0.3s ease-in',
      'fade-in-down': 'fade-in-down 0.5s ease-out',
      'fade-in-up': 'fade-in-up 0.4s ease-out',
      'button-animation': 'button-animation 0.5s ease-out',
    },
  },
  plugins: [],
};
