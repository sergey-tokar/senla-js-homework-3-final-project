import creatFullMovieObject from "./creat-full-movie-object.js";
import getGenresFromServer from "./get-genres-from-server.js";
import {api} from "./api.js";
import renderMoviePage from "./render-movie-page.js";


await getGenresFromServer(api.genres.currentRequestUrl);
let currentMovie = await creatFullMovieObject(JSON.parse(localStorage.getItem('movieId')));
renderMoviePage(currentMovie);
