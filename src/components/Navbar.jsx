import React from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/components/Navbar.module.css";
import Logo from "/Logo.png";
import userImage from "./../assets/user.png";
import { InputSearch } from "./Inputs";

function Navbar() {
  const userToken = localStorage.getItem("userToken");
  const userLoged = userToken !== null;

  return (
    // <header className={`${styles.header} center`}>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.sectionTop}>
          <div className={styles.left_section}>
            <Link to="/" className={styles.name}>
              <div className={styles.logo}>
                <img src={Logo} alt="logo" />
              </div>
              <h1 className={styles.title}>Digiwer</h1>
            </Link>
          </div>

          <div className={styles.right_section}>
            <div className={styles.center_section}>
              <InputSearch />
            </div>

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
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.links}>


            <Link to="/products">Todo</Link>

            <Link to="/products/promotions">Promociones</Link>

            <Link to="/products/new">Nuevos productos</Link>

            <div className={styles.drop}>
              Categorias
              <div className={styles.dropdown}>
                <Link to="/filter/tarjetas-de-video">Tarjetas de video</Link>
                <Link to="/filter/procesadores">Procesadores</Link>
                <Link to="/filter/placas-madre">Placas madre</Link>
                <Link to="/filter/gainetes">Gabinetes</Link>
                <Link to="/filter/memorias-ram">Memorias RAM</Link>
                <Link to="/filter/almacenamiento">Almacenamiento</Link>
                <Link to="/filter/fuentes-de-poder">Fuentes de poder</Link>
                <Link to="/filter/enfriamientos">Enfriamiento</Link>
              </div>
            </div>

            <Link to="/about">Software y servicios</Link>

            <Link to="/orders">Pedidos</Link>

            <Link to="/about">Servicio al cliente</Link>

            <Link to="/about">Sobre nosotros</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
