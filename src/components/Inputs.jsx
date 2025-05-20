import styles from './../styles/components/Inputs.module.css'

const InputSearch  = () => {
  return (
    <form className={styles.searchInput}>
      <input className={styles.search} type="text" placeholder="Buscar" />
      <button>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export { InputSearch };
