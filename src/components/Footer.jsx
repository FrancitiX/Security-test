import React from "react";
import styles from "./../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} center`}>
      <section className={styles.first_section}>
        <div className="center">
          <h4>Dudas</h4>
        </div>
        <div className="center">
          <h4>Direccion</h4>
        </div>
        <div className="center">
          <h4>Contacto</h4>
        </div>
      </section>
      <section className={`${styles.second_section} center`}>&copy; 2025 Digiwer.mx</section>
    </footer>
  );
}

export default Footer;
