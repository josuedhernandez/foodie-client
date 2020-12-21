import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import HomePage from "../../routes/HomePage/HomePage";
import SearchPage from "../../routes/SearchPage/SearchPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NewRestaurantPage from "../../routes/NewRestaurantPage/NewRestaurantPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PrivateRoute path={"/search"} component={SearchPage} />
            <PrivateRoute
              path={"/newrestaurant"}
              component={NewRestaurantPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
