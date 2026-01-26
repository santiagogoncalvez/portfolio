import { defineConfig } from "@playwright/test";

export default defineConfig({
   testDir: "./tests/e2e",
   timeout: 30_000,
   retries: 0,
   use: {
      baseURL: "http://localhost:4321",
      headless: true,
      viewport: { width: 1280, height: 800 },
   },
   webServer: {
      command: "npm run dev",
      port: 4321,
      reuseExistingServer: !process.env.CI,
   },
});
