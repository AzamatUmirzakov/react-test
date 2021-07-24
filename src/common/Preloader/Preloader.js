import loading from "../../assets/images/loading-animation.svg";
import styles from "./Preloader.module.css";

const Preloader = (props) => (
  <img className={styles.preloader} alt="loading users" src={loading} />
);

export default Preloader;
