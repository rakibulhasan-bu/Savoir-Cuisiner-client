/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC529',
        secondary: '#FE724C',
        creamBlack: '#272D2F',
        darkblue: {
          DEFAULT: '#0D0D2B',
          secondary: '#252540',
        },
        blue: {
          DEFAULT: '#3671E9',
          hover: '#2766E6',
        },
        Gray: '#D7D7D7',
        violet: '#2B076E',
        white: '#ffffff',
      },
      boxShadow: {
        primary: '0px 20px 200px rgba(57, 23, 119, 0.05)',
      },
      backgroundImage: {
        coverImg: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683037787/Rakibul_Hasan/rsz_banner-image_ucczkf.jpg')",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
}
