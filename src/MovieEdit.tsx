import * as React from "react";
import MovieEntry from "./MovieEntry";
import StarRatings from "react-star-ratings";
import MoviesDB from "./DB";

const MovieEdit = (props: { movie: MovieEntry }) => {
  return (
    <div className="square">
      Title: <input defaultValue={props.movie.title} /><br />
      Description: <input defaultValue={props.movie.desc} /><br />
      Link: <input defaultValue={props.movie.link} /><br />
      Rating: <input defaultValue={props.movie.rating.toString()} /><br />
    </div>
  );
};

export default MovieEdit;
