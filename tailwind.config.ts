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
      },
      width: {
        "w-screen-1/2": "50vw",
        "300": "300px"
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
