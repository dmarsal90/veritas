import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/quote', name: 'Quote' },
  { path: '/services', name: 'Services' },
  { path: '/spider-control', name: 'Spider Control' },
  { path: '/roach-cleanup', name: 'Roach Cleanup' },
  { path: '/communities', name: 'Communities' },
  { path: '/rodent-control', name: 'Rodent Control' },
  { path: '/bed-bug-treatment', name: 'Bed Bug Treatment' },
  { path: '/flea-tick-treatment', name: 'Flea & Tick Treatment' },
  { path: '/mosquito-control', name: 'Mosquito Control' },
  { path: '/san-carlos-park', name: 'San Carlos Park' },
  { path: '/estero', name: 'Estero' },
  { path: '/bonita-springs', name: 'Bonita Springs' },
  { path: '/spider-control-bonita-springs', name: 'Spider Control Bonita Springs' },
  { path: '/spider-control-naples', name: 'Spider Control Naples' },
];

for (const route of routes) {
  test(`Console errors audit - ${route.name} (${route.path})`, async ({ page }) => {
    const errors = [];
    const warnings = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      } else if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });
    
    page.on('pageerror', error => {
      errors.push(`Page Error: ${error.message}`);
    });
    
    await page.goto(route.path, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    console.log(`\n=== ${route.name} (${route.path}) ===`);
    if (errors.length > 0) {
      console.log('ERRORS:');
      errors.forEach(e => console.log(`  - ${e}`));
    } else {
      console.log('No console errors');
    }
    if (warnings.length > 0) {
      console.log('WARNINGS:');
      warnings.forEach(w => console.log(`  - ${w}`));
    }
    
    expect(errors.length, `Console errors on ${route.path}: ${errors.join('; ')}`).toBe(0);
  });
}

test('Full audit summary', async ({ page }) => {
  const allErrors = {};
  const allWarnings = {};
  
  for (const route of routes) {
    const errors = [];
    const warnings = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      } else if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });
    
    page.on('pageerror', error => {
      errors.push(`Page Error: ${error.message}`);
    });
    
    await page.goto(route.path, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    if (errors.length > 0) allErrors[route.path] = errors;
    if (warnings.length > 0) allWarnings[route.path] = warnings;
  }
  
  console.log('\n=== AUDIT SUMMARY ===');
  console.log('Errors by page:', JSON.stringify(allErrors, null, 2));
  console.log('Warnings by page:', JSON.stringify(allWarnings, null, 2));
  
  expect(Object.keys(allErrors).length).toBe(0);
});