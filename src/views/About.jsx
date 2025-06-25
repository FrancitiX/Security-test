import React from "react";
import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.filter}>
          <h3>Filtros</h3>
          <div className={styles.separator}></div>

          <div className={styles.filter_buttons}>
            <button className={styles.filterBtn}>Precio</button>
            <button className={styles.filterBtn}>Marcas</button>
            <button className={styles.filterBtn}>Categoría</button>
          </div>

          <div className={styles.filter_section}>
            <h4>Rango de precios</h4>
            <div className={styles.priceInputs}>
              <input
                type="number"
                placeholder="Mínimo"
                className={styles.input}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Máximo"
                className={styles.input}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
