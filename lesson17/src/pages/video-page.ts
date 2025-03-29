import {$, browser} from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class VideoPage {
    private get startButton(): ChainablePromiseElement{
        return $('div.center-content > button');
    }

    private get video(): ChainablePromiseElement{
        return $('video');
    }

    private get endVideoButton(): ChainablePromiseElement{
        return $('#end-video');
    }

    public async startVideo(): Promise<void> {
        await this.startButton.waitForClickable();
        await this.startButton.click();
    }

    public async waitForVideoToPlay(): Promise<boolean> {
        await this.video.waitForDisplayed();
        await browser.pause(5000);

        const currentTime: number = await browser.execute(() => {
            const video_record = document.querySelector('video') as HTMLVideoElement;
            return video_record ? video_record.currentTime : 0;
        });

        return currentTime > 0;
    }

    public async closeVideo(): Promise<void> {
        await this.endVideoButton.waitForClickable();
        await this.endVideoButton.click();
    }
}
