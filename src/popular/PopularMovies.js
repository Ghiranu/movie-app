import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../search/SearchBox.module.css";
import Card from "../Card/Card";
import Movie from "../Movie/Movie";
import "../Movie/MovieList.scss";
import { Breakpoint } from "react-socks";

const apiKey = process.env.REACT_APP_API_KEY;

const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

function PopularMovies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const movieInfo = movies.map((movie) => {
    return (
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
    );
  });
  return (
    <div>
      <h1 className={styles.title}>Popular movies of the day</h1>
      <Breakpoint medium up>
        <div className="movie-list">{movieInfo}</div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="movie-list-mobile">{movieInfo}</div>
      </Breakpoint>
    </div>
  );
}

export default PopularMovies;
