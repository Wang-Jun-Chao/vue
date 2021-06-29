import {createStore} from 'vuex'

export default createStore({
    state: {
        num1: 11,
        num2: 22,
    },
    getters: {
        double1(state) {
            return state.num1 * 2;
        },
        double2(state) {
            return state.num2 * 2;
        }
    },
    mutations: {
        changenum1(state, payload) {
            state.num1 = payload;
        },
        changenum2(state, payload) {
            state.num2 = payload;
        }
    },
    actions: {
        timecnum1({commit, state}) {
            setTimeout(() => {
                commit("changenum1", 44)
            }, 5000);
        },
        timecnum2({commit, state}) {
            setTimeout(() => {
                commit("changenum2", 55)
            }, 5000);
        }
    },
    modules: {}
})
