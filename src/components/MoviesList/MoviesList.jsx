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
