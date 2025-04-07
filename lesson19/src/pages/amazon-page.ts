import { Page, Locator } from '@playwright/test';
import { TabsAmazonElement, CustomerPageAreaElement } from 'src/elements/index';

export class AmazonPage {
    public tabsElement: TabsAmazonElement;
    public customerAreaElement: CustomerPageAreaElement;

    private get deliveryPopup(): Locator {
        return this.page.locator('.glow-toaster-button-dismiss > span > input');
    }

    public get headerOnCustomerPage(): Locator {
        return this.page.locator('header > div.cs-title');
    }

    public constructor(private page: Page) {
        this.tabsElement = new TabsAmazonElement(this.page.locator('#nav-xshop'));
        this.customerAreaElement = new CustomerPageAreaElement(this.page.locator('div.page-wrapper.hero-banner > div > div'));
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.amazon.com/');
    }

    public async getTabsName(): Promise<string[]> {
        return await this.tabsElement.getTabsName();
    }

    public async selectTab(tabName: string): Promise<void> {
        await this.tabsElement.selectTab(tabName);
    }

    public async dismissPopup(): Promise<void> {
        await this.deliveryPopup.click();
    }

    public async getHeaderName(): Promise<void> {
        await this.headerOnCustomerPage.waitFor();
    }

    public async getAreaText(): Promise<string[]> {
        return await this.customerAreaElement.getAreaText();
    }

    public async getIcons(): Promise<boolean> {
        return await this.customerAreaElement.getIcons();
    }
}
