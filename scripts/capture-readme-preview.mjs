/**
 * Full-page screenshot of the deployed site for README preview.
 * Prerequisite: npx playwright install chromium
 * Run: node scripts/capture-readme-preview.mjs
 *      PREVIEW_URL=http://localhost:3000 node scripts/capture-readme-preview.mjs
 */
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "docs", "readme-site-preview.png");
const url = process.env.PREVIEW_URL || "https://mull1gan.com";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("Wrote", out);
