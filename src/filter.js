import React from "react";

const Filter = ({
  titleFilter,
  ratingFilter,
  onTitleFilterChange,
  onRatingFilterChange,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-item">
        <label>Filtrer par titre</label>
        <input
          type="text"
          value={titleFilter}
          onChange={(e) => onTitleFilterChange(e.target.value)}
          placeholder="Entrez un titre"
          className="filter-input"
        />
      </div>
      <div>
        <div className="filter-item">
          <label className="filter-label">Filtrer par note</label>
          <select
            value={ratingFilter}
            onChange={(e) => onRatingFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="">Toutes les notes</option>
            <option value="1">1 étoile</option>
            <option value="2">2 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="5">5 étoiles</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
