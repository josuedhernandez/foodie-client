import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";

export default class SearchForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSearch}>
        <Input
          type="search"
          placeholder="Search.."
          name="search"
          id="restaurant_search"
          // eslint-disable-next-line
          placeholder="Enter search..."
        />
        <Button className="button" type="submit">Search...</Button>
      </form>
    );
  }
}
