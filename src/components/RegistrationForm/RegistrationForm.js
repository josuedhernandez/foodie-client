import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import ValidationError from "../../ValidationError";
import "./RegistrationForm.css"

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/; // eslint-disable-line no-useless-escape

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: {
        value: "",
        touched: false,
      },
      confirmPassword: {
        value: "",
        touched: false,
      },
      error: null,
    };
  }

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  updatePassword(Password) {
    this.setState({ password: { value: Password, touched: true } });
  }

  validatePassword() {
    const password = this.state.password.value.trim();

    if (!password.length === 0) {
      return "Password is required";
    } else if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return "Password must contain one upper case, lower case, number and special character";
    } else if (password.length < 8) {
      return "Password must contain 8 characters";
    }
  }

  updateConfirmPassword(confirmPasswordValue) {
    this.setState({
      confirmPassword: { value: confirmPasswordValue, touched: true },
    });
  }

  validateConfirmPassword() {
    const password = this.state.confirmPassword.value.trim();

    if (!password.length === 0) {
      return "Password is required";
    } else if (
      !(this.state.confirmPassword.value === this.state.password.value)
    ) {
      return "Password must match";
    } else if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return "Password must contain one upper case, lower case, number and special character";
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, nick_name, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
      .then((user) => {
        full_name.value = "";
        nick_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    const passwordError = this.validatePassword();
    const confirmPasswordError = this.validateConfirmPassword();

    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="nick_name">
          <label htmlFor="RegistrationForm__nick_name">Nickname</label>
          <Input
            name="nick_name"
            type="text"
            required
            id="RegistrationForm__nick_name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
            onChange={(e) => this.updatePassword(e.target.value)}
          ></Input>
          {this.state.password.touched && (
            <ValidationError message={passwordError} />
          )}
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__ConfirmPassword">
            Confirm Password <Required />
          </label>
          <Input
            name="confirmPassword"
            type="password"
            required
            id="RegistrationForm__ConfirmPassword"
            onChange={(e) => this.updateConfirmPassword(e.target.value)}
          ></Input>
          {this.state.confirmPassword.touched && (
            <ValidationError message={confirmPasswordError} />
          )}
        </div>
        <Button
          type="submit"
          disabled={this.validatePassword() || this.validateConfirmPassword()}
        >
          Register
        </Button>
      </form>
    );
  }
}
