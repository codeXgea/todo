import Vue from 'vue'
import App from './App'
import Store from '@/store/index'
import Axios from  '@/axios/index'
// 集中式router管理工具
import MpVueRouterPatch from 'mpvue-router-patch'
Vue.use(MpVueRouterPatch)
// import VueI18n from '@/i18n/index'
Vue.config.productionTip = false
Vue.prototype.$store = Store
Vue.prototype.$axios = Axios
// Vue.prototype.$i18n = VueI18n

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
