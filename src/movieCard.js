import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  return (
    <div className="movie-card">
      <img
        src={posterURL}
        alt={`Affiche du film ${title}`}
        className="movie-poster"
      />
      <div className="movie-info">
        <div className="movie-header">
          <h3 className="movie-title">{title}</h3>
          <span className="movie-rating">{rating}/5</span>
        </div>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
