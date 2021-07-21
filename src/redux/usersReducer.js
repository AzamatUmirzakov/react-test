const FOLLOW_USER = "follow-user";
const UNFOLLOW_USER = "unfollow-user";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
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
        users: [...state.users, ...action.users],
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

export default usersReducer;
export { followActionCreator, unfollowActionCreator, setUsersActionCreator };
