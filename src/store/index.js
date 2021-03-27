import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'Finance',
        img: 'finance.jpg'
      },
      {
        name: 'Business analysis',
        img: null
      },
      {
        name: 'Web development',
        img: null
      }
    ]
  },
  getters: {
    getProjects (state) {
      return state.projects
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
