import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";

export default class SearchForm extends Component {
   handleSearch = (ev) => {
       ev.preventDefault();
       const { search } = ev.target
       console.log(`Searched...${search}`)
    }
  render() {

    return (
      <form onSubmit={this.handleSearch}>
        <Input type="text" placeholder="Search.." name="search"/>
        <Button type="submit">Search...</Button>
      </form>
    );
  }
}