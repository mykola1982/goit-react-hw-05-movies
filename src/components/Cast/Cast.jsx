import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { castMaper } from 'utils/castMaper';
import { Loader } from 'components/Loader';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
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
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {cast && (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img src={IMAGE_URL + profile_path} alt={name} />
              <p>{character}</p>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
