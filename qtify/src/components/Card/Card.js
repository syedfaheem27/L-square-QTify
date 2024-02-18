import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ img, follows, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img className={styles.img} src={img} alt={title} />
        <div className={styles["chip-container"]}>
          <Chip label={follows} className={styles.chip} />
        </div>
      </div>
      <span className={styles.txt}>New English Songs</span>
    </div>
  );
};

export default Card;
