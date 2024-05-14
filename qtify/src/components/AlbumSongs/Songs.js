import { useNavigate } from "react-router-dom";
import styles from "./Songs.module.css";
import Hero from "./Hero";
import SongsList from "./SongsList";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const SONGS_PER_PAGE = 10;

const Songs = ({ album }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const max_page = Math.ceil(album.songs.length / SONGS_PER_PAGE);

  const handleChange = (_, value) => {
    setPage(value);
  };

  const songsList = album.songs.filter((song, index) => {
    let startIndex = (page - 1) * SONGS_PER_PAGE;
    let endIndex = page * SONGS_PER_PAGE;

    return index >= startIndex && index < endIndex;
  });
  return (
    <section className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        &#10094;
      </button>
      <Hero album={album} />

      <Stack
        spacing={2}
        sx={{ marginTop: "24px", gap: "16px" }}
        display="flex"
        flexDirection="column"
      >
        <Pagination
          count={max_page}
          color="primary"
          className={styles.paginate}
          sx={{ alignSelf: "flex-end" }}
          page={page}
          onChange={handleChange}
        />

        <SongsList songs={songsList} />
      </Stack>
    </section>
  );
};

export default Songs;
