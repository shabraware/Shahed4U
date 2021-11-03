import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MovieCard.module.css';
const MovieCard = ({ data }) => {
  return (
    <figure className={classes.movie}>
      <Link to={`/movie/${data.imdbID}`}>
        <img src={data.Poster} alt={data.Title} />
        <figcaption>
          <h3>{data.Title}</h3>
          <div>{data.Year}</div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default MovieCard;
