const selectUsers = (state) => state.usersPage.users;

const selectPageSize = (state) => state.usersPage.pageSize;

const selectTotalCount = (state) => state.usersPage.totalCount;

const selectCurrentPage = (state) => state.usersPage.currentPage;

const selectIsFetching = (state) => state.usersPage.isFetching;

const selectFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;

export {
  selectUsers,
  selectPageSize,
  selectTotalCount,
  selectCurrentPage,
  selectIsFetching,
  selectFollowingInProgress,
};
