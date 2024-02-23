import { useEffect, useState } from "react";
import { GenreContext } from "./GenreContext";
import { getGenres } from "../utils/Api";

const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);

  useEffect(() => {
    getGenres()
      .then((res) => {
        setGenres(res);
        setActiveGenre("all");
      })
      .catch((err) => {
        console.log(err);
        setActiveGenre(null);
      });
  }, []);

  return (
    <GenreContext.Provider value={{ genres, activeGenre, setActiveGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
