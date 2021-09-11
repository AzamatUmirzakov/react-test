import { authAPI } from "../api/api";
import { securityAPI } from "../api/api";

const SET_USER_DATA = "set-user-data";
const SET_CAPTCHA_URL = "set-captcha-url";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaURL: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.url,
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

const setCaptchaURLActionCreator = (url) => ({
  type: SET_CAPTCHA_URL,
  url,
});

const authMe = () => (dispatch) => {
  return authAPI.me().then((data) => {
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

const login = (email, password, remember, captcha) => (dispatch) => {
  return authAPI.login(email, password, remember, captcha).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    } else if (data.resultCode === 10) {
      dispatch(getCaptchaURL());
    } else {
      throw new Error(data.messages[0]);
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

const getCaptchaURL = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaURL();
  dispatch(setCaptchaURLActionCreator(response.url));
  return response.url;
};

export default authReducer;
export {
  setUserDataActionCreator,
  authMe,
  login,
  logout,
  getCaptchaURL,
  setCaptchaURLActionCreator,
};
