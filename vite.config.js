import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows global usage of describe, test, and expect
    environment: "jsdom", // Simulates a browser-like environment
    setupFiles: "./src/tests/setup.js", // Sets up additional configurations
  },
});
