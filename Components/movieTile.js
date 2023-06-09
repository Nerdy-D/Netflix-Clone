Vue.component('movie-tile', {
    props: ['id', 'name', 'image', 'description', 'released', 'coming_soon', 'genre', 'preview', 'show-add', 'show-remove'],
    template: `
    <div class="movie-tile">
    <img v-bind:src="image" width="350px" height="450px">
    <h3 class="name">
    {{name}}
    </h3>
    <p class="description">{{description}}</p>
    <a><p class="released">{{released}}</p>
    <p class="genre">{{genre}}</p>
    <p class="id">{{id}}</p></a>
    <a v-bind:href="preview"><input type="button" value="Preview"></a>
    <button v-if="showAdd" v-on:click="$emit('add-to-watch-list')">Add</button>
    <button v-if="showRemove" v-on:click="$emit('remove-from-watch-list')">Remove</button>
    </div>`,
});