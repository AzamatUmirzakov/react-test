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
      };
    default:
      return state;
  }
};

const setUserDataActionCreator = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
    isAuth,
  },
});

const authMe = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0)
      dispatch(
        setUserDataActionCreator(
          data.data.id,
          data.data.email,
          data.data.login,
          true
        )
      );
  });
};

const login = (email, password, remember) => (dispatch) => {
  authAPI.login(email, password, remember).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    }
  });
};

const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserDataActionCreator(null, null, null, false));
    }
  });
};

export default authReducer;
export { setUserDataActionCreator, authMe, login, logout };
