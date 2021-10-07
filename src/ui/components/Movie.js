import React from "react";

const Movie = ({ title, year, genres, rating, description, tags }) => {
  return (
    <article className="movie">
      <h1>
        {title} ({year})
      </h1>
      <div className="movie__info">
        <h4>{rating} ⭐</h4>
        <h3>{genres.join(", ")}</h3>
        <p>{description}</p>
        <h4>{tags.join(", ")}</h4>
      </div>
    </article>
  );
};

export default Movie;
