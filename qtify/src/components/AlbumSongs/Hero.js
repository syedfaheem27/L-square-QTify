import styles from "./Hero.module.css";

const Hero = ({ album }) => {
  const songLength = album.songs.length;

  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={album.image} alt={album.title} />
      </div>
      <div className={styles.content}>
        <h1>{album.title}</h1>
        <p>{album.description}</p>
        <div className={styles["song-info"]}>
          <span>{`${songLength} songs`}</span>
          <span>&#x2022;</span>
          <span>{`${album.follows} follows`}</span>
        </div>
        <div className={styles.actions}>
          <button>&#128256; Shuffle</button>
          <button>&#9836; Add to library</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
