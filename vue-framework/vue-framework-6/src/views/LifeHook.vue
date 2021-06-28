<template>
    <div class="LifeHook">
    </div>

</template>

<script>
import {onMounted, onUpdated} from "vue";

export default {
    name: "LifeHook",
    setup(){
        console.log("setup()");
        onMounted(()=>{
            console.log("onMounted....");
        });

        onUpdated(()=>{
            console.log("onUpdated....");
        })
    },
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {},

    beforeCreate() {
        console.log("beforeCreated()");
    },
    created() {
        console.log("created()");
    },
    mounted() {
        console.log("mounted()");
    }
}
</script>

<style scoped>

</style>