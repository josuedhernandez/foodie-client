// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the component available
import CommentForm from './components/CommentForm/CommentForm';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import NewRestaurantForm from './components/NewRestaurantForm/NewRestaurantForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import SearchForm from './components/SearchForm/SearchForm';

describe("Renders single components", () => {

  it(`renders <CommentForm /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip(`renders <Header /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`renders <LoginForm /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it(`renders <NewRestaurantForm /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewRestaurantForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it(`renders <RegistrationForm /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it(`renders <SearchForm /> without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
