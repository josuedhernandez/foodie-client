import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Section } from "../../components/Utils/Utils";
import RestaurantApiService from "../../services/restaurant-api-service";
import FoodieContext from "../../contexts/FoodieContext";
import RestaurantListItem from "../../components/RestaurantsListItem/RestaurantsListItem";

function arrayToLowerCase(array) {
  // For a legacy browser safe version using an anonymous function
  var words = array.map(function (v) {
    return v.toLowerCase();
  });

  return words;
}

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), results: [] };
  }
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = FoodieContext;

  handleSearch = (ev) => {
    ev.preventDefault();
    this.context.clearError();
    RestaurantApiService.getArticles()
      .then(this.context.setArticleList)
      .catch(this.context.setError);
    const { search } = ev.target;
    const search_term = search.value.toLowerCase();

    // Search by name, cuisine and meals
    let results = this.context.RESTAURANTS_LIST.filter(
      (place) =>
        place.name.toLowerCase().includes(search_term) ||
        search_term.includes(place.name.toLowerCase())
    );
    // Concatenate arrays by searching by cuisine and meal
    // ToDo implement query to search one word not extact matche
    // e.g. search for "Sausage" in Meals ["Italian Sausage spicy", "Pizza"] should return true
    results = results.concat(
      this.context.RESTAURANTS_LIST.filter((place) => {
        let lowerCaseCuisine = arrayToLowerCase(place.cuisine);
        let lowerCaseMeals = arrayToLowerCase(place.meals);
        return (
          lowerCaseCuisine.includes(search_term) ||
          lowerCaseMeals.includes(search_term)
        );
      })
    );

    // Search by
    this.setState({ results: results });
  };
  render() {
    const RestauranList = this.state.results;
    return (
      <Section>
        <h1>Type any type of cuisine or meal name</h1>
        <SearchForm onSearch={this.handleSearch} />
        {RestauranList.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} Restaurant={restaurant} />
        ))}
      </Section>
    );
  }
}
