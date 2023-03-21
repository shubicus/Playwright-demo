import {test} from '../src/fixtures/InitAllPages';
import {expect} from '@playwright/test';
import Credentials, {AccountType} from '../src/Credentials';

test.describe('Login and Logout test', () => {
    test('Login with "standard" user', async ({loginPage, inventoryPage}) => {
        await loginPage.openUrl();
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await expect(inventoryPage.getActualPageUrl()).toBe(inventoryPage.getPageUrl());
    });

    test('Login with "locked" user', async ({loginPage}) => {
        await loginPage.openUrl();
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Locked));
        await expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Sorry, this user has been locked out.');
    });

    test('Login with "standard" user and log out of the account to check that the fields are empty', async ({loginPage, inventoryPage}) => {
        await loginPage.openUrl();
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await inventoryPage.header.clickOnSlideMenu();
        await inventoryPage.header.clickOnLogOutInSlideMenu();
        await expect(loginPage.getActualPageUrl()).toBe(loginPage.getPageUrl());
        await expect(await loginPage.inputEmailField()).toHaveValue('');
        await expect(await loginPage.inputPasswordField()).toHaveValue('');
    });

    test('Login with "standard" user with set cookies', async ({apiService, inventoryPage}) => {
        await apiService.logIn(Credentials.getUserCredentials(AccountType.Standard));
        await inventoryPage.openUrl();
        await expect(inventoryPage.getActualPageUrl()).toBe(inventoryPage.getPageUrl());
    });

});