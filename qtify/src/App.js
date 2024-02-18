import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import Section from "./components/SongSection/Section";

function App() {
  const [topSongs, setTopSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //TODO: use enqueSnackbar for showing notifications
  //and handle the isLoading states and the view corresponding to it
  const fetchSongs = async (url) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await axios.get(url);
      setTopSongs(data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs("https://qtify-backend-labs.crio.do/albums/top");
  }, []);
  return (
    <header>
      <NavBar />
      <Hero />

      <Section>
        {topSongs.map((song) => {
          return <Card key={song.id} img={song.image} follows={song.follows} />;
        })}
      </Section>
    </header>
  );
}

export default App;
