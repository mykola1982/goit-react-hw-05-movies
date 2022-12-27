export const normalizDetails = movie => {
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  return { poster_path, title, release_date, overview, genres, vote_average };
};
