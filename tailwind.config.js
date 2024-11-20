/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"custom-shadow": "0px 8px 28px 9px rgba(245,245,245,1)",
			},
		},
	},
	plugins: [],
};
