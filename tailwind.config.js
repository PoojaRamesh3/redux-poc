/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      custblue: "#287bff",
      white: "#ffffff",
      fullheight: "-webkit-fill-available",
      gray: "#afafaf",
    },
    height: {
      40: "40px",
    },
    fontSize: {
      xxl: "3.052rem",
      lg: "22px",
    },
    maxWidth: {
      cusmw: "250px",
      cusmws: "215px",
      cusxs: "160px",
    },
    borderRadius: {
      custbr: "25px",
    },
  },
  plugins: [],
};
