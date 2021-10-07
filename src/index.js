import React from "react";
import ReactDOM from "react-dom";
import { movies } from "./helpers/database";
// CSS
import "./index.css";
import SpecificMovie from "./ui/components/Movie";

function MovieList() {
  return (
    <section className="movielist">
      {movies.map((movie, index) => {
        return <SpecificMovie key={movie.id} {...movie}></SpecificMovie>;
      })}
    </section>
  );
}

ReactDOM.render(<MovieList />, document.getElementById("root"));
