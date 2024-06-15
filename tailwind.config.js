/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				products: "3fr 1.5fr 0.5fr",
				mobile:"3fr 3fr 1fr",
			},
		},
	},
	plugins: [],
};
