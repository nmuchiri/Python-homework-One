import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
