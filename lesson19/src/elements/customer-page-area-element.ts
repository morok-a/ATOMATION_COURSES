import { Locator } from '@playwright/test';

export class CustomerPageAreaElement {
    private get areaElements(): Locator {
        return this.baseLocator.locator('div.page-wrapper.hero-banner > div > div > div');
    }

    private get icons(): Locator {
        return this.baseLocator.locator(' div > div.fs-match-card-icon');
    }

    public constructor (private baseLocator: Locator) {}

    public async getAreaText(): Promise<string[]>  {
        const areaText: string [] = [];
        const customerAreaItems = await this.areaElements.all();
        for (const items of customerAreaItems) {
            const text = await items.textContent();
            areaText.push(text?.trim() ?? '');
        }
        return areaText;
    }

    public async getIcons(): Promise<boolean>{
        const icon = await this.icons.all();
        for (const icons of icon) {
            if(!await icons.isVisible()){
                return false;
            }
        }
        return true;
    }
}
