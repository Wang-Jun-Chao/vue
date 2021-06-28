<template>
    <div class="TwoComp">
        <hr>
        <h2>这是第二层</h2>
        <three-comp></three-comp>
    </div>

</template>

<script>
import ThreeComp from "@/components/ThreeComp";
export default {
    name: "TowComp",
    components: {
        ThreeComp
    },
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