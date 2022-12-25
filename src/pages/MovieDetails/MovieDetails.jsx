import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { getGenres } from 'utils/getGenres';
import { Loader } from 'components/Loader';

export const MovieDetails = () => {
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

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {detailsMovie && (
        <div>
          <img
            src={IMAGE_URL + detailsMovie.poster_path}
            alt={detailsMovie.title}
          />
          <h2>
            {detailsMovie.title}(
            {new Date(detailsMovie.release_date).getFullYear()})
          </h2>

          <p>User Score:{detailsMovie.vote_average.toFixed(1)} </p>
          <p>Overview:{detailsMovie.overview}</p>
          <p>
            Ganres:
            {getGenres(detailsMovie.genres)}
          </p>
        </div>
      )}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
