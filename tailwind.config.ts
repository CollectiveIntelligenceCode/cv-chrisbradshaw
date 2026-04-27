import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: '#7a00df',
          blue: '#0693e3',
          green: '#00d084',
          orange: '#ff6900',
        },
        bg: {
          dark: '#000000',
          elevated: '#313131',
          surface: '#2b2b2b',
        },
        text: {
          primary: '#ffffff',
          muted: '#a0a0a0',
          secondary: '#707070',
        },
        border: {
          DEFAULT: '#313131',
          subtle: '#2b2b2b',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '250': '0.25s',
        '600': '0.6s',
        '1200': '1.2s',
      },
    },
  },
  plugins: [],
};
export default config;
