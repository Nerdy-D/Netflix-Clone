Vue.component('movie-tile', {
    props: ['id', 'name', 'image', 'description', 'release_date', 'coming_soon', 'genre', 'preview'],
    template: `
    <div class="movie-tile">
    <img v-bind:src="image" width="200px">
    <h3 class="name">
    {{name}}
    </h3>
    <p class="description">{{description}}</p>
    <p class="rdate">{{release_date}}</p>
    <p class="coming_soon">{{coming_soon}}</p>
    <p class="genre">{{genre}}</p>
    <p class="id">{{id}}</p>
    <a v-bind:href="preview"><input type="button" value="Preview"></a>
    <a href><input type="button" value="Add To Watch List"></a>
    </div>`,
});