import { Page, Locator } from 'playwright';
import { TabsAmazonElement} from '../elements/index.ts';

export class AmazonPage {
    public tabsElement: TabsAmazonElement;

    private get deliveryPopup(): Locator {
        return this.page.locator('.glow-toaster-button-dismiss > span > input');
    }

    public get headerOnCustomerPage(): Locator {
        return this.page.locator('header > div.cs-title');
    }

    public constructor(private page: Page) {
        this.tabsElement = new TabsAmazonElement(this.page.locator('#nav-xshop'));
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

    public async waitForHeaderName(): Promise<void> {
        await this.headerOnCustomerPage.waitFor();
    }
}
