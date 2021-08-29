import React from "react";
import styles from "./ProfileInfo.module.css";
import userFallback from "../../../assets/images/user-fallback.png";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.user || !props.user.userId) {
    return <Preloader />;
  }

  const avatar = props.user.photos.large
    ? props.user.photos.large
    : userFallback;

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 1 || !e.target.files.length) return false;
    props.updatePhoto(e.target.files[0]);
  };

  return (
    <div>
      <div className={styles.currentUser}>
        <img src={avatar} alt="" className={styles.avatar} />
        {props.isOwner ? (
          <input type={"file"} onChange={handlePhotoChange} />
        ) : null}
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
