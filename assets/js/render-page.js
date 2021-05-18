import {api} from "./api.js";
import renderMovieList from "./render-movie-list.js";
import renderPagination from "./render-pagination.js";

export default function renderPage(page) {
    api.page = page;
    renderMovieList(api.currentRequestUrl);
    renderPagination(page);
}
