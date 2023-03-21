import {Page} from '@playwright/test';
import BasePage from '../base/BasePage';
import HeaderComponent from '../components/HeaderComponent';
import ProductComponent from '../components/ProductComponent';

export default class InventoryPage extends BasePage {
    public header: HeaderComponent = new HeaderComponent(this.page);
    public product: ProductComponent = new ProductComponent(this.page);

    constructor(page: Page) {
        super(page, 'InventoryPage Page', 'inventory.html');
    }
    
    
}