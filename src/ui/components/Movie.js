import React from "react";

const Movie = ({ id, title, year, genres, rating, tags }) => {
  return (
    <div className="container">
      <article className="movie">
        <h1>
          {title} ({year})
        </h1>
        <div className="movie__info">
          <h3>{genres.join(", ")}</h3>
          <h4>{tags.join(", ")}</h4>
          <h4>{rating} ⭐</h4>
        </div>
      </article>
    </div>
  );
};

export default Movie;
