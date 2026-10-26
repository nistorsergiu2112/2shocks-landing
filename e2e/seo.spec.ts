import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage explains the app, prioritises Free and exposes guides on mobile", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Motorbike Maintenance App UK & Service Log | 2Shocks");
  await expect(page.locator("main")).toContainText("2Shocks is a motorbike maintenance app for UK riders.");
  await expect(page.locator("#questions button").first()).toHaveText("Is 2Shocks free?+");
  for (const slug of ["motorcycle-mot-history", "motorcycle-service-history", "motorcycle-service-plan"]) {
    await expect(page.locator(`#rider-guides a[href="/guides/${slug}"]`).first()).toBeVisible();
  }
});

test("all guides have accessible tables, matching editorial dates and direct downloads", async ({ page }) => {
  for (const slug of ["motorcycle-mot-history", "motorcycle-service-history", "motorcycle-service-plan"]) {
    await page.goto(`/guides/${slug}`);
    await expect(page.locator(".guide-byline time")).toHaveAttribute("datetime", "2026-10-26");
    await expect(page.locator(".guide-byline time")).toHaveText("26 October 2026");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const region of await page.locator(".guide-table-scroll").all()) {
      await expect(region).toHaveAttribute("tabindex", "0");
      await expect(region.locator("caption")).toBeVisible();
      if (page.viewportSize()!.width < 600 && await region.evaluate(el => el.scrollWidth > el.clientWidth)) {
        await region.focus();
        await page.keyboard.press("ArrowRight");
        await expect.poll(() => region.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
      }
    }
    await expect(page.locator('main a[data-store-location="guide"]')).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.twoshocks.app");
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
  }
});

test("the blank log remains usable at narrow widths and for printing", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/guides/motorcycle-service-history");
  const log = page.getByRole("table", { name: "Blank service log — one row per completed job" });
  await expect(log.locator("tbody tr")).toHaveCount(4);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(log).toHaveCSS("table-layout", "fixed");
  expect(await log.evaluate(el => el.getBoundingClientRect().right <= innerWidth)).toBe(true);
});

test("store clicks report only page and location and still navigate directly", async ({ page }) => {
  const events: { name: string; data: Record<string, string> }[] = [];
  await page.exposeFunction("recordStoreEvent", (event: { name: string; data: Record<string, string> }) => events.push(event));
  await page.addInitScript(() => {
    const scope = window as unknown as { va: (type: string, value: unknown) => void; analyticsReady: boolean; recordStoreEvent: (value: unknown) => void };
    scope.va = (type, value) => {
      if (type === "beforeSend") scope.analyticsReady = true;
      if (type === "event") scope.recordStoreEvent(value);
    };
  });
  await page.route(/(?:\/(?:_vercel\/insights|[a-f0-9]{16})\/script\.js|vercel-scripts\.com\/.*script\.debug\.js)/, route => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  await page.route("https://play.google.com/**", route => route.fulfill({ status: 200, contentType: "text/html", body: "<title>Store destination</title>" }));
  for (const [path, location] of [["/", "hero"], ["/guides/motorcycle-service-plan", "guide"]]) {
    await page.goto(`${path}?email=do-not-track#private`);
    await expect.poll(() => page.evaluate(() => (window as unknown as { analyticsReady: boolean }).analyticsReady)).toBe(true);
    await page.locator(`main a[data-store-location="${location}"]`).click();
    await expect(page).toHaveURL("https://play.google.com/store/apps/details?id=com.twoshocks.app");
  }
  await expect.poll(() => events.length).toBe(2);
  expect(events).toEqual([
    { name: "google_play_click", data: { page: "/", location: "hero" } },
    { name: "google_play_click", data: { page: "/guides/motorcycle-service-plan", location: "guide" } },
  ]);
  await page.goto("/privacy");
  await page.getByRole("button", { name: "Turn off website statistics", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("off in this browser");
  await page.goto("/");
  await page.locator('a[data-store-location="hero"]').click();
  await expect(page).toHaveURL("https://play.google.com/store/apps/details?id=com.twoshocks.app");
  expect(events).toHaveLength(2);
});
