import styles from "./SearchBar.module.css";
import SearchLogo from "../../assets/search-icon.svg";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search an album of your choice"
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        value={searchText}
      />
      <button className={styles.btn}>
        <img src={SearchLogo} alt="search logo" />
      </button>
    </div>
  );
};

export default SearchBar;
