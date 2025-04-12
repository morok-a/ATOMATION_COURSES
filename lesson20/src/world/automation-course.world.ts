import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { AmazonPage } from '../pages/amazon-page.ts';
import { CustomerPage } from '../pages/customer-page.ts';

export class AutomationCourseWorld extends World {
    public scenarioContext: Map<string, unknown>;
    public static globalContext: Map<string, unknown>;

    public static browser: Browser;
    public page: Page;
    public context: BrowserContext;

    public get amazonHomePage(): AmazonPage {
        if (!this._amazonHomePage) {
            this._amazonHomePage = new AmazonPage(this.page);
        }
        return this._amazonHomePage;
    }

    public get customerServicePage(): CustomerPage {
        if (!this._customerServicePage) {
            this._customerServicePage = new CustomerPage(this.page);
        }
        return this._customerServicePage;
    }

    private _amazonHomePage: AmazonPage;
    private _customerServicePage: CustomerPage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map();
    }
}
