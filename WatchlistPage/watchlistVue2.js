var app = new Vue({
  el: '#myVueApp',
  data: {
    userName: 'test',
    watchlist: [],
  },
  created: function () {
    this.userName = localStorage.getItem('username');

    const jsonWatchlist = localStorage.getItem('watchlistMovies');
    console.log(jsonWatchlist);
    if (jsonWatchlist) this.watchlist = JSON.parse(jsonWatchlist);
  },
  methods: {

    onRemoveItem: function (movie) {

      const index = this.watchlist.indexOf(movie);

      if (index > -1) {
        this.watchlist.splice(index, 1);
        const jsonWatchlist = JSON.stringify(this.watchlist);

        localStorage.setItem('watchlistMovies', jsonWatchlist);
      }
    },
  },
});