import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

function MyPosts(props) {
  let newPostText = React.createRef();
  let handleClick = (event) => {
    props.store.addPost();
  };
  let handleChange = (event) => {
    props.store.changeNewPostValue(event.target.value);
  };
  let postElements = props.store
    .getState()
    .profilePage.posts.map((post) => <Post text={post.text} />);
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.newPost}>
        <textarea
          name=""
          ref={newPostText}
          cols="30"
          rows="10"
          value={props.store.getState().profilePage.newPostValue}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>Add post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
