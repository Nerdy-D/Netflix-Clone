Vue.component('movie-tile', {
    props: ['name', 'image', 'description', 'release_date'],
    template: `
    <div class="movie-tile">
    <img v-bind:src="image" width="200px">
    <h3 class="name">
    {{name}}
    </h3>
    <p class="description">{{description}}</p>
    <h4>{{release_date}}</h4>
    </div>`,
});