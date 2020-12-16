import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { searchMovies } from "../shared/API";
import AddIcon from "@material-ui/icons/Add";
import styles from "./SearchBox.module.css";

const MovieList = (props) => {
  return (
    <div>
      <ol className={styles.cards}>
        {props.movies.map((movie) => {
          return movie.poster_path != null ? (
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
          ) : null;
        })}
      </ol>
    </div>
  );
};
const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(term)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err.response));
  }, [term]);

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  return (
    <div className={styles.main}>
      <TextField
        label="Search for a movie"
        size="small"
        variant="outlined"
        color="primary"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        // onKeyDown={(e) => {
        //   return e.key === "Enter"
        //     ? searchMovies(term).then((res) => setMovies(res.data.results))
        //     : null;
        // }}
      />
      <div className={styles.box}>
        {/* <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={() =>
            searchMovies(term).then((res) => setMovies(res.data.results))
          }
        >
          Search
        </Button> */}

        <MovieList movies={movies} onMovieAdd={localMovieAdd} />
      </div>
    </div>
  );
};

export default SearchBox;
