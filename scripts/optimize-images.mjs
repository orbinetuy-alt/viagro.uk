// scripts/optimize-images.mjs
// Converts all JPG/PNG images in /public to WebP at build time.
// Originals are kept so existing references don't break immediately.

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

// Quality and resize settings per image role
const CONFIGS = {
  "hero.png":    { width: 1920, quality: 75 },
  "aboutus.jpg": { width: 1200, quality: 75 },
  "footer.jpg":  { width: 1200, quality: 75 },
  "logo.png":    { width: 400,  quality: 90, lossless: false },
};

const DEFAULT_CONFIG = { width: 1200, quality: 75 };

async function convertToWebP(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!EXTENSIONS.has(ext)) return;

  const name = basename(filePath);
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Skip if WebP already up-to-date
  try {
    const [srcStat, outStat] = await Promise.all([stat(filePath), stat(outPath)]);
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`  ✓ up-to-date  ${name}`);
      return;
    }
  } catch {
    // outPath doesn't exist yet — continue
  }

  const { width, quality, lossless = false } = CONFIGS[name] ?? DEFAULT_CONFIG;

  await sharp(filePath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, lossless })
    .toFile(outPath);

  const [srcStat, outStat] = await Promise.all([stat(filePath), stat(outPath)]);
  const saved = (((srcStat.size - outStat.size) / srcStat.size) * 100).toFixed(0);
  console.log(`  ✓ converted   ${name} → ${basename(outPath)}  (${saved}% smaller)`);
}

const files = await readdir(PUBLIC_DIR);
console.log("Optimizing images…");
await Promise.all(files.map((f) => convertToWebP(join(PUBLIC_DIR, f))));
console.log("Done.");
