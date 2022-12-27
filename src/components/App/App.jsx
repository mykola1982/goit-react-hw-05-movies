import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { MovieDetails } from '../../pages/MovieDetails';
import { NotFound } from '../../pages/NotFound';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews';
import { SharedLoyout } from 'components/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLoyout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
