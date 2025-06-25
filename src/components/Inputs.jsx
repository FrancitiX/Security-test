import { useState } from "react";
import styles from "./../styles/components/Inputs.module.css";

const InputSearch = () => {
  const [data, setData] = useState("");

  return (
    <form className={styles.searchInput}>
      <input
        className={styles.search}
        type="text"
        placeholder="Buscar"
        name="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => {}}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export { InputSearch };
