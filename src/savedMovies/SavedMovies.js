import React from 'react'

const MovieItem = (props) => {
    const movie = props.movie
    return (<li className="movie_item">
        
    </li>)
}

const SavedMovies = (props) => {
    return (
    <div>
        {props.savedMovies 
        && props.savedMovies.length > 0 ? props.savedMovies.length + 
        ' movies saved' : "No saved movies"}
    </div>
    )
}

export default SavedMovies;