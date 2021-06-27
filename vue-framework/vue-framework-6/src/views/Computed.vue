<template>
    <div class="Computed">
        firstname: <input type="text" v-model="firstname"><br>
        lastname: <input type="text" v-model="lastname"><br>
        age: <input type="text" v-model="age"><br>
        {{ fullname }}<br>
        {{show}}
    </div>

</template>

<script>
import {computed, reactive, toRefs} from "vue";

export default {
    name: "Computed",
    components: {},
    setup() {
        const user = reactive({
            firstname: 'jack',
            lastname: 'tom',
            age: 20
        });

        let fullname = computed(() => {
            return user.firstname + "." + user.lastname;
        });

        let show = computed(()=>{
            if (user.age < 20 ){
                return  "very young"
            } else if (user.age < 40) {
                return "young"
            } else {
                return "old"
            }
        })

        return {
            ...toRefs(user),
            fullname,
            show
        }
    },
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