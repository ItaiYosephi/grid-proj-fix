import Vue from 'vue'
import Vuex from 'vuex'

import chatModule from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    chatModule: {...chatModule, namespaced: true}
  }
})
