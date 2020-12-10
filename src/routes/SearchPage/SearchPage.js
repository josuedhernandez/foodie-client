import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSearch = () => {
    console.log('Handle Search')
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