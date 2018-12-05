import * as React from "react";
import "./styles.css";
import MovieEntry from "./MovieEntry";
import Square from "./Square";
import movies from "./Movies";
import AddMovieComponent from "./AddMovieComponent";

class MoviesPage extends React.Component {
  state = { adding: false, movies: movies };

  addButton = (
    <button
      className="moviesAddButton"
      onClick={event => {
        global.console.log("click add");
        this.setState({ ...this.state, adding: true });
      }}
    >
      Add...
    </button>
  );

  addInput = (
    <AddMovieComponent
      onAdd={movie =>
        this.setState({ adding: false, movies: [movie, ...this.state.movies] })
      }
    />
  );

  getAddingComponent = () =>
    this.state.adding ? this.addInput : this.addButton;

  public render() {
    return (
      <div className="App">
        {this.getAddingComponent()}
        <div className="moviesgrid">
          {this.state.movies.map((m: MovieEntry) => (
            <Square key={m.title} movie={m} />
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
