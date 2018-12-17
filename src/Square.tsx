import * as React from "react";
import MovieEntry from "./MovieEntry";
import StarRatings from "react-star-ratings";
import MoviesDB from "./DB";

class Rating extends React.Component<{ movieId: string, rating: number }, { rating: number }> {
  constructor(props) {
    super(props);
    this.state = { rating: props.rating };
  }

  render() {
    return (
      <StarRatings
        name="rate1"
        numberOfStars={5}
        rating={this.state.rating}
        starRatedColor="blue"
        starDimension="20px"
        starSpacing="2px"
        changeRating={(newRating, name) => {
          this.setState({ rating: newRating });
          const db = new MoviesDB();
          db.setRating(this.props.movieId, newRating);
        }}
        style={{cursor: 'pointer'}}
      />
    );
  }
}

const Square = (props: { movie: MovieEntry }) => {
  return (
    <div className="square">
      <div className="movietitle">{props.movie.title}</div>
      <div className="moviedesc">{props.movie.desc}</div>
      <div className="movieRating">
        <Rating rating={props.movie.rating} movieId={props.movie.title} />
      </div>
    </div>
  );
};

export default Square;
