export default {
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
}