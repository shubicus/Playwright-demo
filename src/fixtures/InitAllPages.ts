import {test as base} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import ApiService from "../ApiService";

export const test = base.extend<{
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    apiService: ApiService;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page))
    },
    apiService: async ({page}, use) => {
        await use(new ApiService(page));
    }
});

export const test_api = base.extend<{
    apiService: ApiService;
}>({
    apiService: async ({page}, use) => {
        await use(new ApiService(page));
    }
});