import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/details-actions';
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from 'react-icons/fa';
import classes from './MovieDetails.module.css';
const MovieDetails = () => {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(movieID));
  }, [dispatch, movieID]);
  const details = useSelector((state) => state.details.details);
  console.log(details);
  return (
    <section className={classes.details}>
      <div className={classes.text}>
        <div className={classes.title}>{details.Title}</div>
        <div className={classes.rating}>
          <div>
            <span className={classes.icon}>
              <FaStar /> IMDB Rating :
            </span>
            <span>{details.Rated}</span>
          </div>
          <div>
            <span className={classes.icon}>
              <FaThumbsUp /> IMDB Votes :
            </span>
            <span>{details.imdbVotes}</span>
          </div>
          <div>
            <span className={classes.icon}>
              <FaFilm /> Runtime :
            </span>
            <span>{details.Runtime}</span>
          </div>
          <div>
            <span className={classes.icon}>
              <FaCalendar /> Year :
            </span>
            <span>{details.Released}</span>
          </div>
        </div>
        <div className={classes.plot}>{details.Plot}</div>
        <div className={classes.info}>
          <div>
            <span className={classes.icon}>Director :</span>
            <span>{details.Director}</span>
          </div>
          <div>
            <span className={classes.icon}>Writer :</span>
            <span>{details.Writer}</span>
          </div>
          <div>
            <span className={classes.icon}>Actors :</span>
            <span>{details.Actors}</span>
          </div>
          <div>
            <span className={classes.icon}>Genre :</span>
            <span>{details.Genre}</span>
          </div>
          <div>
            <span className={classes.icon}>Language :</span>
            <span>{details.Language}</span>
          </div>
          <div>
            <span className={classes.icon}>Country :</span>
            <span>{details.Country}</span>
          </div>
          <div>
            <span className={classes.icon}>Awards :</span>
            <span>{details.Awards}</span>
          </div>
        </div>
      </div>
      <div>
        <img src={details.Poster} alt={details.Title} />
      </div>
    </section>
  );
};

export default MovieDetails;
