import styles from "./Song.module.css";

const Song = ({ song }) => {
  return (
    <li className={styles.song}>
      <div>
        <img src={song.image} alt={song.title} />

        <span>{song.title}</span>
      </div>
      <div>{song.artists.join(", ")}</div>
      <div>{song.durationInMs}</div>
    </li>
  );
};

export default Song;
