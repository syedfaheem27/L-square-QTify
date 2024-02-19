import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Album/Section";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <header>
      <NavBar />
      <Hero />
      <Section album={"top"} label="Top Albums" />
      <Section album={"new"} label="New Albums" />
      <Divider />
    </header>
  );
}

export default App;
