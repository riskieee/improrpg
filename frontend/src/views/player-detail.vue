<script>
import Counter from '@/components/counter.vue'
import PlayerCard from '@/components/player-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PlayerDetail',
  data() {
    return {
      players: [],
      time: new Date(),
      message: ''
    }
  },
  components: { PlayerCard, Counter },
  async created() {
    this.players = await this.fetchPlayers()
  },
  methods: {
    ...mapActions(['fetchPlayers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'player', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  div.player-detail
    h2.m-3 Player Detail
    PlayerCard(v-if="player" :player="player" )
    //- h2 Users
    //- span(v-for="player in players")
    //-   router-link(:to="`/players/${player._id}`") {{ player.playerName }} &nbsp;
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button.btn.btn-warning.m-2(@click="joinStream(stream)") Join Chat
    div.bd-chatbox
      button.btn.btn-warning.m-2(v-if="!currentLiveStream" @click="goLive") Start Chat
      div(v-if="currentLiveStream")
        h3 Live stream
        .messages.container
          .message(v-for="message in liveStreamMessages")
            div.input-group.mb-3
              span.input-group-text {{ message.author }}:
              span.form-control {{ message.body }}
        .container
          form.input-group.mb-3(@submit="sendMessage")
            button.btn.btn-warning(type="submit" value="Send message") SEND MESSAGE
            input.form-control.form-control(type="text" v-model="message")
    //- Counter
</template>

<style lang="scss">
.bd-chatbox {
  background-color: rgba(100, 100, 100, 0.125);
  padding: 1.5rem;
  margin: 1rem -0.75rem 0;
  margin-right: 0;
  margin-left: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.input-group span {
  text-align: left;
}
</style>
