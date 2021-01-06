import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";
// import { restaurants, users } from "../Utils/Restaurants";

export default class SearchForm extends Component {
  // handleSearch = (ev) => {
  //   ev.preventDefault();
  //   const { search } = ev.target;
  //   const search_name = search.value.toLowerCase();
  //   const results = restaurants.filter(
  //     (place) =>
  //       place.name.toLowerCase().includes(search_name) ||
  //       search_name.includes(place.name.toLowerCase().includes(search_name))
  //   );
  //   console.log(results);
  // };
  render() {
    return (
      <form onSubmit={this.props.onSearch}>
        <Input
          type="search"
          placeholder="Search.."
          name="search"
          id="restaurant_search"
        />
        <Button type="submit">Search...</Button>
      </form>
    );
  }
}
