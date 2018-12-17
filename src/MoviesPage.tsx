import * as React from "react";
import "./styles.css";
import MovieEntry from "./MovieEntry";
import Square from "./Square";
//import movies from "./Movies";
import AddMovieComponent from "./AddMovieComponent";
import MoviesDB from "./DB";
import MovieEdit from "./MovieEdit";

class MoviesPage extends React.Component {
  state = { editing: false, adding: false, movies: [] };

  public componentDidMount() {
    const db = new MoviesDB();
    db.getMovies(movie =>
      this.setState({
        ...this.state,
        movies: [movie, ...this.state.movies]
      })
    );
  }

  addButton = (
    <button
      className="moviesAddButton"
      onClick={event => {
        this.setState({ ...this.state, adding: true });
      }}
    >
      Add...
    </button>
  );

  editButton = (
    <button
      className="moviesAddButton"
      onClick={event => {
        this.setState({ ...this.state, editing: !this.state.editing });
      }}
    >
      Edit
    </button>
  );

  addInput = (
    <AddMovieComponent
      onAdd={
        movie =>
          this.setState({
            adding: false,
            movies: [movie, ...this.state.movies]
          })
      }
    />
  );

  getAddingComponent = () =>
    this.state.adding ? this.addInput : this.addButton;

  public render() {
    return (
      <div className="App">
        {this.getAddingComponent()}
        {this.editButton}
        <div className="moviesgrid">
          {this.state.movies.map((m: MovieEntry) => (
            this.state.editing ? <MovieEdit key={m.title} movie={m} /> : <Square key={m.title} movie={m} />
          ))}
        </div>
      </div>
    );
  }

  addMovie(event: React.MouseEvent<HTMLButtonElement>) {
    global.console.log("here");
    this.setState({ adding: true });
  }
}

export default MoviesPage;
