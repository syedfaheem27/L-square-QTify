import React from "react";
import styles from "./SongsList.module.css";
import Song from "./Song";

const SongsList = ({ songs }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.header}>
        <div>Title</div>
        <div>Artist</div>
        <div>Duration</div>
      </li>

      {songs.map((song) => {
        return <Song key={song.id} song={song} />;
      })}
    </ul>
  );
};

export default SongsList;
