import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import axios from  '@/axios/index'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$axios = axios

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
