/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,tsx,jsx,ts}',
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
		fontSize: {
			sm: ['14px', '20px'],
			md: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			
		},
	},
	plugins: [],
};
