import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as API from '../../api/tmdbAPI';
import { IMAGE_URL } from 'api/tmdbAPI';
import { getGenres } from 'utils/getGenres';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [detailsMovie, setDetailsMovie] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        const movie = await API.fetchDetailsMovie(movieId);

        setDetailsMovie(movie);
        console.log(movie);
      } catch (error) {}
    }
    getDetailsMovie();
  }, [movieId]);

  return (
    <>
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
