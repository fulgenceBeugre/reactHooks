import AddMovieForm from "./addMovieForm";
import "./App.css";

import React, { useState } from "react";
import Filter from "./filter";
import MovieList from "./movieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === "" || movie.rating >= parseInt(ratingFilter))
    );
  });

  return (
    <div className="movie-app-container">
      <h1 className="app-title">Ma Collection de Films</h1>

      <AddMovieForm onAddMovie={addMovie} />

      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={setTitleFilter}
        onRatingFilterChange={setRatingFilter}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
