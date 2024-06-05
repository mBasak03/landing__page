/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fefefe",
          "200": "#fcfcfc",
          "300": "#0f1407",
          "400": "#000c1a",
          "500": "#010103",
          "600": "rgba(255, 255, 255, 0.64)",
        },
        darkslategray: {
          "100": "#33404d",
          "200": "#333",
          "300": "#263238",
          "400": "rgba(51, 64, 77, 0.09)",
        },
        dodgerblue: {
          "100": "rgba(64, 154, 255, 0.24)",
          "200": "rgba(64, 154, 255, 0.32)",
        },
        royalblue: "#0078ff",
        cornflowerblue: "#269eff",
        silver: "#c7c7c7",
        "ut-70": "#a9b1bb",
        tomato: "rgba(255, 114, 94, 0.24)",
        dimgray: "#706f7b",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f5f5f5",
          "300": "#efefef",
        },
        "ut-80": "#c5cbd1",
        lightskyblue: "rgba(128, 187, 255, 0.24)",
      },
      spacing: {},
      fontFamily: {
        "h300-bold": "Montserrat",
        "body300-rg": "'Open Sans'",
        "h200-blod": "Inter",
        aboreto: "Aboreto",
        poppins: "Poppins",
        lato: "Lato",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      "43xl": "62px",
      "18xl": "37px",
      "31xl": "50px",
      sm: "14px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
