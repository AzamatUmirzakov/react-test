import { profileAPI } from "../api/api";
const ADD_POST = "add-post";
const SET_CURRENT_USER = "set-current-user";
const SET_STATUS = "set-status";
const UPDATE_PHOTO_SUCCESS = "update-photo-success";

const addPostActionCreator = (text) => ({
  type: ADD_POST,
  text,
});

const setCurrentUserActionCreator = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

const setStatusActionCreator = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

const updatePhotoSuccess = (photos) => ({
  type: UPDATE_PHOTO_SUCCESS,
  photos,
});

const initialState = {
  currentUser: null,
  posts: [
    {
      id: 1,
      text: "bruh",
    },
    {
      id: 2,
      text: "wow",
    },
    {
      id: 3,
      text: "ok",
    },
  ],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { text: action.text, id: state.posts.length + 1 },
        ],
        newPostValue: "",
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          photos: action.photos,
        },
      };
    default:
      return state;
  }
};

const setCurrentUser = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setCurrentUserActionCreator(data));
  });
};

const getStatus = (userId) => (dispatch) => {
  return profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusActionCreator(data));
  });
};

const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
    }
  });
};

const updatePhoto = (photo) => (dispatch) => {
  profileAPI.updatePhoto(photo).then((response) => {
    debugger;
    if (response.resultCode === 0) {
      dispatch(updatePhotoSuccess(response.data.photos));
    }
  });
};

export default profileReducer;
export {
  addPostActionCreator,
  setCurrentUser,
  getStatus,
  updateStatus,
  updatePhoto,
};
