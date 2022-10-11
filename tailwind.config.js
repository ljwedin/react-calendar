/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                darkGray: '#272727',
                mustard: '#faa815',
                sand: '#ffe2ad',
            },
            fontFamily: {
                sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
