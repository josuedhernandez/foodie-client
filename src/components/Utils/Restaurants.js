const restaurants = [
  {
    name: "Comedor Catracho",
    rating: 5,
    zipcode: 85382,
    cuisine: ["American", "Mexican"],
    meals: ["Pupusas", "Nacatamales"],
    comments: [
      {username: "dunder", comment: "Pupusas in America", rating: 5},
      {username: "catracho", comment: "Nacatamales were ok. Was missing the Honduran style", rating: 3}
  ] 
  },
  {
    name: "Napoli",
    rating: 2,
    zipcode: 85381,
    cuisine: ["Italian"],
    meals: ["Pizza", "Spaghetti"],
    comments: [
      {username: "dunder", comment: "Best Pizza ever", rating: 5},
      {username: "catracho", comment: "Worst Spaghetti ever", rating: 1}
  ] 
  },
  {
    name: "Won",
    zipcode: 85386,
    cuisine: ["Chineese"],
    meals: ["Fried Rice", "Octupus"],
    comments: [
      {username: "dunder", comment: "Best Fried rice ever", rating: 5},
      {username: "catracho", comment: "Best Octupus in town", rating: 3}
  ] 
  },
];

const users = [
  {
    username: "dunder",
  },
  {
    username: "catracho"
  },
  {
    username: "pink"
  }
]

module.exports = { restaurants, users }