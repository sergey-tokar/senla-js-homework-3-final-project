import getMoviesFromServer from "./get-movies-from-server.js";
import renderMovieCard from "./render-movie-card.js";
import clearMovieList from "./clear-movie-list.js";

export default async function renderMovieList(url) {
    const movies = await getMoviesFromServer(url);
    const movieList = document.querySelector('.movie-list');
    clearMovieList(movieList);
    movies.map(async (movie) => {
        const movieCard = await renderMovieCard(movie);
        movieList.appendChild(movieCard);
    });
    window.scrollTo(0,0);
}
