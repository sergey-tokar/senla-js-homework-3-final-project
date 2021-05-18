import getMoviesFromServer from "./get-movies-from-server.js";
import renderMovieCard from "./render-movie-card.js";

export default async function renderMovieList(url) {
    const movies = await getMoviesFromServer(url);
    const movieList = document.querySelector('.movie-list');
    movies.forEach(async (movie) => {
        const movieCard = await renderMovieCard(movie);
        movieList.appendChild(movieCard);
    })
}
