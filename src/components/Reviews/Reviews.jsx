import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api/tmdbAPI';
import { reviewsMaper } from 'utils/reviewsMaper';
import { Loader } from 'components/Loader';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const reviews = await API.fetchReviewsMovie(movieId);
        setReviews(reviewsMaper(reviews.results));
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments have been left yet...</p>
      )}
    </>
  );
};
