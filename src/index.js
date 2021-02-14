import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FoodieContextProvider } from "./contexts/FoodieContext";
import { RestaurantProvider } from './contexts/RestaurantContext'
import {
  faHamburger,
  faComment,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import App from "./components/App/App";

library.add(
  faHamburger, // logo
  faComment,
  faQuoteLeft
);

ReactDOM.render(
  <BrowserRouter>
    <FoodieContextProvider>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </FoodieContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
