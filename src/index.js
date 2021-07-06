import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import "./style.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector("#root"));

function snail(array) {
  let result = [];
  let upper_border = 0;
  let right_border = array.length - 1;
  let bottom_border = array.length - 1;
  let left_border = 0;
  while (result.length < array.length ** 2) {
    // from left to right
    for (let i = left_border; i < right_border; i++) {
      result.push(array[upper_border][i]);
    }
    upper_border += 1;
    // from up to bottom
    for (let i = upper_border; i < bottom_border; i++) {
      result.push(array[right_border][i]);
    }
    right_border -= 1;
    // from right to left
    for (let i = right_border; i > left_border; i--) {
      result.push(array[bottom_border][i]);
    }
    bottom_border -= 1;
    // from bottom to top
    for (let i = bottom_border; i > upper_border; i--) {
      result.push(array[bottom_border][i]);
    }
    left_border += 1;
    console.log(result.length);
  }
  return result;
}

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(snail(array));
