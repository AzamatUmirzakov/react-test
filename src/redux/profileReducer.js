const ADD_POST = "add-post";
const UPDATE_NEW_POST = "update-new-post";
const addPostActionCreator = () => ({
  type: ADD_POST,
});

const updateNewPostValueActionCreator = (value) => ({
  type: UPDATE_NEW_POST,
  value: value,
});

const profileReducer = (state, action) => {
  let newState = {};
  newState = Object.assign(newState, state);
  switch (action.type) {
    case ADD_POST:
      newState.posts.push({
        text: newState.newPostValue,
        id: newState.posts.length + 1,
      });
      newState.newPostValue = "";
      break;
    case UPDATE_NEW_POST:
      newState.newPostValue = action.value;
      break;
    default:
      return newState;
  }
  return newState;
};

export default profileReducer;
export { addPostActionCreator, updateNewPostValueActionCreator };
