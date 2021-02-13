import React, { Component } from "react";

// Will use context to handle user authentication
// status for this static option only.
const FoodieContext = React.createContext({
  restaurantList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setRestaurantList: () => {},
});

export default FoodieContext;

export class FoodieContextProvider extends Component {
  state = {
    restaurantList: [],
    error: null,
  };

  setRestaurantList = (restaurantList) => {
    this.setState({ restaurantList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      restaurantList: this.state.restaurantList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRestaurantList: this.setRestaurantList,
    };
    return (
      <FoodieContext.Provider value={value}>
        {this.props.children}
      </FoodieContext.Provider>
    );
  }
}
