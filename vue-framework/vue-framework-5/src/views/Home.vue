<template>
    <div class="home">
        <h2>这是单页模板中应用</h2>
        <h2>{{ count }}</h2>
        <button @click="count--">-</button>
        <button @click="count++">+</button>

        <hr>
        <h2>使用全局状态</h2>
        <h2>{{ $store.state.num }}</h2>
        <button @click="$store.state.num--">-</button>
        <button @click="$store.state.num++">+</button>

        <hr>
        <h2>使用Mutations来修改状态</h2>
        <h2>dunm: {{ $store.state.dnum }}</h2>
        <button @click="sub1">-</button>
        <button @click="add1">+</button>

        <HelloWorld :count="count"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    data() {
        return {
            count: 0
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        add1() {
            this.$store.commit("add")
        },
        sub1() {
            this.$store.commit("sub")
        }
    }
}
</script>
