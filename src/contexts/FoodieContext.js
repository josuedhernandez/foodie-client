import React, { Component } from "react";

// Will use context to handle user authentication
// status for this static option only.
const FoodieContext = React.createContext({
  user_logged_in: false,
  change_user_status: () => {},
});

export default FoodieContext;

export class FoodieContextProvider extends Component {
  state = {
    user_logged_in: false,
  };

  change_user_status = (logged_in) => {
    console.log(`Changed Status ${logged_in}`);
    this.setState({ user_logged_in: logged_in });
  };

  render() {
    const value = {
      user_logged_in: this.state.user_logged_in,
      change_user_status: this.change_user_status
    };
    return (
      <FoodieContext.Provider value={value}>
        {this.props.children}
      </FoodieContext.Provider>
    );
  }
}
