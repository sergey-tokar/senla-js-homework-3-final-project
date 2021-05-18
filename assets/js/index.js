import renderMovieList from "./render-movie-list.js";
import {api} from "./api.js";
import setPage from "./set-page.js";

renderMovieList(api.currentRequestUrl);
document.querySelector('.pagination').addEventListener('click', setPage);
