var app = new Vue({
    el: '#myVueApp',
    data: {
        userName: "test",
        movies: [
            {
                id: "50_First_s",
                name: "50 First Dates",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs1e2GnJ1cYFTBD9lIHPKF0idkYpkS4GMgJci0HNTpS3ksC_V_',
                description: "Henry, a young vet, falls in love with Lucy, a local girl with a peculiar condition, and must find new ways to win her over.",
                released: "13 February 2004",
                comingSoon: true,
                genre: "Romance",
                preview: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',

            },
            {
                id: "Toy_Story",
                name: "Toy Story",
                image: 'https://s.abcnews.com/images/Social_Climber/AP_toy_story_ml_141107_16x9_1600.jpg',
                description: " Toys come alive",
                released: "1 January 1995",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=CxwTLktovTU',

            },
            {
                id: "Toy_Story_2",
                name: "Toy Story 2",
                image: 'https://lumiere-a.akamaihd.net/v1/images/p_toystory2_19639_4eca9113.jpeg?region=0%2C0%2C540%2C810',
                description: " When Woody is kidnapped by a greedy toy collector and is nowhere to be found, Buzz and his friends set out to rescue him. However, Woody gets tempted by the idea of becoming immortal in a museum.",
                released: "24 November 1999",
                comingSoon: false,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=xNWSGRD5CzU',

            },
            {
                id: "Toy_Story_3",
                name: "Toy Story 3",
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWBwBL2qotJhEhaHN7xyDakLxVctlWhGk_VifuQZRrf04Jg-Od',
                description: " Before Andy leaves for college, his toys are mistakenly delivered to a day care centre. Woody convinces the other toys that they were not dumped and leads them on an expedition back home.",
                released: "18 June 2010",
                comingSoon: true,
                genre: "animation",
                preview: 'https://www.youtube.com/watch?v=JcpWXaA2qeg',

            },
            {
                id: "World_Cup_Movie",
                name: "World Cup Movie",
                image: 'https://energy.danube-region.eu/wp-content/uploads/sites/6/sites/6/2019/09/the-2014-fifa-world-cup-in-brasil-12-june-13-july-2014_120_1-1080x720.jpg',
                description: " goal",
                released: "12 June 2014",
                comingSoon: false,
                genre: "reality",
                preview: 'https://www.youtube.com/watch?v=OUhE_FaJRqY',

            },
            {
                id: "Fast_And_The_Furious",
                name: "Fast X",
                image: 'https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg',
                description: " Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves ",
                released: "19 May 2023",
                comingSoon: true,
                genre: "action",
                preview: 'https://www.youtube.com/watch?v=32RAq6JzY-w',

            },
            {
                id: "Die_Hard",
                name: "Die Hard",
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRagI3FRZIH6bs2V3gw3hCWorUfc-JvImrRQXSYQy_ZF-o2a_PK',
                description: "Hoping to spend Christmas with his estranged wife, detective John McClane arrives in LA. However, he learns about a hostage situation in an office building and his wife is one of the hostages.",
                released: "22 July 1988",
                comingSoon: true,
                genre: "action",
                preview: 'https://www.youtube.com/watch?v=jaJuwKCmJbY',

            },
            {
                id: "Murder_Mystery",
                name: "Murder Mystery",
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6h_VXeK7DiNWYclDGv3WzZspW5PSAjj1A7VSRlpzG8R9W9xT-',
                description: " A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
                released: " 14 June 2019",
                comingSoon: true,
                genre: "comedy",
                preview: 'https://www.youtube.com/watch?v=5YEVQDr2f3Q',

            },
            {
                id: "Murder_Mystery_2",
                name: "Murder Mystery 2",
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLU_lKE_Ksz52WWSktzgRbAPKsxmTbAFfJ4QMiewUHdGaMl2Bm',
                description: " Now private detectives launching their own agency, Nick and Audrey Spitz land at the centre of an international investigation when a friend is abducted.",
                released: "24 March 2023",
                comingSoon: true,
                genre: "comedy",
                preview: 'https://www.youtube.com/watch?v=LM2F56uK0fs',

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