import React from "react";
import "./App.css";

import Header from "./shared/Header";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./savedMovies/SavedMovies";
import PopularMovies from "./popular/PopularMovies";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
class App extends React.Component {
  // state = {
  //   savedMovies: []
  // }
  constructor(props) {
    super(props);
    const movies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,
        isDialogOpen: false,
      };
    } else {
      this.state = {
        movies: [],
      };
    }
  }

  checkMovie = (movie) => {
    const localKey = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (localKey) {
      if (localKey.some((item) => item.id === movie.id)) {
        this.handleDialogOpen();
        setTimeout(() => this.handleDialogClose(), 1500);
      } else {
        this.handleAddMovie(movie);
      }
    } else {
      this.handleAddMovie(movie);
    }
  };

  handleDialogClose() {
    this.setState({
      isDialogOpen: false,
    });
  }

  handleDialogOpen() {
    this.setState({
      isDialogOpen: true,
    });
  }

  handleAddMovie = (movie) => {
    const movies = this.state.movies;
    this.setState(
      {
        movies: [...movies, movie],
        isDialogOpen: false,
      },
      () => {
        this.handleDialogOpen();
        setTimeout(() => this.handleDialogClose(), 1500);
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
      }
    );
  };

  handleDeleteMovie = (movieId) => {
    const index = this.state.movies.findIndex((movie) => movie.id === movieId);
    this.setState(
      {
        movies: this.state.movies.filter((item) => item.id !== movieId),
      },
      () => {
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.checkMovie} />
        <PopularMovies onMovieAdd={this.checkMovie} />
        <SavedMovies
          savedMovies={this.state.movies}
          onMovieDelete={this.handleDeleteMovie}
        />
        <Dialog
          open={this.state.isDialogOpen}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Movie has been added / Movie already in Favorites
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default App;
