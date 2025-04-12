import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';

export function browserHook():void {
    BeforeAll(async function () {
        AutomationCourseWorld.browser = await chromium.launch({ headless: false });
    });

    AfterAll(async function() {
        await AutomationCourseWorld.browser.close();
    });
}
