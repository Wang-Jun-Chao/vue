<template>
    <div class="MyArticle">
        <h1>我的文章</h1>
        <h3>{{ $route.query.name }}</h3>
        <h3>{{ $route.query.keyword }}</h3>
    </div>

</template>

<script>
import {useRoute, useRouter} from "vue-router";

export default {
    name: "MyArticle",
    setup() {
        const route = useRoute();
        const router = useRouter();
        console.log(route.query.name, route.query.keyword)

        setTimeout(() => {
            router.push({path: "/routerapi/article", query: {name: "999", keyword: "888"}})
        }, 5000)
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