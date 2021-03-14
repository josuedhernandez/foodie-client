import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Section } from "../../components/Utils/Utils";
import RestaurantApiService from "../../services/restaurant-api-service";
import FoodieContext from "../../contexts/FoodieContext";
import RestaurantListItem from "../../components/RestaurantsListItem/RestaurantsListItem";
import "./SearchPage.css";

function notResults(word) {
  return  <div className="Not_results">
            Your search: "{word}" Didn't match any restaurants or cuisines.
            <br/>
            Try: "Mexican" or "Chineese"
          </div>
}

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), results: [], error: "" };
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

    if (!results.length ) {
      // this.setState( {error: `"${search_term}" Didn't Find any results`} )
      this.setState({error: notResults(search_term)})
    }

    // Search by
    this.setState({ results: results });
  };

  render() {
    const RestauranList = this.state.results;
    const searchResults = this.state.error;

    return (
      <Section className="Search_Form">
        <h1>Type any restaurant mame, type of cuisine or meal name</h1>
        <h3>Try Searching: "Mexican" or "Chineese". You can also enter a new restaurant using the "Add restaurant" page if your
          search term doesn't contain any results.
        </h3>
        <SearchForm onSearch={this.handleSearch} />
        <div className="search-container">
        {RestauranList.length ? RestauranList.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} Restaurant={restaurant} />
        )) : searchResults}
        </div>
      </Section>
    );
  }
}
