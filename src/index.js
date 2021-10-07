import React from "react";
import ReactDOM from "react-dom";
import { movies } from "./helpers/database";
// CSS
import "./index.scss";
import Movie from "./ui/components/Movie";
import Search from "./ui/components/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <MovieList />
    </div>
  );
};

const MovieList = () => {
  return (
    <section className="movieList">
      {movies.map((movie, index) => {
        return <Movie key={movie.id} {...movie}></Movie>;
      })}
    </section>
  );
};

const SearchBar = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
