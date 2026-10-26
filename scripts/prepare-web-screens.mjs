import { createRequire } from "node:module";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

// Use Next's existing image dependency; original approved PNGs stay untouched.
const sharp = createRequire(import.meta.resolve("next/package.json"))("sharp");
const sourceDir = "public/screens/store-2026-10-22";
const outputDir = "public/screens/web";
await mkdir(outputDir, { recursive: true });
const manifest = [];
for (const name of ["01-service-history-capture", "02-mot-history-capture", "03-service-plan-capture", "07-plus-garage-capture"]) {
  const source = await readFile(`${sourceDir}/${name}.png`);
  const web = await sharp(source).webp({ lossless: true, effort: 6 }).toBuffer();
  // Lossless means decoded pixels agree, not just matching dimensions.
  const sourcePixels = await sharp(source).ensureAlpha().raw().toBuffer();
  const webPixels = await sharp(web).ensureAlpha().raw().toBuffer();
  if (!sourcePixels.equals(webPixels)) throw new Error(`Pixel mismatch: ${name}`);
  await writeFile(`${outputDir}/${name}.webp`, web);
  manifest.push({ source: `/screens/store-2026-10-22/${name}.png`, display: `/screens/web/${name}.webp`,
    sourceSha256: createHash("sha256").update(source).digest("hex"),
    displaySha256: createHash("sha256").update(web).digest("hex"),
    sourceBytes: source.length, displayBytes: web.length, decodedPixelsEqual: true });
}
await writeFile(`${outputDir}/manifest.json`, `${JSON.stringify({ format: "lossless WebP", originalProvenance: "docs/RELEASE-ASSETS-2026-10-26.json", assets: manifest }, null, 2)}\n`);
console.log(JSON.stringify(manifest.map(({ source, sourceBytes, displayBytes }) => ({ source, sourceBytes, displayBytes })), null, 2));
