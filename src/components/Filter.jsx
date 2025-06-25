import React, { useState } from "react";
import styles from "../styles/components/Filter.module.css";

function Filter() {
  const [data, setData] = useState({
    minPrice: 0,
    maxPrice: 1000000000,
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section className={styles.filter}>
      <h3>Filtros</h3>
      <div className={styles.separator}></div>
      <div className={styles.filter_section}>
        <h4 className={styles.title}>Precio</h4>
        <div className={styles.priceInputs}>
          <input
            type="number"
            placeholder="Mínimo"
            name="minPrice"
            className={styles.input}
            value={data.minPrice}
            onChange={handleInputChange}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Máximo"
            name="maxPrice"
            className={styles.input}
            value={data.maxPrice}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button>Precio</button>
      <button>Marcas</button>
      <button>categoria</button>
    </section>
  );
}

export default Filter;
