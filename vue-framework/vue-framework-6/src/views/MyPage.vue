<template>
    <div class="MyPage">
        <h1>My Page</h1>
        <h3>{{$route.params.id}}</h3>
        <h3>{{pid}}</h3>
        <h2>id:{{id}}</h2>
    </div>

</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {ref, watch} from "vue";
export default {
    name: "MyPage",
    components: {},
    props: {},
    data() {
        return {}
    },
    setup(){
        const route = useRoute();
        const router = useRouter();

        // let id = route.params.id
        // console.log(id);

        let id= ref(0)
        watch(()=>route.params, (newid)=>{
            console.log(newid.id);
            id.value = newid.id
        })

        return {
            id
        }
    },
    computed: {
        pid(){
            return this.$route.params.id
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>