import * as React from "react";
import "./styles.css";
import MovieEntry from "./MovieEntry";
import Square from "./Square";
import movies from "./Movies";

const MoviesPage = () => (
  <div className="App">
    <div className="moviesgrid">
      {movies.map((m: MovieEntry) => (
        <Square movie={m} />
      ))}
    </div>
  </div>
);

export default MoviesPage;
