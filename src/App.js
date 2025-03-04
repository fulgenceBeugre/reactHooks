import AddMovieForm from "./addMovieForm";
import "./App.css";

import React, { useState } from "react";
import Filter from "./filter";
import MovieList from "./movieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Better Man (2024)",
      description:
        "Dans le nord de l’Angleterre, le jeune Robbie grandit fasciné par les rêves de gloire de son père qui ne tarde pas à quitter le foyer pour vivre sa passion. Porté par l’amour de sa grand-mère, c’est pourtant Robbie qui va devenir un véritable showman et une star mondiale. Désormais icône internationale, il devra affronter les défis que le succès, la célébrité et la vie elle-même lui réservent.",
      posterURL:
        "https://media.senscritique.com/media/000022599251/0/better_man.png",
      rating: 4,
    },
    {
      title: "The Brutalist (2024)",
      description:
        "L'histoire, sur près de trente ans, d'un architecte juif né en Hongrie, László Toth. Revenu d'un camp de concentration, il émigre avec sa femme, Erzsébet, après la fin de la Seconde Guerre mondiale aux États-Unis pour connaître son heure de gloire.",
      posterURL:
        "https://media.senscritique.com/media/000022647875/0/the_brutalist.png",
      rating: 5,
    },
    {
      title: "Mémoires d’un escargot (2024)",
      description:
        "À la mort de son père, la vie heureuse et marginale de Grace Pudel, collectionneuse d’escargots et passionnée de lecture, vole en éclats. Arrachée à son frère jumeau Gilbert, elle atterrit dans une famille d’accueil à l’autre bout de l’Australie. Suspendue aux lettres de son frère, ignorée par ses tuteurs et harcelée par ses camarades de classe, Grace s’enfonce dans le désespoir.",
      posterURL:
        "https://media.senscritique.com/media/000022500290/0/memoires_dun_escargot.png",
      rating: 4,
    },
  ]);

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
