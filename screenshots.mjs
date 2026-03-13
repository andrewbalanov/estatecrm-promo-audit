import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';

const URL = 'http://localhost:5173/audit/';
const OUT = './figma-screenshots';

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });

// 1. Desktop full page
async function desktopFull() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });
  await page.close();
  console.log('1/6 Desktop full page - done');
}

// 2. Desktop with popup form
async function desktopForm() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  // Click the hero CTA button to open the form
  await page.click('.hero__button');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/desktop-form.png`, fullPage: false });
  await page.close();
  console.log('2/6 Desktop with form - done');
}

// 3. Mobile full page
async function mobileFull() {
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });
  await page.close();
  console.log('3/6 Mobile full page - done');
}

// 4. Mobile with menu open
async function mobileMenu() {
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.click('.navbar__burger');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/mobile-menu.png`, fullPage: false });
  await page.close();
  console.log('4/6 Mobile with menu - done');
}

// 5. Mobile with form open
async function mobileForm() {
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.click('.hero__button');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/mobile-form.png`, fullPage: false });
  await page.close();
  console.log('5/6 Mobile with form - done');
}

// 6. Tablet full page
async function tabletFull() {
  const page = await browser.newPage();
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: `${OUT}/tablet-full.png`, fullPage: true });
  await page.close();
  console.log('6/6 Tablet full page - done');
}

await desktopFull();
await desktopForm();
await mobileFull();
await mobileMenu();
await mobileForm();
await tabletFull();

await browser.close();
console.log(`\nAll screenshots saved to ${OUT}/`);
