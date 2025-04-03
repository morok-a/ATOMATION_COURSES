import { Locator, Page } from '@playwright/test';

export class HomePage {
    private get firstMenuButton(): Locator{
        return this.page.locator('div.nav-container-links div:nth-child(1) a button');
    }

    private get welcomeText(): Locator {
        return this.page.locator('.sc-813d178b-0 .welcome-text');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.codedex.io/');
        await this.firstMenuButton.waitFor();
    }

    public async openFirstMenuItem(): Promise<void> {
        await this.firstMenuButton.click();
    }

    public async getWelcomeText(): Promise<void> {
        await this.welcomeText.isVisible();
    }
}
