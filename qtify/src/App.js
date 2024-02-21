import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Album from "./components/Album/Album";

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
      <Album url={"https://qtify-backend-labs.crio.do/albums/top"} />
    </header>
  );
}

export default App;
