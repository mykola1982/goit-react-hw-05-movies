import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { castMaper } from 'utils/castMaper';
import { Loader } from 'components/Loader';

import { Section, Item, Img, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCreditsMovies() {
      try {
        setIsLoading(true);
        const credits = await API.fetchCreditsMovies(movieId);
        const cast = castMaper(credits.cast);
        setCast(cast);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }
    getCreditsMovies();
  }, [movieId]);

  return (
    <Section>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <Img
                src={
                  profile_path
                    ? IMAGE_URL + profile_path
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={name}
              />
              <Text>
                <b>Character: </b>
                {character}
              </Text>
              <Text>
                <b>Actor name: </b> {name}
              </Text>
            </Item>
          ))}
        </ul>
      ) : (
        <Text>No cast information available</Text>
      )}
    </Section>
  );
};

export default Cast;
