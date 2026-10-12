const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.veritaservicesllc.com/', { waitUntil: 'networkidle' });
  
  // Wait a bit for animations
  await page.waitForTimeout(3000);
  
  // Find the CTA section and HOA section
  const ctaSection = await page.locator('section:has-text("READY TO GET STARTED")').first();
  const hoaSection = await page.locator('section:has-text("HOAs & PROPERTY MANAGERS")').first();
  
  // Get computed styles for CTA
  if (await ctaSection.count() > 0) {
    const ctaStyles = await ctaSection.evaluate(el => {
      const style = getComputedStyle(el);
      const gradientDiv = el.querySelector('div[style*="linear-gradient"], div[class*="gradient"]');
      return {
        section: {
          backgroundColor: style.backgroundColor,
          backgroundImage: style.backgroundImage,
        },
        gradientDiv: gradientDiv ? getComputedStyle(gradientDiv).backgroundImage : 'none'
      };
    });
    console.log('CTA Section styles:', JSON.stringify(ctaStyles, null, 2));
  }
  
  // Get computed styles for HOA
  if (await hoaSection.count() > 0) {
    const hoaStyles = await hoaSection.evaluate(el => {
      const style = getComputedStyle(el);
      const cardDiv = el.querySelector('.rounded-t-2xl, [class*="bg-primary"]');
      const gradientDiv = el.querySelector('div[style*="linear-gradient"], div[class*="gradient"]');
      return {
        section: {
          backgroundColor: style.backgroundColor,
          backgroundImage: style.backgroundImage,
        },
        card: cardDiv ? getComputedStyle(cardDiv).backgroundImage : 'none',
        gradientDiv: gradientDiv ? getComputedStyle(gradientDiv).backgroundImage : 'none'
      };
    });
    console.log('HOA Section styles:', JSON.stringify(hoaStyles, null, 2));
  }
  
  // Also check dark mode
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.waitForTimeout(1000);
  
  if (await ctaSection.count() > 0) {
    const ctaStyles = await ctaSection.evaluate(el => {
      const style = getComputedStyle(el);
      const gradientDiv = el.querySelector('div[style*="linear-gradient"], div[class*="gradient"]');
      return {
        section: {
          backgroundColor: style.backgroundColor,
          backgroundImage: style.backgroundImage,
        },
        gradientDiv: gradientDiv ? getComputedStyle(gradientDiv).backgroundImage : 'none'
      };
    });
    console.log('CTA Section DARK styles:', JSON.stringify(ctaStyles, null, 2));
  }
  
  await browser.close();
})();
