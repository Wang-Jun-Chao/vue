<template>
    <div class="home">
        <h3>count: {{ count }}</h3>
        <h3>double: {{ double }}</h3>
        <h3><button @click="add">增加</button> </h3>
    </div>
</template>

<script>


export default {
    name: 'Home',
    data() {
        return {
            count: 0,
        }
    },
    computed: {
        double() {
            return this.count * 2;
        }
    },
    methods:{
        add() {
            this.count++;
        }
    }
}
</script>
