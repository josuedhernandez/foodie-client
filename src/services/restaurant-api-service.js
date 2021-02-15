import TokenService from '../services/token-service'
import config from '../config'

const RestaurantApiService = {
  getRestaurants() {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRestaurant(restaurantId) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restaurantId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRestaurantComments(restaurantId) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restaurantId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postRestaurant(newRestaurant, newCuisine, newMeal, newRating) {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        restaurant_name: newRestaurant,
        cuisine: newCuisine,
        meal: newMeal,
        rating: newRating
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(restaurantId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        restaurant_id: restaurantId,
        text,
        rating
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default RestaurantApiService