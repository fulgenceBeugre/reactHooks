import MovieCard from "./movieCard";
const MovieList = ({ movies }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
    console.log(url);
  };
  return (
    <>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p className="no-movies-message">
            Aucun film ne correspond à vos critères de recherche.
          </p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} onClick={() => handleClick(movie.url)}>
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MovieList;
