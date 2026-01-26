// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import path from "node:path";

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
      resolve: {
         alias: {
            "@": path.resolve("./src"),
            "@components": path.resolve("./src/components"),
            "@sections": path.resolve("./src/components/sections"),
            "@shared": path.resolve("./src/components/shared"),
            "@icons": path.resolve("./src/icons"),
            "@assets": path.resolve("./src/assets"),
            "@styles": path.resolve("./src/styles"),
            "@scripts": path.resolve("./src/scripts"),
         },
      },
   },
});
