<template>
    <div class="Setup">
        这是Setup组件<br>
        <SubComp></SubComp>
    </div>

</template>

<script>
import SubComp from "../components/SubComp";
export default {
    name: "Setup",
    components: {SubComp},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {}
}
</script>

<style scoped>

</style>