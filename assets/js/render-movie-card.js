export default async function renderMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    const posterPath = movie.poster_path ? 'https://image.tmdb.org/t/p/w200' + movie.poster_path : './assets/images/no-poster.png';
    const movieCardContent = `<a class="movie-card__link" href="./movie.html">` +
        `                        <img class="movie-card__poster" src="${posterPath}" alt="movie-poster">` +
        `                    </a>` +
        `                    <a class="movie-card__link" href="./movie.html">` +
        `                        <p class="movie-card__title">${movie.title}</p>` +
        `                    </a>` +
        `                    <p class="movie-card__realise-date">realised: ${movie.release_date}</p>` +
        `                    <p class="movie-card__rating">rating: ${movie.vote_average}</p>`

    movieCard.insertAdjacentHTML ('beforeend', movieCardContent);
    return movieCard;
}
