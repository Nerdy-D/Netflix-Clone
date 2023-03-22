var app = new Vue({
    el: '#myVueApp',
    data: {
        userName: "test",
        watchlist: [],
        movies: [
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: true,
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "01",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "riviwo riwv iwrjv0rj v0w0v8 rwv80j wr08v",
                release_date: "13 February 2004",
                comingSoon: "",
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },

        ],



    },
    created: function () {
        this.userName = localStorage.getItem("username");
        // `this` points to the vm instance
        console.log('username is: ' + this.userName);
    },
    methods: {
        onAddToWatchlist: function (movie) {
            this.watchlist.push(movie);
            function saveMovie() {
                var jsonMovie = JSON.stringify(movie)
                localStorage.setItem("movies", jsonMovie)
            }

        },
        onRemoveItem: function (movie) {
            const index = this.watchlist.indexOf(movie);
            if (index > -1) {
                this.watchlist.splice(index, 1);
            }
        },
    },

})
