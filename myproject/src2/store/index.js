import Vue from 'vue'
import Vuex from 'vuex';
import countOption from './count';
import personOption from './person';

Vue.use(Vuex)
// 响应动作的actions


//创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption
    }
})