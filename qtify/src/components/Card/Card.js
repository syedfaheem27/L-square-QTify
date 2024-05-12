import React from "react";

import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { image, title, slug } = data;

  let info = data.follows ? `${data.follows} Follows` : `${data.likes} Likes`;
  let tooltip_info = data.songs
    ? `${data.songs.length} songs`
    : `${data.likes} Likes`;

  let markup = (
    <Tooltip title={tooltip_info} arrow className={styles.tip}>
      <div className={styles.card}>
        <div className={styles["img-container"]}>
          <img className={styles.img} src={image} alt={title} />
          <div className={styles["chip-container"]}>
            <Chip label={info} className={styles.chip} />
          </div>
        </div>
        <span className={styles.txt}>{title}</span>
      </div>
    </Tooltip>
  );

  if (slug)
    return (
      <Link to={`/albums/${slug}`} state={data}>
        {markup}
      </Link>
    );

  return <>{markup}</>;
};

export default React.memo(Card);
