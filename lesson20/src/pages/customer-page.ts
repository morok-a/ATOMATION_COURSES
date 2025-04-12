import { Page } from 'playwright';
import { CustomerPageAreaElement } from '../elements/index.ts';

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
