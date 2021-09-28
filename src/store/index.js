import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './module/Cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Cart
  }
})
