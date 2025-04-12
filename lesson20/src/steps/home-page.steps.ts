import { Given, When, Then } from '@cucumber/cucumber';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';
import { expect } from '@playwright/test';

Given('the user is on the homepage', async function (this: AutomationCourseWorld) {
    await this.amazonHomePage.goTo();
    await this.amazonHomePage.dismissPopup();
});

When('the user is on the home screen he should observe the main tab', async function (this: AutomationCourseWorld) {
    await this.amazonHomePage.getTabsName();
});

Then('the user should see the "Today`s Deals" tab', async function (this: AutomationCourseWorld) {
    const tabNames = await this.amazonHomePage.getTabsName();
    await expect(tabNames).toContain('Today\'s Deals');
    await expect(tabNames.length).not.toBeGreaterThan(6);
    await expect(tabNames[0].length).toBeGreaterThan(0);
});

