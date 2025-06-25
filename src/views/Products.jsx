import React from "react";
import Navbar from "../components/Navbar";
import styles from "./../styles/Products.module.css";
import { CardDefault } from "../components/Cards";
import { productos } from "../utils/productos";
import Footer from "../components/Footer";
import classNames from "classnames";
import Filter from "../components/Filter";

function Products() {
  return (
    <>
      <Navbar />

      <main className={`${classNames(styles.main)} mt_Nav`}>
        <div className={`${classNames(styles.mid, styles.container)}`}>
          <Filter />
          <div className={styles.copy}></div>
          <section className={styles.products_extra}>
            <h3>Resultados</h3>
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
