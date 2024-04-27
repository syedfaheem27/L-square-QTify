import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";
import styles from "./NavBar.module.css";
import SearchResult from "../SearchResult/SearchResult";
import SearchProvider from "../../context/SearchContextProvider";

const NavBar = () => {
  return (
    <SearchProvider>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Logo />
          <SearchBar />
          <Button>Give Feedback</Button>
        </nav>
        <SearchResult />
      </div>
    </SearchProvider>
  );
};

export default NavBar;
