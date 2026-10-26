import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("loopback preview loads interactive scripts and responds to controls", async ({ page, baseURL }) => {
  const preview = new URL(baseURL!);
  if (!["localhost", "127.0.0.1"].includes(preview.hostname)) test.skip(true, "local preview check");
  preview.hostname = "127.0.0.1";
  const blockedScripts: string[] = [];
  page.on("response", response => {
    if (response.url().includes("/_next/") && response.status() === 403) blockedScripts.push(response.url());
  });
  await page.goto(preview.href);
  if (page.viewportSize()!.width <= 600) {
    await page.getByText("Parts & maintenance plans", { exact: true }).click();
    await expect(page.getByLabel("Rider app features")).toContainText("confirm suitability");
  } else {
    await page.getByRole("tab", { name: "Service history" }).click();
    await expect(page.getByRole("tabpanel", { name: "Service history" })).toBeVisible();
  }
  await expect(page.getByRole("group", { name: "2Shocks iPhone app previews with example records" }).getByRole("img")).toHaveCount(3);
  expect(blockedScripts).toEqual([]);
});

test("home presents Android availability and keeps iOS coming soon", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Your motorbike’s service book,");
  await expect(page.getByLabel("App Store — coming soon").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Ask us a question/ })).toHaveAttribute("href", "mailto:info@2shocks.com");
  const downloads = page.getByRole("link", { name: "Get it on Google Play", exact: true });
  expect(await downloads.count()).toBeGreaterThanOrEqual(5);
  for (const link of await downloads.all()) await expect(link).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.twoshocks.app");
  await expect(page.locator('a[href*="apps.apple.com"], a[href*="testflight"], form')).toHaveCount(0);
  await expect(page.locator("#launch")).toContainText("An account and internet connection are required");
  await expect(page.getByRole("link", { name: /book a garage|find a garage/i })).toHaveCount(0);
  await page.getByRole("button", { name: "Can I book a garage through the app?" }).click();
  await expect(page.getByRole("region", { name: "Can I book a garage through the app?" })).toContainText("Garage booking isn’t part of the first release");
});

test("legal routes show website-only policies and confirmed operator", async ({ page }) => {
  for (const path of ["/terms", "/privacy", "/app-terms", "/app-privacy"]) {
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
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Get it on Google Play" })).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.twoshocks.app");
  await page.getByRole("link", { name: "Features" }).last().click();
  await expect(page.locator("#features")).toBeInViewport();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).not.toBeVisible();
});

