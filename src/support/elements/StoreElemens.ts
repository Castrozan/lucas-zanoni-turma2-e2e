import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class StoreElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getProductField(): Locator {
    return this.page.locator('div[alt="Cropped Stay Groovy off white"]');
  }

  getCart(): Locator {
    return this.page.locator('text=Checkout');
  }

  getButtonAddToCart(): Locator {
    return this.page.locator('text=Add to cart');
  }

  getButtonAddToCartForProduct(): Locator {
    return this.page.locator('div[alt="Cropped Stay Groovy off white"] >> text=Add to cart');
  }
}
