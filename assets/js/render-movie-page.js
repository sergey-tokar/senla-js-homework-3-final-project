export default function renderMoviePage(currentMovie) {
    const movieFullCard = document.createElement('div');
    movieFullCard.className = 'movie-full-card';

    const movieFullCardPoster = document.createElement('img');
    movieFullCardPoster.className = 'movie-full-card__poster';
    movieFullCardPoster.src = currentMovie.poster_path ? 'https://image.tmdb.org/t/p/w300' + currentMovie.poster_path : './assets/images/no-poster.png';
    movieFullCardPoster.alt = `Постер фильма ${currentMovie.title}`;

    const movieFullCardTitle = document.createElement('p');
    movieFullCardTitle.className = 'movie-full-card__title';
    movieFullCardTitle.textContent = currentMovie.title;

    const movieFullCardGenres = document.createElement('ul');
    movieFullCardGenres.className = 'movie-full-card__genres';
    currentMovie.genres.forEach( genre => {
        const genreElement = document.createElement('li');
        genreElement.className = 'movie-genre';
        genreElement.textContent = genre;
        movieFullCardGenres.appendChild(genreElement);
    });

    const movieFullCardReleaseDate = document.createElement('p');
    movieFullCardReleaseDate.className = 'movie-full-card__release-date';
    movieFullCardReleaseDate.textContent = `released: ${currentMovie.release_date}`;

    const movieFullCardVoteAverage = document.createElement('p');
    movieFullCardVoteAverage.className = 'movie-full-card__vote-average';
    movieFullCardVoteAverage.textContent = `rating: ${currentMovie.vote_average}`;

    const movieFullCardPopularity = document.createElement('p');
    movieFullCardPopularity.className = 'movie-full-card__popularity';
    movieFullCardPopularity.textContent = `popularity: ${currentMovie.popularity}`;

    const movieFullCardVoteCount = document.createElement('p');
    movieFullCardVoteCount.className = 'movie-full-card__vote-count';
    movieFullCardVoteCount.textContent = `votes: ${currentMovie.vote_count}`;

    const movieFullCardOverview = document.createElement('p');
    movieFullCardOverview.className = 'movie-full-card__overview';
    movieFullCardOverview.textContent = currentMovie.overview;

    movieFullCard.appendChild(movieFullCardPoster);
    movieFullCard.appendChild(movieFullCardTitle);
    movieFullCard.appendChild(movieFullCardGenres);
    movieFullCard.appendChild(movieFullCardReleaseDate);
    movieFullCard.appendChild(movieFullCardVoteAverage);
    movieFullCard.appendChild(movieFullCardPopularity);
    movieFullCard.appendChild(movieFullCardVoteCount);
    movieFullCard.appendChild(movieFullCardOverview);

    document.querySelector('main > .content-wrapper').appendChild(movieFullCard);
}
