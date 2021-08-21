import profileReducer from "./profile-reducer";
import { addPostActionCreator } from "./profile-reducer";

const state = {
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

it("new post text should be correct", function () {
  const action = addPostActionCreator("test");
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("should add new post with correct text", function () {
  const action = addPostActionCreator("test");
  const newState = profileReducer(state, action);

  expect(newState.posts[newState.posts.length - 1].text).toBe("test");
});
