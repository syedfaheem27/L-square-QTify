import styles from "./Song.module.css";

const Song = ({ song }) => {
  const mins = Math.floor(song.durationInMs / (1000 * 60));
  const secs = Math.ceil((song.durationInMs / 1000) % 60);
  return (
    <li className={styles.song}>
      <div>
        <img src={song.image} alt={song.title} />

        <span>{song.title}</span>
      </div>
      <div>{song.artists.join(", ")}</div>
      <div>{`${mins}:${secs}`}</div>
    </li>
  );
};

export default Song;
