import { usersAPI } from "../api/api";
const FOLLOW_USER = "follow-user";
const UNFOLLOW_USER = "unfollow-user";
const SET_USERS = "set-users";
const SET_CURRENT_PAGE = "set-current-page";
const SET_TOTAL_COUNT = "set-total-count";
const SET_IS_FETCHING = "set-is-fetching";
const SET_FOLLOWING_IN_PROGRESS = "set-following-in-progress";

const initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
        // totalCount: users.length,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id !== action.id)],
      };
    default:
      return state;
  }
};

const followActionCreator = (userId) => ({
  type: FOLLOW_USER,
  userId,
});

const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const setTotalCountActionCreator = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

const setIsFetchingActionCreator = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

const setFollowingInProgressActionCreator = (id, value) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  followingInProgress: value,
  id,
});

const getUsers =
  (currentPage = 1, pageSize = 5) =>
  (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));
    dispatch(setCurrentPageActionCreator(currentPage));
    usersAPI
      .getUsers(currentPage, pageSize)
      .then((result) => {
        dispatch(setTotalCountActionCreator(result.totalCount));
        return result;
      })
      .then((result) => {
        dispatch(setUsersActionCreator(result.items));
      })
      .then(() => {
        dispatch(setIsFetchingActionCreator(false));
      });
  };

const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgressActionCreator(userId, true));
    usersAPI.follow(userId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
      dispatch(setFollowingInProgressActionCreator(userId, false));
    });
  };
};

const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgressActionCreator(userId, true));
    usersAPI.unfollow(userId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
      }
      dispatch(setFollowingInProgressActionCreator(userId, false));
    });
  };
};

export default usersReducer;
export {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setIsFetchingActionCreator,
  setFollowingInProgressActionCreator,
  getUsers,
  follow,
  unfollow,
};
