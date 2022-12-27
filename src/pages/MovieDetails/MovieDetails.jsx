import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { getGenres } from 'utils/getGenres';
import { Loader } from 'components/Loader';

import {
  Section,
  Img,
  WrapDetails,
  Title,
  Text,
  AddInformation,
  StyledLink,
  List,
  Item,
  StyledLinkBack,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setIsLoading(true);

        const movie = await API.fetchDetailsMovie(movieId);
        setDetailsMovie(movie);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }
    getDetailsMovie();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}

      {detailsMovie && (
        <>
          <StyledLinkBack to={backLinkHref}>
            <FiChevronLeft size="24" />
            Go back
          </StyledLinkBack>
          <Section>
            <Img
              src={
                detailsMovie.poster_path
                  ? IMAGE_URL + detailsMovie.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={detailsMovie.title}
              width="250"
            />
            <WrapDetails>
              <Title>
                {detailsMovie.title}(
                {new Date(detailsMovie.release_date).getFullYear()})
              </Title>

              <Text>
                <b>User Score: </b>
                {detailsMovie.vote_average.toFixed(1)}
              </Text>
              <Text>
                <b>Overview: </b>
                {detailsMovie.overview}
              </Text>
              <Text>
                <b> Ganres: </b>
                {getGenres(detailsMovie.genres)}
              </Text>
            </WrapDetails>
          </Section>
          <AddInformation>
            <Title>Additional information</Title>
            <List>
              <Item>
                <StyledLink to="reviews">Reviews</StyledLink>
              </Item>
              <Item>
                <StyledLink to="cast">Cast</StyledLink>
              </Item>
            </List>
          </AddInformation>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
