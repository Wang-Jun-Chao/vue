import {createStore} from 'vuex'

export default createStore({
    state: {
        num: 0,
        dnum: 0,
    },
    mutations: {
        sub(state) {
            state.dnum--;
        },
        add(state) {
            state.dnum++;
        }
    },
    actions: {},
    modules: {}
})
