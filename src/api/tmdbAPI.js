import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '941391c38298a3626ffc21c5189f1c8b';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  const url = `trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchSearchMovies = async query => {
  const url = `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchDetailsMovie = async id => {
  const url = `movie/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchCreditsMovies = async id => {
  const url = `movie/${id}/credits?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchReviewsMovie = async id => {
  const url = `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data;
};
