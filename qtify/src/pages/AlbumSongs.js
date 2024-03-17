import { useParams } from "react-router-dom";

const AlbumSongs = () => {
  const { songId } = useParams();
  return <h1 style={{ color: "white" }}>{songId.toUpperCase()}</h1>;
};

export default AlbumSongs;
