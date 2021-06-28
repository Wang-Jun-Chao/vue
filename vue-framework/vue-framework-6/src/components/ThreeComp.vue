<template>
    <div class="ThreeComp">
        <hr>
        <h3>这是孙子组件</h3>
        {{title}}
        <input v-model="title">
        <br>
        {{user.name}}-{{user.age}}
    </div>

</template>

<script>
import {inject} from "vue";

export default {
    name: "TowComp",
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {},
    // inject:["title"]
    setup(){
        let title = inject("title");
        let user = inject("user")
        return {
            title,
            user
        }
    }
}
</script>

<style scoped>

</style>