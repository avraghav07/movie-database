import React, { Fragment, useEffect, useState } from "react";
import "./index.scss";
import Movie from "./ui/components/Movie";
import SearchBar from "./ui/components/SearchBar";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const searchLowerCase = searchString.toLowerCase();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = fetch(
      (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "") +
        "/api/movies"
    );
    response.then((response) => {
      response.json().then(setMovies);
    });
  }, []);
  const moviesToRender =
    movies &&
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchLowerCase)
    );
  return (
    <Fragment>
      <SearchBar {...{ searchString, setSearchString }} />
      <button label="Filters"></button>
      <section className="movieList" search={searchString}>
        {moviesToRender.map((movie, index) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </section>
    </Fragment>
  );
};

export default App;
