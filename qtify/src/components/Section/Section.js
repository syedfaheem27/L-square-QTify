import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";

import { DataContext } from "../../context/DataContext";
import { CircularProgress } from "@mui/material";

//TODO: make use of reusable button component
const Section = ({ album, label, children, enableToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { [album]: albumData } = useContext(DataContext);

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
          albumData.map((song) => (
            <Card
              key={song.id}
              img={song.image}
              follows={
                song.follows ? `${song.follows} Follows` : `${song.likes} Likes`
              }
              title={song.title}
            />
          ))}
        {!isOpen && albumData.length !== 0 && (
          <Carousel>
            {albumData.map((song) => (
              <Card
                key={song.id}
                img={song.image}
                follows={
                  song.follows
                    ? `${song.follows} Follows`
                    : `${song.likes} Likes`
                }
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
