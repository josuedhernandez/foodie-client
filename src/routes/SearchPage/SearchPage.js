import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Section } from '../../components/Utils/Utils'
// import { Results } from '../../components/Results/Results'
import { Restaurants } from '../../components/Utils/Restaurants'

export default class LoginPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSearch = (ev) => {
    ev.preventDefault()
    const { search } = ev.target
    const restaurants_list = Restaurants.filter( restaurant => search.includes(restaurant.name) )
    console.log(`${restaurants_list}`)
    // const { location, history } = this.props
    // const destination = (location.state || {}).from || '/'
    // history.push(destination)
  }

  render() {
    return (
      <Section>
        <h1>Type any type of cuisine or meal name</h1>
        <SearchForm
          onSearch={this.handleSearch}
        />
      </Section>
    )
  }
}