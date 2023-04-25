/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,tsx,jsx,ts}',
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
