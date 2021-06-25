export default {
    state: {
        name: 'lmonkey',
        slogan: "abc"
    },
    actions: {
        dosome({state, commit}) {
            setTimeout(()=>{
                commit('setname', 'hello vuex22');

            }, 2000)
        }
    },
    mutations: {
        setname(state, payload) {
            state.name = payload;
        }
    },
    getters: {
        fullname(state) {
            return state.name + state.slogan
        },
        fullname2(state, getters) {
            return getters.fullname + "2222222"
        },
        fullname3(state, getters, rootState) {
            // console.log(rootState);
            // return getters.fullname + "2222222"
            return getters.fullname2 + "-" + rootState.num;
        }
    }
}