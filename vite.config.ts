import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Absolute base: pages live at nested paths (/medicine/, /websites/, ...)
export default defineConfig({
  base: "/",
  plugins: [react()],
});
