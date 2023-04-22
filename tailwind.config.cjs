/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'sans': '"Open Sans"',
            'heebo': '"Heebo"',
            'varela': '"Varela Round"',
            'fredo': '"Fredoka"'

        },
        extend: {
            screens: {
                'xs': '380px'
            },
            backgroundImage: { 'profile': 'url("public/me.jpg")' },
            colors: { 'pone': '#FDF0CCff', 'ptwo': '#005863ff', 'pthree': '#0A1C25ff', 'pfour': '#431C2Eff', 'pfive': '#FBAD53ff', 'psix': '#D3547Aff' }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}