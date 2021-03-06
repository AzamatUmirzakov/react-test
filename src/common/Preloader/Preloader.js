import loading from "../../assets/images/loading-animation.svg";
import styles from "./Preloader.module.css";

const Preloader = ({ width = 50, height = 50 }) => {
  let configuration = {
    width: width,
    height: height,
  };
  return (
    <img
      className={styles.preloader}
      style={configuration}
      alt="loading users"
      src={loading}
    />
  );
};

export default Preloader;
