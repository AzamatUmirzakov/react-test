import React from "react";
import userFallback from "../../assets/images/user-fallback.png";
import styles from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    let data = this.getUsers(this.props.currentPage);
    data.then((value) => {
      this.props.setTotalCount(value.totalCount);
    });
  }
  getUsers = async (pageNumber) => {
    const url = new URL(
      "users",
      "https://social-network.samuraijs.com/api/1.0/"
    );
    url.searchParams.set("page", pageNumber);
    url.searchParams.set("count", this.props.pageSize);
    const response = await fetch(url);
    const data = await response.json();
    this.props.setUsers(data.items);
    this.props.setCurrentPage(pageNumber);
    return data;
  };
  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <span
          className={
            this.props.currentPage === i
              ? `${styles.pageLink} ${styles.selected}`
              : styles.pageLink
          }
          onClick={() => {
            this.getUsers(i);
          }}
        >
          {i}
        </span>
      );
    }
    return (
      <div className={styles.users}>
        <div className={styles.usersPagination}>{pages}</div>
        {this.props.users.map((user) => (
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
                    this.props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
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
  }
}

export default Users;
