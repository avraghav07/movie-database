import React from "react";

const Movie = ({
  title,
  year,
  posterUrl,
  rating,
  description,
  genres,
  tags,
  duration,
  cast,
}) => {
  return (
    <article className="movie">
      <img src={posterUrl} alt="Poster" />
      <h1>
        {title} ({year})
      </h1>
      <h4>{rating} ⭐</h4>
      <h3>{genres + " " + duration + " minutes"}</h3>
      <p>{description}</p>
      <h4>{tags}</h4>
    </article>
  );
};

export default Movie;
