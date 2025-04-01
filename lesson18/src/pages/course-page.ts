import { Locator, Page } from '@playwright/test';

export class CoursePage {
    private get pythonCourse(): Locator {
        return this.page.locator('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card');
    }

    private get startCourseButton(): Locator {
        return this.page.locator('#parallax-banner .third-layer div:nth-child(1) div a');
    }

    public get header(): Locator {
        return this.page.locator('(//*[@id="__next"]//h1/span)[1]');
    }

    public constructor(private page: Page) {}

    public async openPythonCourse(): Promise<void> {
        await this.pythonCourse.click();
    }

    public async startCourse(): Promise<void> {
        await this.startCourseButton.click();
    }

    public async checkHeader(): Promise<void> {
        await this.header.waitFor();
    }
}
