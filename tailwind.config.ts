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
