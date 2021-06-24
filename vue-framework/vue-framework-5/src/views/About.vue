<template>
    <div class="about">
        <h1>About中应用Vuex</h1>
        <h2>num:{{ $store.state.num }}</h2>
        <h2>dnum: {{ $store.state.dnum }}</h2>

        <h2>使用getter计算属性：{{ $store.getters.vxpownum }}</h2>


        <h3>购物车的总价：{{ $store.getters.totalprice }}</h3>

        <h4>{{$store.getters.goodsgt}}</h4>
        <h4>{{$store.getters.goodsself(50)}}</h4>
    </div>
</template>
