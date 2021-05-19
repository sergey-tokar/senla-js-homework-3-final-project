import saveMovieID from "./save-movie-id.js";

export default async function renderMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.id = movie.id;
    movieCard.addEventListener('click', saveMovieID);

    const movieCardFirstLink = document.createElement('div');
    movieCardFirstLink.className = 'movie-card__link';

    const movieCardSecondLink = movieCardFirstLink.cloneNode();

    const movieCardPoster = document.createElement('img');
    movieCardPoster.className = 'movie-card__poster';
    movieCardPoster.src = movie.poster_path ? 'https://image.tmdb.org/t/p/w200' + movie.poster_path : './assets/images/no-poster.png';
    movieCardPoster.alt = 'Постер фильма: ' + movie.title;

    const movieCardTitle = document.createElement('p');
    movieCardTitle.className = 'movie-card__title';
    movieCardTitle.textContent = movie.title;

    const movieCardReleaseDate = document.createElement('p');
    movieCardReleaseDate.className = 'movie-card__realise-date';
    movieCardReleaseDate.textContent = `released: ${movie.release_date}`;

    const movieCardVoteAverage = document.createElement('p');
    movieCardVoteAverage.className = 'movie-card__vote-average';
    movieCardVoteAverage.textContent = `rating: ${movie.vote_average}`;

    movieCardFirstLink.appendChild(movieCardPoster);
    movieCardSecondLink.appendChild(movieCardTitle);

    movieCard.appendChild(movieCardFirstLink);
    movieCard.appendChild(movieCardSecondLink);
    movieCard.appendChild(movieCardReleaseDate);
    movieCard.appendChild(movieCardVoteAverage);

    return movieCard;
}
