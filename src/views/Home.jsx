import React from "react";
import Slider from "../components/slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./../styles/Home.module.css";
import { MiniCard, CardDefault } from "../components/Cards";
import { productos } from "../utils/productos";

function Home() {
  const images = [
    {
      original: "src/assets/GeForce-RTX-50.jpg",
      thumbnail: "src/assets/GeForce-RTX-50.jpg",
    },
    {
      original: "src/assets/AMD-Ryzen-7000.jpg",
      thumbnail: "src/assets/AMD-Ryzen-7000.jpg",
    },
  ];

  const historial = "";

  return (
    <>
      <Navbar />
      <main className={styles.main}>
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
          <h3>Marcas</h3>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
