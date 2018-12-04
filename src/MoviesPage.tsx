import * as React from "react";
import "./styles.css";
import MovieEntry from "./MovieEntry";
import Square from "./Square";
import movies from "./Movies";

class MoviesPage extends React.Component {
  state = { adding: false };

  addButton = (<button className="moviesAddButton" onClick={(event) => this.addMovie(event)}>Add...</button>);
  addInput = (<div>blah</div>);
  getAddingComponent = () => this.state.adding == true ? this.addInput : this.addButton;

  public render() {
    return (
    <div className="App">
      {this.getAddingComponent()}
      <div className="moviesgrid">
        {movies.map((m: MovieEntry) => (
          <Square key={m.title} movie={m} />
        ))}
      </div>
    </div>
    );
  }

  addMovie(event: React.MouseEvent<HTMLButtonElement> ) {
    global.console.log('here');
    this.setState({ adding: true });
  }
}

export default MoviesPage;
