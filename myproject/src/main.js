import app from './app.vue'
import Vue from 'vue'

new Vue({
    el: '#root',
    components: {
        app
    },
    render:h=>h(app)
})