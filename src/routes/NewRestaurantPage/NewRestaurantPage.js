import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import NewRestaurantForm from "../../components/NewRestaurantForm/NewRestaurantForm"

export default class NewRestaurantPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    // history.push("/login");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <NewRestaurantForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}