import React from 'react';
import Card from '../MovieCard/MovieCard';
import classes from './MoviesList.module.css';
const MovieList = ({ list }) => {
  return (
    <section className={classes.movies}>
      {list.map((movie, index) => (
        <Card key={index} data={movie} />
      ))}
    </section>
  );
};

export default MovieList;
