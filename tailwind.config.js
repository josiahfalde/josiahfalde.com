/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // All colors flow from CSS variables defined in src/index.css
        // (RGB triplets, so Tailwind opacity modifiers work).
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        raised: "rgb(var(--c-raised) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--c-ink-soft) / <alpha-value>)",
        "ink-faint": "rgb(var(--c-ink-faint) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        copper: "rgb(var(--c-copper) / <alpha-value>)",
        "copper-deep": "rgb(var(--c-copper-deep) / <alpha-value>)",
        navy: "rgb(var(--c-navy) / <alpha-value>)",
      },
      fontFamily: {
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "Cascadia Code",
          "SFMono-Regular",
          "Consolas",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        content: "68rem",
      },
    },
  },
  plugins: [],
};
