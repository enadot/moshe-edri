import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', '"Noto Sans Hebrew"', "system-ui", "sans-serif"],
        display: ['"Google Sans"', '"Noto Sans Hebrew"', "system-ui", "sans-serif"],
      },
      colors: {
        midnight: {
          DEFAULT: "#0a192f",
          50: "#e8edf3",
          100: "#c5d0de",
          200: "#9eb1c7",
          300: "#7691b0",
          400: "#587a9e",
          500: "#3a648d",
          600: "#2e5479",
          700: "#1f3d60",
          800: "#122747",
          900: "#0a192f",
          950: "#040d1c",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fdf9ec",
          100: "#faf0c6",
          200: "#f5e08c",
          300: "#eccd54",
          400: "#e0b933",
          500: "#D4AF37",
          600: "#b08920",
          700: "#8a661c",
          800: "#71531e",
          900: "#604620",
        },
        orange: {
          DEFAULT: "#FF4D00",
          50: "#fff1ea",
          100: "#ffdfcc",
          200: "#ffba99",
          300: "#ff8f5e",
          400: "#ff6a2e",
          500: "#FF4D00",
          600: "#e63d00",
          700: "#bf2e00",
          800: "#992600",
          900: "#7a1f00",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float-up": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        "float-up": "float-up 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #f5e08c 50%, #D4AF37 100%)",
        "midnight-gradient": "linear-gradient(135deg, #0a192f 0%, #122747 50%, #1f3d60 100%)",
        "orange-gradient": "linear-gradient(135deg, #FF4D00 0%, #ff6a2e 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-rtl")],
};

export default config;
