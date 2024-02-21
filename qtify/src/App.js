import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Album from "./components/Album/Album";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
      <Album album={"top"} label="Top Albums" />
      <Album album={"new"} label="New Albums" />
      <Divider />
    </header>
  );
}

export default App;
