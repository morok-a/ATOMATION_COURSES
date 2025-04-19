import {  expect, test, Page} from '@playwright/test';
import { AmazonPage } from 'src/pages/amazon-page';
import { CustomerPage } from 'src/pages/customer-page';


test.describe('Amazon Home Page', () => {
    let amazonPage: AmazonPage;
    let customerPage: CustomerPage;
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        amazonPage = new AmazonPage(page);
        customerPage = new CustomerPage(page);
        await amazonPage.goTo();
        await amazonPage.dismissPopup();
    });

    test('Verify if tab contains "Today\'s Deals" and there is no than 5 tabs inside', async () => {
        const tabNames = await amazonPage.getTabsName();
        expect(tabNames).toContain('Today\'s Deals');
        expect(tabNames.length).not.toBeGreaterThan(6);
        expect(tabNames[0].length).toBeGreaterThan(0);
    });

    test('Should select tab "Customer Service"', async () => {
        const tabNames = await amazonPage.getTabsName();
        expect(tabNames).toContain('Customer Service');
        await amazonPage.selectTab('Customer Service');
        await amazonPage.waitForHeaderName();
        expect(amazonPage.headerOnCustomerPage).toBeVisible();
    });

    test('Verify if on the customer page present list with which service could help', async () => {
        const areaText = await customerPage.getAreaText();
        await amazonPage.selectTab('Customer Service');
        expect(areaText).toBeTruthy();
        expect(areaText.length).toBeLessThanOrEqual(11);
        await customerPage.getIcons();
        expect(customerPage.getIcons).toBeTruthy();
    });
});
