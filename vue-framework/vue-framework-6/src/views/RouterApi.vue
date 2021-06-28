<template>
    <div class="RouteApi">
        <div id="menu">
            <h5 v-for="item in pages">
                <router-link :to="'/routerapi/page/'+item.id">{{ item.title }}</router-link>
            </h5>
            <hr>
            <h5><router-link :to="{path: '/routerapi/article', query:{name:'abc', keyword:'hello'}}">文章一</router-link></h5>
            <h5><button @click="$router.push({path: '/routerapi/article', query:{name:'xyz', keyword:'world'}})">文章二</button></h5>
        </div>

        <div id="content">
            <router-view/>
        </div>
    </div>

</template>

<script>
export default {
    name: "RouteApi",
    components: {},
    props: {},
    data() {
        return {
            pages: [
                {id: 1, title: '1111'},
                {id: 2, title: '2222'},
                {id: 3, title: '3333'},
                {id: 4, title: '4444'},
                {id: 5, title: '5555'},
            ]
        }
    },
    computed: {},
    methods: {}
}
</script>

<style scoped lang="scss">
#menu {
    width: 30%;
    background: #F0FFF0;
    height: 300px;
    float: left;
}

#content {
    width: 70%;
    background: #cccccc;
    height: 300px;
    float: right;

}
</style>