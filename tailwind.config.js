/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontSize: {
            "logo": ["36px", {
                lineHeight: '1.26',
                fontWeight: '600'
            }],
            "heading": ["64px", {
                lineHeight: '1.26',
                fontWeight: '700'
            }],
            "heading2": ["50px", {
                lineHeight: '1.26',
                fontWeight: '700'
            }],
            "sub-heading1": ["24px", {
                lineHeight: '1.26',
                fontWeight: '700'
            }],
            "sub-heading2": ["20px", {
                lineHeight: '1.26',
                fontWeight: '700'
            }],
            "paragraph": ["20px", {
                lineHeight: "1.26",
                fontWeight: '400'
            }],
            "paragraph2": ["18px", {
                lineHeight: '1.26',
                fontWeight: "400"
            }],
            "paragraph3": ["16px", {
                lineHeight: '1.26',
                fontWeight: "600"
            }],
            "paragraph4": ["14px", {
                lineHeight: '1.26',
                fontWeight: "400"
            }]
        },
        extend: {
            colors: {
                "light-gray-1": '#EFF0F3',
                "light-gray-2": "#E4E5E9",
                "gray": "#C0C0C0",
                "dark-gray": "#9A9494",
                "black": '#2B2C34',
                "blue": '#6246EA',
                "dark-blue": "#001858"
            },
            maxWidth: {
                "container": "1290px"
            }
        }
    },
    plugins: [],
}
