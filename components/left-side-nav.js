Vue.component('leftNav', {
    props: ['is_coming_soon', 'rating'],
    template: `
    <div class="leftNav">
    <input type="text" v-model="name" />
    </div>`,
});