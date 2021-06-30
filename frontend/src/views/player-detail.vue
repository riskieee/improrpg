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
    ...mapState(['player', 'currentLiveStream', 'liveStreams', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  .about
    h1 Player Detail
    PlayerCard(v-if="player" :player="player" )

    h2 Users
    div(v-for="player in players")
      router-link(:to="`/players/${player._id}`") {{ player.playerName }}
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Go live
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")

    //- Counter
</template>
