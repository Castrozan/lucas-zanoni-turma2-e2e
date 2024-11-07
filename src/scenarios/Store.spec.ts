import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import StorePage from '../support/pages/StorePage';

test.describe('Find Products', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let storePage: StorePage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.store')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    storePage = new StorePage(page);
    await page.goto(BASE_URL);
  });

  test('Find product by name', async () => {
    await storePage.searchProductByName();
  });

  test('Add product to cart', async () => {
    await storePage.addProductToCart();
  });
});
