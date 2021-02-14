import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RestaurantContext, { nullRestaurant } from '../../contexts/RestaurantContext'
import RestaurantApiService from '../../services/restaurant-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import StyleIcon from '../../components/StyleIcon/StyleIcon'
import CommentForm from '../../components/CommentForm/CommentForm'
import './RestaurantPage.css'

export default class RestaurantPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = RestaurantContext

  componentDidMount() {
    const { restaurantId } = this.props.match.params
    this.context.clearError()
    RestaurantApiService.getRestaurant(restaurantId)
      .then(this.context.setRestaurant)
      .catch(this.context.setError)
    RestaurantApiService.getRestaurantComments(restaurantId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearRestaurant()
  }

  renderRestaurant() {
    const { restaurant, comments } = this.context
    return <>
      <h2>{restaurant.restaurant_name}</h2>
      <p>
        <RestaurantCuisine restaurant={restaurant} />
        {restaurant.author.id && <>
          <Hyph />
          <RestaurantAuthor restaurant={restaurant} />
        </>}
        <Hyph />
        <NiceDate date={restaurant.date_created} />
      </p>
      <RestaurantMeal restaurant={restaurant} />
      <RestaurantComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, restaurant } = this.context
    let content
    if (error) {
      content = (error.error === `Restaurant doesn't exist`)
        ? <p className='red'>Restaurant not found</p>
        : <p className='red'>There was an error</p>
    } else if (!restaurant.id) {
      content = <div className='loading' />
    } else {
      content = this.renderRestaurant()
    }
    return (
      <Section className='ArticlePage'>
        {content}
      </Section>
    )
  }
}

function RestaurantCuisine({ restaurant }) {
  return (
    <span className='ArticlePage__style'>
      <StyleIcon cuisine={restaurant.cuisine} />
      {' '}
      {restaurant.cuisine}
    </span>
  )
}

function RestaurantAuthor({ restaurant = nullRestaurant }) {
  return (
    <span className='ArticlePage__author'>
      {restaurant.author.full_name}
    </span>
  )
}

function RestaurantMeal({ restaurant }) {
  return (
    <p className='ArticlePage__content'>
      {restaurant.meal} {restaurant.rating}
    </p>
  )
}

function RestaurantComments({ comments = [] }) {
  return (
    <ul className='ArticlePage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ArticlePage__comment'>
          <p className='ArticlePage__comment-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ArticlePage__comment-icon blue'
            />
            {comment.text}
            <Hyph />
            {comment.rating}
          </p>
          <p className='ArticlePage__comment-user'>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}