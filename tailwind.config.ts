import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purplepobrefy: {
          dark: 'rgb(130 52 233)',
          base: 'rgb(153 86 246 )'
        }
      },
      gridTemplateAreas: {
        layout: [
          'nav header',
          'nav content',
          'footer footer'
        ]
      },
      gridTemplateColumns: {
        layout: '15rem 1fr'
      },
      gridTemplateRows: {
        layout: '4.375rem 1fr 5.813rem'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true }),
    require("tailwindcss-animate")
  ],
};
export default config;
