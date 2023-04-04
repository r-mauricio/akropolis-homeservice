/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				blueLogo: "#3795d2",
				blueGray: "#9cacb2",
				veryLightBlue: "#d2e8f2",
				lightBlue: "#8dceee",
				darkBlue: "#2a6085",
				ice: "#f2f2f2",
				darkBlack: "#18191A",
				darkGray: "#242526",
				darkMediumGray: "#3A3B3C",
				darkLightGray: "#B0B3B8",
				darkIce: "#E4E6EB",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				noto: ["Noto Serif Tamil", "serif"],
			},
		},
	},
	plugins: [],
};
