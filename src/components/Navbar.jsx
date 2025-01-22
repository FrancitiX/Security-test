import React from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/components/Navbar.module.css";
import Logo from "/Logo.png";
import userImage from "./../assets/user.png";

function Navbar() {
  const userLoged = false;

  return (
    // <header className={`${styles.header} center`}>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left_section}>
          <Link to="/" className={styles.name}>
            <div className={styles.logo}>
              <img src={Logo} alt="logo" />
            </div>
            <h1 className={styles.title}>Digiwer</h1>
          </Link>
        </div>
        <div className={styles.center_section}>Buscar</div>
        <div className={styles.right_section}>
          <Link to="/products">Categorias</Link>
          <Link to="/about">Sobre nosotros</Link>
          <Link to="/my-cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          {userLoged === true ? (
            <Link to="/profile" className={styles.user}>
              <img src={userImage} alt="usuario" />
            </Link>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
