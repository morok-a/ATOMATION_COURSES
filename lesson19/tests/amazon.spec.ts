import {  expect, test, Page} from '@playwright/test';
import { AmazonPage } from 'src/pages/amazon-page';


test.describe('Amazon Home Page', () => {
    let amazonPage: AmazonPage;
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        amazonPage = new AmazonPage(page);
        await amazonPage.goTo();
        await amazonPage.dismissPopup();
    });

    test('Verify if tab contains "Today\'s Deals" and there is no than 5 tabs inside', async () => {
        const tabNames = await amazonPage.getTabsName();
        expect(tabNames).toContain('Today\'s Deals');
        expect(tabNames.length).not.toBeGreaterThan(5);
        expect(tabNames[0].length).toBeGreaterThan(0);
    });

    test('Should select tab "Customer Service"', async () => {
        const tabNames = await amazonPage.getTabsName();
        expect(tabNames).toContain('Customer Service');
        await amazonPage.selectTab('Customer Service');
        expect(page.url()).toBe('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice');
        await amazonPage.getHeaderName();
        expect(amazonPage.headerOnCustomerPage).toBeVisible();
    });

    test('Verify if on the customer page present list with which service could help', async () => {
        const areaText = await amazonPage.getAreaText();
        await amazonPage.selectTab('Customer Service');
        expect(areaText).toBeTruthy();
        expect(areaText.length).toBeLessThanOrEqual(11);
        await amazonPage.getIcons();
        expect(amazonPage.getIcons).toBeTruthy();
    });
});
