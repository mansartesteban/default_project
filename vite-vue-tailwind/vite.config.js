import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";

const root = path.resolve(__dirname);

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue"],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.join(root, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
