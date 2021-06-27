<template>
    <div class="ComApi">
        <h1>常用API的应用</h1>
        原生的：{{ num }}<br>
        调用方法：{{ myfun() }}<br>
        ref的变量：{{ num2 }}<br>
        <!--        {{myfun2(55)}}<br>-->
        reactive中的对象:{{ user }}-{{ user.name }}-{{ user.age }}-{{ user.gander }}<br>
        {{ name }}-{{ age }}-{{ gander }}<br>

        num1<input type="text" v-model="num2"><br>
        user.name: <input type="text" v-model="user.name"><br>
        user.age: <input type="text" v-model="user.age"><br>
        name: <input type="text" v-model="name"><br>
        age: <input type="text" v-model="age">
    </div>

</template>

<script>
import {isRef, reactive, ref, toRefs} from 'vue'

export default {
    name: "ComApi",
    setup() {
        let num = 1;
        let myfun = () => {
            console.log(num);
        }

        let num2 = ref(22);
        // let myfun2 = (newvalue)=>{
        //     console.log(num2)
        //     console.log(num2.value)
        //     num2.value = newvalue
        // }

        let num3 = isRef(num2) ? num2.value = 44 : num2 = 55;


        let user = reactive({
            name: "jack",
            age: 28,
            gander: 'male',
            num2
        })
        let myfun2 = (newvalue) => {
            console.log(user.num2);
            user.num2++;
        }

        return {
            num,
            myfun,
            num2,
            myfun2,
            user,
            ...toRefs(user) // 将user中的值展开
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