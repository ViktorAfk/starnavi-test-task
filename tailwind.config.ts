import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: {min: '375px', max: '639px'},
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    container: {
      center: true,
      padding: {
        mobile: '16px',
        tablet: '32px',
        laptop: '56px',
      },
    },
    colors: {
      docorated: '#FFDF8E'
    }
  },
  plugins: [],
};

export default config;
