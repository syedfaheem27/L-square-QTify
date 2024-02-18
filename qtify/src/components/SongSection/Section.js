import styles from "./Section.module.css";

//TODO: make use of reusable button component
const Section = ({ children }) => {
  return (
    <section className={styles.songs}>
      <div className={styles.action}>
        <span>Top Albums</span>
        <button>Collapse</button>
      </div>
      <div className={styles["song-list"]}>{children}</div>
    </section>
  );
};

export default Section;
