export default async function getGenresFromServer(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        localStorage.setItem('genres', JSON.stringify(result.genres));
        return result.genres;
    } catch (error) {
        console.log(error);
    }
}
