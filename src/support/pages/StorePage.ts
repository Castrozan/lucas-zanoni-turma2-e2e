import { Page, expect } from '@playwright/test';
import StoreElements from '../elements/StoreElemens';
import BasePage from './BasePage';

export default class StorePage extends BasePage {
  readonly storeElements: StoreElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.storeElements = new StoreElements(page);
  }

  async searchProductByName(): Promise<void> {
    await expect(this.storeElements.getProductField()).toBeVisible();
  }
}
