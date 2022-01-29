import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Blacksword.otf";
import "./i18n";

// const apiKey = process.env.REACT_APP_API_KEY;

ReactDOM.render(
  <App
  // onLoad={fetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  // ).then((response) => response.json())}
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
