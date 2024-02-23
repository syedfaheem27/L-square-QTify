import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

import { API } from "../../utils/constants";
import { DataContext } from "../../context/DataContext";
//TODO: make use of reusable button component
const Section = ({ album, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [topSongs, setTopSongs] = useState([]);

  const data = useContext(DataContext);

  useEffect(() => {
    data.fetchNewAlbums();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it
  const fetchSongs = useCallback(async (url) => {
    try {
      const data = await axios.get(url);
      setTopSongs(data.data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSongs(`${API}/${album}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.songs}>
      <div className={styles.action}>
        <span>{label}</span>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? "Collapse" : "Show All"}
        </button>
      </div>
      {children}
      <div className={isOpen ? styles["song-list"] : "slider-container"}>
        {isOpen &&
          topSongs.map((song) => (
            <Card
              key={song.id}
              img={song.image}
              follows={song.follows}
              title={song.title}
            />
          ))}
        {!isOpen && (
          <Carousel>
            {topSongs.map((song) => (
              <Card
                key={song.id}
                img={song.image}
                follows={song.follows}
                title={song.title}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};
export default Section;
