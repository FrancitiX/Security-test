import React from "react";
import styles from "./../styles/Pay.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { productos } from "../utils/productos";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../utils/formats";
import PayPalButton from "../APIs/Paypal";

function Pay() {
  const { productName } = useParams();
  const decodedName = decodeURIComponent(productName);
  const product = productos.find((prod) => prod.name === decodedName);

  if (!product)
    return (
      <>
        <Navbar />
        <main className={styles.main}>
          <div className="container">Error al cargar el producto</div>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.payContainer}>
            <div className={styles.payDetails}>
              <div className={styles.location}>
                <div className={styles.horizontalLine}>
                  <h2>Enviar a Admin</h2>
                  <Link>Cambiar</Link>
                </div>
                <div>
                  <p>Calle Falsa 123, Ciudad, Estado, CP 12345</p>
                </div>

                <button className={styles.noButton} onClick={() => {}}>
                  Agregar instrucciones o detalles
                </button>
              </div>

              <div className={styles.payMethodsContainer}>
                <h2 className={styles.subtitle}>Pago seguro</h2>
                <div>
                  <h3>Puedes pagar con</h3>
                </div>
                <PayPalButton total={10} />
              </div>

              <div className={styles.productDetails}>
                <h3>Detalles del producto</h3>
                <div className={styles.productContainer}>
                  <div className={styles.horizontalLine}>
                    <div className={styles.productImageContainer}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImage}
                      />
                    </div>
                    <h3>{product.name}</h3>
                  </div>

                  <ul className={styles.features}>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <strong>{feature.title}</strong> {feature.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.resume}>
              <h2>Resumen de compra</h2>

              <div className={styles.horizontalLine}>
                <p>Envio:</p>
                <p className={styles.subprice}>$0.00</p>
              </div>

              <div className={styles.horizontalLine}>
                <p>producto:</p>
                <p className={styles.subprice}>
                  {formatPrice(product.price * 0.84)}
                </p>
              </div>
              <div className={styles.horizontalLine}>
                <p>IVA:</p>
                <p className={styles.subprice}>
                  {formatPrice(product.price * 0.16)}
                </p>
              </div>

              <div className={styles.horizontalLine}>
                <h3>Total:</h3>
                <p className={styles.price}>{formatPrice(product.price)}</p>
              </div>

              <div className={styles.button}>
                <button className={styles.buyButton}>Realizar compra</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Pay;
