import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" so the built site works at the apex domain and in local preview
export default defineConfig({
  base: "./",
  plugins: [react()],
});
