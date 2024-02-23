import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import { useContext, useState } from "react";
import Card from "../Card/Card";

import { DataContext } from "../../context/DataContext";

//TODO: make use of reusable button component
const Section = ({ album, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { [album]: albumData } = useContext(DataContext);

  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it

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
          albumData.map((song) => (
            <Card
              key={song.id}
              img={song.image}
              follows={song.follows}
              title={song.title}
            />
          ))}
        {!isOpen && (
          <Carousel>
            {albumData.map((song) => (
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
