import { useContext } from "react";
import { GenreContext } from "../../context/GenreContext";
import styles from "./GenreFilter.module.css";

const GenreFilter = () => {
  const { activeGenre, genres, setActiveGenre } = useContext(GenreContext);

  if (genres.length === 0) return null;

  return (
    <div className={styles.container}>
      {genres.length !== 0 && (
        <button
          className={`${styles.chip} ${
            activeGenre === "all" ? "active-song" : ""
          }`}
          onClick={() => setActiveGenre("all")}
        >
          All
        </button>
      )}

      {genres.length !== 0 &&
        genres.map(({ label, key }) => {
          return (
            <button
              className={`${styles.chip} ${
                activeGenre === key ? "active-song" : ""
              }`}
              key={key}
              onClick={() => setActiveGenre(key)}
            >
              {label}
            </button>
          );
        })}
    </div>
  );
};

export default GenreFilter;
