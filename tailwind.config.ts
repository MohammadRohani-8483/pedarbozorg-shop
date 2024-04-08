import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": {
          200: "#faeeed",
          300: "#c15248",
        },
        "blue": {
          200: "#e5edff",
          300: "#5375c2",
        },
        "orange": {
          200: "#f5eee7",
          300: "#db7a18",
        },
        "base": {
          100: "#F4F6FF",
          200: "#E0F1E9",
          300: "#3D8361",
          400: "#336D51",
          500: "#83C5A5"
        },
        "primery": {
          "base": "#FFC436",
          "tint-1": "#FFCC53",
          "tint-2": "#FFD56F",
          "tint-3": "#FFDD8C",
          "tint-4": "#FFE6A9",
          "tint-5": "#FFEEC6",
          "tint-6": "#FFF7E2",
          "shade-1": "#FFB70A",
          "shade-2": "#DD9C00",
          "shade-3": "#B17D00",
          "shade-4": "#845E00",
          "shade-5": "#583E00",
          "shade-6": "#2C1F00",
        },
        "secondry": {
          "base": "#3D8361",
          "tint-2": "#4BA278",
          "tint-3": "#64B78F",
          "tint-4": "#83C5A5",
          "tint-5": "#A2D4BC",
          "tint-6": "#C1E2D2",
          "tint-7": "#E0F1E9",
          "shade-2": "#336D51",
          "shade-3": "#295741",
          "shade-4": "#1F4231",
          "shade-5": "#142C20",
          "shade-6": "#0A1610",
        },
        "background": "#F4F6FF",
        "neutral": {
          100: "#FFF",
          200: "#F9F9F9",
          300: "#EDEDED",
          400: "#CBCBCB",
          500: "#ADADAD",
          600: "#757575",
          700: "#626262",
          800: "#353535",
          900: "#1B1B1B",
        },
        "error": {
          'base': '#C62020',
          'light': '#ED2E2E',
          'extraLight': '#FFF2F2',
        },
        "success": {
          'base': '#00966D',
          'light': '#00BA88',
          'extraLight': '#F3FDFA',
        },
        "warning": {
          'base': '#A9791C',
          'light': '#F4B740',
          'extraLight': '#FFF8E1',
        },
      },
      boxShadow: {
        "hover": "0px 0px 18.6px 0px rgba(61, 131, 97, 0.22)"
      },
    },
  },
  plugins: [],
};
export default config;


// module.exports = {
//   theme: {
//     extend: {
//     }
//   }
// }
