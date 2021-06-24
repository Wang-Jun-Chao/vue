<template>
    <div class="home">
        <h2>这是单页模板中应用</h2>
        <h2>{{ count }}</h2>
        <h2>计算属性：{{ mypow }}</h2>

        <button @click="count--">-</button>
        <button @click="count++">+</button>

        <hr>
        <h2>使用全局状态</h2>
        <h2>{{ $store.state.num }}</h2>
        <h2>Vuex计算全局属性：{{ vuexpow }}</h2>
        <h2>使用getter计算属性：{{ $store.getters.vxpownum }}</h2>



        <button @click="$store.state.num--">-</button>
        <button @click="$store.state.num++">+</button>

        <br>
        <h2>使用Mutations来修改状态</h2>
        <h2>dunm: {{ $store.state.dnum }}</h2>
        <button @click="sub1">-</button>
        <button @click="add1">+</button>

        <br>
        <h2>使用Mutations来修改状态，带一个参数</h2>
        <h2>dunm: {{ $store.state.dnum }}</h2>
        <button @click="sub2">-</button>
        <button @click="add2">+</button>

        <br>
        <h2>使用Mutations来修改状态，带多个参数</h2>
        <h2>dunm: {{ $store.state.dnum }}</h2>
        <button @click="sub3">-</button>
        <button @click="add3">+</button>

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
    computed: {
        mypow: {
            get() {
                return this.count * this.count
            }
        },
        vuexpow() {
            return this.$store.state.num * this.$store.state.num;
        }
    },
    methods: {
        add1() {
            this.$store.commit("add")
        },
        sub1() {
            this.$store.commit("sub")
        },
        add2() {
            let step = 2;
            this.$store.commit("add2", step)
        },
        sub2() {
            let step = 2;
            this.$store.commit("sub2", step)
        },
        add3() {
            const payload = {
                step: 2,
                num: 1,
            }
            this.$store.commit("add3", payload)
        },
        sub3() {
            const payload = {
                step: 2,
                num: 1,
            }
            this.$store.commit("sub3", payload)
        }
    }
}
</script>
