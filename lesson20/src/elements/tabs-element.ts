import { Locator } from 'playwright';

export class TabsAmazonElement {
    private get tabs(): Locator{
        return this.baseLocator.locator('.nav-ul > li');
    }

    public constructor(private baseLocator: Locator) {}

    public async getTabsName(): Promise<string[]> {
        const tabsName: string[] = [];
        const tabs = await this.tabs.all();

        for (const tab of tabs) {
            const text = await tab.textContent();
            tabsName.push(text?.trim() ?? '');
        }
        return tabsName;
    }

    public async selectTab(tabName: string): Promise<void> {
        const tabNames = await this.getTabsName();
        if (!tabNames.includes(tabName)) {
            throw new Error(`Tab with name "${tabName}" not found.`);
        }

        const tabs = await this.tabs.all();
        await tabs[tabNames.indexOf(tabName)].click();
    }
}
