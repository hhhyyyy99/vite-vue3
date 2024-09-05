import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: { port: 9000 },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@/utils": "/src/utils",
    },
  },
});
