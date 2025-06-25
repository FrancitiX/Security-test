import React from "react";
import Slider from "../components/slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./../styles/Home.module.css";
import { MiniCard, CardDefault } from "../components/Cards";
import { productos } from "../utils/productos";
import { Link } from "react-router-dom";
import MapComponent from "../APIs/Location";
import PayPalButton from "../APIs/Paypal";

function Home() {
  const images = [
    {
      original: "src/assets/gallery/imagen02.jpg",
      thumbnail: "src/assets/gallery/imagen02.jpg",
    },
    {
      original: "src/assets/gallery/AMD-Ryzen-7000.jpg",
      thumbnail: "src/assets/gallery/AMD-Ryzen-7000.jpg",
    },
    {
      original: "src/assets/gallery/imagen01.jpg",
      thumbnail: "src/assets/gallery/imagen01.jpg",
    },
    {
      original: "src/assets/gallery/imagen03.jpg",
      thumbnail: "src/assets/gallery/imagen03.jpg",
    },
  ];

  const historial = "";

  return (
    <>
      <Navbar />
      <main className={`${styles.main} mt_Nav`}>
        <section className={styles.slider_container}>
          <div className={styles.slider}>
            <Slider data={images} />
          </div>
        </section>
        <section className="container">
          <h3>Productos destacados</h3>
          <div className={styles.products_container}>
            {productos
              .sort((a, b) => b.price - a.price)
              .slice(0, 10)
              .map((item, index) => (
                <CardDefault key={index} producto={item} />
              ))}
          </div>
        </section>
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
        <section className="container">
          <div className={styles.history_title}>
            <h3>Todos los productos</h3>
            <Link to="/products">ver todo</Link>
          </div>
          <div className={styles.products_container}>
            {productos
              .sort()
              .slice(0, 5)
              .map((item, index) => (
                <CardDefault key={index} producto={item} />
              ))}
          </div>
        </section>
        <section className="container">
          <div className={styles.history_title}>
            <h3>Vistos recientemente</h3>
            <p>ver todo</p>
          </div>
          <div>
            {historial ? (
              <div></div>
            ) : (
              <div className={`${styles.noHistory} center`}>
                <h3>Aún no has visto ningun producto :(</h3>
              </div>
            )}
          </div>
        </section>
        <section className="container">
          <MapComponent />
        </section>
        <section className="container">
          <div>
            <h3>Puedes pagar con</h3>
          </div>
          <PayPalButton total={0} />
        </section>
        <section className="container">
          <h3>Marcas</h3>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
