import { connect } from "react-redux";
import { follow, unfollow } from "../../store/users-reducer";
import { getUsers } from "../../store/users-reducer";
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
