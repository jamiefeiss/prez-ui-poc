import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        "prez-components/style.css",
        "./assets/css/tailwind.css",
        "./assets/css/style.css"
    ],
    // css: [
    //     "prez-components/style.css",
    //     join(currentDir, "./assets/css/tailwind.css"),
    //     join(currentDir, "./assets/css/style.css"),
    //     // "./assets/css/theme.css"
    // ]
})