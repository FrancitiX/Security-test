import React from "react";
import Navbar from "../components/Navbar";
import styles from "./../styles/Products.module.css";
import { CardDefault } from "../components/Cards";
import { productos } from "../utils/productos";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={`${styles.mid} container`}>
          <section className={styles.filter}>
            <h3>Filtros</h3>
            <div className={styles.separator}></div>
            <button>Precio</button>
            <button>Marcas</button>
            <button>categoria</button>
          </section>
          <section className={styles.products_extra}>
            <hr />
            <div className={styles.products_container}>
              {productos.map((item, index) => (
                <CardDefault key={index} producto={item} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Products;
