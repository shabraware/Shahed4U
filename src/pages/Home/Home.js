import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movies-actions';
import { fetchSeries } from '../../redux/series-actions';
import MoviesList from '../../components/MoviesList/MoviesList';
import Heading1 from '../../components/UI/Headings/Heading1';
import Margin from '../../components/UI/Utilities/Margin';
const Home = () => {
  const dispatch = useDispatch();
  const movieQuery = 'Harry';
  const seriesQuery = 'Friends';
  useEffect(() => {
    dispatch(fetchMovies(movieQuery));
    dispatch(fetchSeries(seriesQuery));
  }, [dispatch]);
  const movies = useSelector((state) => state.movies.movies);
  const series = useSelector((state) => state.series.series);
  return (
    <Fragment>
      <Heading1 text="Movies" />
      <MoviesList list={movies} />
      <Margin dir="buttom" />
      <Heading1 text="Series" />
      <MoviesList list={series} />
    </Fragment>
  );
};
export default Home;
