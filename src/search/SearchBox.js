import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { searchMovies } from "../shared/API";
import styles from "../search/SearchBox.module.css";
import Card from "../Card/Card";
import Movie from "../Movie/Movie";
import "../Movie/MovieList.scss";
import { Breakpoint } from "react-socks";

const MovieList = (props) => {
  const movieInfo = props.movies.map((movie) => {
    return movie.poster_path != null ? (
      <Card key={movie.id} movieId={movie.id}>
        <Movie
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
          released={movie.release_date}
          details={movie}
          onMovieAdd={props.onMovieAdd}
        />
      </Card>
    ) : null;
  });
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
