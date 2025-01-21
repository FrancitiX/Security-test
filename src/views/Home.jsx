import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <section className="container">Novedades</section>
        <section className="container">Vistos recientemente</section>
        <section className="container">Ofertas</section>
        <section className="container">Recomendados</section>
      </main>

      <Footer/>
    </>
  );
}

export default Home;
