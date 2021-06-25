import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_PLAYER: 'set player',
  CREATE_STORY: 'create story'
}

const store = new Vuex.Store({
  state: {
    count: 0,
    player: null
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },
    [mutations.SET_PLAYER](state, player) {
      state.player = player
    },
    [mutations.CREATE_STORY](state, story) {
      state.story = story
    }
  },
  actions: {
    // counter need a POST

    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchPlayer(store, id) {
      const playerRequest = await axios.get(`/api/players/${id}`)
      return playerRequest.data
    },
    async fetchPlayers() {
      const playersRequest = await axios.get('/api/players')
      return playersRequest.data
    },
    async fetchSession({ commit }) {
      const player = await axios.get('/api/account/session')
      commit(mutations.SET_PLAYER, player.data || null)
    },
    async login({ commit }, credentials) {
      try {
        const player = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_PLAYER, player.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, player) {
      return axios.post('/api/account', player)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_PLAYER, null)
    },
    async fetchStory(store, id) {
      const storyRequest = await axios.get(`/api/stories/${id}`)
      return storyRequest.data
    },
    async fetchStorys() {
      const storysRequest = await axios.get('/api/stories')
      return storysRequest.data
    },
    async createStory({ commit }, credentials) {
      const story = await axios.post('/api/storys', credentials)
      commit(mutations.CREATE_STORY, story.data)
    }
  },
  modules: {}
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
