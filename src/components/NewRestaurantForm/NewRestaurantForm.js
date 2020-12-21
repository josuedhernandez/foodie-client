import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";

export default class NewRestaurantForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, nick_name, user_name, password } = ev.target;

    full_name.value = "";
    nick_name.value = "";
    user_name.value = "";
    password.value = "";
    this.props.onRegistrationSuccess();
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Restaurant Name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            Restaurant Rating <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Meal Name <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <div className="nick_name">
          <label htmlFor="RegistrationForm__nick_name">Zipcode</label>
          <Input
            name="nick_name"
            type="text"
            required
            id="RegistrationForm__nick_name"
          ></Input>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}