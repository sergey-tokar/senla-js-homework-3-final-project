export default async function getMoviesFromServer(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        localStorage.setItem('movies', JSON.stringify(result.results));
        return result.results;
    } catch (error) {
        console.log(error);
    }
}
