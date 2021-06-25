export default  {
    // 将 context中的state,commit,gatters析构处来
    demo({state, commit, getters}, payload) {
        setTimeout(() => {
            // ctx.state.num = 99;
            // ctx.commit("cnum");
            state.num = 8;
            commit("cnum")
            console.log(payload);
        }, 3000)
    }
    // demo(ctx) {
    //     setTimeout(()=>{
    //         // ctx.state.num = 99;
    //         ctx.commit("cnum");
    //     }, 3000)
    // }
}