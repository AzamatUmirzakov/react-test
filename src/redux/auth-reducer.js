import { authAPI } from "../api/api";

const SET_USER_DATA = "set-user-data";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

const setUserDataActionCreator = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

const authMe = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0)
      dispatch(
        setUserDataActionCreator(data.data.id, data.data.email, data.data.login)
      );
  });
};

export default authReducer;
export { setUserDataActionCreator, authMe };
