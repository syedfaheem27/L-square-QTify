import { DataContext } from "./DataContext";
import { getNewAlbums, getSongs, getTopAlbums } from "../utils/Api";
import { useEffect, useState } from "react";

const DataProvider = ({ children }) => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getNewAlbums()
      .then((res) => setNewAlbums(res))
      .catch((err) => console.log(err));

    getTopAlbums()
      .then((res) => setTopAlbums(res))
      .catch((err) => console.log(err));

    getSongs()
      .then((res) => setSongs(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider
      value={{
        topAlbums,
        newAlbums,
        songs,
        setSongs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
