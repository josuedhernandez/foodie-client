import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.href = "/";
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <NavLink activeClassName={"active"} to="/newrestaurant">
          Add Restaurant
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
          Login
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
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/Search">
          Search
        </NavLink>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
