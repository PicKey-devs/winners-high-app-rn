/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,tsx,jsx,ts}',
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '20px'],
			md: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['22px', '30px'],
			'2xl': ['24px', '32px'],
		},
		colors: {
			primary: '#538EF4',
			secondary: '#EAF6FF',
			black: '#000000',
			lightBlack: '#262626',
			white: '#FFFFFF',
			grey: {
				'#F7F6F8': '#F7F6F8',
				'#C4C3C4': '#C4C3C4',
				'#F7F7FE': '#F7F7FE',
				'#929292': '#929292',
				'#f2f2f2': '#f2f2f2',
			},
			bluesky: '#81C9FF',
		},
		fontWeight: {
			500: 500,
			600: 600,
			700: 700,
		},
		borderRadius: {
			0: 0,
			8: 8,
			10: 10,
			20: 20,
			50: 50,
		},
	},
	plugins: [],
};
