import app from './app.vue'
import Vue from 'vue'
import plugins from './plugins'


Vue.use(plugins)


new Vue({
    el: '#root',
    components: {
        app
    },
    render:h=>h(app),
    // beforeCreate() {
    //     Vue.prototype.$bus=this
    // }

})