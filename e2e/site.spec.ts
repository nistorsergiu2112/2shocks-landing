import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home presents the rider app and coming-soon state", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Your bike’s history.");
  await expect(page.getByLabel("App Store — coming soon").first()).toHaveAttribute("aria-disabled", "true");
  await expect(page.getByRole("link", { name: /Ask us a question/ })).toHaveAttribute("href", "mailto:info@2shocks.com");
  await expect(page.getByRole("link", { name: "Contact 2Shocks" })).toHaveAttribute("href", /mailto:info@2shocks\.com\?subject=2Shocks%20enquiry/);
  await expect(page.locator("#launch")).toContainText("Opens your email app");
  await expect(page.getByRole("link", { name: /book a garage|find a garage/i })).toHaveCount(0);
  await page.getByRole("button", { name: "Can I book a garage through the app?" }).click();
  await expect(page.getByRole("region", { name: "Can I book a garage through the app?" })).toContainText("Garage booking isn’t part of the first release");
});

test("legal routes show website-only policies and confirmed operator", async ({ page }) => {
  for (const path of ["/terms", "/privacy"]) {
    await page.goto(path);
    await expect(page.getByRole("note")).toHaveCount(0);
    await expect(page.getByText("2 SHOCKS LTD", { exact: true }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "info@2shocks.com" }).first()).toBeVisible();
  }
});

test("mobile navigation and internal links are reachable", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only navigation check");
  await page.goto("/");
  await page.getByLabel("Open navigation").click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("link", { name: "Features" }).last().click();
  await expect(page.locator("#features")).toBeInViewport();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).not.toBeVisible();
});

test("app tour supports keyboard selection and shows the selected screen", async ({ page }) => {
  await page.goto("/");
  const tab = page.getByRole("tab", { name: "Motorcycle passport" });
  await tab.focus();
  await tab.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Service history" })).toBeFocused();
  await expect(page.getByRole("tabpanel", { name: "Service history" })).toBeVisible();
  await expect(page.getByRole("tabpanel", { name: "Motorcycle passport" })).toBeHidden();
  await page.getByRole("tab", { name: "Service history" }).press("End");
  await expect(page.getByRole("tabpanel", { name: "Your collection" })).toContainText("Up to five with 2Shocks Plus");
});

test("navigation from legal pages returns to the correct home section", async ({ page, isMobile }) => {
  await page.goto("/terms");
  if (isMobile) await page.getByLabel("Open navigation").click();
  await page.getByRole("link", { name: "Features", exact: true }).filter({visible:true}).click();
  await expect(page).toHaveURL(/\/#features$/);
  await expect(page.locator("#features")).toBeInViewport();
});

test("reduced motion, images and internal destinations remain accessible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", {name:"Skip to content"})).toBeFocused();
  await page.keyboard.press("Enter");
  for (const tab of await page.getByRole("tab").all()) {
    await tab.click();
    const image = page.getByRole("tabpanel").getByRole("img");
    await expect(image).toBeVisible();
    await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
  const destinations = await page.locator('a[href^="#"], a[href^="/#"]').evaluateAll(links => links.map(link => new URL((link as HTMLAnchorElement).href).hash.slice(1)));
  for (const id of new Set(destinations)) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
  expect(await page.context().cookies()).toHaveLength(0);
});

test("responsive layouts keep all content within the viewport", async ({ page }, testInfo) => {
  for (const width of [390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const image of await page.locator('main img:visible').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    }
    await page.evaluate(() => window.scrollTo({top: 0, behavior: 'instant'}));
    expect(await page.locator('main > section').first().evaluate(el => el.scrollLeft)).toBe(0);
    await page.screenshot({ path: testInfo.outputPath(`landing-${width}.png`), fullPage: true });
  }
});

test("pages have no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width + 1);
});

test("home and legal pages pass accessibility checks", async ({ page }) => {
  for (const path of ["/", "/terms", "/privacy"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations).toEqual([]);
  }
});


test("FAQ toggles accessibly and back to top returns focus", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const question = page.getByRole("button", { name: "Who is 2Shocks for?" });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region", { name: "Who is 2Shocks for?" })).toBeVisible();
  await question.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByRole("region", { name: "Who is 2Shocks for?" })).toHaveCount(0);
  await page.getByRole("button", { name: "Back to top", exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator("#main-content")).toBeFocused();
});

test("mobile tour keeps the complete phone in view after switching", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile tour layout");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const name of ["Service history", "Your collection", "Motorcycle passport"]) {
    await page.getByRole("tab", { name, exact: true }).click();
    const image = page.getByRole("tabpanel").getByRole("img");
    await expect(image).toBeInViewport({ ratio: 1 });
  }
});

test("rider guides are linked, readable and accessible", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "How to check a motorcycle’s MOT history", exact: true }).click();
  await expect(page).toHaveURL(/\/guides\/motorcycle-mot-history$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("How to check a motorcycle’s MOT history");
  await expect(page.getByRole("link", { name: "Check MOT history on GOV.UK" })).toHaveAttribute("href", "https://www.gov.uk/check-mot-history");
  for (const path of ["/guides", "/guides/motorcycle-mot-history", "/guides/motorcycle-service-history"]) {
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations).toEqual([]);
  }
});
