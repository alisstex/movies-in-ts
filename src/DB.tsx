//var firebase = require("firebase");
import MovieEntry from "./MovieEntry";
import * as firebase from "firebase/app";
import "firebase/database";

export default class MoviesDB {
  // Initialize Firebase
  config = {
    apiKey: "AIzaSyCU-S_-6oSDTDE66Hew9v6l7iMCffh5t9o",
    authDomain: "movies-c0c19.firebaseapp.com",
    databaseURL: "https://movies-c0c19.firebaseio.com",
    projectId: "movies-c0c19",
    storageBucket: "movies-c0c19.appspot.com",
    messagingSenderId: "165948129054"
  };

  static app: any;
  database: any;

  constructor() {
    if (MoviesDB.app == null) {
      MoviesDB.app = firebase.initializeApp(this.config);
    }

    // Get a reference to the database service
    this.database = firebase.database();
  }

  public addMovie(movie: MovieEntry) {
    // TODO: generate actual id
    this.database.ref("movies/" + movie.title).set(movie);
  }

  public getMovies(handleMovie: (movie: MovieEntry) => void) {
    return this.database.ref("/movies/").once("value", function(snapshot: any) {
      snapshot.forEach(function(childSnapshot: any) {
        handleMovie(childSnapshot.val());
      });
    });
  }
}
