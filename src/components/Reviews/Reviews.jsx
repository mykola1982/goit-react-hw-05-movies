import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api/tmdbAPI';
import { reviewsMaper } from 'utils/reviewsMaper';
import { Loader } from 'components/Loader';

import { Section, Item, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        setIsLoading(true);
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
        <Section>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <h3>
                  <b>Author: </b> {author}
                </h3>
                <Text>{content}</Text>
              </Item>
            ))}
          </ul>
        </Section>
      ) : (
        <Text>No comments have been left yet...</Text>
      )}
    </>
  );
};

export default Reviews;
