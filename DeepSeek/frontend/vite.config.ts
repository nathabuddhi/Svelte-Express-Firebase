import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [svelte()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000", // Your Express server
                changeOrigin: true,
                secure: false,
            },
        },
    },
});

