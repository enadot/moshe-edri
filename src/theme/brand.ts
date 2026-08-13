/**
 * Moshe Adri brand palette.
 *
 * ADS custom theming only accepts a single `brandColor` that generates a
 * ramp mapped to `color.background.brand.*` tokens automatically. We use
 * that slot for Gold, and expose Midnight/Orange/WhatsApp as raw values
 * that block-level components consume via xcss + CSS variables declared
 * in globals.css (--moshe-*).
 */
export const BRAND = {
  midnight: {
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
    DEFAULT: "#0a192f",
  },
  gold: {
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
    DEFAULT: "#D4AF37",
  },
  orange: {
    500: "#FF4D00",
    600: "#e63d00",
    DEFAULT: "#FF4D00",
  },
  whatsapp: "#25D366",
  whatsappHover: "#1ebe57",
} as const;

/**
 * Gradient CSS variable names — declared in src/app/globals.css :root.
 * Reference from xcss like:
 *   xcss({ background: `var(${BRAND_GRADIENT.midnight})` })
 */
export const BRAND_GRADIENT = {
  midnight: "--moshe-gradient-midnight",
  gold: "--moshe-gradient-gold",
  orange: "--moshe-gradient-orange",
  glassDark: "--moshe-glass-dark",
  shadowGold: "--moshe-shadow-gold",
} as const;
