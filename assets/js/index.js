import renderMovieList from "./render-movie-list.js";

const sortBy = 'release_date.asc'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=${sortBy}&` +
    'include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

renderMovieList(url);
