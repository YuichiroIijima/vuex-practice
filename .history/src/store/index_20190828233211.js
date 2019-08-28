import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    mutations: {},
    actions: {
        buttonAction({commit, state, rootState }) {
            console.log("ButtonAction")
        }
    }
}

export default new Vuex.Store({
    modules: {
        Form
    }
})