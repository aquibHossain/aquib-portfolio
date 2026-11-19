import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const webRoot = fileURLToPath(new URL(".", import.meta.url));

function generatedBanner() {
  return {
    name: "generated-banner",
    apply: "build",
    transformIndexHtml(html) {
      return `<!-- Generated file. Edit the React app in web/src, then run npm run build. GitHub Pages serves this file from the main branch root. -->\n${html}`;
    },
  };
}

export default defineConfig({
  root: webRoot,
  // Relative asset paths work on the existing GitHub Pages URL
  // (https://aquibhossain.github.io/aquib-portfolio/) and on a root domain.
  base: "./",
  publicDir: path.join(webRoot, "public"),
  plugins: [react(), generatedBanner()],
  build: {
    outDir: path.resolve(webRoot, "../dist"),
    emptyOutDir: true,
  },
});
