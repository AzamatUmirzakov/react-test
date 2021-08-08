import React from "react";
import styles from "./ProfileInfo.module.css";
import userFallback from "../../../assets/images/user-fallback.png";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.user) {
    return <Preloader />;
  }

  const avatar = props.user.photos.large
    ? props.user.photos.large
    : userFallback;

  return (
    <div>
      <div className={styles.currentUser}>
        <img src={avatar} alt="" className={styles.avatar} />
        <div className={styles.description}>
          <h1>{props.user.fullName}</h1>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
