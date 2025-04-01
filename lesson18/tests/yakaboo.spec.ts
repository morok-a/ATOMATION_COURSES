import { expect, test, Page} from '@playwright/test';
import { YakabooHomePage } from 'src/pages/yakaboo-page';

test.describe('Yakaboo', () => {
    let yakabooPage: YakabooHomePage;
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        yakabooPage = new YakabooHomePage(page);
        await yakabooPage.goTo();
    });

    test('Should choose fiction category', async () => {
        await yakabooPage.openCategoryField();
        await yakabooPage.openPaperBooks();
        await yakabooPage.openFictionBooks();
        await page.waitForURL('https://www.yakaboo.ua/ua/knigi/hudozhestvennaja-literatura.html?book_publication=Bumazhnaja', { timeout: 5000 });
        await yakabooPage.getAmountOfBooks();
        await expect(yakabooPage.amountOfBooks).toBeVisible();
        await expect(yakabooPage.amountOfBooks).toContainText('товари');
    });

    test('Should search for book', async () => {
        await yakabooPage.openSearchField();
        await yakabooPage.searchForBook('Harry Potter');
        await yakabooPage.selectBookFromList();
        await page.waitForTimeout(2000);
        await page.waitForURL('https://www.yakaboo.ua/ua/search?q=harry%20potter%20and', { timeout: 5000 });
        expect(page.url()).toBe('https://www.yakaboo.ua/ua/search?q=harry%20potter%20and');
    });
});
