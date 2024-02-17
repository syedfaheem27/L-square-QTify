import styles from "./SearchBar.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="search" className={styles.search} placeholder="Search an album of your choice" />
     
    </div>
  );
}

export default SearchBar;
