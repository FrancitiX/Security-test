import React from "react";
import styles from "./../styles/Product.module.css";
import { productos } from "../utils/productos";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CardDefault } from "../components/Cards";
import { formatPrice } from "../utils/formats";

function Product() {
  const { productName } = useParams();
  const decodedName = decodeURIComponent(productName);
  const product = productos.find((prod) => prod.name === decodedName);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} />
            </div>

            <div className={styles.detailsContainer}>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.price}>{formatPrice(product.price)}</p>
              <ul className={styles.features}>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}</strong> {feature.content}
                  </li>
                ))}
              </ul>
              <div className={styles.actions}>
                <button onClick={() => {}} className={styles.addCartButton}>Agregar al carrito</button>
                <Link to={`/pay/cart/${product.name}`} className={styles.buyButton}>Comprar ahora</Link>
              </div>
            </div>
          </div>
        </div>

        <section className="container">
          <h3>Recomendados</h3>
          <div className={styles.products_container}>
            {productos
              .sort((a, b) => a.price - b.price)
              .slice(0, 5)
              .map((item, index) => (
                <CardDefault key={index} producto={item} />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Product;
