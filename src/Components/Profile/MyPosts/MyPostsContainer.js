import {
  addPostActionCreator,
  updateNewPostValueActionCreator,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostValue: (value) => {
      dispatch(updateNewPostValueActionCreator(value));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
