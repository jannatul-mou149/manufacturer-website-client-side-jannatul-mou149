module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(79 70 229)",
          secondary: "rgb(76 29 149)",
          "base-100": "#ffffff",
          accent: "#3A4256",
          neutral: "#3d4451",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
