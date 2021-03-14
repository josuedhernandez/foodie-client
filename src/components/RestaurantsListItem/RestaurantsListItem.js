import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hyph } from "../Utils/Utils";

export default class RestaurantListItem extends Component {
  static defaultProps = { Restaurant: [] };

  render() {
    const { Restaurant } = this.props;
    return (
      <Link to={`/Restaurant/${Restaurant.id}`} className="RestaurantListItem">
        {/* <Link to={`/search`} className='RestaurantListItem'> */}
        <header className="RestaurantListItem__header">
          <h2 className="RestaurantListItem__heading">{Restaurant.restaurant_name}</h2>
        </header>
        <footer className="RestaurantListItem__footer">
          <RestaurantCuisine Restaurant={Restaurant} />
          {/* ToDo: Calculate rating from comments made by users */}
          {Restaurant.rating}
          <Hyph />
          <RestaurantCommentCount Restaurant={Restaurant} />
        </footer>
      </Link>
    );
  }
}

function RestaurantCuisine({ Restaurant }) {
  return (
    <span className="RestaurantListItem__style">
      <h4>Cuisines</h4>
      {Restaurant.cuisine}
     <Hyph />
    </span>
  );
}

function RestaurantCommentCount({ Restaurant }) {
  return (
    <span className="RestaurantListItem__comment-count fa-layers fa-fw">
      <FontAwesomeIcon size="lg" icon="comment" />
      <span className="fa-layers-text fa-inverse">
        {Restaurant.number_of_comments}
      </span>
    </span>
  );
}
