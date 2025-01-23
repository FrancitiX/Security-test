import React from "react";
import Slider from "../components/slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./../styles/Home.module.css";

function Home() {

  const images = [
    {
      original: "src/assets/GeForce-RTX-50.jpg",
      thumbnail: "src/assets/GeForce-RTX-50.jpg",
    },
    {
      original: "src/assets/AMD-Ryzen-7000.jpg",
      thumbnail: "src/assets/AMD-Ryzen-7000.jpg",
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className="container">
          <h3>Novedades</h3>
          <Slider data={images} />
        </section>
        <section className="container">
          <h3>Vistos recientemente</h3>
        </section>
        <section className="container">
          <h3>Ofertas</h3>
        </section>
        <section className="container">
          <h3>Recomendados</h3>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
