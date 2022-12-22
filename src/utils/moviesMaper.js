export const moviesMaper = movies => {
  return movies.map(
    ({ id, vote_average, poster_path, title, release_date }) => ({
      id,
      vote_average,
      poster_path,
      title,
      release_date,
    })
  );
};
