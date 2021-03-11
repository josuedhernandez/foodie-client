import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
// import StyleIcon from '../StyleIcon/StyleIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <FontAwesomeIcon className="fa-user" icon={faUser} />
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" id="LoginForm__user_name"
          placeholder="username... ('test' for test)"></Input>
        </div>
        <div className="password">
          <FontAwesomeIcon className="fa-key" icon={faKey} />
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
            placeholder="password...(use 'Test!234' for test)"
            /* Use place holder to display input info */
          ></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
