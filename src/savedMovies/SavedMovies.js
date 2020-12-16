import React from "react";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import styles from "../search/SearchBox.module.css";
import Rating from "../rating/Rating";
import DeleteIcon from "@material-ui/icons/Delete";

const MovieItem = (props) => {
  const movie = props.movie;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent className={styles.content}>
          <li className={styles.listItem} key={movie.id}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt="logo"
            />

            <Typography variant="h5">
              <div>
                <b>{movie.title}</b>
              </div>
            </Typography>

            <Typography variant="h6">
              <div>
                <b>Release: </b>
                {movie.release_date}
              </div>

              <b>Rating:</b>
              {movie.vote_average}
            </Typography>

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
          </li>
        </CardContent>
      </Card>
    </Grid>
  );
};

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <div>
          <h1 className={styles.title}>Saved movies</h1>
          <ul className={styles.cards}>
            {props.savedMovies.map((movie) => (
              <MovieItem
                movie={movie}
                onMovieDelete={props.onMovieDelete}
                key={movie.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SavedMovies;
