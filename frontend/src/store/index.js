import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import io from 'socket.io-client'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const socket = io(process.env.VUE_APP_BASE_URL)

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
  ADD_MESSAGE_TO_LIVE_STREAM: 'add message to live stream',
  SET_LIVE_STORY_STREAM: 'set live story stream',
  ADD_LIVE_STORY_STREAM: 'add live story stream',
  ADD_CONTENT_TO_LIVE_STORY_STREAM: 'add content to live story stream'
}

const store = new Vuex.Store({
  state: {
    count: 0,
    player: null,
    currentLiveStream: null,
    liveStreams: [],
    liveStreamMessages: [],
    story: {},
    currentLiveStoryStream: null,
    liveStoryStreams: [],
    liveStoryStreamContent: []
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
    },
    [mutations.SET_LIVE_STORY_STREAM](state, live) {
      state.currentLiveStoryStream = live
    },
    [mutations.ADD_LIVE_STORY_STREAM](state, stream) {
      state.liveStoryStreams.push(stream)
    },
    [mutations.ADD_CONTENT_TO_LIVE_STORY_STREAM](state, content) {
      state.story.push(content)
    }
  },
  methods: {},
  actions: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
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
      try {
        const player = await axios.get('/api/account/session')
        commit(mutations.SET_PLAYER, player.data || null)
      } catch (e) {
        commit(mutations.SET_PLAYER, null)
      }
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
      try {
        const storysRequest = await axios.get('/api/stories')
        return storysRequest.data
      } catch (e) {
        console.log(e)
        return []
      }
    },
    // create new story
    async createStory(store, story) {
      return axios.post(`/api/stories`, story)
    },
    // add content to story
    async addContent(store, newContent) {
      const toAddnewContent = {
        storyId: newContent.storyId,
        newContent: newContent.text
      }
      return axios.post(`/api/stories/addContent`, toAddnewContent)
    },
    // PLAYER CHAT STREAM
    async goLive({ state, commit }) {
      socket.emit('go live', state.player._id, status => {
        commit(mutations.SET_LIVE_STREAM, state.player._id)
      })
    },
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
    },
    // STORY CONTENT STREAM
    async goStoryLive({ state, commit }) {
      socket.emit('go story live', state.player._id, status => {
        commit(mutations.SET_LIVE_STORY_STREAM, state.player._id)
      })
    },
    async addLiveStoryStream({ state, commit }, stream) {
      commit(mutations.ADD_LIVE_STORY_STREAM, stream)
    },
    async sendContentToLiveStoryStream({ state, commit }, body) {
      const content = {
        body,
        author: state.player.playerName
      }
      commit(mutations.ADD_CONTENT_TO_LIVE_STORY_STREAM, content)
      socket.emit('new story content', state.currentLiveStoryStream, content)
    },
    async joinStoryStream({ state, commit }, stream) {
      socket.emit('join story stream', stream)
      commit(mutations.SET_LIVE_STORY_STREAM, stream)
    }
  },
  modules: {}
})

socket.on('new live stream', player => {
  store.dispatch('addLiveStream', player)
})

socket.on('new live stream message', message => {
  store.commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
})

socket.on('new live content stream', player => {
  store.dispatch('addLiveStoryStream', player)
})

socket.on('new live story stream contnet', content => {
  store.commit(mutations.ADD_CONTENT_TO_LIVE_STORY_STREAM, content)
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
