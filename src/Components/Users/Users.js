import React from "react";
import userFallback from "../../assets/images/user-fallback.png";
import styles from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        className={
          props.currentPage === i
            ? `${styles.pageLink} ${styles.selected}`
            : styles.pageLink
        }
        onClick={() => {
          props.onPageChanged(i);
        }}
      >
        {i}
      </span>
    );
  }
  return (
    <div className={styles.users}>
      <div className={styles.usersPagination}>{pages}</div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.userProfile}>
            <img
              alt="avatar"
              className={styles.userAvatar}
              src={user.photos.small ? user.photos.small : userFallback}
            />
            {user.followed ? (
              <button
                className={styles.followButton}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
                className={styles.followButton}
              >
                Follow
              </button>
            )}
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userStatus}>{user.status}</p>
            {/* <p className={styles.userLocation}>
              <span>{user.location.city}, </span>
              <span>{user.location.country}</span>
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
