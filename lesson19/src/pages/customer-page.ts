import { Page } from '@playwright/test';
import { CustomerPageAreaElement } from 'src/elements/index';

export class CustomerPage{
    public customerAreaElement: CustomerPageAreaElement;

    public constructor(private page: Page) {
        this.customerAreaElement = new CustomerPageAreaElement(this.page.locator('div.page-wrapper.hero-banner > div > div'));
    }

    public async getAreaText(): Promise<string[]> {
        return await this.customerAreaElement.getAreaText();
    }

    public async getIcons(): Promise<boolean> {
        return await this.customerAreaElement.getIcons();
    }
}
