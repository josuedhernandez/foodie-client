import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Section } from "../../components/Utils/Utils";
import RestaurantApiService from "../../services/restaurant-api-service";
import FoodieContext from "../../contexts/FoodieContext";
import RestaurantListItem from "../../components/RestaurantsListItem/RestaurantsListItem";
import "./SearchPage.css";

/*
function arrayToLowerCase(array) {
  // For a legacy browser safe version using an anonymous function
  // ToDo: Add functionality for multiple cuisines and meals to use this
  // array function.
  var words = array.map(function (v) {
    return v.toLowerCase();
  });

  return words;
}
*/

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), results: [] };
  }
  static contextType = FoodieContext;

  componentDidMount() {
    this.context.clearError();
    RestaurantApiService.getRestaurants()
      .then(this.context.setRestaurantList)
      .catch(this.context.setError);
  }

  handleSearch = (ev) => {
    ev.preventDefault();

    const { search } = ev.target;
    const search_term = search.value.toLowerCase();

    // Search by name
    let results_by_name = this.context.restaurantList.filter(
      (place) =>
        place.restaurant_name.toLowerCase().includes(search_term) ||
        search_term.includes(place.restaurant_name.toLowerCase())
    );
    // Concatenate arrays by searching by cuisine and meal
    // ToDo implement query to search one word not extact matche
    // e.g. search for "Sausage" in Meals ["Italian Sausage spicy", "Pizza"] should return true
    let results_by_cuisine_meal = this.context.restaurantList.filter(
      (place) => {
        let lowerCaseCuisine = place.cuisine.toLowerCase();
        let lowerCaseMeals = place.meal.toLowerCase();
        return (
          lowerCaseCuisine.includes(search_term) ||
          lowerCaseMeals.includes(search_term)
        );
      }
    );

    let results = [...new Set([...results_by_name,...results_by_cuisine_meal])]

    // Search by
    this.setState({ results: results });
  };

  render() {
    const RestauranList = this.state.results;

    return (
      <Section className="Search_Form">
        <h1>Type any type of cuisine or meal name</h1>
        <SearchForm onSearch={this.handleSearch} />
        {RestauranList.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} Restaurant={restaurant} />
        ))}
      </Section>
    );
  }
}
