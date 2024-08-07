import {Page} from '@playwright/test';
import BasePage from '../base/BasePage';
import ICredentials from "../ICredentials";
import {test} from "../fixtures/InitAllPages";

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page, 'LogIn Page');
    }

    inputEmailField = () => this.page.getByPlaceholder('Username');
    inputPasswordField = () => this.page.getByPlaceholder('Password');
    logInButton = () => this.page.getByTestId('login-button');
    errorText = () => this.page.getByTestId('error');

    private async enterEmail(userName: string) {
        await this.inputEmailField().fill(userName);
    }

    private async enterPassword(userPassword: string) {
        await this.inputPasswordField().fill(userPassword);
    }

    private async clickOnLogInButton() {
        await this.logInButton().click();
    }

    public async logInWithCredentials(credentials: ICredentials) {
        const {userName, password} = credentials;
        await test.step(`Login with credentials ${userName}/${password}`, async () => {
            await this.enterEmail(userName);
            await this.enterPassword(password);
            await this.clickOnLogInButton();
        });
    }

    public async getErrorMessage() {
        return await this.errorText().innerText();
    }
}