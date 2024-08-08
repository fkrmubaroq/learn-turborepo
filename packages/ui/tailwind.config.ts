import tailwindColors from "./tailwind/tailwind.colors";
import tailwindSvg from "./tailwind/tailwind.svg";
import tailwindTypography from "./tailwind/tailwind.typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: { ...tailwindColors },
      spacing: {
        "2": ".125rem",
        "4": ".25rem",
        "6": ".375rem",
        "8": ".5rem",
        "10": ".625rem",
        "16": "1rem",
        "24": "1.5rem",
        "32": "2rem",
        "64": "4rem",
        "128": "8rem",
      },
      boxShadow: {
        kn: "0px 4px 8px 0px #00000033",
      },
    },
  },
  plugins: [tailwindTypography, tailwindSvg],
};
