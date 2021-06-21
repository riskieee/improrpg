import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'increment count'
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {},
  actions: {
    async fetchStory(store, id) {
      const storyRequest = await axios.get(`/api/storys/${id}`)
      return storyRequest.data
    },
    async fetchStorys() {
      const storysRequest = await axios.get('/api/')
      return storysRequest.data
    }
  },
  modules: {}
})
