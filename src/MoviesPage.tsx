import * as React from "react";
import "./styles.css";
import MovieEntry from "./MovieEntry";
import Square from "./Square";
import movies from "./Movies";

class MoviesPage extends React.Component {
  state = { adding: false, movies: movies, inputText: "" };

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
    <div>
      <input
        id="title_input"
        onChange={evt =>
          this.setState({ ...this.state, inputText: evt.target.value })
        }
      />
      <button
        onClick={event => {
          let newMovies = this.state.movies;
          newMovies.unshift({
            title: this.state.inputText,
            desc: "",
            link: "",
            rating: 0
          });
          this.setState({ adding: false, movies: newMovies });
        }}
      >
        OK
      </button>
    </div>
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
