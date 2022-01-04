import app from './app.vue'
import Vue from 'vue'
import plugins from './plugins'
import store from './store'

Vue.use(plugins)


new Vue({
    el: '#root',
    components: {
        app
    },
    store,
    render: h => h(app),
    // beforeCreate() {
    //     Vue.prototype.$bus=this
    // }

})