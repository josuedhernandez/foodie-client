import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import RestaurantApiService from "../../services/restaurant-api-service";

export default class NewRestaurantForm extends Component {
  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const {
      RegistrationForm__restaurant_name,
      RegistrationForm__rating,
      cuisine,
      RegistrationForm__mealname,
    } = ev.target;

    RestaurantApiService.postRestaurant(
      RegistrationForm__restaurant_name.value,
      cuisine.value,
      RegistrationForm__mealname.value,
      parseInt(RegistrationForm__rating.value),
    )
      .then(this.context.setRestaurantList)
      .then(() => {
        RegistrationForm__restaurant_name.value = "";
        RegistrationForm__rating.value = "";
        cuisine.value = "";
        RegistrationForm__mealname.value = "";
      })
      .catch(this.context.setError);
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
        {/* {Todo: enable zipcode and add column to foodie_restaurants table} */}
        {/* <div className="nick_name">
          <label htmlFor="RegistrationForm__zipcode">
            Zipcode <Required />
          </label>
          <Input
            name="nick_name"
            type="text"
            required
            id="RegistrationForm__zipcode"
          ></Input>
        </div> */}
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
