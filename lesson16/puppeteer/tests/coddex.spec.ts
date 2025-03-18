import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Test Scenario for authentication and course selection', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    async function sleep(time: number): Promise<void> {
        return new Promise(function(resolve) {
            setTimeout(resolve, time);
        });
    }

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://codedex.io/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Should sign in into site', async () => {
        await page.waitForSelector('div.center-content > button');
        await page.click('div.center-content > button');
        await page.waitForSelector('video');
        await sleep(2000);
        const currentTime = await page.evaluate(() => {
            const video = document.querySelector('video');
            return video ? video.currentTime : 0;
        });
        expect(currentTime).to.be.greaterThan(0);
        await page.click('#end-video');
        await sleep(2000);
        await page.click('a[href="/login"]');
        await page.waitForSelector('input[name="email"]');
        await page.type('input[name="email"]', 'nastasuper5@gmail.com');
        await page.type('input[name="password"]', 'SomePassword');
        await page.click('form > div.submit-btn-container > button');
    });
    it('Should select course', async () => {
        await page.waitForSelector('div.icon-container.nes-pointer svg g path');
        await page.click('div.icon-container.nes-pointer svg g path');
        await page.waitForSelector('div.nav-container-links div:nth-child(1) a button');
        await page.click('div.nav-container-links div:nth-child(1) a button');
        await page.waitForSelector('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card');
        await page.click('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card');
        await page.waitForSelector('#parallax-banner .third-layer div:nth-child(1) div a');
        await page.click('#parallax-banner .third-layer div:nth-child(1) div a');
    });
});
