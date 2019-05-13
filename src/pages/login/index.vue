<template>
    <div>
        <div class="logo">
            <!--<img src="" alt="">-->
        </div>
        <div class="loginBox">
            <van-cell-group>
                <van-field
                    v-model="phone"
                    clearable
                    left-icon="phone"
                    placeholder="请输入用户名"
                />

                <van-field
                    v-model="password"
                    type="password"
                    left-icon="phone"
                    placeholder="请输入密码"
                />
            </van-cell-group>
             <van-checkbox v-model="checked" style="display:block;margin-bottom:10px;flex-direction: flex-start">记住密码</van-checkbox>
            <van-button @click="loginFn" type="primary"  :loading="loading" hairline size="large" style="width:100%;margin-left:175rpx">登录</van-button>
            <div class="nav">
                <span @click="forgetFn">忘记密码？</span>
                <span @click="registerFn">去注册</span>
            </div>


        </div>


    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'login',
        data() {
            return {
                phone: '',
                password: '',
                checked: false,
                loading:false
            }
        },
        computed: {
            ...mapState({
                vux: state => state.vux
            })
        },
        methods: {
            loginFn() {
                console.log('login')
            },
            forgetFn() {
                console.log('forget')
            },
            registerFn() {
                console.log('register')
            },


        },
        created() {
//            console.log(this.getCurrentPages())
        }
    }
</script>

<style lang="less" scoped>
    page {
        height: 100%;
        width: 100%;
    }

    .logo {
        width: 100%;
        height: 25vh;
        background: red;
    }
    .van-cell {
        height: 50 rpx;
        padding:20px 15px;
    }

    .loginBox {
        /*transform: translate(-50%,-50%);*/
        /*background: #333;*/
        width: 80vw;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;
        margin-top:100rpx;


        .nav {
            display: flex;
            justify-content: space-between;
            margin-top:50rpx;
        }

    }

</style>
