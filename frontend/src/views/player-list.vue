<script>
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'PlayerList',
  components: { Counter },
  data() {
    return {
      players: [],
      time: new Date()
    }
  },
  async created() {
    this.player = await this.fetchPlayers()
  },
  methods: {
    ...mapActions(['fetchPlayers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 improRPG
    p The time is: {{ time }}
    h2 Players
    div(v-for="player in players")
      router-link(:to="`/players/${player._id}`") {{ player.playerName }}
    Counter
</template>
