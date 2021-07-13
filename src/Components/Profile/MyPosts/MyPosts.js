import React from "react";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostValueActionCreator,
} from "../../../redux/profileReducer";
import styles from "./MyPosts.module.css";

function MyPosts(props) {
  let newPostText = React.createRef();
  let handleClick = (event) => {
    props.dispatch(addPostActionCreator());
  };
  let handleChange = (event) => {
    let action = updateNewPostValueActionCreator(event.target.value);
    props.dispatch(action);
  };
  let postElements = props.posts.map((post) => <Post text={post.text} />);
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.newPost}>
        <textarea
          name=""
          ref={newPostText}
          cols="30"
          rows="10"
          value={props.newPostValue}
          onChange={handleChange}
          placeholder="What's on your mind?"
        ></textarea>
        <button onClick={handleClick}>Add post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
