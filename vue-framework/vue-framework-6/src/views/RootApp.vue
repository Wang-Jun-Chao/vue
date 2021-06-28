<template>
    <div class="RootApp">
        <h1>这是根组件</h1>
        {{ title }}
        <input v-model="title">
        <two-comp></two-comp>
    </div>

</template>

<script>
import TwoComp from "@/components/TwoComp.vue"
import {provide, reactive, ref, toRefs} from "vue";

export default {
    name: "RootApp",
    components: {
        TwoComp
    },
    props: {},
    // data() {
    //     return {
    //         title: "这是RootComp提供的数据"
    //     }
    // },

    setup() {
        let title = ref("RootComp提供的数据2");
        let obj = reactive({
            name: "jack",
            age: 3
        })
        provide("title", title)
        provide("user", obj)

        return {
            title,
            ...toRefs(obj)
        }
    },
    computed: {},
    methods: {},
    // provide(){
    //     return {
    //         title: this.title,
    //     }
    // }
}
</script>

<style scoped>

</style>