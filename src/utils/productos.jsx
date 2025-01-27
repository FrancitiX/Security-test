// const productos = [
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100001404WOF-be3139.jpg",
//     name: "Ryzen 7 9700X",
//     short_description:
//       "Procesador AMD Ryzen 7 9700X con AMD Radeon Graphics, Socket AM5, 5.50GHz, 8 Núcleos, 40MB Caché - No incluye Disipador",
//     price: 7500,
//     features: [
//       "Familia de procesador: AMD Ryzen 7",
//       "Socket de procesador: Socket AM5",
//       "Número de núcleos: 8",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-MSI-X670EGAMINGPLUSWIFI-af4cec.jpg",
//     name: "MSI ATX X670E GAMING PLUS WIFI",
//     short_description:
//       "Tarjeta Madre MSI ATX X670E GAMING PLUS WIFI, S-AM5, AMD X670, HDMI, 192GB DDR5 para AMD",
//     price: 5300,
//     features: [],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000926WOF-4ca38d.jpg",
//     name: "AMD Ryzen 7 5700X",
//     short_description:
//       "Procesador AMD Ryzen 7 5700X, S-AM4, 3.40GHz, 8-Core, 32MB L3 Cache - no incluye Disipador",
//     price: 3400,
//     features: [
//       "Familia de procesador: AMD Ryzen 7",
//       "Socket de procesador: Socket AM4",
//       "Número de núcleos: 8",
//       "Frecuencia del procesador: 3.4 GHz",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8071514600KF-5ba0bf.png",
//     name: "Intel Core i5-14600KF",
//     short_description:
//       "Procesador Intel Core i5-14600KF, S-1700, 3.50GHz, 14-Core, 24MB Smart Cache (14va. Generación - Raptor Lake)",
//     price: 5000,
//     features: [
//       "Familia de procesador: Intel Core",
//       "Socket de procesador: LGA 1700",
//       "Número de núcleos: 14",
//       "Frecuencia del procesador: 3.5 GHz",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX80768265K-72840d.jpg",
//     name: "Intel Core Ultra 7 265K",
//     short_description:
//       "Procesador Intel Core Ultra 7 265K con Intel Graphics, LGA 1851, 5.50GHz, 20 Núcleos, 30MB Caché - Ultra Series 2",
//     price: 9360,
//     features: [
//       "Familia de procesador: Intel Core Ultra 7",
//       "Socket de procesador: LGA 1851",
//       "Número de núcleos: 20",
//       "Modelo del procesador: 265K",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX80768285K-849a8a.jpg",
//     name: "Intel Core Ultra 9 285K",
//     short_description:
//       "Procesador Intel Core Ultra 9 285K con Intel Graphics, LGA 1851, 5.7GHz, 24 Núcleos, 36MB Caché - Ultra Series 2 Arrow Lake",
//     price: 15780,
//     features: [
//       "Familia de procesador: Intel Core Ultra 9",
//       "Socket de procesador: LGA 1851",
//       "Número de núcleos: 24",
//       "Modelo del procesador: 285K",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8071513100F-953b35.jpg",
//     name: "Intel Core i3-13100F",
//     short_description:
//       "Procesador Intel Core i3-13100F, S-1700, 3.40GHz, Quad-Core, 12MB Smart Cache (13va. Generación - Raptor Lake)",
//     price: 1720,
//     features: [
//       "Familia de procesador: Intel Core",
//       "Socket de procesador: LGA 1700",
//       "Número de núcleos: 4",
//       "Frecuencia del procesador: 3.4 GHz",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000662WOF-1b7b10.jpg",
//     name: "AMD Ryzen 9 9900X",
//     short_description:
//       "Procesador AMD Ryzen 9 9900X, S-AM5, 5.60GHz, 12-Core, 76MB L3 Cache - no incluye Disipador",
//     price: 9000,
//     features: [
//       "Familia de procesador: AMD Ryzen 9",
//       "Socket de procesador: Socket AM5",
//       "Modelo del procesador: 9900X",
//       "Número de núcleos: 12",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000931BOX-1.png",
//     name: "AMD Ryzen 5 8500G",
//     short_description:
//       "Procesador AMD Ryzen 5 8500G con Gráficos Radeon 740M, S-AM5, 3.50GHz, Six-Core, 16MB L3 Cache, con Disipador Wraith Stealth",
//     price: 3350,
//     features: [
//       "Familia de procesador: AMD Ryzen 5",
//       "Socket de procesador: Socket AM5",
//       "Modelo del procesador: 8500G",
//       "Número de núcleos: 6",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-ASUS-90YV0DT0-M0AA00-4.jpg",
//     name: "ASUS NVIDIA GeForce GTX 1660 SUPER",
//     short_description:
//       "Tarjeta de Video ASUS NVIDIA GeForce GTX 1660 SUPER Phoenix OC, 6GB 192-bit GDDR6, PCI Express 3.0",
//     price: 3120,
//     features: [
//       "Gráficos discretos memoria del adaptador: 6GB",
//       "Tipo de memoria: GDDR6",
//       "Núcleos CUDA: 1408",
//       "Tipo de interfaz: PCI Express 3.0",
//       "Frecuencia del procesador: 1530 MHz",
//       "X DisplayPort: 1",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-GV-N407TSEAGLEOC-16GD-a0ee3c.jpg",
//     name: "Gigabyte NVIDIA GeForce RTX 4070 Ti SUPER",
//     short_description:
//       "Tarjeta de Video Gigabyte NVIDIA GeForce RTX 4070 Ti SUPER EAGLE OC 16G, 16GB 256-bit GDDR6X, PCI Express 4.0",
//     price: 19800,
//     features: [
//       "Gráficos discretos memoria del adaptador: 16GB",
//       "Tipo de memoria: GDDR6X",
//       "Tipo de interfaz: PCI Express 4.0",
//       "x DisplayPort: 3",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-ASUS-90YV0JT0-M0NA00-672cfb.jpg",
//     name: "ASUS NVIDIA ROG Strix GeForce RTX 4090",
//     short_description:
//       "Tarjeta de Video ASUS NVIDIA ROG Strix GeForce RTX 4090 BTF Gaming OC, 24GB 384-bit GDDR6X, PCI Express 4.0",
//     price: 44500,
//     features: [
//       "Gráficos discretos memoria del adaptador: 24GB",
//       "Tipo de memoria: GDDR6X",
//       "Frecuencia Boost: 2610 MHz",
//       "Núcleos CUDA: 16384",
//       "Tipo de interfaz: PCI Express 4.0",
//       "x DisplayPort: 3",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-GV-N4090AEROOC-24GD-057cf6.jpg",
//     name: "Gigabyte NVIDIA GeForce RTX 4090",
//     short_description:
//       "Tarjeta de Video Gigabyte NVIDIA GeForce RTX 4090 AERO OC 24G, 24GB 384-bit GDDR6X, PCI Express 4.0",
//     price: 43050,
//     features: [
//       "Gráficos discretos memoria del adaptador: 24GB",
//       "Tipo de memoria: GDDR6X",
//       "Núcleos CUDA: 16384",
//       "Tipo de interfaz: PCI Express 4.0",
//       "x DisplayPort: 3",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-SAPPHIRE-11324-01-20G-aac623.jpg",
//     name: "Sapphire AMD Radeon RX 7600",
//     short_description:
//       "Tarjeta de Video Sapphire AMD Radeon RX 7600 Pulse, 8GB 128-bit GDDR6, PCI Express 4.0",
//     price: 5280,
//     features: [
//       "Gráficos discretos memoria del adaptador: 8GB",
//       "Tipo de memoria: GDDR6",
//       "Frecuencia Boost: 2755 MHz",
//       "Frecuencia del procesador: 2355 MHz",
//       "Tipo de interfaz: PCI Express x8 4.0",
//       "x DisplayPort: 3",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-GV-N4060AEROOC-8GD-1b86d0.jpg",
//     name: "Gigabyte NVIDIA GeForce RTX 4060",
//     short_description:
//       "Tarjeta de Video Gigabyte NVIDIA GeForce RTX 4060 AERO OC 8G, 8GB 128-bit GDDR6, PCI Express 4.0",
//     price: 7830,
//     features: [
//       "Gráficos discretos memoria del adaptador: 8GB",
//       "Tipo de memoria: GDDR6",
//       "Frecuencia Boost: 2550 MHz",
//       "Núcleos CUDA: 3072",
//       "Tipo de interfaz: PCI Express 4.0",
//       "x DisplayPort: 2",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-GV-R79XTXGAMINGOC-24GD-592d70.jpg",
//     name: "Gigabyte AMD Radeon RX 7900 XTX",
//     short_description:
//       "Tarjeta de Video Gigabyte AMD Radeon RX 7900 XTX GAMING OC 24G, 24GB 384-bit GDDR6, PCI Express x16 4.0",
//     price: 23000,
//     features: [
//       "Gráficos discretos memoria del adaptador: 24GB",
//       "Tipo de memoria: GDDR6",
//       "Frecuencia Boost: 2525 MHz",
//       "Tipo de interfaz: PCI Express 4.0",
//       "x DisplayPort: 2",
//     ],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-GIGABYTE-B760MD3HPDDR4-b6041d.jpg",
//     name: "Gigabyte B760M D3HP",
//     short_description:
//       "Tarjeta Madre Gigabyte B760M D3HP DDR4, Micro-ATX, LGA 1700, Intel B760, 128GB DDR4, HDMI/DP para Intel",
//     price: 1950,
//     features: [],
//     description: "",
//   },
//   {
//     image:
//       "https://www.cyberpuerta.mx/img/product/M/CP-CORSAIR-CMH64GX5M2B5600Z40K-b58c29.jpg",
//     name: "Memoria RAM Corsair DDR5 64GB",
//     short_description:
//       "Kit Memoria RAM Corsair CMH64GX5M2B5600Z40K DDR5, 5600MHz, 64GB - 2 x 32GB, CL40, XMP/EXPO, Gris",
//     price: 3360,
//     features: [
//       "Memoria RAM: 64GB",
//       "Tipo de memoria: DDR5",
//       "Velocidad de memoria del reloj: 5600MHz",
//       "Latencia: CL40",
//       "Diseño de memoria: 2 x 32GB",
//       "AMD EXPO: Si",
//     ],
//     description: "",
//   },
// ];

import products from "./products.json";

function filterProducts(products) {
  
  products.map((product) => {
    const price = parseInt(product.price.replace(/\D/g, "").slice(0, -2));
    product.price = price;
  });

  return products;
}

const productos = filterProducts(products);

export { productos };
