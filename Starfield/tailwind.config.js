/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Image-default": "url('./src/assets/Image-default.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'inter' : ['inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
