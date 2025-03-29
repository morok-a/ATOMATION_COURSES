import { Locator, Page } from '@playwright/test';

export class HomePage {
    private get firstMenuButton(): Locator{
        return this.page.locator('div.nav-container-links div:nth-child(1) a button');
    }

    public constructor(private page: Page) {}

    public async openFirstMenuItem(): Promise<void> {
        await this.firstMenuButton.waitFor({ state: 'visible' });
        await this.firstMenuButton.click();
    }
}
