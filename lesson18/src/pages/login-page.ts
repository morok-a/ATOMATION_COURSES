import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private get loginButton(): Locator {
        return this.page.locator('main > div > p > a');
    }

    private get emailInput(): Locator {
        return this.page.locator('input[name="email"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('input[name="password"]');
    }

    private get submitButton(): Locator{
        return this.page.locator('form > div.submit-btn-container > button');
    }

    public constructor(private page: Page) {}

    public async openLoginPage(email: string, password: string): Promise<void> {
        await this.loginButton.waitFor();
        await this.loginButton.click();

        await this.emailInput.waitFor();
        await this.emailInput.fill(email);

        await this.passwordInput.waitFor();
        await this.passwordInput.fill(password);

        await this.submitButton.waitFor();
        await this.submitButton.click();
    }
}
