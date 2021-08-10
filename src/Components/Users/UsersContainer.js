import React from "react";
import { connect } from "react-redux";
import { follow, unfollow } from "../../redux/usersReducer";
import { getUsers } from "../../redux/usersReducer";
import {
  selectCurrentPage,
  selectFollowingInProgress,
  selectIsFetching,
  selectPageSize,
  selectTotalCount,
  selectUsers,
} from "../../selectors/users-selectors";
import Users from "./Users";

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  pageSize: selectPageSize(state),
  totalCount: selectTotalCount(state),
  currentPage: selectCurrentPage(state),
  isFetching: selectIsFetching(state),
  followingInProgress: selectFollowingInProgress(state),
});

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
})(Users);

export default UsersContainer;
