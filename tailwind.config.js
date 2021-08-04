const colors = require('tailwindcss/colors')

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen90vh": "calc(90vh)",
        "screen80vh": "calc(80vh)",
        "screen75vh": "calc(75vh)",
        "screen65vh": "calc(65vh)",
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'contact': '#6D6B3D',
      }),
    },

    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'lightGray': '#e1e1e1',
      'primary': '#628AA1',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#628AA1',
      'primaryLight': '#72A0B9',
      'primaryBright': '#96D5F7',
      'secondary': '#52717D',
      'sand': '#D9D4C5',
      'danger': '#e3342f',
      'white': '#ffffff',
      'lightGray': '#e1e1e1',
      'medGray': '#b5b5b5',
      'darkGray': '#232323',
      'raspberryLight': '#B7769C',
      'raspberryBlack': '#4F3445',
      'raspberryBright': '#F9A2D8',
      'link': 'rgba(255,51,102,1)',
      'hoverLink': 'rgba(255,51,102,1)',
      'hoverNav': 'rgba(97,120,140,1)',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#628AA1',
      'primaryLight': '#72A0B9',
      'secondary': '#52717D',
      'sand': '#D9D4C5',
      'danger': '#e3342f',
      'gray': '#f5f5f5',
      'medGray': '#A8A8A8',
      'darkGray': '#393939',
      'raspberry': '#A16285',
      'raspberryBright': '#F9A2D8',
      'raspberryLight': '#B7769C',
      'raspberryDark': '#895675',
      'raspberryBlack': '#4F3445',
      'portfolio': '#122C3A',
      'portfolioLight': '#193D4C',
      'portfolioDark': '#0A181E',
      'contact': '#6D6B3D',
      'contactLight': '#84804F',
      'contactDark': '#2D2C1B',
      'about': '#3E95C5',
      'aboutLight': '#4AB0DD',
      'aboutDark': '#357FA0',
      'link': 'rgba(243,24,80,1)',
      'hoverLink': 'rgba(209,32,61,1)',
      'lightGray': '#e1e1e1',
      'darkBlue': '#06070d',
      'hoverNav': 'rgba(97,120,140,1)',
      'orange': '#FF6A00',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'transparent': 'rgba(255,255,255,0)',
      'primary': '#628AA1',
      'secondary': '#52717D',
      'sand': '#D9D4C5',
      'danger': '#e3342f',
      'gray': '#f5f5f5',
      'medGray': '#A8A8A8',
      'darkGray': '#393939',
      'raspberry': '#A16285',
      'raspberryBright': '#F9A2D8',
      'raspberryLight': '#B7769C',
      'raspberryDark': '#895675',
      'link': 'rgba(255,51,102,1)',
      'hoverNav': 'rgba(97,120,140,1)',
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '75%': '75%',
      '65%': '65%',
      '50%': '50%',
      '60%': '60%',
      '16': '4rem',
    },
    backgroundImage: theme => ({
      'hero-pattern': "url('/image/bg-hero.jpg')",
      'hero-sm': "url('/image/bg-hero.jpg')",
      'hero-about': "url('/image/aboutLadder.png')",
      'bg-contactModal': "url('/image/bg-contact.jpeg')",
    }),

    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'right-24': 'center right 6rem',
      'right-48': 'center right 12rem',
      'right-12': 'center right 2rem',
      top: 'top',
      'top-4': 'center top 1rem',
      'top-8': 'center top 2rem',
      'top-12': 'center top 3rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'banner': ['Futura'],
      'roboto': ['Roboto'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

