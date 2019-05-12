<template>
    <div>
        <div class="logo">
            <!--<img src="" alt="">-->
        </div>
        <van-button type="primary" @click="func">123</van-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'login',
        data() {
        },
        computed: {
            ...mapState({
                vux: state => state.vux
            })
        },
        methods: {
            func() {
//                toast("ai")
                console.log(1)
            }

        },
        created(){
//            console.log(this.getCurrentPages())
        }
    }
</script>

<style lang="less">
    .logo {
        width: 100%;
        height: 25vh;
        background: red;
    }

</style>
