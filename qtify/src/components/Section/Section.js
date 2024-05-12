import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { ALL_SONGS } from "../../utils/Api";

import { DataContext } from "../../context/DataContext";
import { CircularProgress } from "@mui/material";
import { GenreContext } from "../../context/GenreContext";

//TODO: make use of reusable button component
const Section = ({ album, label, children, enableToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { [album]: albumData, setSongs } = useContext(DataContext);

  const { activeGenre } = useContext(GenreContext);

  useEffect(() => {
    if (albumData.length !== 0 && albumData[0].genre) {
      setSongs(() =>
        activeGenre === "all"
          ? ALL_SONGS
          : ALL_SONGS.filter((song) => song.genre.key === activeGenre)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

  //TODO: use enqueSnackbar for showing notifications

  return (
    <section className={styles.songs}>
      <div className={styles.action}>
        <span>{label}</span>

        {enableToggle && (
          <button onClick={() => setIsOpen((o) => !o)}>
            {isOpen ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {children}

      {albumData.length === 0 && <CircularProgress sx={{ color: "white" }} />}

      <div className={isOpen ? styles["song-list"] : "slider-container"}>
        {isOpen &&
          albumData.length !== 0 &&
          albumData.map((data) => (
            <Card
              key={data.id}
              img={data.image}
              follows={
                data.follows ? `${data.follows} Follows` : `${data.likes} Likes`
              }
              title={data.title}
              tooltip={
                data.songs
                  ? `${data.songs.length} songs`
                  : `${data.likes} Likes`
              }
              slug={data?.slug}
            />
          ))}
        {!isOpen && albumData.length !== 0 && (
          <Carousel len={albumData.length}>
            {albumData.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};
export default Section;
