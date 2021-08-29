import React, { useRef } from "react";
import styles from "./ProfileInfo.module.css";
import userFallback from "../../../assets/images/user-fallback.png";
import upload from "../../../assets/images/upload.svg";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  const input = useRef(null);
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
        <div className={styles.avatar}>
          <button
            onClick={() => {
              input.current.click();
            }}
          >
            <img src={upload} alt="upload new avatar" />
          </button>
          <img src={avatar} alt="" className={styles.avatarImage} />
          {props.isOwner ? (
            <input ref={input} type={"file"} onChange={handlePhotoChange} />
          ) : null}
        </div>
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
