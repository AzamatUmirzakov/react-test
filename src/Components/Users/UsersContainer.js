import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followActionCreator(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowActionCreator(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersActionCreator(users));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageActionCreator(currentPage));
  },
  setTotalCount: (totalCount) => {
    dispatch(setTotalCountActionCreator(totalCount));
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
