export default {
    namespaced:true,
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        },
    },
    state: {
        personList: [{
            id: 1,
            name: "zhangsan"
        }]
    },
    actions:{},
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}
