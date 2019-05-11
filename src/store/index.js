import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const vux = {
    state: {
        a: 7
    },
    mutations: {
        add(state, data) {
            state.a = data
        }
    }
}

export default new Vuex.Store({
    modules: {
        vux
    }
})

