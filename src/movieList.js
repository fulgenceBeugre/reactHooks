import MovieCard from "./movieCard";
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p className="no-movies-message">
          Aucun film ne correspond à vos critères de recherche.
        </p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;
