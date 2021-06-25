<template>
    <div class="about">
        <h2>user模块中的name</h2>

        <h2>
            <button @click="cname">改名字</button>
        </h2>
        <h2>{{ $store.state.user.name }}</h2>
        <h2>{{ $store.getters.fullname }}</h2>
        <h2>{{ $store.getters.fullname2 }}</h2>
        <h2>{{ $store.getters.fullname3 }}</h2>


        <h2>
            <button @click="cname2">异步改名字</button>
        </h2>

        <h1>About中应用Vuex</h1>

        <h2>num:{{ $store.state.num }}</h2>

        <button @click="cnum">Actions</button>

        <h2>dnum: {{ $store.state.dnum }}</h2>

        <h2>使用getter计算属性：{{ $store.getters.vxpownum }}</h2>


        <h3>购物车的总价：{{ $store.getters.totalprice }}</h3>

        <h4>{{ $store.getters.goodsgt }}</h4>
        <h4>{{ $store.getters.goodsself(50) }}</h4>
    </div>
</template>

<script>
export default {
    methods: {
        cnum() {
            console.log('1111');
            this.$store.dispatch('demo', {count: 88, name: "vuex"})
        },
        cname() {
            this.$store.commit('setname', '学习园地');
        },
        cname2() {
            this.$store.dispatch('dosome', '学习园地');
        }
    }
}
</script>
