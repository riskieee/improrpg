import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import io from 'socket.io-client'

Vue.use(Vuex)

const socket = io()

socket.on('hello world!', () => {
  console.log('we received message from the websocket server!')
})

// setInterval(() => {
//   const number = Math.random()
//   console.log(`i'm sending out a request`, number)
//   socket.emit('new message', number, res => {
//     console.log('this is a response', res)
//   })

//   socket.emit('another api', res => {
//     console.log(res)
//   })
// }, 3000)

const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_PLAYER: 'set player',
  CREATE_STORY: 'create story',
  SET_LIVE_STREAM: 'set live stream',
  ADD_LIVE_STREAM: 'add live stream',
  ADD_MESSAGE_TO_LIVE_STREAM: 'add message to live stream'
}

const store = new Vuex.Store({
  state: {
    count: 0,
    player: null,
    currentLiveStream: null,
    liveStreams: [],
    liveStreamMessages: []
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
    },
    [mutations.SET_LIVE_STREAM](state, live) {
      state.currentLiveStream = live
    },
    [mutations.ADD_LIVE_STREAM](state, stream) {
      state.liveStreams.push(stream)
    },
    [mutations.ADD_MESSAGE_TO_LIVE_STREAM](state, message) {
      state.liveStreamMessages.push(message)
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
    async fetchStories() {
      const storysRequest = await axios.get('/api/stories')
      return storysRequest.data
    },
    async createStories({ commit }, credentials) {
      const story = await axios.post('/api/stories', credentials)
      commit(mutations.CREATE_STORY, story.data)
    },
    async goLive({ state, commit }) {
      socket.emit('go live', state.player._id, () => {
        commit(mutations.SET_LIVE_STREAM, state.player._id)
      })
    },
    // async goLive({ state, commit }) {
    //   socket.emit('go live', state.player._id, status => {
    //     commit(mutations.SET_LIVE_STREAM, state.player._id)
    //   })
    // },
    async addLiveStream({ state, commit }, stream) {
      commit(mutations.ADD_LIVE_STREAM, stream)
    },
    async sendMessageToLiveStream({ state, commit }, body) {
      const message = {
        body,
        author: state.player.playerName
      }
      commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
      socket.emit('new message', state.currentLiveStream, message)
    },
    async joinStream({ state, commit }, stream) {
      socket.emit('join stream', stream)
      commit(mutations.SET_LIVE_STREAM, stream)
    }
  },
  modules: {}
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
