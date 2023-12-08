/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainBlack: "#1E1E1E",
				fadedWhite: "rgba(217, 217, 217, 0.5)",
				fadedBlack: "rgba(0, 0, 0, 0.6)",
				logoPurple: "#8B33AA",
				spiceRed: "#AD192A",
				miniMediaPink: "#FF6884"
			},
			backgroundImage: {
				mainBg: "url(./public/img/bg.jpg)",
			},
			fontFamily: {
				sans: ["Dela Gothic One", ...defaultTheme.fontFamily.sans],
				"raleway": ["Raleway Variable", ...defaultTheme.fontFamily.sans],
			},
			width: {
				"hero": "500px",
				"project": "600px",
			},
			height: {
				"hero": "500px",
				"project": "600px"
			},
		},
	},
	plugins: [],
}
