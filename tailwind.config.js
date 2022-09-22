/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6b8e12",
        
"secondary": "#eacd3a",
        
"accent": "#72b6db",
        
"neutral": "#1C191F",
        
"base-100": "#EDE9F1",
        
"info": "#37BFE1",
        
"success": "#27BEAD",
        
"warning": "#EC9513",
        
"error": "#E0243D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
