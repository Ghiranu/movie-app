import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App
      onLoad={fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=1799c91dd9edfec9563ae3c879d8fc43&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => console.log(data.results))}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
