/**
 * Regenerate public/og.png from public/Logo.svg for Open Graph / Twitter cards.
 * Social platforms require raster images (PNG); SVG in og:image is often ignored.
 * Run: npm run generate-og
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const out = path.join(root, "public", "og.png");
const svgPath = path.join(root, "public", "Logo.svg");

const svg = fs.readFileSync(svgPath);
await sharp(svg)
  .resize(1200, 630, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(out);
console.log("Wrote", out);
