<template>
    <div class="Watch">
        <h2>Watch监听器</h2>

        <button @click="a++">a={{ a }}</button>
        <button @click="b++">b={{ b }}</button>
    </div>

</template>

<script>
import {reactive, toRefs, watch} from "vue";

export default {
    name: "Watch",
    components: {},

    setup() {
        const user = reactive({
            a: 1,
            b: 2
        });

        watch([()=>user.a, ()=>user.b], ([newA, newB], [oldA, oldB]) => {
            console.log(newA + "####" + oldA);
            console.log(newB + "----" + oldB);
        }, {immediate: true})


        // watch(()=>user.a, (newx, oldx) => {
        //     console.log(user.a + "####" + user.b);
        //     console.log(newx + "----" + oldx);
        //
        // }, {immediate: true})


        // watch(user, (newx, oldx) => {
        //     console.log(user.a + "####" + user.b);
        //     console.log(newx + "----" + oldx);
        //
        // }, {immediate: true})


        // watchEffect(()=>{
        //     console.log(user.a + "-----");
        // })


        return {
            ...toRefs(user)
        }
    },

    // setup() {
    //     let a = ref(1);
    //     let b = ref(2);
    //
    //     // watch(() => {
    //     //     console.log(a.value + "-" + b.value)
    //     // });
    //
    //     // watch(a, (newA, oldA) => {
    //     //     console.log(newA + "-----" + oldA)
    //     // }, {immediate: true})
    //
    //     watch([a, b], ([newA, newB], [oldA, oldB]) => {
    //         console.log(newA + "-----" + oldA)
    //         console.log(newB + "#####" + oldB)
    //     }, {immediate: true})
    //
    //     // watchEffect(()=>{
    //     //     console.log(a.value + "####" + b.value);
    //     // })
    //
    //     return {
    //         a,
    //         b
    //     }
    // },
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