import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../search/SearchBox.module.css";
import Card from "../Card/Card";
import Movie from "../Movie/Movie";
import "../Movie/MovieList.scss";
import { Breakpoint } from "react-socks";
import { Translation } from "react-i18next";

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

  console.log(movies);
  return (
    <div>
      <Translation>
        {(t) => <h1 className={styles.title}>{t("Popular Movies")}</h1>}
      </Translation>
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
