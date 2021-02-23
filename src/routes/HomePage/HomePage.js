import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./HomePage.css"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className="HomePage">
        <h1>Welcome To Foodie</h1>
        <h3>Your place to look for meals and restaurants near you.</h3>
        <p>
          With foodie you can even create an account to add your favorite
          restaurants, provide reviews and share the meals that you ate there.
          Also type of cuisine
        </p>
      </Section>
    );
  }
}
