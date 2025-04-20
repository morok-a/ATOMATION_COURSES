
import { expect, test, Page} from '@playwright/test';
import { HomePage } from '../src/pages/home-page';

test.describe('Test Scenario for authentication and starting course', () => {
    let homePage: HomePage;
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.goTo();
    });

    test('Should add transaction', async () => {
        await homePage.waitForHeader();
        await homePage.enterDescriptionTransaction('Test transaction');
        await homePage.enterTransactionAmount('100');
        await homePage.clickAddTransactionButton();
        const incomeText = await homePage.getIncomeChangeAreaText();
        expect(incomeText).toContain('100');
    });

    test('Should add amount to expense', async () => {
        await homePage.waitForHeader();
        await homePage.enterDescriptionTransaction('Expense transaction');
        await homePage.enterTransactionAmount('-50');
        await homePage.clickAddTransactionButton();
        const expenseText = await homePage.getExpenseChangeAreaText();
        expect(expenseText).toContain('50');
    });
});