test("app tour supports keyboard selection and shows the selected screen", async ({ page }) => {
  await page.goto("/");
  if (page.viewportSize()!.width <= 600) {
    const features = page.getByLabel("Rider app features");
    const summary = features.getByText("Your bike’s history", { exact: true });
    await summary.focus();
    await summary.press("Enter");
    await expect(features.locator('details').first()).toHaveAttribute('open', '');
    await expect(features.getByText(/Start with a UK registration/)).toBeVisible();
    await summary.press("Enter");
    await expect(features.locator('details').first()).not.toHaveAttribute('open');
    return;
  }
  const tab = page.getByRole("tab", { name: "Motorcycle passport" });
  await tab.focus();
  await tab.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Service history" })).toBeFocused();
  await expect(page.getByRole("tabpanel", { name: "Service history" })).toBeVisible();
  await expect(page.getByRole("tabpanel", { name: "Motorcycle passport" })).toBeHidden();
  await page.getByRole("tab", { name: "Service history" }).press("End");
  await expect(page.getByRole("tabpanel", { name: "Your collection" })).toContainText("Up to 20 with 2Shocks Plus");
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
  for (const path of ["/", "/terms", "/privacy", "/app-terms", "/app-privacy"]) {
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

test("mobile features stay compact and the complete hero phone stays in view", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile feature layout");
  await page.goto('/');
  await expect(page.getByRole('tablist')).toHaveCount(0);
  const features = page.getByLabel('Rider app features');
  await expect(features.locator('details')).toHaveCount(3);
  await expect(features.locator('details[open]')).toHaveCount(0);
  const phone = page.locator('[data-mobile-position="active"] img');
  await phone.scrollIntoViewIfNeeded();
  await expect(phone).toBeInViewport({ratio: 1});
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


test("advertising handoff serves plain text and distinct legal links", async ({ page, request }) => {
  const response = await request.get('/app-ads.txt');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('text/plain');
  expect(await response.text()).toBe('google.com, pub-1348658013604630, DIRECT, f08c47fec0942fa0\n');
  await page.goto('/');
  for (const [label, path] of [['Website privacy', '/privacy'], ['App privacy', '/app-privacy'], ['Website terms', '/terms'], ['App terms', '/app-terms']]) {
    await expect(page.locator('footer').getByRole('link', {name: label, exact: true})).toHaveAttribute('href', path);
  }
  await page.goto('/app-privacy');
  await expect(page.getByRole('heading', {level: 1})).toHaveText('Rider App Privacy');
  await expect(page.locator('main')).toContainText('off by default');
  await expect(page.locator('main')).toContainText('limited ads');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("website statistics can be disabled, stay disabled and be re-enabled", async ({ page }) => {
  await page.route(/(?:\/(?:_vercel\/insights|[a-f0-9]{16})\/script\.js|vercel-scripts\.com\/.*script\.debug\.js)/, route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
  await page.goto('/privacy');
  await expect(page.getByRole('status')).toContainText('on in this browser');
  await expect(page.locator('script[data-sdkn^="@vercel/analytics"]')).toHaveCount(1);
  await page.getByRole('button', { name: 'Turn off website statistics', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('off in this browser');
  await expect(page.locator('script[data-sdkn^="@vercel/analytics"]')).toHaveCount(0);
  await page.goto('/');
  await expect(page.locator('script[data-sdkn^="@vercel/analytics"]')).toHaveCount(0);
  await page.goto('/privacy');
  await page.getByRole('button', { name: 'Turn on website statistics', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('on in this browser');
  await expect(page.locator('script[data-sdkn^="@vercel/analytics"]')).toHaveCount(1);
});

test("hero presents one composition of real phone screens without store-panel captions", async ({ page }, testInfo) => {
  await page.goto('/');
  const art = page.getByRole('group', { name: '2Shocks iPhone app previews with example records' });
  await expect(art.getByRole('img')).toHaveCount(3);
  for (const image of await art.getByRole('img').all()) {
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', /-capture\.png/);
    await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth === 1206)).toBe(true);
    const ratio = await image.evaluate(el => el.getBoundingClientRect().width / el.getBoundingClientRect().height);
    // Rotation changes bounding boxes; source proportions are preserved by height:auto.
    expect(ratio).toBeGreaterThan(0.4);
    expect(ratio).toBeLessThan(0.8);
  }
  const foreground = art.locator('[data-screen="history"]');
  await expect(foreground).toHaveCSS('transform', 'none');
  await expect(art.getByRole('link')).toHaveCount(3);
  for (const link of await art.getByRole('link').all()) {
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('href', /-capture\.png$/);
  }
  const sourcePixels = await foreground.getByRole('img').evaluate((el: HTMLImageElement) => ({
    width: el.naturalWidth, displayWidth: el.getBoundingClientRect().width, dpr: devicePixelRatio,
  }));
  expect(sourcePixels.width).toBeGreaterThanOrEqual(sourcePixels.displayWidth * sourcePixels.dpr);
  await foreground.focus();
  const popupPromise = page.waitForEvent('popup');
  await foreground.press('Enter');
  const fullSize = await popupPromise;
  await fullSize.waitForLoadState();
  await expect(fullSize).toHaveURL(/01-service-history-capture\.png$/);
  await expect.poll(() => fullSize.locator('img').evaluate((el: HTMLImageElement) => el.naturalWidth)).toBe(1206);
  await fullSize.close();
  await expect(art.getByRole('button')).toHaveCount(0);
  const hero = page.locator('main > section').first();
  await expect(hero).not.toContainText('Explore the app, one screen at a time');
  await expect(hero).not.toContainText('development build');
  await expect(hero).not.toContainText('Android promotional panels');
  await expect(hero).not.toContainText('View full-size preview');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await hero.screenshot({ path: testInfo.outputPath('hero-composition.png') });
});


test("mobile hero swipes through complete phones and keeps full-resolution links usable", async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile touch composition');
  await page.goto('/');
  const art = page.getByRole('group', { name: '2Shocks iPhone app previews with example records' });
  await expect(art).toHaveAttribute('aria-roledescription', 'carousel');
  await art.scrollIntoViewIfNeeded();
  const touch = await page.context().newCDPSession(page);
  async function swipe(direction: 'left' | 'right') {
    const bounds = await art.locator('[data-mobile-position="active"]').boundingBox();
    if (!bounds) throw new Error('Missing selected phone');
    const y = bounds.y + bounds.height / 2;
    const center = bounds.x + bounds.width / 2;
    const start = center + (direction === 'left' ? 65 : -65);
    const end = center + (direction === 'left' ? -65 : 65);
    await touch.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: start, y }] });
    for (let step = 1; step <= 6; step++) {
      await touch.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: start + (end - start) * step / 6, y }] });
    }
    await touch.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  }
  for (const [direction, screen] of [['left', 'plan'], ['left', 'mot'], ['left', 'history'], ['right', 'mot']] as const) {
    await swipe(direction);
    const selected = art.locator('[data-mobile-position="active"]');
    await expect(selected).toHaveAttribute('data-screen', screen);
    await expect(selected.getByRole('img')).toBeInViewport({ ratio: 1 });
    await expect.poll(() => selected.evaluate(el => {
      const phone = el.getBoundingClientRect();
      const stage = el.parentElement!.getBoundingClientRect();
      return phone.bottom <= stage.bottom && phone.left >= stage.left && phone.right <= stage.right;
    })).toBe(true);
    expect(page.context().pages()).toHaveLength(1);
  }
  const scrollBefore = await page.evaluate(() => scrollY);
  const phone = await art.locator('[data-mobile-position="active"]').boundingBox();
  if (!phone) throw new Error('Missing selected phone');
  const x = phone.x + phone.width / 2;
  const y = phone.y + phone.height / 2;
  await touch.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y + 60 }] });
  for (let step = 1; step <= 6; step++) {
    await touch.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + 60 - step * 20 }] });
  }
  await touch.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(scrollBefore + 10);
  await expect(art.locator('[data-mobile-position="active"]')).toHaveAttribute('data-screen', 'mot');
  const selected = art.locator('[data-mobile-position="active"]');
  await selected.focus();
  await selected.press('ArrowLeft');
  await expect(art.locator('[data-mobile-position="active"]')).toHaveAttribute('data-screen', 'plan');
  await expect(art.locator('[data-mobile-position="active"]')).toBeFocused();
  await expect(art.locator('[aria-live="polite"]')).toHaveText('motorcycle and service plan preview, 2 of 3');
  const original = page.waitForEvent('popup');
  await art.locator('[data-mobile-position="active"]').press('Enter');
  const fullSize = await original;
  await expect(fullSize).toHaveURL(/03-service-plan-capture\.png$/);
  await fullSize.close();
  await touch.detach();
});

