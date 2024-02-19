import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Section.module.css";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Card from "../Card/Card";

//TODO: make use of reusable button component
const Section = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [topSongs, setTopSongs] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it
  const fetchSongs = async () => {
    try {
      const data = await axios.get(url);
      setTopSongs(data.data);
    } catch (err) {
      console.log(err);
    }
  };

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
      <div className={isOpen ? styles["song-list"] : ""}>
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
          <Slider {...settings}>
            {topSongs.map((song) => (
              <Card
                key={song.id}
                img={song.image}
                follows={song.follows}
                title={song.title}
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};
export default Section;
