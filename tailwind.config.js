// const colors = {
//   groupBackgroundColor: {
//     color: "#2f3135",
//   },
// };

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors,
    container: {
      center: true,
    },

    extend: {
      colors: {
        sidebarBackgroundColor: "#89ff74",
        chatBackgroundColor: "#363a37",
        borderColor: "#26282c",
        chatBg: "#777777",
        buttonColor: "#2f3135",
        textcolor: "#2f3135",
        sideBar: "#6cf08f",
        newsidebarcolor: "#1D2127",
        newchatbackground: "#15191C",
        tabbackgroundcolor: "#3765FC",
        usercolor: "#2C33BE",
      },
      height: {
        sidebarHeight: "91.2vh",
        viewHeight: "100vh",
        groupHeight: "85vh",
        searchHeight: "40vh",
        chatheight: "80vh",
        footerHeight: "7vh",
        memberheight: "75vh",
        chatHeight: "76vh",
      },
      width: {
        groupName: "270px",
      },
      flex: {
        2: "0.25 0%",
        3: "0.60 0%",
        4: "0.15 0%",
      },
      inset: {
        chatTop: "3%",
        chattop: "3%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
