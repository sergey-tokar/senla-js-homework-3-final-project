export default async function creatFullMovieObject(id) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const genres = JSON.parse(localStorage.getItem('genres'));
    let currentMovie;
    movies.forEach( (movie) => {
        if (movie.id === id){
            currentMovie = movie;
        }
    } );
    console.log(currentMovie);

    currentMovie.genres = [];

    genres.forEach((genre) => {
        if (currentMovie.genre_ids.includes(genre.id)) {
            currentMovie.genres.push(genre.name);
        }
    });

    return currentMovie;
}



