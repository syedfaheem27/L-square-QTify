import { useLocation } from "react-router-dom";
import Songs from "../components/AlbumSongs/Songs";

const AlbumSongs = () => {
  const { state: album } = useLocation();

  return <Songs album={album} />;
};

export default AlbumSongs;
