import {$} from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class CoursePage {
    private get pythonCourse(): ChainablePromiseElement{
        return $('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card');
    }
    private get startCourseButton(): ChainablePromiseElement{
        return $('#parallax-banner .third-layer div:nth-child(1) div a');
    }

    public async openPythonCourse(): Promise<void> {
        await this.pythonCourse.waitForClickable();
        await this.pythonCourse.click();
    }

    public async startCourse(): Promise<void> {
        await this.startCourseButton.waitForClickable();
        await this.startCourseButton.click();
    }
}
