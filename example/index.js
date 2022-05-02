import Vue from 'vue';
import App from './app.vue';
import player from '../lib/vue-hls-ply'
Vue.use(player)
new Vue({
    el: '#app',
    render: h => h(App)
});
