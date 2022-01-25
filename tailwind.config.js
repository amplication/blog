module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				dark: {
					100: '#15192C',
					90: '#22273C',
					80: '#2C3249',
					70: '#373D57',
					30: '#80869D',
					20: '#A3A8B8',
				},
				purple: {
					primary: {
						light: '#7950ED',
						dark: '#8D64FF',
					},
				},
			},
			fontFamily: {
				poppinsregular: ['poppinsregular', 'sans-serif'],
				poppinsmedium: ['poppinsmedium', 'sans-serif'],
				poppinssemibold: ['poppinssemibold', 'sans-serif'],
				poppinsbold: ['poppinsbold', 'sans-serif'],
				ubuntu_monobold: ['ubuntu_monobold', 'sans-serif'],
				dm_monoregular: ['dm_monoregular', 'sans-serif'],
				dm_monomedium: ['dm_monomedium', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
};
