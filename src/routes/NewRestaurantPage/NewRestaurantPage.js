import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import NewRestaurantForm from "../../components/NewRestaurantForm/NewRestaurantForm";
import FoodieContext from "../../contexts/FoodieContext";

export default class NewRestaurantPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = FoodieContext;

  handleRestaurantInput = (restaurant) => {
    const { history } = this.props;
    history.push("/search");

  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <NewRestaurantForm onRestaurantSuccess={this.handleRestaurantInput} />
      </Section>
    );
  }
}
