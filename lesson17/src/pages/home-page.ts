import {$} from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class HomePage {
    private get firstMenuButton(): ChainablePromiseElement{
        return $('div.nav-container-links div:nth-child(1) a button');
    }

    public async openFirstMenuItem(): Promise<void> {
        await this.firstMenuButton.waitForClickable();
        await this.firstMenuButton.click();
    }
}
