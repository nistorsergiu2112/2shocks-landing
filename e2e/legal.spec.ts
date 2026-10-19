import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const appPages = [
  ["/app-privacy", "Rider App Privacy"],
  ["/app-terms", "Rider App Terms"],
  ["/delete-account", "Delete your account"],
  ["/support", "2Shocks Support"],
] as const;

test("public rider policies, deletion and support are readable and accessible", async ({ page }, testInfo) => {
  for (const [path, title] of appPages) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    await expect(page.locator("main")).toContainText("20 October 2026");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.2shocks.com${path}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath(`${path.slice(1)}.png`) });
  }
});

test("deletion draft requires sending and is separate from staging automation", async ({ page }) => {
  await page.goto("/delete-account");
  const draft = page.getByRole("link", { name: "Open an account-deletion email draft" });
  const href = new URL((await draft.getAttribute("href"))!);
  expect(href.protocol).toBe("mailto:");
  expect(href.pathname).toBe("info@2shocks.com");
  expect(href.searchParams.get("subject")).toBe("2Shocks account deletion request");
  await expect(page.locator("main")).toContainText("Opening the link does not submit a request or delete anything");
  await expect(page.locator("main")).toContainText("Production self-service submission and erasure have not been enabled and verified end to end");
  await expect(page.locator("main")).toContainText("does not delete your account or all private history");
  await page.getByRole("link", { name: "subscription information", exact: true }).click();
  await expect(page).toHaveURL(/\/app-terms#subscriptions$/);
  await expect(page.getByRole("heading", { name: "4. Store subscriptions" })).toBeInViewport();
});

test("website notices link to canonical app policies and public help", async ({ page }) => {
  for (const [path, appPath] of [["/privacy", "/app-privacy"], ["/terms", "/app-terms"]]) {
    await page.goto(path);
    await expect(page.locator(`main a[href="${appPath}"]`).first()).toBeVisible();
    for (const [label, target] of [["Account deletion", "/delete-account"], ["Support", "/support"]]) {
      await expect(page.locator("footer").getByRole("link", { name: label, exact: true })).toHaveAttribute("href", target);
    }
  }
  await page.goto("/app-terms");
  await expect(page.locator("main")).toContainText("up to 20 active motorcycles");
  await expect(page.locator("main")).toContainText("Automatic bike alerts remain included in Free");
  await page.goto("/app-privacy");
  await expect(page.locator("main")).toContainText("recipient email addresses");
  await expect(page.locator("main")).toContainText("Amsterdam");
  await expect(page.locator("main")).toContainText("pending confirmation");
});
