import {$} from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class LoginPage {
    private get loginButton(): ChainablePromiseElement {
        return $('=Log in');
    }

    private get emailInput(): ChainablePromiseElement {
        return $('input[name="email"]');
    }

    private get passwordInput(): ChainablePromiseElement {
        return $('input[name="password"]');
    }

    private get submitButton(): ChainablePromiseElement{
        return $('form > div.submit-btn-container > button');
    }

    public async openLoginPage(email: string, password: string): Promise<void> {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();

        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);

        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);

        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }
}
