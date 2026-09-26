import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", "e2e"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
