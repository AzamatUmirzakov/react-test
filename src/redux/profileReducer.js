// import cloneDeep from "./cloneDeep";
const ADD_POST = "add-post";
const UPDATE_NEW_POST = "update-new-post";
const SET_CURRENT_USER = "set-current-user";
const addPostActionCreator = () => ({
  type: ADD_POST,
});

const updateNewPostValueActionCreator = (value) => ({
  type: UPDATE_NEW_POST,
  value: value,
});

const setCurrentUserActionCreator = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

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
  newPostValue: "",
};

const profileReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case ADD_POST:
      // newState = cloneDeep(state);
      // newState.posts.push({
      //   text: newState.newPostValue,
      //   id: newState.posts.length + 1,
      // });
      // newState.newPostValue = "";
      // break;
      return {
        ...state,
        posts: [
          ...state.posts,
          { text: state.newPostValue, id: state.posts.length + 1 },
        ],
        newPostValue: "",
      };
    case UPDATE_NEW_POST:
      // newState = cloneDeep(state);
      // newState.newPostValue = action.value;
      return {
        ...state,
        newPostValue: action.value,
      };
    // break;
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};

export default profileReducer;
export {
  addPostActionCreator,
  updateNewPostValueActionCreator,
  setCurrentUserActionCreator,
};
