import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../search/SearchBox.module.css";

const useStateWithLocalStorage = (local) => {
  const [rating, setRating] = useState(localStorage.getItem(local) || null);

  useEffect(() => {
    localStorage.setItem(local, rating);
  }, [rating, local]);

  return [rating, setRating];
};

const Rating = (props) => {
  const [rating, setRating] = useStateWithLocalStorage(props.movie.id);
  const [hover, setHover] = useState(null);

  const setRatings = (event) => setRating(event.target.value);

  return (
    <div className="App">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={setRatings}
            />
            <FaStar
              className={styles.star}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
