import { useNavigate } from "react-router-dom";
import styles from "./Songs.module.css";
import Hero from "./Hero";

const Songs = ({ album }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        &#10094;
      </button>
      <Hero album={album} />
    </section>
  );
};

export default Songs;
