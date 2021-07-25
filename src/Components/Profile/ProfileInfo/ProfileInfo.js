import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.user) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="assets/space.jpg" alt="" className={styles.profileImg} />
      </div>
      <div className={styles.currentUser}>
        <img src={props.user.photos.large} alt="" className={styles.avatar} />
        <div className={styles.description}>
          <h1>{props.user.fullName}</h1>
          <h2>{props.user.aboutMe}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
