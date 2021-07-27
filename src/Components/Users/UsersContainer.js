import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setIsFetchingActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { getUsers } from "../../api/api";

class UsersAPIComponent extends React.Component {
  // getUsers = async (pageNumber) => {
  //   const url = new URL(
  //     "users",
  //     "https://social-network.samuraijs.com/api/1.0/"
  //   );
  //   url.searchParams.set("page", pageNumber);
  //   url.searchParams.set("count", this.props.pageSize);
  //   this.props.setIsFetching(true);
  //   const response = await fetch(url, {
  //     credentials: "include",
  //   });
  //   const data = await response.json();
  //   this.props.setIsFetching(false);
  //   this.props.setUsers(data.items);
  //   this.props.setCurrentPage(pageNumber);
  //   return data;
  // };
  componentDidMount() {
    this.props.setIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize)
      .then((result) => {
        this.props.setTotalCount(result.totalCount);
        return result;
      })
      .then((result) => {
        this.props.setUsers(result.items);
      })
      .then(() => {
        this.props.setIsFetching(false);
      });
  }
  onPageChanged = (pageNumber, pageSize) => {
    getUsers(pageNumber, pageSize)
      .then((result) => {
        this.props.setCurrentPage(pageNumber);
        return result;
      })
      .then((result) => {
        this.props.setTotalCount(result.totalCount);
        return result;
      })
      .then((result) => {
        this.props.setUsers(result.items);
      })
      .then(() => {
        this.props.setIsFetching(false);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

const UsersContainer = connect(mapStateToProps, {
  follow: followActionCreator,
  unfollow: unfollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setTotalCount: setTotalCountActionCreator,
  setIsFetching: setIsFetchingActionCreator,
})(UsersAPIComponent);

export default UsersContainer;
