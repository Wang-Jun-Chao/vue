import {createStore} from 'vuex'

export default createStore({
    state: {
        num: 0,
        dnum: 0,
        cartlist: [
            {name: 'a', price: 10},
            {name: 'b', price: 20},
            {name: 'c', price: 30},
            {name: 'd', price: 40},
            {name: 'e', price: 50},
            {name: 'f', price: 60},
            {name: 'g', price: 70},
        ]
    },
    getters: {
        vxpownum(state) {
            return state.num * state.num;
        },
        // totalprice(state) {
        //     return state.cartlist.reduce((s, n) => s + n.price, 0)
        // },
        goodsgt(state) {
            return state.cartlist.filter(n => n.price > 30);
        },
        // totalprice(state, getters) {
        //     return getters.goodsgt.reduce((s, n) => s + n.price, 0)
        // },

        goodsself(state, getters) {
            return function (price) {
                return state.cartlist.filter(n => n.price > price);
            }
            // return state.cartlist.filter(n => n.price > " 30");
        },
        totalprice(state, getters) {
            return getters.goodsgt.reduce((s, n) => s + n.price, 0)
        },
    },

    mutations: {
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
        }
    },
    actions: {},
    modules: {}
})
