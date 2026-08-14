import { readFileSync, writeFileSync } from "node:fs";
import { deflateSync, crc32 } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function pngChunk(type, data) {
  const typeBuf = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([length, typeBuf, data, crc]);
}

/** Encode an RGBA pixmap as an opaque RGB PNG (no alpha chunk). */
function opaqueRgbPng(rgba, width, height) {
  const stride = width * 3 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    const row = y * stride;
    raw[row] = 0;
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const dst = row + 1 + x * 3;
      raw[dst] = rgba[src];
      raw[dst + 1] = rgba[src + 1];
      raw[dst + 2] = rgba[src + 2];
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw, { level: 9 })),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

function render(svgPath, pngPath, width, { opaque = false } = {}) {
  const svg = readFileSync(join(root, svgPath));
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: opaque ? "#0B0B0F" : "rgba(0,0,0,0)",
  });
  const image = resvg.render();
  const png = opaque
    ? opaqueRgbPng(image.pixels, image.width, image.height)
    : image.asPng();
  writeFileSync(join(root, pngPath), png);
  console.log(pngPath, width, opaque ? "RGB" : "RGBA");
}

render("svg/2shocks-symbol.svg", "platform/2shocks-symbol-512.png", 512);
render("platform/2shocks-app-icon.svg", "platform/2shocks-app-icon.png", 1024, { opaque: true });
render("platform/2shocks-android-foreground.svg", "platform/2shocks-android-foreground.png", 432);
render("platform/2shocks-android-background.svg", "platform/2shocks-android-background.png", 432);
render("platform/2shocks-android-monochrome.svg", "platform/2shocks-android-monochrome.png", 432);
render("platform/2shocks-favicon.svg", "platform/2shocks-favicon-32.png", 32);
render("platform/2shocks-favicon.svg", "platform/2shocks-favicon-16.png", 16);
render("platform/2shocks-splash-symbol.svg", "platform/2shocks-splash-symbol.png", 512);
render("platform/2shocks-notification-icon.svg", "platform/2shocks-notification-icon.png", 96);
