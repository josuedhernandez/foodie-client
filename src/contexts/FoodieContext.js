import React, { Component } from "react";
import { restaurants, users } from "../components/Utils/Restaurants";

// Will use context to handle user authentication
// status for this static option only.
const FoodieContext = React.createContext({
  user_logged_in: false,
  change_user_status: () => {},
  RESTAURANTS_LIST: []
});

export default FoodieContext;

export class FoodieContextProvider extends Component {
  state = {
    user_logged_in: false,
    RESTAURANTS_LIST: restaurants
  };

  change_user_status = (logged_in) => {
    this.setState({ user_logged_in: logged_in });
  };

  render() {
    const value = {
      user_logged_in: this.state.user_logged_in,
      change_user_status: this.change_user_status,
      RESTAURANTS_LIST: this.state.RESTAURANTS_LIST
    };
    return (
      <FoodieContext.Provider value={value}>
        {this.props.children}
      </FoodieContext.Provider>
    );
  }
}
