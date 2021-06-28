<template>
    <div id="nav">
        <router-link to="/">原生VUE</router-link>
        |
        <router-link to="/about">组合式API</router-link>
        |
        <router-link to="/setup">入口Setup</router-link>
        |
        <router-link to="/comapi">常用Api</router-link>
        |
        <router-link to="/computed">计算属性</router-link>
        |
        <router-link to="/watch">监听器</router-link>
        |
        <router-link to="/lifehook">生命周期</router-link>
        |
        <router-link to="/rootapp">Provider/Inject</router-link>
    </div>
    <router-view/>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
