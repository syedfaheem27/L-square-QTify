import styles from "./Search.module.css";
import SearchLogo from "../../assets/search-icon.svg";

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search an album of your choice"
      />
      <button className={styles.btn}>
        <img src={SearchLogo} alt="search logo" />
      </button>
    </div>
  );
};

export default Search;
