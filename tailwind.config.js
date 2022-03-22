module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        mycolor: "#ff7200",
        footercolor: "#15151e",
        // footercolor: "#292c2f",
        footertext: "#999",
        footerinput: "#1f1f2d",
      },
    },
  },
  plugins: [],
};
