import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./HomePage.css"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className="HomePage">
        <h1>Welcome To Foodie</h1>
        <h3>Your place to look for meals and restaurants near you.</h3>
        <p>There are some restaurants already entered in the database. After logging in, search by "Mexican" or "Chineese". And click on the results to read and enter comments.</p>
        <p>
          With foodie you can even create an account to add your favorite
          restaurants, provide reviews and share the meals that you ate there.
          Also type of cuisine. We are growing our database with inputs from our users.
        </p>
        <h5>
          Test it out with username: dunder and password: password
        </h5>
      </Section>
    );
  }
}
