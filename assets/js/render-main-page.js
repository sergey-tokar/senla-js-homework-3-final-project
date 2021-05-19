import {api} from "./api.js";
import renderMovieList from "./render-movie-list.js";
import renderPagination from "./render-pagination.js";
import getMoviesFromServer from "./get-movies-from-server.js";

export default async function renderMainPage(page) {
    api.movies.page = page;
    const movies = await getMoviesFromServer(api.movies.currentRequestUrl);
    await renderMovieList(movies);
    renderPagination(page);
}
