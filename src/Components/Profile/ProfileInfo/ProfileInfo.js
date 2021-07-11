import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="assets/space.jpg" alt="" className={styles.profileImg} />
      </div>
      <div className={styles.currentUser}>
        <img src="assets/profile-avatar.jpg" alt="" className={styles.avatar} />
        <div className={styles.description}>
          <h1>{props.user.username}</h1>
          <h2>{props.user.name}</h2>
          <a
            target="_blank"
            href={`mailto:${props.user.email}`}
            className={styles.email}
          >
            {props.user.email}
          </a>
          <a
            target="_blank"
            href={props.user.website}
            className={styles.website}
          >
            {props.user.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
