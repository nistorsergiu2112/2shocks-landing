import { expect, test } from "@playwright/test";

test("home presents the rider app and coming-soon state", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Know what your bike needs");
  await expect(page.getByLabel("App Store — coming soon").first()).toHaveAttribute("aria-disabled", "true");
  await expect(page.getByRole("link", { name: /Questions\? Email us/ })).toHaveAttribute("href", "mailto:info@2shocks.com");
  await expect(page.locator("body")).not.toContainText(/Find a garage|booking|ticket|proposal/i);
});

test("legal routes contain the draft operator warning", async ({ page }) => {
  for (const path of ["/terms", "/privacy"]) {
    await page.goto(path);
    await expect(page.getByRole("note")).toContainText("Draft operator details");
    await expect(page.getByText("2Shocks Technologies Ltd").first()).toBeVisible();
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
});

test("pages have no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width + 1);
});
