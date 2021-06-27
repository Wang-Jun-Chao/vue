<template>
    <div class="about">
        <h3>count: {{ data.count }}</h3>
        <h3>double: {{ data.double }}</h3>
        <h3><button @click="add">增加</button></h3>
    </div>
</template>

<script>
import {computed, reactive} from 'vue'

export default {
    setup() {
        const data = reactive({
            count: 1,
            double: computed(() => data.count * 2)
        });


        function add() {
            data.count++;
        }

        return {data, add}
    }
}
</script>
