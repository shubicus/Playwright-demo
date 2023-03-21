import {Page} from '@playwright/test';
import BaseComponent from "../base/BaseComponent";

export default class ProductComponent extends BaseComponent {

    constructor(page: Page) {
        super(page);
    }
}