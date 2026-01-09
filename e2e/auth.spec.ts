import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Vite/);
});

test('can navigate to documentation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'View Documentation' }).click();
    await expect(page).toHaveURL(/.*\/docs/);
});

test('can switch language', async ({ page }) => {
    await page.goto('/');

    // Check initial English text
    await expect(page.getByText('Beautiful accessible')).toBeVisible();

    // Open language switcher
    await page.getByRole('button', { name: 'Switch language' }).click();
    await page.getByText("O'zbekcha").click();

    // Check Uzbek text
    await expect(page.getByText('Radix UI va Tailwind CSS')).toBeVisible();
});
