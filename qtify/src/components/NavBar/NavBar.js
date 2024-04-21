import { useContext, useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";
import styles from "./NavBar.module.css";
import SearchResult from "../SearchResult/SearchResult";
import { DataContext } from "../../context/DataContext";

const NavBar = () => {
  const [searchText, setSearchText] = useState("");
  const { topAlbums, newAlbums } = useContext(DataContext);

  const data = [...topAlbums, ...newAlbums].filter((album) =>
    album.title.toLowerCase().startsWith(searchText)
  );

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Logo />
        <SearchBar search={searchText} setSearchText={setSearchText} />
        <Button>Give Feedback</Button>
      </nav>
      {searchText && <SearchResult data={data} />}
    </div>
  );
};

export default NavBar;
