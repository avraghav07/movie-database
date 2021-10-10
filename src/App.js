import React, { Fragment, useState } from "react";
import "./index.scss";
import Movie from "./ui/components/Movie";
import SearchBar from "./ui/components/SearchBar";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const searchLowerCase = searchString.toLowerCase();
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
