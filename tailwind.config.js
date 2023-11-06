/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#0041A0',
        icon: '#00001D',
        shadowText: 'rgba(3, 3, 3, 0.40)',
        opaqueWhite: 'rgba(255, 255, 255, 0.22)',
        greyWhite: '#F3F4F5',
        shadow: '#00000029',
        textGrey: '#3E3E3E',
        black: '#1A1A1A',
        textLightGrey: '#949496',
        lighterGrey: "rgba(200, 200, 201, 0.13)",
        grey: '#C8C8C9',
        grey2: 'rgba(176, 179, 186, 0.10)',
        'grey0.13': "rgba(200, 200, 201, 0.13)",
        grey3: 'rgba(0, 11, 34, 0.60)',
        textBlack: '#000000',
        darkText: '#030303',
        textBlack2: '#242A37',
        textblackopacity: 'rgba(0, 0, 0, 0.45)',
        lighterBlue: '#2972E6',
        borderLine: "rgba(0, 0, 0, 0.25)",
        dropShadow: 'rgba(0, 0, 0, 0.10)',
        otptext: 'rgba(0, 0, 0, 0.85)',
        cardBg: "#fff",
        modalBg: "rgba(0, 0, 0, 0.5)",
        dateMonthColor: "#A3A3A3",
        darkText3: "#000B22",
        socialText: '#212121',
        termsTitle: '#707070',
        titleText: 'rgba(148, 148, 150, 0.75)',
        container: 'rgba(255, 255, 255, 0.8)',
        overlay: 'rgba(3, 3, 3, 0.94)',
        naira: 'rgba(27, 42, 59, 0.80)',
        success_message: '#777779',
        success_name: '#212121',
        success_text: '#000000D9',
        download_icon: 'rgba(2, 130, 173, 0.71)',
        address: 'rgba(0, 11, 34, 0.60)',
        backgroundColor: '#0041A0'

      },
      backgroundImage: {
        'hero-pattern': "url('/assets/bg.png')",
      },
      backgroundColor: {
        colorPrimary: '#FFF',
        blue: '#0041A0'
      },
      fontFamily: {
        sans: ['var(--font-poppin)'],
      },
    },
  },
  plugins: [],
}
