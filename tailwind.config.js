/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Apto Web — Dark Premium ────────────────────────────────────
        // Base
        "background":                  "#08080A",
        "surface":                     "#08080A",
        "surface-container-lowest":    "#0E0E11",
        "surface-container-low":       "#131318",
        "surface-container":           "#17171C",
        "surface-container-high":      "#1C1C22",
        "surface-container-highest":   "#22232A",

        // Text
        "on-surface":                  "#F4F4F5",
        "on-surface-variant":          "#A1A1AA",
        "on-surface-muted":            "#71717A",
        "outline":                     "#3F3F46",
        "outline-variant":             "#27272A",

        // Brand orange (kept from app)
        "primary-container":           "#FD6C00",
        "secondary-container":         "#FF8A2B",
        "on-primary-container":        "#FFFFFF",
        "on-primary":                  "#FFFFFF",
        "secondary":                   "#FFB78C",
        "on-secondary":                "#3D1A00",
        "secondary-fixed":             "#3D1A00",
        "primary-fixed":               "#1A1A22",
        "on-primary-fixed":            "#FFFFFF",

        // Status (vivid, work well on dark)
        "status-success":              "#10B981",
        "status-error":                "#F43F5E",
        "status-warning":              "#F59E0B",
        "status-info":                 "#38BDF8",
        "error":                       "#F43F5E",
        "error-container":             "#3B1218",
        "on-error":                    "#FFFFFF",

        // Tertiary (cool accent — sparingly)
        "tertiary":                    "#A78BFA",
        "tertiary-container":          "#3B1F71",
        "on-tertiary-container":       "#F4F4F5",
        "on-tertiary-fixed":           "#F4F4F5",
        "tertiary-fixed":              "#2E1065",

        // Legacy aliases
        "on-secondary-fixed-variant":  "#FFB78C",
        "on-secondary-fixed":          "#FFB78C",
        "on-primary-fixed-variant":    "#FFB78C",
        "primary":                     "#FD6C00",
        "primary-fixed-dim":           "#3D1A00",
        "surface-bright":              "#22232A",
        "surface-dim":                 "#08080A",
        "surface-variant":             "#17171C",
        "on-background":               "#F4F4F5",
        "inverse-surface":             "#F4F4F5",
        "inverse-on-surface":          "#08080A",
        "inverse-primary":             "#FD6C00",
        "surface-tint":                "#FD6C00",
        "on-error-container":          "#FECDD3",
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body":     ["Plus Jakarta Sans", "sans-serif"],
        "label":    ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg:      "0.625rem",
        xl:      "0.875rem",
        "2xl":   "1rem",
        "3xl":   "1.5rem",
        "4xl":   "2rem",
        full:    "9999px",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        fadeUp:  "fadeUp 0.6s ease-out forwards",
        float:   "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
