Vue.component('movie-tile', {
    props: ['title', 'img'],
    template: `
    <div class="movie-tile">
    <img v-bind:src="img" width="100px">
    <h3>
    {{title}}
    </h3>
    </div>`,
});