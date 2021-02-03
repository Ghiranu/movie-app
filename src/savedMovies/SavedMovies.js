import React from "react";
import { Button } from "@material-ui/core";
import styles from "../search/SearchBox.module.css";
import Rating from "../rating/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "../Card/Card";
import "../Movie/MovieList.scss";
import { Breakpoint } from "react-socks";

const MovieItem = (props) => {
  const movie = props.movie;
  const movieInfo = (
    <Card key={movie.id} movieId={movie.id}>
      <Breakpoint medium up>
        <div className="movie-component">
          {movie.poster_path && (
            <img
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt="movie poster"
              className="movie-poster"
            />
          )}
          <div className="movie-details">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-overview">
              <strong>Synopsis:</strong> {movie.overview}
            </p>
            <p className="movie-released">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <Button
              className={styles.delete}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => props.onMovieDelete(movie.id)}
            >
              Delete
            </Button>
            <div className={styles.rating}>
              <Rating movie={movie} />
            </div>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="movie-component-mobile">
          <h1 className="movie-title">{movie.title}</h1>
          {movie.poster_path && (
            <img
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt="movie poster"
              className="movie-poster"
            />
          )}
          <div className="movie-details">
            <p className="movie-overview">
              <strong>Synopsis:</strong> {movie.overview}
            </p>
            <p className="movie-released">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <Button
              className={styles.delete}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => props.onMovieDelete(movie.id)}
            >
              Delete
            </Button>
            <div className={styles.rating}>
              <Rating movie={movie} />
            </div>
          </div>
        </div>
      </Breakpoint>
    </Card>
  );
  return (
    <div>
      <Breakpoint medium up>
        <div className="movie-list">{movieInfo}</div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="movie-list-mobile">{movieInfo}</div>
      </Breakpoint>
    </div>
  );
};

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <div>
          <h1 className={styles.title}>Saved movies</h1>
          {props.savedMovies.map((movie) => (
            <MovieItem
              movie={movie}
              onMovieDelete={props.onMovieDelete}
              key={movie.id}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SavedMovies;
