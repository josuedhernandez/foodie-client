import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph } from '../Utils/Utils'
// import './RestaurantListItem.css'

export default class RestaurantListItem extends Component {
  render() {
    const { Restaurant } = this.props
    return (
      <Link to={`/Restaurant/${Restaurant.id}`} className='RestaurantListItem'>
        {/* <Link to={`/search`} className='RestaurantListItem'> */}
        <header className='RestaurantListItem__header'>
          <h2 className='RestaurantListItem__heading'>
            {Restaurant.name}
          </h2>
        </header>
        <footer className='RestaurantListItem__footer'>
          <RestaurantCuisine Restaurant={Restaurant} />
          {Restaurant.rating}<Hyph />
          <RestaurantCommentCount Restaurant={Restaurant} />
        </footer>
      </Link>
    )
  }
}

function RestaurantCuisine({ Restaurant }) {
  return (
    <span className='RestaurantListItem__style'>
        <h4>Cuisines</h4>
      {Restaurant.cuisine.map( (cuisine, index) => <span key={Restaurant.id * index}>{cuisine}<Hyph /></span>)}
    </span>
  )
}

function RestaurantCommentCount({ Restaurant }) {
  return (
    <span
      className='RestaurantListItem__comment-count fa-layers fa-fw'
    >
      <FontAwesomeIcon size='lg' icon='comment' />
      <span
        className='fa-layers-text fa-inverse'>
        {Restaurant.comments.length}
      </span>
    </span>
  )
}