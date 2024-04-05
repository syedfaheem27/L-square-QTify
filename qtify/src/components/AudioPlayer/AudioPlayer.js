import styles from "./AudioPlayer.module.css";

const AudioPlayer = ({ songName, albumName, songImg }) => {
  const playAudio = async () => {
    // const audio = new Audio(
    //   "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_OGG.ogg"
    // );
    const audio = new Audio("/audios/mp3.mp3");
    await audio.play();
  };

  return (
    <div className={styles.container}>
      <div className={styles["song-content"]}>
        <div>
          <img src={songImg} alt={songName} />
        </div>
        <div className={styles["song-info"]}>
          <span>{songName}</span>
          <span>{albumName}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
