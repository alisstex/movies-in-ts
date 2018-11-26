import * as React from "react";
import MovieEntry from "./MovieEntry";
import StarRatings from "react-star-ratings";

const Rating = (props: { rating: number }) => {
  return (
    <StarRatings
      name="rate1"
      numberOfStars={5}
      rating={props.rating}
      starRatedColor="blue"
      starDimension="20px"
      starSpacing="2px"
    />
  );
};

const Square = (props: { movie: MovieEntry }) => {
  return (
    <div className="square">
      <div className="movietitle">{props.movie.title}</div>
      <div className="moviedesc">{props.movie.desc}</div>
      <div className="movieRating">
        <Rating rating={props.movie.rating} />
      </div>
    </div>
  );
};

export default Square;
