module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        dark: {
          100: "#15192C",
          90: "#22273C",
          80: "#2C3249",
          70: "#373D57",
          60: "#444b66",
          50: "#515873",
          40: "#686f8c",
          30: "#80869D",
          20: "#a3a8b8",
          10: "#b7bac7",
          5: "#d3d4dc",
        },
        purple: {
          primary: {
            light: "#7950ED",
            dark: "#8D64FF",
          },
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        ubuntu_monobold: ["ubuntu_mono", "sans-serif"],
        dm_mono: ["dm_mono", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
