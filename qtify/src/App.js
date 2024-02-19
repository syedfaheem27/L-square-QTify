import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Album/Section";

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
        <Section url={"https://qtify-backend-labs.crio.do/albums/top"} />
    </header>
  );
}

export default App;
