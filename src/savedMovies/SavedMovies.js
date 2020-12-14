import React from "react";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import TrashIcon from '@material-ui/icons/Delete';
import styles from "../search/SearchBox.module.css";
import Rating from '../rating/Rating'

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
            
            <Button onClick={() => props.onMovieDelete(movie.id)}>
              <TrashIcon className={styles.delete}/>
            </Button>

            <Rating movie={movie}/>
          </li>
        </CardContent>
      </Card>
    </Grid>
  );
};



const SavedMovies = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Saved movies</h1>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className={styles.cards}>
          {props.savedMovies.map((movie) => 
             (
            <MovieItem movie={movie} 
            onMovieDelete={props.onMovieDelete}
            key={movie.id}
            />
          ))}
        </ul>
        
      ) : (
        "No saved movies"
      )}
    </div>
  );
};


export default SavedMovies;
