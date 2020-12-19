import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodieContext from "../../contexts/FoodieContext";
import "./Header.css";

export default class Header extends Component {
  static contextType = FoodieContext;

  handleLogoutClick = () => {
    this.context.change_user_status(false);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <NavLink
          activeClassName={"active"}
          onClick={this.handleLogoutClick}
          to="/newrestaurant"
        >
          Add A Restaurant
        </NavLink>
        <Link onClick={this.handleLogoutClick} to="/">
          {/* Clear token and go back to home */}
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <NavLink activeClassName={"active"} to="/login">
          Log in
        </NavLink>
        <NavLink activeClassName={"active"} to="/register">
          Register
        </NavLink>
      </div>
    );
  }

  render() {
    return (
      // <nav className="Header">
      <nav className="topnav">
        <NavLink activeClassName="active" exact={true} to="/">
          <FontAwesomeIcon icon="hamburger" /> Home
        </NavLink>
        <NavLink activeClassName="active" to="/Search">
          Search
        </NavLink>
        {this.context.user_logged_in
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
