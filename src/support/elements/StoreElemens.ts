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

  getSearchButton(): Locator {
    return this.page.locator('button[name="submit_search"]');
  }

  getProductCount(): Locator {
    return this.page.locator('span[class="heading-counter"]');
  }

  getLoginField(): Locator {
    return this.page.locator('#user-name');
  }

  getPassField(): Locator {
    return this.page.locator('#password');
  }

  getSubmitButton(): Locator {
    return this.page.locator('#login-button');
  }
}
