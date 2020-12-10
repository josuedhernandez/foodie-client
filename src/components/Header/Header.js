import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {};

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
        <Link onClick={this.handleLogoutClick} to="/newrestaurant">
          Add A Restaurant
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      // <nav className="Header">
      <nav className="topnav">
        <Link to="/">
          <FontAwesomeIcon icon="frog" /> Home
        </Link>
        <Link to="/Search">
          Search
        </Link>
        {true ? this.renderLoginLink() : this.renderLogoutLink()}
      </nav>
    );
  }
}
