/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark_green: "#1E3932",
        btn_green: "#00754A",
        light_green: "#D4E9E2",
        lighter_green: "#F1F8F5",
        socials_dark: "#212121",
        links_dark: "#006241",
        star: "#CBA258",
        nav_gren: "#00754A",
      },
      backgroundImage: {
        banner_mb:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),  url('../IMG/hero-mobile_2021.jpg')",
        banner_lg:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),  url('../IMG/xl-hero-desktop_2021.png')",
        partner__bg:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),  url('../IMG/partners__img.png')",
      },
    },
  },
  plugins: [],
};

