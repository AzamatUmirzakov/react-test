import { authMe } from "./auth-reducer";
// import { getUsers } from "./usersReducer";
import { getStatus } from "./profile-reducer";

const INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

const initializedSuccessActionCreator = () => ({
  type: INITIALIZED_SUCCESS,
});

const initialize = () => async (dispatch) => {
  Promise.all([dispatch(authMe())]).then(() => {
    dispatch(initializedSuccessActionCreator());
  });
  // await dispatch(authMe());
  // await dispatch(initializedSuccessActionCreator());
};

export default appReducer;
export { initializedSuccessActionCreator, initialize };
