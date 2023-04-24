var app = new Vue({
    el: '#myVueApp',
    data: {
        userName: "test",
        movies: [
            {
                id: "50_First_Dates",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "It follows the story of Henry",
                releaseDate: "13 February 2004",
                comingSoon: true,
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "Toy_Story",
                name: "Toy Story",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive",
                releaseDate: "1 January 1995",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=CxwTLktovTU',

            },
            {
                id: "Toy_Story_2",
                name: "Toy Story 2",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!!",
                releaseDate: "1 January 1999",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=xNWSGRD5CzU',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: true,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "World_cup_movie",
                name: "World Cup Movie",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " goal",
                releaseDate: "1 January 2010",
                comingSoon: false,
                genre: "reality",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "fast_and_the_furious",
                name: "Fast and The Furious",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " For Family ",
                releaseDate: "1 January 2014",
                comingSoon: true,
                genre: "action",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "die_hard",
                name: "Die Hard",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Time to kill",
                releaseDate: "1 January 2000",
                comingSoon: true,
                genre: "action",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_10",
                name: "Toy Story 10",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come to fight the gang wars",
                releaseDate: "1 January 2025",
                comingSoon: true,
                genre: "documentary",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive again!!! When will they stop",
                releaseDate: "1 January 2000",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },


        ],
        watchlist: [],


    },
    computed: {

        comingSoonMovies() {
            return this.movies.filter(m => m.comingSoon == true);
        },
    },
    created: function () {
        this.userName = localStorage.getItem('username');

        const jsonWatchlist = localStorage.getItem('watchlistMovies');
        console.log(jsonWatchlist);
        if (jsonWatchlist) this.watchlist = JSON.parse(jsonWatchlist);
    },

    methods: {
        onAddToWatchlist: function (movie) {

            this.watchlist.push(movie);
            const jsonWatchlist = JSON.stringify(this.watchlist);
            localStorage.setItem('watchlistMovies', jsonWatchlist);
        },
    },
});