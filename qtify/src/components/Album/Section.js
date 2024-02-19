import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

import { API } from "../../utils/constants";
//TODO: make use of reusable button component
const Section = ({ album, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [topSongs, setTopSongs] = useState([]);

  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it
  const fetchSongs = async (url) => {
    try {
      const data = await axios.get(url);
      setTopSongs(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs(`${API}/${album}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.songs}>
      <div className={styles.action}>
        <span>{label}</span>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? "Collapse" : "Show all"}
        </button>
      </div>
      <div className={styles["song-list"]}>
        {isOpen &&
          topSongs.map((song) => {
            return (
              <Card
                key={song.id}
                img={song.image}
                follows={song.follows}
                title={song.title}
              />
            );
          })}
      </div>
    </section>
  );
};
export default Section;
