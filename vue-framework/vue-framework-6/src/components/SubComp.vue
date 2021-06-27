<template>
    <div class="SubComp">
        这是子组件 SubComp
    </div>

</template>

<script>
export default {
    name: "SubComp",
    data() {
        return {
            msg: 'this is a data...',
        }
    },
    props:{
        one:{
            type: String
        },
        two: {
            type: String
        }
    },
    // props是传过来的属性
    // context是传过来的上下文
    setup(props, context) {
        // 再创建之前，没有this
        console.log('SubComp --');
        console.log(this)
        console.log(props);
        console.log(props.one + props.two)
    },
    beforeCreate() {
        console.log("SubComp beforCeate");
    },
    created() {
        console.log("SubComp created");
        console.log(this)
        console.log(this.msg);
        console.log(this.one + this.two)
    }
}
</script>

<style scoped>

</style>