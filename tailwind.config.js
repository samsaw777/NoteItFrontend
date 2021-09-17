// const colors = {
//   groupBackgroundColor: {
//     color: "#2f3135",
//   },
// };

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors,
    container: {
      center: true,
    },

    extend: {
      colors: {
        sidebarBackgroundColor: {
          color: "#2f3135",
        },
      },
      height: {
        sidebarHeight: "91.2vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
