import renderMovieList from "./render-movie-list.js";
import {api} from "./api.js";
import setPage from "./set-page.js";
import getMoviesFromServer from "./get-movies-from-server.js";
import renderPagination from "./render-pagination.js";


async function init() {
    const movies = await getMoviesFromServer(api.movies.currentRequestUrl);
    await renderMovieList(movies);
    await renderPagination(api.movies.page);
    document.querySelector('.pagination').addEventListener('click', setPage);
}

init();

