import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import { v4 as uuidv4 } from "uuid";

export default class NewRestaurantForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const {
      RegistrationForm__restaurant_name,
      RegistrationForm__rating,
      cuisine,
      RegistrationForm__mealname,
      RegistrationForm__zipcode,
    } = ev.target;

    let restaurant_obj = {
      id: uuidv4(),
      name: RegistrationForm__restaurant_name.value,
      rating: parseInt(RegistrationForm__rating.value),
      cuisine: [cuisine.value],
      meals: RegistrationForm__mealname.value.split(","),
      zipcode: parseInt(RegistrationForm__zipcode.value),
      comments: [
      {username: "dunder", comment: "New Entry", rating: parseInt(RegistrationForm__rating.value)}
    ]
    };

    // Pass this and handle adding the entry using context in new restaurant page
    this.props.onRegistrationSuccess(restaurant_obj);

    RegistrationForm__restaurant_name.value = "";
    RegistrationForm__rating.value = "";
    cuisine.value = "";
    RegistrationForm__mealname.value = "";
    RegistrationForm__zipcode.value = "";
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__restaurant_name">
            Restaurant Name <Required />
          </label>
          <Input
            name="restaurant_name"
            type="text"
            required
            id="RegistrationForm__restaurant_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__rating">
            Restaurant Rating <Required />
          </label>
          <Input
            name="user_name"
            type="number"
            min="1"
            max="5"
            required
            id="RegistrationForm__rating"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="cusine">Choose a Cusine </label> <Required />
          <select id="cusine" name="cuisine">
            <option value="Italian">Italian</option>
            <option value="Chineese">Chineese</option>
            <option value="Mexican">Mexican</option>
            <option value="American">American</option>
          </select>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__mealname">
            Meal Name (enter more than one sperated by comma ",") <Required />
          </label>
          <Input
            name="mealname"
            type="text"
            required
            id="RegistrationForm__mealname"
          ></Input>
        </div>
        <div className="nick_name">
          <label htmlFor="RegistrationForm__zipcode">
            Zipcode <Required />
          </label>
          <Input
            name="nick_name"
            type="text"
            required
            id="RegistrationForm__zipcode"
          ></Input>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
