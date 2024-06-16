/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue"],
    },
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "100%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
  },
  plugins: [],
};
