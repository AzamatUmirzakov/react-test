import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.props.getUsers}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
  followingInProgress: state.usersPage.followingInProgress,
});

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
})(UsersAPIComponent);

export default UsersContainer;
