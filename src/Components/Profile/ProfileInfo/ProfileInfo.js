import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="assets/space.jpg" alt="" className={styles.profileImg} />
      </div>
      <div className={styles.description}>
        <img src="assets/profile-avatar.jpg" alt="" className={styles.avatar} />
      </div>
    </div>
  );
};

export default ProfileInfo;
