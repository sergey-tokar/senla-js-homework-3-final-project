export default function saveMovieID(event) {
    let id;
    if (event.target.id) {
        id = event.target.id;
    } else if (event.target.parentElement.id) {
        id = event.target.parentElement.id;
    } else {
        id = event.target.parentElement.parentElement.id;
    }
    localStorage.setItem('movieId', JSON.stringify(+id));
    document.location.href ='./movie.html';
}
