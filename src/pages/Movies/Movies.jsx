import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
import { moviesMaper } from 'utils/moviesMaper';

import { Loader } from '../../components/Loader/Loader';
import * as API from '../../api/tmdbAPI';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getSearchMovies() {
      try {
        setIsLoading(true);
        const { results } = await API.fetchSearchMovies(searchQuery);
        const movies = moviesMaper(results);
        setSearchMovies(movies);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getSearchMovies();
  }, [searchQuery]);

  const handelSubmitForm = velue => {
    setSearchParams(velue !== '' ? { query: velue.toLowerCase() } : {});
  };

  return (
    <main>
      <SearchBox onSubmit={handelSubmitForm} velue={searchQuery} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {searchMovies?.length > 0 && <MoviesList movies={searchMovies} />}
    </main>
  );
};
