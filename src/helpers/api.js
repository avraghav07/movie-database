import { movies } from "./database";

export const getMovies = () => {
  return movies;
};

export const getMovie = (id) => {
  return movies.find((movie) => movie.id === id);
};
