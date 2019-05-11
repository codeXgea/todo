<template>
    <div class="counter-warp">
        <p>Vuex counter：{{ vux.a }}</p>
        <button @click="test">click me</button>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'test',
        data (){},
        computed: {
            ...mapState({
                vux: state => state.vux
            })
        },
        methods:{
            test(){
                console.log(123)
                this.$store.commit('add',10)
            }
        }
    }
</script>

<style>
    .counter-warp {
        text-align: center;
        margin-top: 100px;
    }

    .home {
        display: inline-block;
        margin: 100px auto;
        padding: 5px 10px;
        color: blue;
        border: 1px solid blue;
    }
</style>
