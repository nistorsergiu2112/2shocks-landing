import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { JSDOM } from "jsdom";

// Check the actual exported HTML: these signals must work without JavaScript.
const origin = "https://www.2shocks.com";
const sitemap = new JSDOM(await readFile("out/sitemap.xml", "utf8"), { contentType: "text/xml" });
const urls = [...sitemap.window.document.querySelectorAll("loc")].map(node => node.textContent);
assert.equal(urls.length, 6);
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
  for (const link of doc.querySelectorAll('a[href^="/"]')) {
    const destination = new URL(link.href, origin);
    const target = destination.pathname;
    await access(target === "/" ? "out/index.html" : `out${target}.html`);
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
console.log("PASS robots, structured data, social assets and crawlable internal links");
