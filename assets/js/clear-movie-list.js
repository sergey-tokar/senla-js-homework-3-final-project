export default function clearMovieList() {
    const movieCardList = document.querySelectorAll('.movie-card');
    if (movieCardList.length) {
        movieCardList.forEach(movieCard => {
            movieCard.parentNode.removeChild(movieCard);
        })
    }
}
