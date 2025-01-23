import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(
    "https://www.cyberpuerta.mx/Computo-Hardware/Componentes/Tarjetas-de-Video/Tarjeta-de-Video-ASUS-NVIDIA-ROG-Strix-GeForce-RTX-4090-BTF-Gaming-OC-24GB-384-bit-GDDR6X-PCI-Express-4-0.html"
  );

  const products = await page.$$eval("#productList", (result) =>
    result.map((e) => {
      const name = e.querySelector(".emproduct_right_title")?.innerText.trim();
      if (!name) return null;

      const imageDiv = e.querySelector(".cs-image");
      const image = imageDiv
        ? window
            .getComputedStyle(imageDiv)
            .getPropertyValue("background-image")
            .match(/url\(["']?(.+?)["']?\)/)?.[1] // Extrae la URL del background-image
        : null;

      const price = e.querySelector(".price .amount")?.innerText.trim();

      return { name, image, price };
    })
  );

  console.log(products);
  await browser.close();
})();
