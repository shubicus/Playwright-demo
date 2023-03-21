import {Page} from '@playwright/test';
import BaseComponent from "../base/BaseComponent";

export default class HeaderComponent extends BaseComponent {

    headerContainerLocator: string = '#header_container';

    constructor(page: Page) {
        super(page);
    }

    burgerButton = () => this.page.getByRole('button', {name: 'Open Menu'});
    burgerMenuItemList = () => this.page.locator(`${this.headerContainerLocator} .menu-item`);

    public async clickOnSlideMenu() {
        await this.burgerButton().click();
    }

    public async clickOnLogOutInSlideMenu() {
        await this.burgerMenuItemList().filter({hasText: 'Logout'}).click();
    }
}