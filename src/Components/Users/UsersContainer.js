import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
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
  componentDidMount() {
    let response = this.getUsers(this.props.currentPage);
    response.then((value) => {
      this.props.setTotalCount(value.totalCount);
    });
  }
  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.getUsers}
      />
    );
  }
}

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

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
