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
        // GoruSheba Color Palette
        primary: {
          green: '#43A047',
          teal: '#009688',
        },
        accent: {
          yellow: '#FFD54F',
        },
        success: {
          green: '#4CAF50',
        },
        warning: {
          orange: '#FF9800',
        },
        error: {
          red: '#F44336',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F9F9F9',
          surface: '#FAFAFA',
        },
        text: {
          primary: '#212121',
          secondary: '#616161',
          hint: '#9E9E9E',
          'on-primary': '#FFFFFF',
        },
        border: {
          color: '#E0E0E0',
          divider: '#EEEEEE',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config; 