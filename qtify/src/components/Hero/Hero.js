import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero_headphones.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className={styles["hero-img"]}>
        <img src={HeroImg} alt="Head phones" />
      </div>
    </section>
  );
};

export default Hero;
