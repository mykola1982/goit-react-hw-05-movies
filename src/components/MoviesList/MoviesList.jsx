import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem';

import { List } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} location={location} />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
  location: PropTypes.object,
};
