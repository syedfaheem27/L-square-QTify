import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import Divider from "./components/Divider/Divider";

//TODO: work on it's responsiveness and add error handling

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
      <Section album="albums/top" label="Top Albums" />
      <Section album="albums/new" label="New Albums" />
      <Divider />
    </header>
  );
}

export default App;
