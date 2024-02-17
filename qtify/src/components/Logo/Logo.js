import LogoImg from "../../assets/logo.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={LogoImg} alt="Qtify Logo" />
    </div>
  );
};

export default Logo;
