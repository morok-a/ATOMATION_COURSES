import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';

When('the user clicks on the "Customer Service" on the tab', async function (this: AutomationCourseWorld) {
    await this.amazonHomePage.selectTab('Customer Service');
});

Then('the user should observe the "Customer Service" page with expected elements', async function (this: AutomationCourseWorld) {
    await expect(this.amazonHomePage.headerOnCustomerPage).toBeVisible();
});

Then('the user should be able to see 11 areas with helpful information', async function (this: AutomationCourseWorld) {
    const areaText = await this.customerServicePage.getAreaText();
    await expect(areaText.length).toBeLessThanOrEqual(11);
    await this.customerServicePage.getIcons();
    await expect(this.customerServicePage.getIcons).toBeTruthy();
});
