import { useContext } from "react";
import SearchCard from "../SearchCard/SearchCard";
import styles from "./SearchResult.module.css";
import { SearchContext } from "../../context/SearchContext";
import { DataContext } from "../../context/DataContext";

const SearchResult = () => {
  const { searchText } = useContext(SearchContext);
  const { topAlbums, newAlbums } = useContext(DataContext);

  const data = [...topAlbums, ...newAlbums].filter((album) =>
    album.title.toLowerCase().startsWith(searchText)
  );

  if (!searchText) return null;
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {data.map((album) => (
          <SearchCard key={album.id} album={album} />
        ))}
      </ul>
    </section>
  );
};

export default SearchResult;
