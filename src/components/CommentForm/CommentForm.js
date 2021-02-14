import React, { Component } from "react";
import RestaurantContext from "../../contexts/RestaurantContext";
import RestaurantApiService from "../../services/restaurant-api-service";
import { Button, Textarea, Required, Input } from "../Utils/Utils";
import "./CommentForm.css";

export default class CommentForm extends Component {
  static contextType = RestaurantContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { restaurant } = this.context;
    const { text, rating } = ev.target;
    RestaurantApiService.postComment(restaurant.id, text.value, rating.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <div className="text">
          <Textarea
            required
            aria-label="Type a comment..."
            name="text"
            id="text"
            cols="30"
            rows="3"
            placeholder="Type a comment.."
          ></Textarea>
          <label htmlFor="rating">
            Restaurant Rating <Required />
          </label>
          <Input
            name="rating"
            type="number"
            min="1"
            max="5"
            required
            id="rating"
          ></Input>
        </div>
        <Button type="submit">Post comment</Button>
      </form>
    );
  }
}
