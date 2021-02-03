import React from "react";
import { Breakpoint } from "react-socks";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./MovieList.scss";

const movie = (props) => (
  <>
    <Breakpoint medium up>
      <div className="movie-component">
        {props.poster && (
          <img
            src={`http://image.tmdb.org/t/p/w300/${props.poster}`}
            alt="movie poster"
            className="movie-poster"
          />
        )}
        <div className="movie-details">
          <h1 className="movie-title">{props.title}</h1>
          <p className="movie-overview">
            <strong>Synopsis:</strong> {props.overview}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {props.released}
          </p>
          <div className="movie-button">
            <Button
              className="add-movie"
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                props.onMovieAdd(props.details);
              }}
            >
              <AddIcon />
              Add Movie
            </Button>
          </div>
        </div>
      </div>
    </Breakpoint>
    <Breakpoint small down>
      <div className="movie-component-mobile">
        <h1 className="movie-title">{props.title}</h1>
        {props.poster && (
          <img
            src={`http://image.tmdb.org/t/p/w300/${props.poster}`}
            alt="movie poster"
            className="movie-poster"
          />
        )}
        <div className="movie-details">
          <p className="movie-overview">
            <strong>Synopsis:</strong> {props.overview}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {props.released}
          </p>
          <div className="movie-button">
            <Button
              className="add-movie"
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                props.onMovieAdd(props.details);
              }}
            >
              <AddIcon />
              Add Movie
            </Button>
          </div>
        </div>
      </div>
    </Breakpoint>
  </>
);

export default movie;
