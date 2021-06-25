export default {
    cnum(state) {
        state.num = 99;
    },

    sub(state) {
        state.dnum -= step;
    },
    add(state) {
        state.dnum += step;
    },
    sub2(state, step) {
        state.dnum -= step;
    },
    add2(state, step) {
        state.dnum += step;
    },
    sub3(state, payload) {
        state.dnum -= payload.step + payload.num;
    },
    add3(state, payload) {
        state.dnum += payload.step + payload.num;
    },
    setname(state, payload) {
        state.num = payload;
    }
}