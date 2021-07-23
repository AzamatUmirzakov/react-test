const FOLLOW_USER = "follow-user";
const UNFOLLOW_USER = "unfollow-user";
const SET_USERS = "set-users";
const SET_CURRENT_PAGE = "set-current-page";
const SET_TOTAL_COUNT = "set-total-count";

const initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
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

export default usersReducer;
export {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
};
