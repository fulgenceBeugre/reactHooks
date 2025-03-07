import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
      url: "",
    });
  };

  return (
    <div className="add-movie-form">
      <h2 className="form-title">Ajouter un nouveau film</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <div className="form-group">
          <label className="form-label">Titre</label>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            required
            className="form-textarea"
            rows="3"
          />
        </div>
        <div className="form-group">
          <label className="form-label">URL de l'affiche</label>
          <input
            type="text"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
            placeholder="https://example.com/movie-poster.jpg"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">URL de la bande d'annonce</label>
          <input
            type="text"
            name="url"
            value={newMovie.url}
            onChange={handleChange}
            placeholder="https://www.senscritique.com/morceau/wake_me_up/106008602"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Note (1-5)</label>
          <select
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
            className="form-select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Ajouter le film
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
