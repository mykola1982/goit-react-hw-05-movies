import PropTypes from 'prop-types';

import { IMAGE_URL } from 'api/tmdbAPI';
import { Link } from 'react-router-dom';

import { Item, Raiting, Title, Release, Img } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const { id, vote_average, poster_path, title, release_date } = movie;

  return (
    <Item>
      <Link to={`/movies/${id}`}>
        <Raiting> {vote_average.toFixed(1)}</Raiting>
        <Img src={IMAGE_URL + poster_path} alt={title} />
        <Title> {title} </Title>
        <Release> {new Date(release_date).getFullYear()} </Release>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
