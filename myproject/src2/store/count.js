export default {

    namespaced: true,
    actions: {
        oddjia(context, value) {
            if (context.state.sum % 2) {
                context.commit('ODDJIA', value);
            }
        },
        waitjia(context, value) {
            setTimeout(() => {
                context.commit('WAITJIAN', value);
            }, 500);
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
        ODDJIA(state, value) {
            state.sum += value
        },
        WAITJIAN(state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        school: '佛山大学',
        subject: '前端',
    },
    getters: {
        bigsum(state) {
            return state.sum * 10
        }
    }

}