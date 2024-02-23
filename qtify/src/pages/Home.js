import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default Home;
