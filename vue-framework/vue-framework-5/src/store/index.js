import {createStore} from 'vuex'
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import user from "@/store/usermodule/user";

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
    getters: getters,
    mutations:mutations,
    actions: actions,
    modules: {
        user: user,
        // user:{
        //     state:{
        //
        //     },
        //     actions:{
        //
        //     },
        //     mutations:{
        //
        //     },
        //     getters:{
        //
        //     }
        // },
        article: {},
        cart: {},
        goods: {}
    }

})
