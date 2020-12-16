import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../search/SearchBox.module.css";
import { Button, Card, CardContent, Typography, Grid } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const apiKey = process.env.REACT_APP_API_KEY;

const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

function PopularMovies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Popular movies of the day</h1>
      <ol className={styles.cards}>
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.id}>
            <Card variant="outlined" className={styles.root}>
              <CardContent className={styles.content}>
                <li className={styles.listItem}>
                  <img
                    src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                    alt="logo"
                  />

                  <Typography variant="h5">
                    <b>{movie.title}</b>
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
                    className={styles.addMovie}
                    color="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      props.onMovieAdd(movie);
                    }}
                  >
                    <AddIcon />
                    Add Movie
                  </Button>
                </li>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </ol>
    </div>
  );
}

export default PopularMovies;
