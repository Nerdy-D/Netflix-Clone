Vue.component('movie-tile', {
    props: ['title', 'img'],
    template: `
    <div class="movie-tile">
    <img v-bind:src="img" width="250px" height="350px">
        <div class="title">
        {{title}}
        </div>
    </div>`
    ,
});