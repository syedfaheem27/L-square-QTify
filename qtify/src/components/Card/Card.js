import React from "react";

import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const Card = ({ img, follows, title, tooltip, slug }) => {
  let markup = (
    <Tooltip title={tooltip} arrow className={styles.tip}>
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

  if (slug) return <Link to={`/albums/${slug}`}>{markup}</Link>;

  return <>{markup}</>;
};

export default React.memo(Card);
