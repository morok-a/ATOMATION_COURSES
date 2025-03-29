
import { expect, test, Page} from '@playwright/test';
import { HomePage, LoginPage, CoursePage, VideoPage } from 'src/pages/index';

test.describe('Test Scenario for authentication and starting course', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let coursePage: CoursePage;
    let videoPage: VideoPage;
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://codedex.io/');

        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        coursePage = new CoursePage(page);
        videoPage = new VideoPage(page);
    });

    test('Should sign in into site', async () => {
        await videoPage.startVideo();
        await videoPage.closeVideo();
        await loginPage.openLoginPage('nastasuper5@gmail.com', 'SomePassword');
        await page.waitForURL('https://www.codedex.io/home', { timeout: 5000 });
        expect(page.url()).toBe('https://www.codedex.io/home');
    });

    test('Should open Python course', async () => {
        await homePage.openFirstMenuItem();
        await coursePage.openPythonCourse();
        await coursePage.startCourse();
        await page.waitForURL('https://www.codedex.io/python/01-setting-up', { timeout: 5000 });
        expect(page.url()).toBe('https://www.codedex.io/python/01-setting-up');
    });
});
