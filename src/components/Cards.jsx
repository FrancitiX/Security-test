import React from "react";
import styles from "./../styles/components/Cards.module.css";
import { formatPrice } from "../utils/formats";
import { Link } from "react-router-dom";

function CardDefault(producto) {
  const product = producto.producto;

  const price = formatPrice(product.price);

  return (
    <div className={styles.card_container}>
      <Link to="/product" className={`${styles.card_image} center`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className={styles.card_info}>
        <Link to="/product" className={styles.product_info}>
          <p className={styles.product_name}>{product.name}</p>
          <p className={styles.product_short}>{product.short_description}</p>
        </Link>
        <div className={styles.price_container}>
          <button>
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
          <h4 className={styles.card_price}>{price}</h4>
        </div>
      </div>
    </div>
  );
}

function MiniCard(producto) {
  return (
    <div>
      <div>
        <img src="" alt="producto" />
      </div>
      <div>
        <h4>Nombre del producto</h4>
        <p>Descripcion del producto</p>
        <h4>$0.00</h4>
      </div>
    </div>
  );
}

export { CardDefault, MiniCard };
