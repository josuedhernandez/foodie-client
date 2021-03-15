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
          Foodie App is a growing community of restaurants and reviews by the users, we are growing our database with inputs from our users,
          with an account you can add add your favorite
          restaurant, provide comments and share the meals that you ate there.
          Also type of cuisine.
        </p>
        <p>There are some restaurants already entered in the database. After logging in, search by 
          "Mexican" or "Panda Express". And click on the results to read and enter comments.</p>
        <h5>
          Test it out with username: test and password: Test!234
        </h5>
      </Section>
    );
  }
}
