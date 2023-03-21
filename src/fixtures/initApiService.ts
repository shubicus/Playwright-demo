import {test as base} from "@playwright/test";
import ApiService from "../ApiService";

export const test = base.extend<{
    apiService: ApiService;
}>({
    apiService: async ({page}, use) => {
        await use(new ApiService(page));
    }
});