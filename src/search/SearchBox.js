import { TextField, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import {searchMovies} from '../shared/API'
import AddIcon from '@material-ui/icons/Add'


import styles from './SearchBox.module.css';

const MovieList = (props) => {
    return (
        <ol className={styles.cards}>
          {props.movies.map((movie) => (
             <Grid item xs={3}>
             <Card variant="outlined">
             <CardContent className={styles.content}>
             <li className={styles.listItem} key={movie.id}>
              
              <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt='logo' />
              
              <Typography variant="h5" >
             
                <div><b>{movie.title}</b></div> 
              </Typography>
              <Typography variant="h6">  
                <div><b>Release: </b>
                {movie.release_date}</div>
                
                <b>Rating:</b>
                {movie.vote_average}
                </Typography>
              <Button className={styles.addMovie}
              color="secondary" 
              onClick={(e) => {
                e.preventDefault()
                props.onMovieAdd(movie)
              }}>
                <AddIcon />Add Movie
                </Button>
            </li>
            </CardContent>
      </Card>
      </Grid>
          ))}
        </ol>
       
    )
    
  }
  const SearchBox = (props) => {
    const [term, setTerm] = useState('')
    const [movies, setMovies] = useState([])

    const localMovieAdd = (movie) => {
      setMovies([])
      props.onMovieAdd(movie)
    }
    return (
      <div className={styles.main}>
        <TextField
          size="small"
          label="Search for a movie"
          variant="outlined"
          color="primary"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value)
          }}
          onKeyDown={(e) => {
             return ((e.key === 'Enter') ? 
              searchMovies(term).then((res) => setMovies(res.data.results)) : null)
              
            }
          }
        />
        <div className={styles.box}>
        <Button
        size="medium"
        variant="contained"
        color="primary"
          onClick={() =>
            searchMovies(term).then((res) => setMovies(res.data.results))
          }>
          Search
        </Button>
        <MovieList movies={movies} onMovieAdd={localMovieAdd} />
      </div>
</div>
    )
  }
  

export default SearchBox;