/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,tsx,jsx,ts}',
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontSize: {
			sm: ['14px', '20px'],
			md: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},
		colors: {
			primary: '#538EF4',
			secondary: '#EAF6FF',
			black: '#000000',
			white: '#FFFFFF',
			grey: {
				2: '#C4C3C4',
				3: '#F7F7FE',
				4: '#929292',
				5: '#9C9C9C',
			},
		},
		fontWeight: {
			700: 700,
		},
		borderRadius: {
			0: 0,
			8: 8,
			10: 10,
		},
	},
	plugins: [],
};
