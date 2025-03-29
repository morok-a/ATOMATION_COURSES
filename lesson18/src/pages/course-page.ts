import { Locator, Page } from '@playwright/test';

export class CoursePage {
    private get pythonCourse(): Locator {
        return this.page.locator('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card');
    }
    private get startCourseButton(): Locator {
        return this.page.locator('#parallax-banner .third-layer div:nth-child(1) div a');
    }

    public constructor(private page: Page) {}

    public async openPythonCourse(): Promise<void> {
        await this.pythonCourse.waitFor({ state: 'visible' });
        await this.pythonCourse.click();
    }

    public async startCourse(): Promise<void> {
        await this.startCourseButton.waitFor({ state: 'visible' });
        await this.startCourseButton.click();
    }
}
