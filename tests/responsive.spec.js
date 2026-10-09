import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-small', width: 375, height: 667 },
  { name: 'mobile-large', width: 414, height: 896 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'desktop-large', width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test.describe(`Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('should not have horizontal scroll', async ({ page }) => {
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = viewport.width;
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
    });

    test('header should be responsive', async ({ page }) => {
      const header = page.locator('#main-header');
      await expect(header).toBeVisible();
      
      if (viewport.width < 768) {
        const mobileMenuBtn = page.locator('button[aria-controls="mobile-nav"]');
        await expect(mobileMenuBtn).toBeVisible();
        
        const desktopNav = page.locator('nav[aria-label="Main navigation"]');
        await expect(desktopNav).toBeHidden();
      } else {
        const mobileMenuBtn = page.locator('button[aria-controls="mobile-nav"]');
        await expect(mobileMenuBtn).toBeHidden();
        
        const desktopNav = page.locator('nav[aria-label="Main navigation"]');
        await expect(desktopNav).toBeVisible();
      }
    });

    test('hero section should render without overflow', async ({ page }) => {
      const hero = page.locator('section:has(h1#hero-title)');
      await expect(hero).toBeVisible();
      
      const heroContent = page.locator('.hero-content');
      await expect(heroContent).toBeVisible();
    });

    test('services grid should be responsive', async ({ page }) => {
      const servicesSection = page.locator('section:has(h2#services-title)');
      await expect(servicesSection).toBeVisible();
      
      const cards = page.locator('.card-volume');
      const count = await cards.count();
      expect(count).toBeGreaterThan(0);
    });

    test('footer should not overflow', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('all interactive elements should be accessible', async ({ page }) => {
      const buttons = page.locator('button, a[href], [role="button"]');
      const count = await buttons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('CTA section should render properly', async ({ page }) => {
      const cta = page.locator('section:has(h2#cta-title)');
      await expect(cta).toBeVisible();
    });
  });
}

test.describe('Accessibility checks', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('should have lang attribute on html', async ({ page }) => {
    await page.goto('/');
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBeTruthy();
  });

  test('images should have alt attributes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });
});