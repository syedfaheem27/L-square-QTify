import { Link } from "react-router-dom";
import styles from "./SearchCard.module.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchCard = ({ album }) => {
  console.log(album);
  const { setSearchText } = useContext(SearchContext);
  return (
    <Link to={`/albums/${album.slug}`} onClick={() => setSearchText("")}>
      <li className={styles.container}>
        <div className={styles["img-container"]}>
          <img src={album.image} alt={album.title} />
        </div>
        <div className={styles.content}>
          <h3>{album.title}</h3>
          <p>{album.description}</p>
        </div>
      </li>
    </Link>
  );
};

export default SearchCard;
