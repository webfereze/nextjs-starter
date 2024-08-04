import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(312.85deg, #6784FE -2.85%, #54FCF8 90.76%)',
        'slider-gradient': 'linear-gradient(321.18deg, #6784FE -1.76%, #54FCF8 87.14%)',
        'title-arrow': 'linear-gradient(312.85deg, #6784FE -2.85%, #54FCF8 90.76%)',
      },

extend: {
        boxShadow: {
          custom: '2px 2px 0px 0px #282842',
        },
      },
      colors: {
        primary: "#678BFE",
        grey: "#F5F8FF",
        textGrey: "#999FB4",
        darkBlue: "#282842",
        turqoise: "#56F2F9",
        secondary: "#56F2F9",
        surface: "#F5F5F5",
        background: "#F5F5F5",
        error: "#E30613",
        red: "#FC5858",
        orange: "#FF8855",
        success: "#21C04D",
        mediumGrey: "#333333",
        lightGrey: "#959595",
        softGrey: "#F5F8FF",
        mainGrey: "#F5F8FF",
      },
      fontSize: {
        pico: ['0.6875rem', { lineHeight: '1rem' }], // 11px
        tiny: ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        xs: ['0.813rem', { lineHeight: '1.188rem' }], // 13px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        md: ['0.938rem', { lineHeight: '1.407rem' }], // 15px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.75rem', { lineHeight: '2.1rem' }], // 28px
        '4xl': ['2rem', { lineHeight: '2.12rem' }], // 32px
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '6xl': ['2.5rem', { lineHeight: '3rem' }], // 40px
        '7xl': ['3rem', { lineHeight: '1' }], // 48px
        '8xl': ['3.75rem', { lineHeight: '1' }], // 60px
        '9xl': ['4rem', { lineHeight: '1' }], // 64px
        '10xl': ['5rem', { lineHeight: '1' }], // 80px
        '11xl': ['6.25rem', { lineHeight: '1' }], // 100px
      },
    },
    theme: {
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
      }
    }
  },
  plugins: [],
}
export default config
