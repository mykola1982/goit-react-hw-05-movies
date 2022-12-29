import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader/Loader';
import * as API from '../../api/tmdbAPI';
import { moviesMaper } from 'utils/moviesMaper';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingtMovis() {
      try {
        setIsLoading(true);
        const { results } = await API.fetchTrendingMovies();
        const movies = moviesMaper(results);
        setTrendingMovies(movies);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingtMovis();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {trendingMovies?.length > 0 && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
    </main>
  );
};

export default Home;
