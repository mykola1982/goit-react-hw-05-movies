// import * as API from '../../api/tmdbAPI';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { MovieDetails } from '../../pages/MovieDetails';
import { NotFound } from '../../pages/NotFound';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews';
import { SharedLoyout } from 'components/SharedLayout';

export const App = () => {
  // async function getSearchMovies() {
  //   try {
  //     const movies = await API.fetchSearchMovies('cat', '1');
  //     console.log(movies);
  //   } catch (error) {}
  // }

  // async function fetchReviewsMovie() {
  //   try {
  //     const revievs = await API.fetchReviewsMovie(26503, 1);
  //     console.log(revievs);
  //   } catch (error) {}
  // }

  // getSearchMovies();
  // getCreditsMovies();
  // fetchReviewsMovie();
  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
