module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
        extend: {
            colors: {
                'nala-color': '#A39581',
                'header-color': '#FFEAEC',
                'ebony-color': '#60695C',
                'footer-color': '#686963',
                'legend-color': '#EEE2DF'
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            '2xl': '1800px'
        }
	},
	plugins: [],
};
