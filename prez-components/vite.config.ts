import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
// import libCss from "vite-plugin-libcss";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // libCss()
    ],
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "prez-components",
            fileName: "prez-components",
        },
        rollupOptions: {
            external: ["vue", "vue-router"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
