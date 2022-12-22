import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList';
import * as API from '../../api/tmdbAPI';
import { moviesMaper } from 'utils/moviesMaper';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingtMovis() {
      try {
        const { results } = await API.fetchTrendingMovies();
        const movies = moviesMaper(results);
        setTrendingMovies(movies);
      } catch (error) {
        setError({ error });
      }
    }

    getTrendingtMovis();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {trendingMovies?.length > 0 && <MoviesList movies={trendingMovies} />}
    </main>
  );
};
