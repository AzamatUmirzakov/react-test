import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  if (!props.users.length)
    props.setUsers([
      {
        id: 1,
        fullName: "Azamat U.",
        status: "I am beautiful butterfly",
        location: {
          city: "Shymkent",
          country: "Kazakhstan",
        },
        followed: true,
        avatarUrl: "./assets/profile-avatar.jpg",
      },
      {
        id: 2,
        fullName: "Mike H",
        status: "is big",
        location: {
          city: "Penistone",
          country: "England",
        },
        followed: false,
        avatarUrl: "./assets/profile-avatar.jpg",
      },
      {
        id: 3,
        fullName: "Hue G. Rection",
        status: "I love books",
        location: {
          city: "Rome",
          country: "Italy",
        },
        followed: false,
        avatarUrl: "./assets/profile-avatar.jpg",
      },
      {
        id: 4,
        fullName: "John Snow",
        status: "Honor or duty?",
        location: {
          city: "The Wall",
          country: "Westeros",
        },
        followed: true,
        avatarUrl: "./assets/profile-avatar.jpg",
      },
      {
        id: 5,
        fullName: "Geralt of Rivia",
        status: "Neutral.",
        location: {
          city: "Wyzima",
          country: "Temeria",
        },
        followed: true,
        avatarUrl: "./assets/profile-avatar.jpg",
      },
    ]);

  return (
    <div className={styles.users}>
      {props.users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.userProfile}>
            <img
              alt="avatar"
              className={styles.userAvatar}
              src={user.avatarUrl}
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
            <p className={styles.userName}>{user.fullName}</p>
            <p className={styles.userStatus}>{user.status}</p>
            <p className={styles.userLocation}>
              <span>{user.location.city}, </span>
              <span>{user.location.country}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
