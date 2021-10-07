import React from "react";
import ReactDOM from "react-dom";
import { movies } from "./helpers/database";
// CSS
import "./index.scss";
import Movie from "./ui/components/Movie";

function MovieList() {
  return (
    <section className="movieList">
      {movies.map((movie, index) => {
        return <Movie key={movie.id} {...movie}></Movie>;
      })}
    </section>
  );
}

ReactDOM.render(<MovieList />, document.getElementById("root"));
