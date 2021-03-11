# Foodie App

An app to search and add restaurants and reviews by customers. Link to live app [Foodie App](https://foodie-psi.vercel.app/login)

# API

The client uses an API created in NodeJS, Express and PostgreSQL database.

* Base url [https://morning-castle-66587.herokuapp.com/api](https://morning-castle-66587.herokuapp.com/api)
* Endpoints:
  * /auth
    * Login with password and username to obtain JWT
  * /restaurants
    * Can get a list of all restaurants
    * /restaurants/restaurantID
      * Obtain comments for an specific restaurant
  * /comments
    * Comments for an specific restaurant

# Screenshots
Home Page:
![Home](./public/images/HomePage.png)

Login Page:
![Login](./public/images/LoginPage.png)

Search Page:
![Search](./public/images/SearchPage.png)

Registration Page:
![Registration](./public/images/RegistrationPage.png)

Add A New Restaurant Page:
![Login](./public/images/AddRestaurantPage.png)

## Summary
Foodie is an app that allows you to enter a food name and search for recipes and place information about the food when available.
It works using [foodi-api](https://morning-castle-66587.herokuapp.com/api) to search for information.
To use it, enter the name of a meal and results with restaurants available will be displayed.

## Built with
* HTML
* CSS
* JavaScript
* React for the client
* Nodejs Express for backend
* PostgreSQL database