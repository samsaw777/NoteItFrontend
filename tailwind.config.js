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
        sidebarBackgroundColor: "#2f3135",
        chatBackgroundColor: "#363a37",
        borderColor: "#26282c",
      },
      height: {
        sidebarHeight: "91.2vh",
        viewHeight: "100vh",
        groupHeight: "80vh",
        searchHeight: "40vh",
      },
      flex: {
        2: "0.40 0.60 0%",
        3: "0.40 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
