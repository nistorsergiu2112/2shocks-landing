import { chromium, devices } from "@playwright/test";

// Run against a served production export. These are lab observations, not field CWV.
const target = process.argv[2] || "http://127.0.0.1:3002/";
const origin = new URL(target).origin;
const browser = await chromium.launch();
try {
  const context = await browser.newContext({ ...devices["Pixel 7"] });
  const page = await context.newPage();
  // Keep local measurements from sending analytics or relying on third parties.
  await page.route("**/*", route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  const session = await context.newCDPSession(page);
  await session.send("Network.enable");
  await session.send("Network.setCacheDisabled", { cacheDisabled: true });
  await session.send("Network.emulateNetworkConditions", {
    offline: false, latency: 150, downloadThroughput: 1_600_000 / 8, uploadThroughput: 750_000 / 8,
  });
  await session.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await page.addInitScript(() => {
    window.labMetrics = { lcpMs: null, cls: 0, lcpElement: null };
    new PerformanceObserver(list => {
      const entry = list.getEntries().at(-1);
      window.labMetrics.lcpMs = entry.startTime;
      window.labMetrics.lcpElement = entry.element?.tagName || null;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    let first = 0, last = 0, score = 0;
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.hadRecentInput) continue;
        if (last && entry.startTime - last < 1000 && entry.startTime - first < 5000) score += entry.value;
        else { first = entry.startTime; score = entry.value; }
        last = entry.startTime;
        window.labMetrics.cls = Math.max(window.labMetrics.cls, score);
      }
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto(target, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  const result = await page.evaluate(() => ({
    ...window.labMetrics,
    resources: performance.getEntriesByType("resource").map(entry => ({
      path: new URL(entry.name).pathname, bytes: entry.encodedBodySize, durationMs: Math.round(entry.duration),
    })),
  }));
  console.log(JSON.stringify({ target, profile: "Pixel 7 / Chromium / cold cache / 1.6Mbps down / 150ms latency / 4x CPU slowdown", ...result }, null, 2));
  await context.close();
} finally {
  await browser.close();
}
