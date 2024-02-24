import React from "react";

import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

const Card = ({ img, follows, title }) => {
  return (
    <Tooltip title={follows} arrow className={styles.tip}>
      <div className={styles.card}>
        <div className={styles["img-container"]}>
          <img className={styles.img} src={img} alt={title} />
          <div className={styles["chip-container"]}>
            <Chip label={follows} className={styles.chip} />
          </div>
        </div>
        <span className={styles.txt}>{title}</span>
      </div>
    </Tooltip>
  );
};

export default React.memo(Card);
