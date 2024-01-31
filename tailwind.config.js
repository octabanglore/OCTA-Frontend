/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        "kanit1": ['var(--font-kanit)'],
        "nunito-sans": ['var(--font-nunito_sans)'],
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        customPrimary:'#0A68A8',
        customPrimaryLight1:'#4E9FD7',
        customPrimaryLight2:'#179CF7',
        customPrimaryLight3:'#0A68A8',
        customSecondary:'#29335C',
        customSecondaryLight1:'#6973D0',
        systemRed:'#CC2936',
        systemGreen:'#109648',
        customGrey000:'#FEFEFF',
        customGrey100:'#F3F4F8',
        customGrey200:'#D2D4DA',
        customGrey300:'#B3B5BD',
        customGrey600:'#5B5D6B',
        customGrey800:'#282A3A',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        kanit: ['var(--font-kanit)'],
        "nunito": ['var(--font-nunito-sans)'],
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-kanit": {
          fontFamily: "kanit1",
        },
        ".text-nunito-sans": {
          fontFamily: "nunito-sans",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
