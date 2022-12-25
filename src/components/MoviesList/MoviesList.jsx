import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem';

import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
