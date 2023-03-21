import { Page } from '@playwright/test';

export default abstract class BaseComponent {
    protected readonly page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }
}