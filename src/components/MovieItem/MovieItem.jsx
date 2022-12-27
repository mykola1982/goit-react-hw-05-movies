import PropTypes from 'prop-types';

import { IMAGE_URL } from 'api/tmdbAPI';
import { Link } from 'react-router-dom';

import { Item, Raiting, Title, Release, Img } from './MovieItem.styled';

export const MovieItem = ({ movie, location }) => {
  const { id, vote_average, poster_path, title, release_date } = movie;

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Raiting> {vote_average.toFixed(1)}</Raiting>
        <Img
          src={
            poster_path
              ? IMAGE_URL + poster_path
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={title}
        />
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
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object,
};
