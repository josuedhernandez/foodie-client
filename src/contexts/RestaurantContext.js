import React, { Component } from 'react'

export const nullRestaurant = {
  author: {},
  tags: [],
}

const RestaurantContext = React.createContext({
  restauran: nullRestaurant,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setRestaurant: () => {},
  clearRestaurant: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default RestaurantContext

export class RestaurantProvider extends Component {
  state = {
    restaurant: nullRestaurant,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setRestaurant = restaurant => {
    this.setState({ restaurant })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearRestaurant = () => {
    this.setRestaurant(nullRestaurant)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      restaurant: this.state.restaurant,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRestaurant: this.setRestaurant,
      setComments: this.setComments,
      clearRestaurant: this.clearRestaurant,
      addComment: this.addComment,
    }
    return (
      <RestaurantContext.Provider value={value}>
        {this.props.children}
      </RestaurantContext.Provider>
    )
  }
}