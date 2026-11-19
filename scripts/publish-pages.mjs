import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(repoRoot, "dist");

if (!existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html is missing. The Vite build did not produce a site.");
  process.exit(1);
}

rmSync(path.join(repoRoot, "assets"), { recursive: true, force: true });

for (const name of readdirSync(dist)) {
  cpSync(path.join(dist, name), path.join(repoRoot, name), { recursive: true });
}

console.log("Published the production build to the repository root for GitHub Pages.");
