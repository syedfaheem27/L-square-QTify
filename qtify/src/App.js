import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Album from "./components/Album/Album";

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
      <Album album={"top"} label="Top Albums" />
      <Album album={"new"} label="New Albums" />
    </header>
  );
}

export default App;
