export let api = {
    server: 'https://api.themoviedb.org/3/discover/movie',
    apiKey: 'fd22ea5ba18819739b77c971c569ccaf',
    language: 'ru-RU',
    sortBy: 'vote_average.desc',
    includeAdult: 'false',
    includeVideo: 'false',
    page: '1',
    withWatchMonetizationTypes: 'flatrate',
    get currentRequestUrl() {
        return `${this.server}?api_key=${this.apiKey}&language=${this.language}&sort_by=${this.sortBy}&include_adult=${this.includeAdult}&include_video=${this.includeVideo}&page=${api.page}&with_watch_monetization_types=${this.withWatchMonetizationTypes}`;
    }
};

