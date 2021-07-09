import state from "./redux/state";
import { addPost } from "./redux/state";
import render from "./render";

render(state, addPost);
