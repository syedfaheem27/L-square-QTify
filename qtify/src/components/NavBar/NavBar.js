import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button />
    </nav>
  );
};

export default NavBar;