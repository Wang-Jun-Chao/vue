<template>
    <div class="Setup">
        这是Setup组件<br>
        <SubComp @myadd="add" desc="aaaaaaa" one="11111" two="22222">
            <h2>88888888</h2>
        </SubComp>
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
    methods: {
        add(str) {
            console.log(str);
        }
    }
}
</script>

<style scoped>

</style>