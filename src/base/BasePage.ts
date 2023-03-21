import {Page} from '@playwright/test';

export default abstract class BasePage {
    protected readonly BASE_PAGE: string = 'https://www.saucedemo.com/';
    protected readonly PAGE_NAME: string;
    protected readonly PAGE_URL: string;
    protected readonly page: Page;

    protected constructor(page: Page, pageName: string, pageUrl = '') {
        this.page = page;
        this.PAGE_NAME = pageName;
        this.PAGE_URL = pageUrl;
    }

    public async openUrl() {
        await this.page.goto(`${this.BASE_PAGE}${this.PAGE_URL}`);
    }

    public getPageUrl(): string {
        return `${this.BASE_PAGE}${this.PAGE_URL}`;
    }

    public getActualPageUrl(): string {
        return this.page.url();
    }

}