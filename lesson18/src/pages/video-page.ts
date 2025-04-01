import { Locator, Page } from '@playwright/test';

export class VideoPage {
    private get startButton(): Locator{
        return this.page.locator('div.center-content > button');
    }

    private get video(): Locator{
        return this.page.locator('video');
    }

    private get endVideoButton(): Locator{
        return this.page.locator('//article/div[4]/div[1]/button[1]'); //used xpath instead of css because the id has duplication on page
    }

    public constructor(private page: Page) {}

    public async startVideo(): Promise<void> {
        await this.startButton.click();
    }

    public async waitForVideoToPlay(): Promise<boolean> {
        await this.page.waitForTimeout(5000);

        const currentTime: number = await this.page.evaluate(() => {
            const video_record = document.querySelector('video') as HTMLVideoElement;
            return video_record ? video_record.currentTime : 0;
        });

        return currentTime > 0;
    }

    public async closeVideo(): Promise<void> {
        await this.endVideoButton.click();
    }
}
