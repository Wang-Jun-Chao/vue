<template>
    <div class="VuexApi">
        <h2>Vuex Api</h2>
        <h3>num1:{{ $store.state.num1 }}</h3>
        <h3>getters.double1:{{ $store.getters.double1 }}</h3>
        <button @click="cnum1(33)">修改num1: {{ $store.state.num1 }}</button>
        <button @click="canum1">修改anum1: {{ $store.state.num1 }}</button>
        <hr>
        <h3>num2:{{ num2 }}</h3>
        <h3>getters.double2:{{ double2 }}</h3>

        <button @click="cnum2(33)">修改num2: {{ $store.state.num2 }}</button>
        <button @click="canum2">修改anum1: {{ $store.state.num2 }}</button>
    </div>

</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "VuexApi",

    setup() {
        const store = useStore()

        return {
            num2: computed(() => store.state.num2),
            double2: computed(() => store.getters.double2),
            cnum2: (newnum) => {
                store.commit("changenum2", newnum)
            },
            canum2: () => {
                store.dispatch("timecnum2")
            }
        }
    },
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        cnum1(newnum) {
            this.$store.commit("changenum1", newnum)
        },
        canum1(newnum) {
            this.$store.dispatch("timecnum1")
        }
    }
}
</script>

<style scoped>

</style>