import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Section } from "../../components/Utils/Utils";
import FoodieContext from "../../contexts/FoodieContext";
import RestaurantListItem from "../../components/RestaurantsListItem/RestaurantsListItem";

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
    const { search } = ev.target;
    const search_term = search.value.toLowerCase();

    // Search by name, cuisine and meals
    const results = this.context.RESTAURANTS_LIST.filter((place) => {
      if (
        place.name.toLowerCase().includes(search_term) ||
        search_term.includes(place.name.toLowerCase().includes(search_term))
      ) {
        return true;
      }
      // TODO: Implement search by cuisine and meal
      // else if (
      //             place.cuisine.toLowerCase().includes(search_term) ||
      //   search_term.includes(place.name.toLowerCase().includes(search_term))
      // )
      // { }
    });

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