test("mobile hero height follows its phone at wide mobile widths and short viewports", async ({ page }) => {
  await page.goto('/');
  for (const [width, height] of [[320, 568], [390, 664], [430, 740], [600, 900], [600, 500]]) {
    await page.setViewportSize({ width, height });
    const art = page.getByRole('group', { name: '2Shocks iPhone app previews with example records' });
    await art.scrollIntoViewIfNeeded();
    const selected = art.locator('[data-mobile-position="active"]');
    await expect(selected.getByRole('img')).toBeInViewport({ ratio: 1 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await selected.evaluate(el => el.getBoundingClientRect().bottom <= el.parentElement!.getBoundingClientRect().bottom)).toBe(true);
  }
});


test("mobile hides repeated long sections while retaining the core offer and help", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto('/');
  const mobileHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (const id of ['parts-estimates', 'parts-matching']) await expect(page.locator(`#${id}`)).toBeHidden();
  await expect(page.getByRole('tablist')).toHaveCount(0);
  for (const id of ['how-it-works', 'features', 'plans', 'rider-guides', 'questions', 'launch']) await expect(page.locator(`#${id}`)).toBeVisible();
  await expect(page.locator('#plans')).toContainText('Up to 20 active motorcycles');
  for (const path of ['/app-privacy', '/app-terms', '/delete-account', '/support', '/guides']) await expect(page.locator(`footer a[href="${path}"]`)).toBeVisible();
  expect(mobileHeight).toBeLessThan(7500);
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const id of ['parts-estimates', 'parts-matching', 'rider-guides']) await expect(page.locator(`#${id}`)).toBeVisible();
  await expect(page.getByRole('tablist')).toBeVisible();
  await expect(page.getByLabel('Rider app features')).toBeHidden();
});
