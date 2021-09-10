import React from "react";
import styles from "./ProfileDescription.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Contacts from "../Contacts/Contacts";

const ProfileDescription = ({ user, turnOnEditMode }) => {
  return (
    <div className={styles.description}>
      <div>
        <button onClick={turnOnEditMode}>edit</button>
        <p>
          {user.lookingForAJob
            ? "Currently looking for a job"
            : "Not looking for a job right now"}
          {user.lookingForAJob ? user.lookingForAJobDescription : null}
        </p>
      </div>
      <div>
        <p>{user.aboutMe}</p>
      </div>
      <div>
        <Contacts contacts={user.contacts} />
      </div>
    </div>
  );
};

export default ProfileDescription;
