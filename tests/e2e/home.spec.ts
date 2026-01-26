import { test, expect } from "@playwright/test";

test.describe("Portfolio - Home", () => {
   test("the home screen loads correctly", async ({ page }) => {
      await page.goto("/");
      await expect(page).toHaveTitle(/Santiago/i);
   });

   test("renders the main sections", async ({ page }) => {
      await page.goto("/");

      await expect(
         page.getByRole("heading", { name: /sobre mí/i }),
      ).toBeVisible();

      await expect(
         page.getByRole("heading", { name: /proyectos/i }),
      ).toBeVisible();

      await expect(
         page.getByRole("heading", { name: /experiencia/i }),
      ).toBeVisible();
   });

   test("the main external links work.", async ({ page }) => {
      await page.goto("/");

      const githubLink = page.getByRole("link", {
         name: /perfil de github/i,
      });
      await expect(githubLink).toHaveAttribute(
         "href",
         /github\.com\/santiagogoncalvez/,
      );

      const linkedinLink = page.getByRole("link", {
         name: /linkedin/i,
      });
      await expect(linkedinLink).toHaveAttribute("href", /linkedin\.com/);
   });

   test("el theme toggle cambia el tema", async ({ page }) => {
      await page.goto("/");

      const html = page.locator("html");
      const toggleButton = page.locator("#theme-toggle-btn");
      const darkOption = page.getByText("Oscuro", { exact: true });

      const wasDark = await html.evaluate((el) =>
         el.classList.contains("dark"),
      );

      // Abrimos el menú
      await toggleButton.click();

      // Click real en la opción Oscuro
      await darkOption.click();

      // Esperamos a que el HTML tenga la clase dark
      await expect(html).toHaveClass(/dark/);

      const isDarkNow = await html.evaluate((el) =>
         el.classList.contains("dark"),
      );

      expect(isDarkNow).not.toBe(wasDark);
   });




   test("the download CV button exists", async ({ page }) => {
      await page.goto("/");

      const downloadCV = page.getByRole("link", { name: /cv/i });
      await expect(downloadCV).toHaveAttribute("href", /\.pdf$/);
   });
});
