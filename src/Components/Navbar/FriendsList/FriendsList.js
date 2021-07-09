import React from "react";
import styles from "./FriendsList.module.css";

const FriendsList = (props) => {
  let friendsList = props.friends.map((friend) => {
    return (
      <div className="friend" className={styles.friend}>
        <img src={friend.src} alt="" />
        {friend.name}
      </div>
    );
  });
  return <div className={styles.friendsList}>{friendsList}</div>;
};

export default FriendsList;
