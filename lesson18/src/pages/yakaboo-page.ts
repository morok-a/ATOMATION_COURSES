import { Locator, Page } from '@playwright/test';

export class YakabooHomePage {
    private get categoryField(): Locator {
        return this.page.locator('div.search-compound > button > span');
    }

    public get paperBooks(): Locator {
        return this.page.locator('div.books-menu-filters > button:nth-child(2)');
    }

    public get fictionBooks(): Locator {
        return this.page.locator('div.books-list > div:nth-child(5) > a');
    }

    public get searchFiled(): Locator {
        return this.page.locator('//*[@id="site-header"]/div/div/div[2]/div[1]/div[1]/input');
    }

    public get selectBook(): Locator {
        return this.page.locator('//*/div[1]/ul/div[3]/span');
    }

    public get amountOfBooks(): Locator {
        return this.page.locator('div.category__controls > div.amount');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://yakaboo.ua/');
    }

    public async openCategoryField(): Promise<void> {
        await this.categoryField.click();
    }

    public async openPaperBooks(): Promise<void> {
        await this.paperBooks.click();
    }

    public async openFictionBooks(): Promise<void> {
        await this.fictionBooks.click();
    }

    public async openSearchField(): Promise<void> {
        await this.searchFiled.click();
    }

    public async searchForBook(bookName: string): Promise<void> {
        await this.searchFiled.fill(bookName);
        await this.page.keyboard.press('Enter');
    }

    public async selectBookFromList(): Promise<void> {
        await this.selectBook.click();
    }

    public async getAmountOfBooks(): Promise<string> {
        return await this.amountOfBooks.innerText();
    }
}
