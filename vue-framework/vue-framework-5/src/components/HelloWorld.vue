<template>
    <div class="hello">
        <h3>在子组件helloworld中应用Home中Data</h3>
        {{ count }}
        <hr>
        <h3>在子组件helloworld中应用Vuex</h3>
        {{ $store.state.num }}
        <hr>
        dnum: {{ $store.state.dnum }}
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        count: Number,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
