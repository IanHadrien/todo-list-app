/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ignite: {
					blueDark: "#015958",
					blue: "#015958",
					purpleDark: "#015958",
					purple: "##015958",
					gary700: "#0d0d0d",
					gary600: "#1a1a1a",
					gary500: "#262626",
					gary400: "#333333",
					gary300: "#808080",
					gary200: "#d9d9d9",
					gary100: "#f2f2f2",
					danger: "#e25858",
				},
			},
			height: {
				nulo: "0vh",
				95: "95vh",
				450: "450px",
				500: "500px",
			},
			fontSize: {
				text40: "40px",
			},
			maxHeight: {
				450: "450px",
			},
			width: {
				520: "520px",
				550: "550px",
				600: "610px",
				650: "600px",
				700: "700px",
				750: "750px",
			},
			padding: {
				p2x: "2px",
			},
			margin: {
				topNeg: "-1rem",
			},
			rotate: {
				270: "270deg",
			},
			gridTemplateRows: {
				painel: "60px 98px 27px 27px",
				painel2: "54px 124px 22px",
			},
		},
	},
	plugins: [],
}
