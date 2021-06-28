<template>
    <div class="MyArticle">
        <h1>我的文章</h1>
        <h3>{{$route.query.name}}</h3>
        <h3>{{$route.query.keyword}}</h3>
    </div>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

export default {
    name: "MyArticle",
    setup(){
        const route = useRoute();
        const router = useRouter();

        // let id = route.params.id
        // console.log(id);

        // let id= ref(0)
        // watch(()=>route.params, (newid)=>{
        //     console.log(newid.id);
        //     id.value = newid.id
        // })
        //
        // return {
        //     id
        // }
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