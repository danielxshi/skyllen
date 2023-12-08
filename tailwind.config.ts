import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      height: {
        "128": "32rem",
        "256": "64rem",
        "screen-2/3": "60vh",
        "screen-3/4": "75vh",
        "300": "300px",
        "450": "450px",
      },
      width: {
        "w-screen-1/2": "50vw",
        "300": "300px",
        "600": "600px",
        "9/10": "90vw",
        "58rem" : "58rem"
      },
      colors: {
        white: "#fff",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
