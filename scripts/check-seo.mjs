import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { extname } from "node:path";
import { JSDOM } from "jsdom";

// Check the actual exported HTML: these signals must work without JavaScript.
const origin = "https://www.2shocks.com";
const sitemap = new JSDOM(await readFile("out/sitemap.xml", "utf8"), { contentType: "text/xml" });
const urls = [...sitemap.window.document.querySelectorAll("loc")].map(node => node.textContent);
assert.equal(urls.length, 11);
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
const exportedPages = (await readdir("out", { recursive: true })).filter(path => path.endsWith(".html") && !["404.html", "404/index.html", "_not-found.html"].includes(path));
assert.deepEqual(new Set(urls.map(url => new URL(url).pathname)), new Set(exportedPages.map(path => path === "index.html" ? "/" : `/${path.slice(0, -5)}`)), "Exported routes and sitemap must agree");
const titles = new Set();
for (const url of urls) {
  assert.equal(new URL(url).origin, origin, `Wrong canonical host: ${url}`);
  const path = new URL(url).pathname;
  const file = path === "/" ? "out/index.html" : `out${path}.html`;
  const doc = new JSDOM(await readFile(file, "utf8")).window.document;
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, url);
  assert.equal(new URL(doc.querySelector('meta[property="og:url"]').content).href, url);
  assert.ok(!/noindex/i.test(doc.querySelector('meta[name="robots"]').content));
  assert.equal(doc.querySelectorAll("h1").length, 1);
  assert.ok(doc.querySelector('meta[name="description"]').content.length > 50);
  assert.ok(!titles.has(doc.title), `Duplicate title: ${doc.title}`);
  titles.add(doc.title);
  const image = doc.querySelector('meta[property="og:image"]').content;
  assert.equal(new URL(image).origin, origin);
  await access(`out${new URL(image).pathname}`);
  for (const script of doc.querySelectorAll('script[type="application/ld+json"]')) JSON.parse(script.textContent);
  if (path.startsWith("/guides/")) {
    const date = doc.querySelector(".guide-byline time");
    const entry = [...sitemap.window.document.querySelectorAll("url")].find(node => node.querySelector("loc").textContent === url);
    assert.equal(date.dateTime, entry.querySelector("lastmod").textContent, `Guide/sitemap dates disagree: ${url}`);
    assert.ok(doc.querySelector('a[data-store-location="guide"]'), `Missing guide download: ${url}`);
    for (const table of doc.querySelectorAll("table")) {
      assert.ok(table.querySelector("caption"));
      assert.ok(table.querySelectorAll('th[scope="col"]').length >= 2);
    }
  }
  for (const link of doc.querySelectorAll('a[href="https://play.google.com/store/apps/details?id=com.twoshocks.app"]')) assert.ok(link.dataset.storeLocation, `Unmeasured store link on ${url}`);
  for (const link of doc.querySelectorAll('a[href^="/"]')) {
    const destination = new URL(link.href, origin);
    const target = destination.pathname;
    const targetFile = target === "/" ? "out/index.html" : extname(target) ? `out${target}` : `out${target}.html`;
    await access(targetFile);
    if (destination.hash && !extname(target)) {
      const targetDoc = target === path ? doc : new JSDOM(await readFile(targetFile, "utf8")).window.document;
      assert.ok(targetDoc.getElementById(decodeURIComponent(destination.hash.slice(1))), `Missing anchor: ${link.href}`);
    }
  }
  console.log(`PASS ${url}`);
}
const robots = await readFile("out/robots.txt", "utf8");
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.ok(robots.includes("Allow: /"));
assert.ok(!robots.includes("Disallow: /"));
const home = new JSDOM(await readFile("out/index.html", "utf8")).window.document;
const graph = JSON.parse(home.querySelector('script[type="application/ld+json"]').textContent)["@graph"];
for (const type of ["Organization", "WebSite", "WebPage", "MobileApplication"]) assert.ok(graph.some(node => node["@type"] === type));
assert.ok(home.querySelector('a[href="/guides/motorcycle-mot-history"]'));
assert.ok(home.querySelector('a[href="/guides/motorcycle-service-history"]'));
assert.ok(home.querySelector('a[href="/guides/motorcycle-service-plan"]'));
assert.equal(home.title, "Motorbike Maintenance App UK & Service Log | 2Shocks");
assert.ok(home.querySelector("main").textContent.includes("2Shocks is a motorbike maintenance app for UK riders."));
const playUrl = "https://play.google.com/store/apps/details?id=com.twoshocks.app";
assert.ok(home.querySelectorAll(`a[href="${playUrl}"]`).length >= 6);
assert.equal(home.querySelectorAll('a[href*="apps.apple.com"], a[href*="testflight"], form').length, 0);
const app = graph.find(node => node["@type"] === "MobileApplication");
assert.equal(app.downloadUrl, playUrl);
assert.equal(app.operatingSystem, "Android");
assert.ok(!app.aggregateRating && !app.review);
assert.ok(!/coming soon to iOS and Android|not yet available to download/i.test(home.body.textContent));
console.log("PASS robots, structured data, social assets, internal links/anchors and Android release actions");
