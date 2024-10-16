import axios from 'axios';

const API_KEY = '9b7bcbed';
const BASE_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=9b7bcbed';

export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);

export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);

export const filterMoviesByType = (query, type, page = 1) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`);
