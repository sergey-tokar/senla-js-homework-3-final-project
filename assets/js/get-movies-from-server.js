export default async function getMoviesFromServer(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.results;
    } catch (error) {
        console.log(error);
    }
}
