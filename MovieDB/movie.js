var movies = [{
    title: "Frozen",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Fury",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Kingsmen",
    rating: 3,
    hasWatched: false
  }
]

movies.forEach(function(movie) {
  if (movie.hasWatched) {
    console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars")
  } else {
    console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars")
  }
})