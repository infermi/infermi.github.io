/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: '"Open Sans"',
            heebo: '"Heebo"',
            varela: '"Varela Round"',
            fredo: '"Fredoka"',
        },
        extend: {
            screens: {
                xs: "380px",
            },
            colors: {
                dark: "#121820",
                bluegreen: "#0E404Bff",
                apricot: "#E5906F",
                wedgewood: "#467699",
                easternblue: "#28A9AA",
                cta: "#FAAB55ff"
            },

            variants: {
                animation: ["motion-safe"]
            },

        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};