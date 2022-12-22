import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { castMaper } from 'utils/castMaper';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function getCreditsMovies() {
      try {
        const credits = await API.fetchCreditsMovies(movieId);

        const cast = castMaper(credits.cast);
        setCast(cast);
      } catch (error) {}
    }
    getCreditsMovies();
  }, [movieId]);

  return (
    <>
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
