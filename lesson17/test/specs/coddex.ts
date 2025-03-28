import { browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { CoursePage, HomePage, LoginPage, VideoPage } from '../../src/pages/index.js';

describe('Test Scenario for authentication and starting course', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let coursePage: CoursePage;
    let videoPage: VideoPage;

    beforeEach(async () => {
        await browser.maximizeWindow();

        loginPage = new LoginPage();
        homePage = new HomePage();
        coursePage = new CoursePage();
        videoPage = new VideoPage();

        await browser.url('https://codedex.io/');
    });

    it('Should sign in into site', async () => {
        await videoPage.startVideo();
        expect(await videoPage.waitForVideoToPlay()).toBe(true);
        await videoPage.closeVideo();

        await loginPage.openLoginPage('nastasuper5@gmail.com', 'SomePassword');

        await browser.waitUntil(async () => (await browser.getUrl()) === 'https://www.codedex.io/home', {
            timeout: 5000
        });

        expect(await browser.getUrl()).toBe('https://www.codedex.io/home');
    });

    it('Should open Python course', async () => {
        await homePage.openFirstMenuItem();
        await coursePage.openPythonCourse();
        await coursePage.startCourse();

        await browser.waitUntil(async () => (await browser.getUrl()) === 'https://www.codedex.io/python/01-setting-up', {
            timeout: 5000
        });

        expect(await browser.getUrl()).toBe('https://www.codedex.io/python/01-setting-up');
    });
});
