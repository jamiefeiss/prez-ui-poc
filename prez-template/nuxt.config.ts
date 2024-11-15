// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    extends: [
        // ["github:jamiefeiss/nuxt-layers-shad-example/base", { install: true }]
        ["../prez-ui", { install: true }]
    ],
    // css: ["prez-components/style.css"]
})