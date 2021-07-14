import React from "react";
import {
  addPostActionCreator,
  updateNewPostValueActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  let state = props.store.getState().profilePage;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let updateNewPostValue = (value) => {
    let action = updateNewPostValueActionCreator(value);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostValue={updateNewPostValue}
      addPost={addPost}
      posts={state.posts}
      newPostValue={state.newPostValue}
    />
  );
}

export default MyPostsContainer;
