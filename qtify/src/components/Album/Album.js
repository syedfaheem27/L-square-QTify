import styles from "./Album.module.css";
import Carousel from "../Carousel/Carousel";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

//TODO: make use of reusable button component
const Section = ({ url }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [topSongs, setTopSongs] = useState([]);

  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it
  const fetchSongs = useCallback(async () => {
    try {
      const data = await axios.get(url);
      setTopSongs(data.data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.songs}>
      <div className={styles.action}>
        <span>Top Albums</span>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? "Collapse" : "Show all"}
        </button>
      </div>
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
