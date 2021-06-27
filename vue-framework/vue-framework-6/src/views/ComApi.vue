<template>
    <div class="ComApi">
        <h1>常用API的应用</h1>
        原生的：{{num}}<br>
        调用方法：{{myfun}}
    </div>

</template>

<script>
export default {
    name: "ComApi",
    setup() {
        let num = 1;
        let myfun = () => {
            console.log(num);
        }

        return {
            num,
            myfun
        }
    },
    components: {},
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