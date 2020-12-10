import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFrog,
  faComment,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import App from "./components/App/App";

library.add(
  faFrog, // logo
  faComment,
  faQuoteLeft
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
