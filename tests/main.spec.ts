import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("http://localhost:5173/");
	await page.getByRole("img", { name: "icon" }).click();
	await page.getByPlaceholder("Product name...").click();
	await page.getByPlaceholder("Product name...").press("CapsLock");
	await page.getByPlaceholder("Product name...").fill("W");
	await page.getByPlaceholder("Product name...").press("CapsLock");
	await page.getByPlaceholder("Product name...").fill("Water");
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").fill("1");
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByPlaceholder("Quantity").click();
	await page.getByRole("button", { name: "Add" }).click();
	await page.getByPlaceholder("Product name...").click();
	await page.getByPlaceholder("Product name...").fill("water");
	await page.getByRole("button", { name: "Add" }).click();
	await page.getByRole("button", { name: "x" }).click();
});
